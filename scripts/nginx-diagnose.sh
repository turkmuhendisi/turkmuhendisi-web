#!/usr/bin/env bash
# Nginx yönlendirme teşhisi (turkmuhendisi → cousensoft sorunu)
set -euo pipefail

echo "==> turkmuhendisi nginx config"
if [[ -f /etc/nginx/conf.d/turkmuhendisi.conf ]]; then
  if grep -q "listen 443 ssl" /etc/nginx/conf.d/turkmuhendisi.conf 2>/dev/null; then
    echo "  OK — HTTPS (443) config mevcut"
  else
    echo "  SORUN — Sadece ACME/HTTP config var, HTTPS bloğu yok!"
    echo "  Çözüm: sudo ./scripts/nginx-host-install.sh"
  fi
else
  echo "  SORUN — /etc/nginx/conf.d/turkmuhendisi.conf yok!"
  echo "  Çözüm: sudo ./scripts/nginx-host-install.sh"
fi

echo ""
echo "==> Nginx server_name eşleşmeleri"
sudo nginx -T 2>/dev/null | grep -E "server_name|listen 443" | grep -i turkmuhendisi || echo "  turkmuhendisi server block bulunamadı!"

echo ""
echo "==> Default server (443) — turkmuhendisi değilse cousensoft yakalayabilir"
sudo nginx -T 2>/dev/null | grep -B5 "default_server" | grep -E "server_name|listen|#" || true

echo ""
echo "==> App doğrudan (127.0.0.1:3020)"
APP_CODE="$(curl -sS -o /dev/null -w "%{http_code}" -m 5 http://127.0.0.1:3020/ 2>/dev/null || echo "000")"
echo "  HTTP $APP_CODE"

BIND_IP="$(curl -4 -s --max-time 5 ifconfig.me 2>/dev/null || echo "187.127.83.10")"

echo ""
echo "==> Nginx üzerinden turkmuhendisi.com ($BIND_IP:443)"
NGINX_CODE="$(curl -sS -o /dev/null -w "%{http_code}" -m 5 -k --resolve "turkmuhendisi.com:443:${BIND_IP}" "https://turkmuhendisi.com/" 2>/dev/null || echo "000")"
echo "  HTTPS $NGINX_CODE"

REDIRECT="$(curl -sS -o /dev/null -w "%{redirect_url}" -m 5 -k --resolve "turkmuhendisi.com:443:${BIND_IP}" "https://turkmuhendisi.com/" 2>/dev/null || true)"
if [[ -n "$REDIRECT" ]]; then
  echo "  Yönlendirme: $REDIRECT"
fi

echo ""
echo "==> Cloudflare kontrol listesi"
echo "  turkmuhendisi.com zone → Rules → Redirect Rules (cousensoft'a yönlendirme var mı?)"
echo "  SSL/TLS → Full (strict)"
echo "  DNS → A kayıtları 187.127.83.10 (sunucu IP)"
