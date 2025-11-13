docker run -d --restart always --name web -p 80:80 \
	-v ${HOME}/github/myx/zpage:/usr/share/nginx/html \
	-v ${HOME}/github/myx/zpage/default.conf:/etc/nginx/conf.d/default.conf \
	-v ${HOME}/github/myx/zdoc/_build/html:/zdoc \
	-v ${HOME}/github/myx/zdoc/_build/html/_static:/script \
	-v ${HOME}/Videos:/video \
	-v /data/p4/pdf:/pdf \
	-v ${HOME}/github/myx/res:/res \
	-v ${HOME}/github/myx/page:/page \
	nginx \
		sh -c "echo -n 'zero:' > /tmp/htpasswd && echo '0' | openssl passwd -stdin >> /tmp/htpasswd && nginx -g 'daemon off;'"
