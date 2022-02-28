#!/bin/sh

# `esbuild`` is needed for the preview and it is has different binaries for different OSes
npm rebuild esbuild
cd demo
# `&` is used to run the process in the background
yarn preview &
cypress run --browser chrome --headless

# exec "$@"
