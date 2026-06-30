#!/usr/bin/env bash
# Deploy durumu ve hızlı teşhis
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if docker compose version &>/dev/null; then
  COMPOSE="docker compose -f docker-compose.yml -f docker-compose.prod.yml"
else
  COMPOSE="docker-compose -f docker-compose.yml -f docker-compose.prod.yml"
fi

echo "==> Container durumu"
$COMPOSE ps -a

echo ""
echo "==> Port kontrolü"
ss -tlnp 2>/dev/null | grep -E ':3020|:3021' || echo "  3020/3021 dinlenmiyor"

echo ""
echo "==> App health (localhost:3020)"
if curl -sf -m 5 http://127.0.0.1:3020/ >/dev/null 2>&1; then
  echo "  OK — app yanıt veriyor"
else
  echo "  BAŞARISIZ — app yanıt vermiyor"
fi

echo ""
echo "==> CDN health (localhost:3021)"
if curl -sf -m 5 http://127.0.0.1:3021/health >/dev/null 2>&1; then
  echo "  OK — cdn yanıt veriyor"
else
  echo "  BAŞARISIZ — cdn yanıt vermiyor"
fi

echo ""
echo "==> Son loglar"
for svc in app postgres redis minio cdn; do
  echo "--- $svc ---"
  $COMPOSE logs --tail=15 "$svc" 2>/dev/null || true
  echo ""
done
