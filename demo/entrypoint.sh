#!/bin/sh

yarn preview &
cypress run --browser chrome --headless

# exec "$@"
