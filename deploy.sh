#!/usr/bin/env bash

# build
ng build --aot --prod

# build image
docker build -t zsoltfarkas/tfjs-notebook:latest .

# run locally
docker stop tfjsn
docker rm tfjsn
docker run -d --name tfjsn -p8080:80 zsoltfarkas/tfjs-notebook:latest



read -p "Press enter to finish"
