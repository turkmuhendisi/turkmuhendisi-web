#!/usr/bin/env bash
# Host nginx config kurulumu
# Kullanım:
#   sudo ./scripts/nginx-host-install.sh acme
#   sudo ./scripts/nginx-host-install.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
MODE="${1:-full}"

if [[ "$EUID" -ne 0 ]]; then
  echo "Bu script root olarak çalıştırılmalı: sudo $0 $MODE"
  exit 1
fi

if ! command -v nginx &>/dev/null; then
  echo "Hata: nginx kurulu değil."
  exit 1
fi

detect_bind_ip() {
  if [[ -n "${NGINX_BIND_IP:-}" ]]; then
    echo "$NGINX_BIND_IP"
    return
  fi
  if [[ -f "$ROOT/.env" ]]; then
    # shellcheck disable=SC1091
    source "$ROOT/.env"
    if [[ -n "${NGINX_BIND_IP:-}" ]]; then
      echo "$NGINX_BIND_IP"
      return
    fi
  fi
  curl -4 -s --max-time 5 ifconfig.me || curl -4 -s --max-time 5 icanhazip.com
}

BIND_IP="$(detect_bind_ip)"
if [[ -z "$BIND_IP" ]]; then
  echo "Hata: Sunucu IP adresi tespit edilemedi. .env içine NGINX_BIND_IP=187.127.83.10 ekleyin."
  exit 1
fi

apply_config() {
  local src="$1"
  sed "s/__NGINX_BIND_IP__/$BIND_IP/g" "$src" > /etc/nginx/conf.d/turkmuhendisi.conf
}

mkdir -p /var/www/certbot /etc/letsencrypt/renewal-hooks/deploy
cp "$ROOT/infra/certbot/reload-nginx.sh" /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh
chmod +x /etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh

case "$MODE" in
  acme)
    apply_config "$ROOT/infra/nginx/host/turkmuhendisi-acme.conf"
    echo "==> ACME config kuruldu (HTTP only, bind: $BIND_IP)"
    ;;
  full)
    if [[ ! -f /etc/letsencrypt/live/turkmuhendisi.com/fullchain.pem ]]; then
      echo "Hata: SSL sertifikası bulunamadı. Önce ./cert-init-cloudflare çalıştırın."
      exit 1
    fi
    apply_config "$ROOT/infra/nginx/host/turkmuhendisi.conf"
    echo "==> Tam SSL config kuruldu (bind: $BIND_IP)"
    ;;
  *)
    echo "Kullanım: sudo $0 [acme|full]"
    exit 1
    ;;
esac

nginx -t
systemctl reload nginx
echo "==> Nginx yeniden yüklendi."
