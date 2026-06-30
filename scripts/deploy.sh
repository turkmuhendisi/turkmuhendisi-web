#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

COMPOSE="docker compose -f docker-compose.yml -f docker-compose.prod.yml"

if [[ ! -f .env ]]; then
  echo "Hata: .env dosyası bulunamadı."
  echo "  cp .env.production.example .env"
  echo "  nano .env   # şifreleri güncelleyin"
  exit 1
fi

if [[ ! -f "$ROOT/infra/certbot/conf/live/turkmuhendisi.com/fullchain.pem" ]]; then
  echo "Hata: SSL sertifikası bulunamadı."
  echo "  Önce DNS kayıtlarını sunucuya yönlendirin, sonra:"
  echo "  npm run cert:init"
  exit 1
fi

echo "==> Docker image build"
$COMPOSE build --pull

echo "==> Veritabanı migration"
$COMPOSE run --rm migrate

echo "==> Servisleri başlat"
$COMPOSE up -d --remove-orphans

echo "==> Durum"
$COMPOSE ps

echo ""
echo "Deploy tamamlandı."
echo "  Site:  https://turkmuhendisi.com"
echo "  Panel: https://panel.turkmuhendisi.com"
echo "  API:   https://api.turkmuhendisi.com"
echo "  CDN:   https://cdn.turkmuhendisi.com"
