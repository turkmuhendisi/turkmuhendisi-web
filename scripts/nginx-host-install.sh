#!/usr/bin/env bash
# Host nginx config kurulumu
# Kullanım:
#   sudo ./scripts/nginx-host-install.sh acme    # SSL öncesi (cert-init için)
#   sudo ./scripts/nginx-host-install.sh         # SSL sonrası (tam config)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MODE="${1:-full}"

if [[ "$EUID" -ne 0 ]]; then
  echo "Bu script root olarak çalıştırılmalı: sudo $0 $MODE"
  exit 1
fi

if ! command -v nginx &>/dev/null; then
  echo "Hata: nginx kurulu değil."
  echo "  dnf install -y nginx && systemctl enable --now nginx"
  exit 1
fi

mkdir -p /var/www/certbot /etc/letsencrypt/renewal-hooks/deploy
cp "$ROOT/infra/certbot/reload-nginx.sh" /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh
chmod +x /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh

case "$MODE" in
  acme)
    cp "$ROOT/infra/nginx/host/turkmuhendisi-acme.conf" /etc/nginx/conf.d/turkmuhendisi.conf
    echo "==> ACME config kuruldu (HTTP only)"
    ;;
  full)
    if [[ ! -f /etc/letsencrypt/live/turkmuhendisi.com/fullchain.pem ]]; then
      echo "Hata: SSL sertifikası bulunamadı. Önce ./cert-init-cloudflare çalıştırın."
      exit 1
    fi
    cp "$ROOT/infra/nginx/host/turkmuhendisi.conf" /etc/nginx/conf.d/turkmuhendisi.conf
    echo "==> Tam SSL config kuruldu"
    ;;
  *)
    echo "Kullanım: sudo $0 [acme|full]"
    exit 1
    ;;
esac

nginx -t
systemctl reload nginx
echo "==> Nginx yeniden yüklendi."
