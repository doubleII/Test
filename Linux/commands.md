## Table of content 
* Linux & Rasberry Pi
* Commands
* Docker
* Install Linux on Windwos 10

## Linux & Rasbarry Pi

sudo - execute a command as anohter user

dpkg - package manager for debian. This is a tool to install, build, remove and manage debian packages.
[dpkg web site](https://man7.org/linux/man-pages/man1/dpkg.1.html)

apt-get - apt hadling utility - command line package tool

`pwd` - print name of current directory 

`cd /usr/local/bin` - go to bin directory

`cd ..` - up to parent directory </br>

`ls -l` - print all directories in newline

`find / -name "folder name"` - find folder

## Commands

`sudo -i` - auf root umschalten

`dpkg -i`

`dpkg -l | grep qt` - das Programm gibt am Ende  Name - | Pipe

Update && Upgrade linux
```bash
sudo apt-get update && sudo apt-get -y upgrade
```


## Docker
1. Before to install Docker you need to update and upgrade Linux

```bash
sudo apt-get update && sudo apt-get upgrade
```

2. Install Docker on Linux
3. Install Docker on Raspberry Pi using a script.

Download the docker script.
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

execute the script

```bash
sudo sh get-docker.sh
```
Before to install docker-compose you need to install a few dependecies

```bash
sudo apt-get install -y libffi-dev libssl-dev
sudo apt-get install -y python3 python3-pip
sudo pip3 -v install docker-compose
```

## Install Linux on Windwos 10

[Anleitung](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#2-install-wsl])
