# 如何使用marp来制作ppt和pdf

![bg](http://zeroway.stub/pix/gentoo-infinity-1280x1024.jpg)

小标题: Covert markdown to pdf and pptx
作者: Zeroway

---

## 使用marp docker镜像

下载镜像

	docker pull marpteam/marp-cli

---

## 配置成别名(可选)

为了操作方便设置如下alias

	alias marp='docker run --rm -u 0:0 -v $PWD:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli --allow-local-files'

---

## 如何转换格式

将本文marp-demo.md转换成html(适合用于当作ppt演示)

	marp res/marp-demo.md -o draft.html

---

将本文marp-demo.md转换成pdf

	marp marp-demo.md --pdf

---

将本文marp-demo.md转换成pptx

	marp marp-demo.md --pptx

---

## marp的markdown语法

[参考marpit文档: https://marpit.marp.app/image-syntax](https://marpit.marp.app/image-syntax)

---

## 如何调整图片尺寸和位置

设置背景图片语法

	![bg](./hero-background.jpg)

显示图片

	![marplogo w:300px, h:200px](./marpit.png)

![bg](http://zeroway.stub/pix/hero-background.jpg)
![marplogo w:300px, h:200px](http://zeroway.stub/pix/marpit.png)

---

设置背景在右边

	![bg right](../pix/Linux-Logo.png)

调整图片显示的大小

	![marplogo w:500px, h:400px](./marpit.png)

![bg right](http://zeroway.stub/pix/Linux-Logo.png)
![marplogo w:500px, h:400px](http://zeroway.stub/pix/marpit.png)

---

按比例设置背景图片

	![bg right:20%](./Linux-Logo.png)
	![marplogo w:300px, h:200px](./marpit.png)

![bg right:20%](http://zeroway.stub/pix/Linux-Logo.png)
![marplogo w:300px, h:200px](http://zeroway.stub/pix/marpit.png)

---

<!-- _backgroundColor: aqua -->
使用marp的directives功能设置当前页背景色

	<!-- _backgroundColor: aqua -->

- apple
- pear
- peach

---

<!-- backgroundColor: yellow -->
使用marp的directives功能设置后续页背景色

	<!-- backgroundColor: yellow -->

- 当前页开始
- 后续的所有页都是这个颜色

---

- 当前页开始
- 后续的所有页都是这个颜色

---

- 当前页开始
- 后续的所有页都是这个颜色
