#!/usr/bin/env sh

# abort on errors

set -e 

# build

npm run build

cd dist

git init

git add -abort

git commit -m "deploy"

git push -f git@github.com:manuelpcastro/manuelpcastro.github.io master:gh-pages

cd -