#!/usr/bin/env bash
# Kullanım: ./deploy   (npm gerekmez, sadece Docker)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if docker compose version &>/dev/null; then
  COMPOSE="docker compose -f docker-compose.yml -f docker-compose.prod.yml"
elif command -v docker-compose &>/dev/null; then
  COMPOSE="docker-compose -f docker-compose.yml -f docker-compose.prod.yml"
else
  echo "Hata: docker compose bulunamadı."
  exit 1
fi

if [[ ! -f .env ]]; then
  echo "Hata: .env dosyası bulunamadı."
  echo "  cp .env.production.example .env"
  echo "  nano .env"
  exit 1
fi

if [[ ! -f /etc/letsencrypt/live/turkmuhendisi.com/fullchain.pem ]]; then
  echo "Hata: SSL sertifikası bulunamadı."
  echo ""
  echo "Paylaşımlı sunucu kurulum sırası:"
  echo "  1. sudo ./scripts/nginx-host-install.sh acme"
  echo "  2. ./cert-init"
  echo "  3. sudo ./scripts/nginx-host-install.sh"
  echo "  4. ./deploy"
  exit 1
fi

echo "==> Docker image build"
$COMPOSE build --pull

echo "==> Veritabanı migration"
$COMPOSE run --rm migrate

echo "==> Servisleri başlat (postgres, redis, minio, cdn, app)"
$COMPOSE up -d postgres redis minio minio-init cdn app --remove-orphans

echo "==> Servislerin ayağa kalkması bekleniyor (30s)..."
sleep 30

echo "==> Durum"
$COMPOSE ps -a

if ! curl -sf -m 10 http://127.0.0.1:3020/ >/dev/null 2>&1; then
  echo ""
  echo "UYARI: App henüz yanıt vermiyor. Loglar:"
  $COMPOSE logs --tail=40 app
  echo ""
  echo "Teşhis için: ./scripts/deploy-status.sh"
fi

if [[ -f /etc/nginx/conf.d/turkmuhendisi.conf ]]; then
  echo "==> Host nginx yeniden yükleniyor"
  sudo nginx -t && sudo systemctl reload nginx
fi

echo ""
echo "Deploy tamamlandı."
echo "  Site:  https://turkmuhendisi.com"
echo "  Panel: https://panel.turkmuhendisi.com"
echo "  API:   https://api.turkmuhendisi.com"
echo "  CDN:   https://cdn.turkmuhendisi.com"
