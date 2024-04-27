## Table of content
* Install Docker
* NextCloud Documentation
* Externte USB Einstellungen
* Install postgres & next-cloud
* Remove network
* Remove container
* Installationsvideo


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

füge `username` ein

```bash
sudo usermod -aG docker [user_name]
```

## NextCloud Documentation

[link](https://help.nextcloud.com/t/menu-configuration-reference-for-backups-config-networking-security-system-tools-updates/126011)

## Externte USB Einstellungen

[link](https://help.nextcloud.com/t/how-to-configure-an-external-usb-drive-with-nextcloudpi/126376)

## Install postgres & next-cloud

```bash
sudo docker pull postgres
```

Erstelle network mit Name `nextcloud-net`

```bash
sudo docker network create --driver bridge nextcloud-net
```

Starte die Datenbank und füge das Passwort ein.

username: `postgres`

```bash
sudo docker run --name postgres -e POSTGRES_PASSWORD=123456 --network nextcloud-net -d postgres
```

Starte den Kontainer:

Du kannst den Port `8080` ändern

```bash
sudo docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```

## USB als Datenbank

zeige die Speicherplatte

```bash
sudo lsblk
```

Fortmattiede und lösche alle Daten in der Festplatte z.B. wenn sie als sb1 angeschloßen angezeigt wird

```bash
sudo mkfs.ext4 /dev/sda1
```
Ertelle mout Punkt z.B. `/media/usbdrive`

```bash
sudo mkdir /media/usbdrive
```

```bash
sudo mount /dev/sda1 /media/usbdrive
```

```bash
sudo chown -R www-data:www-data /media/usbdrive
```

## Remove network

Zuerst deinstalliere den Kontainer und dann das network

## Installationsvideo

[link](https://www.youtube.com/watch?v=CHWHQFwxFcE&list=PLxuCsl8AuCz2-qo9ywqe9fHTjUhvABy-j&ab_channel=censiCLICK)

```bash
docker network rm my-network
```

## Remove container

```bash
sudo docker stop nextcloud && sudo docker rm nextcloud
```

## Reboot raspberry pi

```bash
sudo docker start postgres
```

```bash
sudo docker start nextcloud
```

