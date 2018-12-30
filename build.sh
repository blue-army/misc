#!/usr/bin/env bash

./node_modules/.bin/tsc -p ./src

cd src
find . -name 'function.json' | cpio -pdm ../dist
cd -