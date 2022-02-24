---
title: 如何将markdown转成html格式
subtitle: Using pandoc and markdown file to generate html file.
website: https://zeroway.xyz/
logo: ../pix/gentoo-signet.svg
---

## 编写markdown

在markdown文本最上方填写标题头

	---
	title: How to auto generate the blog page
	subtitle: Using pandoc and markdown file to generate html file.
	website: https://zeroway.xyz/
	logo: ../pix/gentoo-signet.svg
	---

## 转换成html

推荐使用docker的方式用pandoc

	docker pull pandoc/latex
	alias pandoc='docker run --rm -v "$(pwd):/data" -u $(id -u):$(id -g) pandoc/latex'

## 使用css文件

使用[修改好的模板pandoc-mvp-css]( https://gitlab.com/vimalkvn/pandoc-mvp-css)进行转换

	pandoc --toc-depth=2 --toc -s firstblog.md --template template.html -c ../style.css -o firstblog.html

其中template.xml是在pandoc自带的模板上修改的

	pandoc -D html > template.html
