#!/usr/bin/env bash
# Kullanım: ./cert-init   (npm gerekmez)
# Paylaşımlı sunucuda port 80 doluysa webroot modu kullanır.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DOMAINS=(
  turkmuhendisi.com
  www.turkmuhendisi.com
  panel.turkmuhendisi.com
  api.turkmuhendisi.com
  cdn.turkmuhendisi.com
)

DOMAIN_ARGS=()
for domain in "${DOMAINS[@]}"; do
  DOMAIN_ARGS+=(-d "$domain")
done

port80_in_use() {
  ss -tlnp 2>/dev/null | grep -q ':80 ' || \
  netstat -tlnp 2>/dev/null | grep -q ':80 ' || \
  lsof -i :80 -sTCP:LISTEN &>/dev/null
}

run_certbot() {
  docker run --rm \
    -v /etc/letsencrypt:/etc/letsencrypt \
    -v /var/www/certbot:/var/www/certbot \
    certbot/certbot certonly \
    "$@" \
    "${DOMAIN_ARGS[@]}" \
    --agree-tos \
    --register-unsafely-without-email \
    --non-interactive
}

if [[ -f /etc/letsencrypt/live/turkmuhendisi.com/fullchain.pem ]]; then
  echo "==> Sertifika zaten mevcut: /etc/letsencrypt/live/turkmuhendisi.com/"
  exit 0
fi

if port80_in_use; then
  echo "==> Port 80 kullanımda — webroot modu"
  echo "    Domain'ler: ${DOMAINS[*]}"

  if [[ ! -f /etc/nginx/conf.d/turkmuhendisi.conf ]]; then
    echo ""
    echo "Önce host nginx ACME config kurun:"
    echo "  sudo ./scripts/nginx-host-install.sh acme"
    echo ""
    exit 1
  fi

  sudo mkdir -p /var/www/certbot
  run_certbot --webroot -w /var/www/certbot

  echo ""
  echo "==> Sertifika alındı. Şimdi tam nginx config kurun:"
  echo "  sudo ./scripts/nginx-host-install.sh"
else
  echo "==> Port 80 boş — standalone modu"
  echo "    Domain'ler: ${DOMAINS[*]}"

  sudo mkdir -p /var/www/certbot /etc/letsencrypt

  docker run --rm \
    -p 80:80 \
    -v /etc/letsencrypt:/etc/letsencrypt \
    -v /var/www/certbot:/var/www/certbot \
    certbot/certbot certonly \
    --standalone \
    "${DOMAIN_ARGS[@]}" \
    --agree-tos \
    --register-unsafely-without-email \
    --non-interactive
fi

echo "==> Sertifika hazır: /etc/letsencrypt/live/turkmuhendisi.com/"
