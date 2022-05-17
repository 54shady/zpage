# Using thttpd as webserver

## Preparation

Create the website root directory

	mkdir -p www/cgi-bin

Configuring file(thttpd.conf)

	dir=/path/to/www
	user=zeroway
	logfile=/path/to/thttpd.log
	pidfile=/path/to/thttpd.pid
	port=9999
	host=0.0.0.0
	charset=utf-8
	cgipat=**.cgi

## First HTML file

Create first html file(index.html)

	<h1>Hello thttpd ;-)</h1>

Run thttpd

	./thttpd -C thttpd.conf

## CGI Application

Create CGI Application via Python(py-hello.cgi)

	#!/usr/bin/env python

	import os

	print("Content-Type: text/html") # HTML is following
	print("") # blank line, end of headers
	print("<TITLE>CGI script output</TITLE>")
	print("<H1>This is CGI Application writen by Python</H1>")

	print("Hello, world! <br/>")
	for i in range(10):
		print(i, '<br/>')
	print('Just to show that some stuff is "dynamically" generated server side<br/>')

	os.system('echo "Hello CGI" > readme')

	with open('/etc/fstab') as f:
		buf=f.readlines()
	print(buf, '<br/>')

Make CGI executable

	chmod +x www/cgi-bin/py-hello.cgi

Create CGI Application via C(c-hello.c)

	#include <string.h>

	int main(int argc, char *argv[])
	{
		printf("Content-type:text/html\n\n");
		printf("<html>\n");
		printf("<head><title>An html page from a cgi</title></head>\n");
		printf("<body>\n");
		printf("<h1>This a CGI Application writen by C</h1>\n");
		printf("</body>\n");
		printf("</html>\n");

		system("rm -rvf readme");

		return 0;
	}

Compile the program and copy to cgi path

	gcc c-hello.c -o www/cgi-bin/c-hello.cgi

Run the thttp again and test the cgi application

	http://localhost:9999/cgi-bin/c-hello.cgi
	http://localhost:9999/cgi-bin/py-hello.cgi

## Combine CGI to button

In html file, using action in form(index.html)

	<h1>Hello thttpd;-)</h1>

	<!--将按钮和CGI文件结合起来,使用html中form表单中的action=value来操作-->
	<h1>Run CGI Test1</h1>
		<form enctype="application/x-www-form-urlencoded" action="cgi-bin/py-hello.cgi" method="post">
			<input type="submit" value="PyCGI">
		</form>

	<h1>Run CGI Test2</h1>
		<form enctype="application/x-www-form-urlencoded" action="cgi-bin/c-hello.cgi" method="post">
			<input type="submit" value="CCGI">
		</form>
