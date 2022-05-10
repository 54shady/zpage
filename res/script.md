# How to using script on HTTP server

## Access http server

using wget

	bash <(wget -qO - http://serverip/script/scriptname)

using curl

	bash <(curl -Ls http://serverip/script/scriptname)

just source the script

	source <(curl -Ls http://serverip/script/scriptname)

## Access https server insecure

using insecure mode

	curl -k https://serverip
	wget -qO - --no-check-certificate https://serverip/scriptname
