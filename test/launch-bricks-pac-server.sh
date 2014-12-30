#!/bin/sh
# dir=${PWD##*/}
./bricks pacsrv 'SOCKS5 127.0.0.1:8964; SOCKS 127.0.0.1:8964; DIRECT'
