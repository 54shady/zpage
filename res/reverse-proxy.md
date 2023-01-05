# Using caddy as reverse proxy for webserver(nginx)

## Basic setup

![reverse proxy](../pix/rproxy.png)

假设当前宿主机ip地址(10.0.0.5)

首先启动web服务器(将主机的8080映射到nginx的80)

	docker run -p 8080:80 ... nginx

caddy将对主机的8080进行反向代理(Caddyfile内容如下,local web server)

	localhost, 10.0.0.5 {
			reverse_proxy /* localhost:8080
	}

- 当访问主机(10.0.0.5)的80端口和443端口)时,就会被caddy代理到主机的8080
- 由于主机的8080端口映射到了nginx的80端口,所以最终实现访问到nginx

启动caddy容器

	docker run --rm -it --network host -v $PWD/Caddyfile:/etc/caddy/Caddyfile caddy

使用curl或wget测试

	curl -k https://localhost
	wget -qO - --no-check-certificate https://localhost/script/utils

如果是public-facing(www.myweb.com) web server则Caddyfile配置如下

	www.myweb.com {
			reverse_proxy /* localhost:8080
	}

## Certificate Authority(CA)

[参考文章:使用caddy配置本地https](https://medium.com/@devahmedshendy/traditional-setup-run-local-development-over-https-using-caddy-964884e75232)

生成对应的ca.pem证书和ca-key.pem

	mkcert -cert-file ca.pem -key-file ca-key.pem localhost 10.0.0.5 zeroway.cool

修改Caddyfile配置对应的证书文件

	zeroway.cool, localhost, 10.0.0.5 {
			reverse_proxy /* localhost:8080
			tls /certs/ca.pem  /certs/ca-key.pem
	}

启动容器时配置证书

	docker run \
		--name rproxy \
		--rm -d \
		--network host \
		-v $PWD/ca.pem:/certs/ca.pem \
		-v $PWD/ca-key.pem:/certs/ca-key.pem \
		-v $PWD/Caddyfile:/etc/caddy/Caddyfile \
		caddy
