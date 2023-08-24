#!/bin/bash

# simple script to build and deploy to my VPS

TARGET=$1

if [[ -z "$TARGET" ]];
then
    exit 1
fi

rm -rf build

npm install
npm run build

scp -r build/* "root@$TARGET:/var/www/leoalvarenga.dev/"
