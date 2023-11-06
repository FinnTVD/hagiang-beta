#!/bin/bash

git pull
npm run build

pm2 reload hagiang

sudo systemctl reload nginx
