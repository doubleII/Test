# Docker
  
## CONTAINER
### check version
$ docker -v
### check compose if installed
$ docker-compose -v
### runs a command in a new container
$ docker run
### run commans with bash. it will gave you a terminal inside the running container
$ docker run -it --name proxy nginx bash
### take a termin inside the running container
$ docker container exec it container_name bash
$ docker container exex it mongo bash
### stop docker container
$ docker stop container_name
### pulls an image or a repository from a registry
$ docker pull
### build image
$ docker build -t

## IMAGE
$ docker history image_name
$ docker image inspect image_name //all metadata

## Resources
#### first steps 
[link] https://www.youtube.com/watch?v=gAkwW2tuIqE
#### windows container
https://www.youtube.com/watch?v=066-9yw8-7c
#### image and layer 
https://docs.docker.com/storage/storagedriver/
#### docker command line 
https://docs.docker.com/engine/reference/commandline/build/
#### keep clean yor docker system
$ https://www.youtube.com/watch?v=_4QzP7uwtvI
