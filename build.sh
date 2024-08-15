#!/bin/bash

npm run build
browserify dist/index.min.js -o dist/index.browserify.js --standalone puz
cp dist/index.browserify.js ../../crosswords/utils/xwords_puz.js
