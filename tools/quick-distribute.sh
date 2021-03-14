#/bin/sh
echo "\n\n\n===[Quick Distribute]===\n"
echo "git checkout develop && \n\n$(git branch | awk '!/(^*|master|develop|orphan)/ {print "git merge " $1 " --no-ff &&"}')\n\ngit checkout develop" | sh
