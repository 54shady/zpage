#!/usr/bin/env bash

convert \
	-size 125x \
	-pointsize 72 \
	-background none \
	-fill blue label:Z \
	-fill red label:e \
	-fill gray label:r \
	-fill green label:o \
	-fill yellow label:W \
	-fill black label:a \
	-fill purple label:y \
	+smush -5 ./pix/logo.png

# generate the favicon
convert -background transparent -define 'icon:auto-resize=16,24,32,64' pix/logo.png favicon.ico
