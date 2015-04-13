#!/bin/sh
# dir=${PWD##*/}
rm ./test/gfwlist.txt
wget https://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt -O ./test/gfwlist.txt --no-check-certificate
