## Docker Table of contents
* Containter
* Image
* Resource
  
### CONTAINER
#### check version
```bash 
$ docker -v
```

#### check compose if installed
```bash 
$ docker-compose -v
```
#### list all containers

```bash
$ docker ps --all
```
or short  

```bash
$ docker ps -a
```

#### remove contaner -f force -v volume

```bash
$docker rm -fv <container_name>
```

#### runs a command in a new container
```bash 
$ docker run
```

```bash 
$ docker run <host_port>:<container_port>
```

#### run commans with bash. It will gave you a terminal inside the running container

See to `-d -p` command

```bash 
$ docker run -it --name proxy nginx bash
```

#### take a termin inside the running container
```bash 
$ docker container exec it container_name bash
```

```bash 
$ docker container exex it mongo bash
```

#### stop docker container
```bash 
$ docker stop container_name
```

#### pulls an image or a repository from a registry
```bash
$ docker pull
```

#### build image
```bash 
$ docker build -t
```

### IMAGE
```bash 
$ docker history image_name
```


#### show all images

```bash
$ docker images -a
```

#### remove image -f

```bash
$ docker rmi -f <image_id>
```

#### inspect

```bash 
$ docker image inspect image_name //all metadata
```

### Resources

first steps </br> 
https://www.youtube.com/watch?v=gAkwW2tuIqE

windows container </br>
https://www.youtube.com/watch?v=066-9yw8-7c

image and layer</br> 
https://docs.docker.com/storage/storagedriver/

docker command line </br> 
https://docs.docker.com/engine/reference/commandline/build/

keep clean yor docker system </br>
$ https://www.youtube.com/watch?v=_4QzP7uwtvI
