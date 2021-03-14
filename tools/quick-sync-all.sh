#/bin/sh
git branch -r | grep -v '\->' | while read remote; do git checkout "${remote#origin/}" && git pull; done &&
git checkout develop
