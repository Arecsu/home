#!/bin/bash

rm public/inter-4.0/*-subset.woff2 2> /dev/null || true \
 && glyphhanger http://localhost:4321 --subset="public/inter-4.0/*.woff2" --formats=woff2 --whitelist=↑↓ \
 && mv public/inter-4.0/*-subset.woff2 public/inter-4.0/subset
