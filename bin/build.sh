#!/bin/bash

print_done() {
  echo -e '\e[1;32mdone\e[0m'
}

print_building() {
  printf "Building \e[1;33m$1\e[0m ... "
}

build() {
  print_building .$1
  
  # Compile the typescript files
  npx tsc -p tsconfig.$1.json

  # Move buld files to the root of the project
  for file in ./$1/*.js; do
    mv $file ./$(basename $file .js).$1
  done

  rmdir ./$1

  print_done
}

build_index() {
  print_building index

  rm -f ./src/index.ts

  for file in ./src/*.ts; do
    name=$(basename $file .ts)
    echo "export { default as $name } from './$name';" >> ./src/index.ts
  done

  print_done
}

build_index
build mjs
build cjs

print_building '.js\e[0m and \e[1;33m.d.ts'

npx tsc -p tsconfig.json

print_done