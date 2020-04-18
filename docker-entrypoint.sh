#!/bin/bash
set -e

export NODE_ENV="${NODE_ENV:-development}"

if [ $NODE_ENV == "development" ]; then
  echo "===> [DEV] Running ... "
  npm start
else
#  echo "===> Building ..."
#  npm run build

  echo "===> Running ... "
  serve -l 3200 -s build
fi

