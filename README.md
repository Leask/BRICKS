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

BRICKS is a list of domains blocked by the Chinese GFW.


## What for?

* Colleting domains blocked by the GFW with the contributers.

* Provide a database for any researches on the tightness of Chinese Internet blockage.

* Helping any people and software get around the GFW.

## Different from GfwList
[GfwList](https://code.google.com/p/autoproxy-gfwlist/) is cool and effective, but growing complex and inefficient. BRICKS is simpler and easier to use.

## Installation

`$ git clone https://github.com/Leask/BRICKS.git`


## Usage

* List all websites blocked by the GFW

    `$ ./bricks list`

    or just simply `$ cat gfw.bricks`

* Add a domain to BRICKS

	`$ ./bricks add 'google.com'`

* Remove a domain from BRICKS

	`$ ./bricks remove 'facebook.com'`

* Make .PAC file with BRICKS

	`$ ./bricks makpac 'SOCKS5 127.0.0.1:8964; SOCKS 127.0.0.1:8964; DIRECT'`

* Make .PAC file and launch HTTP server

	`$ ./bricks pacsrv 'SOCKS5 127.0.0.1:8964; SOCKS 127.0.0.1:8964; DIRECT'`

* Make Surge configuration file with BRICKS

	`$ ./bricks maksurge 'custom, 1.2.3.4, 443, rc4-md5, password, http://surge.run/SSEncrypt.module'`

* Make Surge configuration file and launch HTTP server

	`$ ./bricks surgesrv 'custom, 1.2.3.4, 443, rc4-md5, password, http://surge.run/SSEncrypt.module'`

* Show help infomation

	`$ ./bricks help`


## Contributing

* Fork -> features implement -> tests -> pull request

* Fork -> add domain to list -> tests -> pull request


## See also

Flora_Pac: [https://github.com/Leask/Flora_Pac](https://github.com/Leask/Flora_Pac)


## Getting help

Email / iMessage / Hangouts: i@leaskh.com
