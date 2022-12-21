# Deploying to Codeberg Pages

This describes how to deploy this repository to https://codeberg.page/ for the repo.

1. `npm ci`
2. build/export the website with configuration that will work
    ```
    ./bin/build-codeberg-pages-website
    ```
    * This should write the build to the `./out` directory
3. Prepare a new `pages-{datetime}` branch with the history of `pages` branch and the contents of the built `./out` branch.
    ```
    ./bin/prepare-pages-branch
    ```
    * After this command, you will be in a new branch with staged changes
4. Make sure the changes are to your satisfaction via `git status` and `git diff`
5. Commit the changes
    ```
    git add .
    git commit -m "update pages from export"
    ```
5. Push the `pages-{datetime}` branch to codeberg
    ```
    git push
    ```
6. Open a PR from this branch to the `pages` branch.
    * A URL to do this should be in stderr from the `./bin/prepare-pages-branch` script
7. Merge the PR
    * Because codeberg pages serves the contents of the pages branch, the built website should now be live at something like https://decentsocial.codeberg.page/website
