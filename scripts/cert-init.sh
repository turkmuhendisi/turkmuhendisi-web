#!/usr/bin/env bash
# Kullanım: ./cert-init   (npm gerekmez, sadece Docker)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

CERT_DIR="$ROOT/infra/certbot/conf"
WEBROOT="$ROOT/infra/certbot/www"

mkdir -p "$CERT_DIR" "$WEBROOT"

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

echo "==> SSL sertifikası alınıyor (port 80 boş olmalı)"
echo "    Domain'ler: ${DOMAINS[*]}"

docker run --rm \
  -p 80:80 \
  -v "$CERT_DIR:/etc/letsencrypt" \
  -v "$WEBROOT:/var/www/certbot" \
  certbot/certbot certonly \
  --standalone \
  "${DOMAIN_ARGS[@]}" \
  --agree-tos \
  --register-unsafely-without-email \
  --non-interactive

echo "==> Sertifika hazır: $CERT_DIR/live/turkmuhendisi.com/"
