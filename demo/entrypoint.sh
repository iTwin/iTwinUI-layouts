#!/bin/sh

npm rebuild esbuild
cd demo
yarn preview &
cypress run --browser chrome --headless

# exec "$@"
