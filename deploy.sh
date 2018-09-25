#!/bin/sh
# build and push public/ to the gh-pages branch
set -e
hugo --minify
cd public
git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "deploy $(date +%F)"
git push -f git@github.com:qerope/blog.git gh-pages
