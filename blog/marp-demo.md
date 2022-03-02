---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('./hero-background.jpg')
---

# **使用marp将markdown进行格式转换**

---

## 使用marp docker镜像

下载镜像

	docker pull marpteam/marp-cli

---

## 配置成别名(可选)

为了操作方便设置如下alias

	alias marp='docker run --rm -u $(id -u):$(id -g) -v $PWD:/home/marp/app/ -e LANG=$LANG marpteam/marp-cli'

---

## 如何转换格式

将本文marp-demo.md转换成html(适合用于当作ppt演示)

	marp marp-demo.md

---

将本文marp-demo.md转换成pdf

	marp marp-demo.md --pdf

---

将本文marp-demo.md转换成pptx

	marp marp-demo.md --pptx

---
