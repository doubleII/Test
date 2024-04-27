## Table of content
* Install Docker
* NextCloud Documentation
* Externte USB Einstellungen
* install postgres
* install next-cloud


## Install Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

```bash
sudo sh get-docker.sh
```

```bash
sudo docker version
```

füge username ein

```bash
sudo usermod -aG docker [user_name]
```

## NextCloud Documentation

[link](https://help.nextcloud.com/t/menu-configuration-reference-for-backups-config-networking-security-system-tools-updates/126011)

## Externte USB Einstellungen

[link](https://help.nextcloud.com/t/how-to-configure-an-external-usb-drive-with-nextcloudpi/126376)

## Install postgres

```bash
sudo docker pull postgres
```

Erstelle network mit Name `nextcloud-net`

```bash
sudo docker network create --driver bridge nextcloud-net
```

remove network

```bash
docker network rm my-network
```

Starte die Datenbank und füge das Passwort ein.

username:postgres

```bash
sudo docker run --name postgres -e POSTGRES_PASSWORD=123456 --network nextcloud-net -d postgres
```

Starte den Kontainer:

Du kannst den port 8080 ändern

```bash
sudo docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```

## Install next-cloud

```bash

```
