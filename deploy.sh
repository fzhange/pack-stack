#!/usr/bin/env sh

# 确保脚本抛出遇到的错误

set -e

# 生成静态文件

# npm install

npm run docs:build

# 进入生成的文件夹

cd ./.vitepress/dist
  
# 如果是发布到自定义域名
echo 'fzhange.github.io' > CNAME  

git init

git add .

git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io

# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git remote add origin git@github.com:fzhange/nestJs-docs.git

git branch -M master

git push -f git@github.com:fzhange/nestJs-docs.git master:gh-pages

cd -