#!/usr/bin/env bash
# Yönlendirme zinciri teşhisi
set -euo pipefail

BIND_IP="${NGINX_BIND_IP:-$(curl -4 -s --max-time 5 ifconfig.me 2>/dev/null || echo "187.127.83.10")}"

URLS=(
  "https://turkmuhendisi.com/"
  "https://www.turkmuhendisi.com/"
  "http://turkmuhendisi.com/"
  "http://www.turkmuhendisi.com/"
)

echo "==> Cloudflare üzerinden (dış dünya)"
for url in "${URLS[@]}"; do
  echo ""
  echo "--- $url ---"
  curl -sSIL -m 15 --max-redirs 10 "$url" 2>&1 | grep -iE '^HTTP|^location:|^server:' || true
done

echo ""
echo "==> Doğrudan sunucu IP ($BIND_IP:443)"
for host in turkmuhendisi.com www.turkmuhendisi.com; do
  echo ""
  echo "--- https://$host/ (direct) ---"
  curl -sSIL -m 10 -k --resolve "${host}:443:${BIND_IP}" "https://${host}/" 2>&1 | grep -iE '^HTTP|^location:|^server:|x-nextjs' || true
done

echo ""
echo "==> Cloudflare kontrol listesi"
echo "  1. turkmuhendisi.com zone → Rules → Redirect Rules"
echo "  2. Bulk Redirects (account level)"
echo "  3. Caching → Purge Everything"
echo "  4. Tarayıcı: gizli sekme veya HSTS temizle (chrome://net-internals/#hsts)"
