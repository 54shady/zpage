# How to using script on HTTP server

using wget

	bash <(wget -qO - http://serverip/script/scriptname)

using curl

	bash <(curl -Ls http://serverip/script/scriptname)

just source the script

	source <(curl -Ls http://serverip/script/scriptname)
