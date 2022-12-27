#!/bin/bash

set -eo pipefail

if ! [ -z "$(git status --porcelain)" ]; then
  echo "Cowardly refusing to deploy with an unclean git state"
  exit 1
fi

npm run build
cp -r out/* decentsocial.codeberg.page/
GIT_SHA=$(git rev-parse --short HEAD)
pushd decentsocial.codeberg.page

SUBPROJECT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$SUBPROJECT_BRANCH" != "main" ]]; then
  echo 'Aborting deployment. decentsocial.codeberg.page subproject is not on main branch.';
  exit 1;
fi
git add -A .
git status
read -r -p "Are you sure you want to deploy these changes? [y/N]"\
  response

case "$response" in
  [yY][eE][sS]|[yY])
    echo "Pushing changes to remote"
    git commit -m "Generated from $GIT_SHA of DecentSocial/website" &&\
      git push main
    ;;
  *)
    echo "Abandoning changes"
    git reset --hard HEAD && git clean -fdx
    ;;
esac

popd
