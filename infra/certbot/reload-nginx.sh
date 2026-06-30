#!/bin/sh
# Let's Encrypt yenileme sonrası host nginx'i yeniden yükle
if command -v nginx >/dev/null 2>&1; then
  nginx -t && systemctl reload nginx
fi
