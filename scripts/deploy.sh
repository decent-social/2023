#!/bin/bash

set -eo pipefail

if ! [ -z "$(git status --porcelain)" ]; then
  echo "Cowardly refusing to deploy with an unclean git state"
  exit 1
fi

npm run build
GIT_SHA=$(git rev-parse --short HEAD)
pushd decentsocial.codeberg.page

git checkout main
cp -r ../out/* .
git add -A .
git status

read -r -p "Are you sure you want to deploy these changes? [y/N]" response
case "$response" in
  [yY][eE][sS]|[yY])
    echo "Pushing changes to remote"
    git commit -m "Generated from $GIT_SHA of DecentSocial/website" &&\
      git push origin main
    ;;
  *)
    echo "Abandoning changes"
    git reset --hard HEAD && git clean -fdx
    ;;
esac

popd

git add decentsocial.codeberg.page
git commit -m "Deployed $GIT_SHA to DecentSocial/pages"
