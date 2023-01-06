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

## Download whole website

using wget

	wget -c --wait=1 \
		--user-agent="Firefox/4.0.1" \
		--execute robots=off \
		--recursive --no-parent \
		--continue --no-clobbe \
		https://sitetobedown.net/

using rsync

		rsync -rtvzP sitetobedown.net /path/to/site
