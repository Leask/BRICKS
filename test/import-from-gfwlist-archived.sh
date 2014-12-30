#!/bin/sh
# dir=${PWD##*/}
cat ./test/gfwlist.txt | ./utilities/import-from-gfwlist.js
