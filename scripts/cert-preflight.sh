#!/usr/bin/env bash
# DNS ve ACME ön kontrol
set -euo pipefail

DOMAINS=(
  turkmuhendisi.com
  www.turkmuhendisi.com
  panel.turkmuhendisi.com
  api.turkmuhendisi.com
  cdn.turkmuhendisi.com
)

echo "==> Sunucu IP (beklenen hedef)"
SERVER_IP="$(curl -4 -s ifconfig.me || curl -4 -s icanhazip.com || true)"
echo "    $SERVER_IP"
echo ""

echo "==> DNS kontrolü"
for domain in "${DOMAINS[@]}"; do
  RESOLVED="$(dig +short A "$domain" 2>/dev/null | head -1 || true)"
  CNAME="$(dig +short CNAME "$domain" 2>/dev/null | head -1 || true)"
  if [[ -n "$CNAME" ]]; then
    echo "  $domain -> CNAME $CNAME"
  elif [[ -n "$RESOLVED" ]]; then
    if [[ "$RESOLVED" == "$SERVER_IP" ]]; then
      echo "  $domain -> $RESOLVED  OK"
    else
      echo "  $domain -> $RESOLVED  UYARI (sunucu IP değil: $SERVER_IP)"
    fi
  else
    echo "  $domain -> KAYIT YOK"
  fi
done

echo ""
echo "==> Cloudflare proxy kontrolü (CF IP = turuncu bulut açık)"
for domain in "${DOMAINS[@]}"; do
  if dig +short A "$domain" 2>/dev/null | grep -qE '^(104\.|172\.6[4-9]\.|172\.7[01]\.|173\.245\.|188\.114\.|190\.93\.|197\.234\.|198\.41\.)'; then
    echo "  $domain -> Cloudflare proxy AÇIK (cert için DNS only yapın veya cert-init-cloudflare kullanın)"
  fi
done

echo ""
echo "==> ACME webroot testi"
sudo mkdir -p /var/www/certbot/.well-known/acme-challenge
echo "preflight-ok" | sudo tee /var/www/certbot/.well-known/acme-challenge/preflight-test >/dev/null

for domain in turkmuhendisi.com; do
  BODY="$(curl -sS -m 10 "http://$domain/.well-known/acme-challenge/preflight-test" 2>/dev/null || echo "HATA")"
  if [[ "$BODY" == "preflight-ok" ]]; then
    echo "  http://$domain/.well-known/acme-challenge/  OK"
  else
    echo "  http://$domain/.well-known/acme-challenge/  BAŞARISIZ ($BODY)"
  fi
done

sudo rm -f /var/www/certbot/.well-known/acme-challenge/preflight-test
