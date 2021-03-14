#/bin/sh
echo "\n\n\n===[Quick Merge]===\n"
echo "$(git branch | awk '!/(^*|master|develop|orphan)/ {print "git checkout " $1 " &&\ngit merge develop --no-ff &&\n"}')\n\ngit checkout develop" | sh
