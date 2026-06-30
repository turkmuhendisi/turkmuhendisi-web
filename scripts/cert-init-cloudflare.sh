#!/usr/bin/env bash
# Cloudflare DNS-01 ile SSL (turuncu bulut açıkken de çalışır)
# Gereksinim: .env içinde CLOUDFLARE_API_TOKEN
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env ]]; then
  set -a
  # shellcheck disable=SC1091
  source .env
  set +a
fi

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "Hata: CLOUDFLARE_API_TOKEN .env dosyasında tanımlı değil."
  echo ""
  echo "Cloudflare → My Profile → API Tokens → Create Token"
  echo "  Template: Edit zone DNS"
  echo "  Zone: turkmuhendisi.com"
  echo ""
  echo ".env dosyasına ekleyin:"
  echo "  CLOUDFLARE_API_TOKEN=your_token_here"
  exit 1
fi

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

CF_CRED="$ROOT/infra/certbot/cloudflare.ini"
mkdir -p "$(dirname "$CF_CRED")"
cat > "$CF_CRED" <<EOF
dns_cloudflare_api_token = ${CLOUDFLARE_API_TOKEN}
EOF
chmod 600 "$CF_CRED"

if [[ -f /etc/letsencrypt/live/turkmuhendisi.com/fullchain.pem ]]; then
  echo "==> Sertifika zaten mevcut: /etc/letsencrypt/live/turkmuhendisi.com/"
  exit 0
fi

echo "==> Cloudflare DNS-01 ile sertifika alınıyor"
echo "    Domain'ler: ${DOMAINS[*]}"

sudo mkdir -p /etc/letsencrypt

docker run --rm \
  -v /etc/letsencrypt:/etc/letsencrypt \
  -v "$CF_CRED:/cloudflare.ini:ro" \
  certbot/dns-cloudflare certonly \
  --dns-cloudflare \
  --dns-cloudflare-credentials /cloudflare.ini \
  "${DOMAIN_ARGS[@]}" \
  --agree-tos \
  --register-unsafely-without-email \
  --non-interactive

rm -f "$CF_CRED"

echo "==> Sertifika hazır: /etc/letsencrypt/live/turkmuhendisi.com/"
echo ""
echo "Sonraki adım:"
echo "  sudo ./scripts/nginx-host-install.sh"
echo "  ./deploy"
