BRICKS
======

	 ____________________________________________
	| Twitter|________|________|________|__Vimeo_|
	|________|Facebook|________|________|________|
	|________|________|________|________|________|
	|________|________|________|_Google_|________|
	|YouTube_|        |________|________|________|
	|                                            |
	|              *                             |
	|                                            |
	|              _______                       |
	|             |_______|                      |
	|____________________________________________|


## What is BRICKS?

BRICKS is a list for all the domains blocked by the Chinese GFW.


## What for?

* In order to collect all the domains blocked by the GFW with the contributers all over the internet.

* To learn how huge the restrictions is, in the Chinese internet.

* To log the datas about this terrifying digital Berlin Wall as much as possible.

* Help you to walkaround the GFW with a proxy server.


## Different from GfwList
[GfwList](https://code.google.com/p/autoproxy-gfwlist/) is cool and effective, but is complex and inefficient currently. Now I want to make it simple and work more smoothly.


## Installation

`$ git clone https://github.com/Leask/BRICKS.git`


## Uasge

* List all websites blocked by Chinese government

    `$ ./bricks list`

    or just simply `$ cat gfw.bricks`

* Add domain into BRICKS

	`$ ./bricks add 'google.com'`

* Remove domain from BRICKS

	`$ ./bricks remove 'facebook.com'`

* Make PAC file with BRICKS

	`$ ./bricks makpac 'SOCKS5 127.0.0.1:8964; SOCKS 127.0.0.1:8964; DIRECT'`

* Make PAC file and launch HTTP server

	`$ ./bricks pacsrv 'SOCKS5 127.0.0.1:8964; SOCKS 127.0.0.1:8964; DIRECT'`

* Show help infos

	`$ ./bricks help`


## Contributing

* Fork -> features implement -> tests -> pull request

* Fork -> add domain to list -> tests -> pull request


## See also

Flora_Pac: [https://github.com/Leask/Flora_Pac](https://github.com/Leask/Flora_Pac)


## Get support

Email / iMessage / Hangouts: i@leaskh.com
