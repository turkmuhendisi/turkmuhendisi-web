#!/usr/bin/env bash
# Cloudflare API token testi
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
  echo "Hata: CLOUDFLARE_API_TOKEN .env dosyasında yok."
  exit 1
fi

echo "==> Token doğrulama"
VERIFY="$(curl -sS -o /tmp/cf-verify.json -w "%{http_code}" \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  "https://api.cloudflare.com/client/v4/user/tokens/verify")"

if [[ "$VERIFY" != "200" ]]; then
  echo "  Token geçersiz (HTTP $VERIFY)"
  cat /tmp/cf-verify.json
  exit 1
fi
echo "  Token geçerli"

echo ""
echo "==> Zone listesi"
ZONES="$(curl -sS \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  "https://api.cloudflare.com/client/v4/zones?name=turkmuhendisi.com")"

ZONE_ID="$(echo "$ZONES" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4 || true)"

if [[ -z "$ZONE_ID" ]]; then
  echo "  turkmuhendisi.com zone bulunamadı!"
  echo "  Token'a Zone → Zone → Read izni ekleyin."
  echo "$ZONES"
  exit 1
fi
echo "  Zone ID: $ZONE_ID"

echo ""
echo "==> Test TXT kaydı oluşturma"
CREATE="$(curl -sS -X POST \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records" \
  --data '{"type":"TXT","name":"_acme-challenge-test","content":"certbot-test","ttl":60}')"

RECORD_ID="$(echo "$CREATE" | grep -o '"id":"[^"]*"' | head -1 | cut -d'"' -f4 || true)"
SUCCESS="$(echo "$CREATE" | grep -o '"success":[^,]*' | head -1 || true)"

if [[ "$SUCCESS" != '"success":true' ]]; then
  echo "  TXT kaydı oluşturulamadı!"
  echo "  Token'a Zone → DNS → Edit izni ekleyin."
  echo "$CREATE"
  exit 1
fi
echo "  TXT kaydı oluşturuldu: $RECORD_ID"

curl -sS -X DELETE \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  "https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/dns_records/${RECORD_ID}" >/dev/null
echo "  Test kaydı silindi"

echo ""
echo "==> Token hazır. Şimdi çalıştırın: ./cert-init-cloudflare"
