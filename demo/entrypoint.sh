#!/bin/sh

cd demo
# `&` is used to run the process in the background
yarn preview:serve &
cypress run "$@"

# exec "$@"
