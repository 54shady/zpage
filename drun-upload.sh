#!/usr/bin/env bash

# manully create storage directory first
# 1. mkdir storage
# which make sure the directory owner and group is normal user
# 2. chown $(id -u):$(id -g) storage/
docker run --name upload \
	--user $(id -u):$(id -g) \
	-d -p 9999:8080 \
	--restart always \
	-v $PWD/storage:/storage \
	httpupload http-server-upload --token yyds --upload-dir=/storage
