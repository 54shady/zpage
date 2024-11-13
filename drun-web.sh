docker run -d --restart always --name web -p 8080:80 \
	-v ${HOME}/github/myx/zpage:/usr/share/nginx/html \
	-v ${HOME}/github/myx/zpage/default.conf:/etc/nginx/conf.d/default.conf \
	-v ${HOME}/github/myx/zpage/passwd:/tmp/htpasswd \
	-v ${HOME}/github/myx/zdoc/_build/html:/zdoc \
	-v ${HOME}/github/myx/zdoc/_build/html/_static:/script \
	-v ${HOME}/github/myx/res:/res \
	nginx
