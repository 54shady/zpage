# Spice and Vnc Web Client

## spice

[websockify to forword port](https://github.com/kanaka/websockify)

使用websock来转发本地spice的3001端口到本地5959

	./websockify.py -v :5959 :3001

[spice html5 deploy on web server](https://gitlab.freedesktop.org/spice/spice-html5)

webserver启动的时候挂载spice-html5的代码到指定目录

	drun -v /src/spice-html5:/spice ...

	可以通过网页来访问5959端口

## vnc

[vnc web client : noVNC](https://github.com/novnc/noVNC)

先启动vncserver后比如下面的localhost:5900

运行noVNC仓库中下面命令

	./utils/novnc_proxy --vnc localhost:5900

会得到一个url用于访问vnc,直接用浏览器访问即可
