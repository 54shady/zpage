docker run -d --restart always --name web -p 8080:80 \
	-v ${HOME}/github/zpage:/usr/share/nginx/html \
	-v ${HOME}/github/zpage/default.conf:/etc/nginx/conf.d/default.conf \
	-v ${HOME}/github/zpage/license.conf:/etc/nginx/conf.d/license.conf \
	-v ${HOME}/github/zpage/passwd:/tmp/htpasswd \
	-v ${HOME}/src/qemu/docs/_build:/qemu \
	-v ${HOME}/src/linux/Documentation/output:/kernel \
	-v ${HOME}/Videos:/video \
	-v ${HOME}/github/zdoc/_build/html:/zdoc \
	-v ${HOME}/github/zdoc/_build/html/_static:/script \
	-v ${HOME}/github/dfc:/dfc \
	-v ${HOME}/github/spice-html5:/spice \
	nginx
