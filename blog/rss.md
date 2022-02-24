---
title: How to generate a rss for your website
website: https://zeroway.xyz/
logo: ../pix/gentoo-signet.svg
---

## Enable the RSS feed in index file

add below content in the home index page

	<link rel='alternate' type='application/rss+xml' title='Zeroway RSS' href='/rss.xml'>

## The RSS xml file

add a file call rss.xml to the root dir of web

	<?xml version="1.0" encoding="utf-8"?>
	<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	  <channel>
		<title>Zeroway's WebSite</title>
		<description>Updates from Zeroway's Page.</description>
		<language>en-us</language>
		<link>http://www.zeroway.xyz/rss.xml</link>
		<atom:link href="http://www.zeroway.xyz/rss.xml" rel="self" type="application/rss+xml" />
		<image>
		  <title>zeroway</title>
		  <url>http://www.zeroway.xyz/pix/gentoo-signet.svg</url>
		  <link>http://www.zeroway.xyz/rss.xml</link>
		</image>
		<item>
		  <title>Font 'noto emoji' should be installed for display the color emoji on this website</title>
		  <guid>http://www.zeroway.xyz/zdoc/index.html</guid>
		  <link>http://www.zeroway.xyz/zdoc/index.html</link>
		  <pubDate>Sun, 14 Nov 2022 00:00:00 -0500</pubDate>
		  <description><![CDATA[
		  <p> Two notes for users: </p>
		  <ol>
			<li>Install noto-emoji font on your system. </li>
			<li>Insert color emoji using under teminal using <code>ctrl+shift+u+unicode</code>
				, for example insert a notebootk icon via ctrl+shift+u+1f5d2. </li>
			</ol>
			  ]]>
		  </description>
		</item>
	  </channel>
	</rss>

## How to subscript the rss via rss reader

using you favourate rss reader, for example newsboat add url below

	http://zeroway.xyz/rss.xml
