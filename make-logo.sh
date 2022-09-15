#!/usr/bin/env bash

magick \
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
