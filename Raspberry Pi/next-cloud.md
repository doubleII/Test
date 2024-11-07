## Table of content
* Tabelle
* Checkliste
* next-cloud Administratorkon
* db postgres
* Install Docker
* NextCloud Dokumentation
* Installationsvideo
* Install postgres & next-cloud
* Speichermedien vorbereiten (USB als Datenbank)
* Automate Mounting on Boot
* Remove network
* Remove container
* Reboot raspberry pi. Start postgres und nextcloud
* Open bash into container nextcloud:
* Update/Preparing the config.php file in docker container
* Play mp4 files
* enable/install cron

## Tabelle

Du kannst und `su` Passwort erstellen, wenn sie fehlt.

| raspberry pi 4| Second Header |
| ------------- | ------------- |
| hostname      |      -        |
| user          |      -        |
| passwort      |      -        |

| next-cloud    | Second Header |
| ------------- | ------------- |
| hostname      |      -        |
| user          |      -        |
| passwort      |      -        |

| postgres      | Second Header |
| ------------- | ------------- |
| username      |      -        |
| passwort      |      -        |
| db-hostname   |      -        |

## Checkliste
* Der Domain in der fritz-box eintragen (Netzwerk/Netzwerkeinstellungen DNS-Rebind-Schutz)
* Statische IP Adressen für die Nginx und next-cloud in der fritz-box definieren
* config.php Datei unter `trusted_domains` die IP und domain eintragen
* IONOS Zertifikaten generieren
* In Nginx Proxy Manager die Zertifikaten hochlanden

## next-cloud Administratorkonto
user:
passw:

## db postgres 
username: 
pass: 

db name: postgres
datenbank-hostname: postgres

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

## NextCloud Dokumentation

### Dokumentation
[link](https://docs.nextcloud.com/server/latest/developer_manual/)

### Installation
Install nexcloud container [link to docker](https://hub.docker.com/_/nextcloud)

```bash
sudo docker pull nextcloud
```
Starte den Kontainer:

```bash
sudo docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```
Du kannst die den Port `8080` ändern.

Du kannst die Ip auch eingeben wenn du möchtest

#### Z.B.

```bash
sudo docker run --name nextcloud -d -p xxx.xxx.xxx.xxx:8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```

## Installationsvideo

[link](https://www.youtube.com/watch?v=CHWHQFwxFcE&list=PLxuCsl8AuCz2-qo9ywqe9fHTjUhvABy-j&ab_channel=censiCLICK)

## Installation postgres & next-cloud

## Prepare raspberry pi for new installation.

1. Lösche alle Kontainers (postgres, nextcloud)
2. Lösche alle images (postgres, nextcloud)
3. Lösche network 

zeige alle networks

```bash
sudo docker network ls 
```

```bash
sudo docker network rm <name_or_id>
```
`
Example
NETWORK ID     NAME            DRIVER    SCOPE
9df8a895ca9e   bridge          bridge    local
099e1fd8b99c   host            host      local
ad10c59830af   nextcloud-net   bridge    local # du kannst nur diese network löschen
8c1c4c2bcdab   none            null      local
`

4. clear `/home/pi/nextcloud folder`

```bash
sudo rm -rf ./*
```

7. Installiere postgres

```bash
sudo docker pull postgres
```

8. Installiere nextcloud-net

Erstelle network mit Name `nextcloud-net`

```bash
sudo docker network create --driver bridge nextcloud-net
```

9. Datenbank einrichten

Starte die Datenbank und füge das Passwort ein.

username: `postgres`

```bash
sudo docker run --name postgres -e POSTGRES_PASSWORD=123456 --network nextcloud-net -d postgres
```

10. Starte nextcloud, wenn nicht gefunden, wird die letzte version heruntergeladen

```bash
sudo docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```

11. set permissions: sudo chmod -R 750 /media/usbdrive


13. reboot raspberry pi


#### 1. Postgres Installation.

```bash
sudo docker pull postgres
```
#### 2. Erstellen von Network

Erstelle network mit Name `nextcloud-net`

```bash
sudo docker network create --driver bridge nextcloud-net
```

#### 3. Datenbank einrichten

Starte die Datenbank und füge das Passwort ein.

username: `postgres`

```bash
sudo docker run --name postgres -e POSTGRES_PASSWORD=123456 --network nextcloud-net -d postgres
```
#### 4. Starte Nextxloud container

```bash
sudo docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```
#### 5. Lage nextcloud über den Browser

Installiere und einstelle nextcloud über den Browser
```diff 
- red color
```

Überprüfe die ` ~\pi\nextcloud\ ` Dir, ob die nextcloud Settingsdateien da sind und trage das domain in der `config.php` Datei ein.

Aktiviere den externen Speicher

`User/Apps/Deaktierte` Apps klicke auf aktivieren

#### 6. External Speicher einstellen

#### Wie mounte ich ein Usb als Container

`-v /media/usbdrive:/data`: This mounts the host directory /media/usbdrive to the container directory /data. This is typically used to persist data outside the container, ensuring data is not lost when the container is stopped or removed.

`--network nextcloud-net`: This connects the container to the Docker network named "nextcloud-net". Using a custom network can be useful for managing communications between containers.

`-v /home/pi/nextcloud:/var/www/html`: This mounts the host directory /home/pi/nextcloud to the container directory /var/www/html. This is where Nextcloud's web files are located, allowing for custom configurations or persistence of these files.

* Inside the container: /var/www/html/config/config.php
* On the host machine (with your volume mount): /home/pi/nextcloud/config/config.php

You can edit this config.php file on your host machine at the specified location to configure various settings for your Nextcloud instance.

`nextcloud`: This is the name of the Docker image from which the container will be created. Docker will download this image from Docker Hub if it is not already present on the host.

## Speichermedien vorbereiten (USB als Datenbank)

#### 1. Mit dem Befehl lsblk werden Ihnen angeschlossene Datenträger angezeigt:

```bash
sudo lsblk
```

#### 2. Umount `sba` `sda(x)`. Der Specher darf nicht gemount werden.

Unmount issues: If permissions aren't applying, unmount and remount the drive:
```bash
sudo umount /media/?_external_drive
```

```bash
umount sda
```

#### 3. Install ntfs-3g and e2fsprogs (if they are not already installed):

```bash
sudo apt-get update
sudo apt-get install ntfs-3g e2fsprogs
```
#### 4. Format the USB Drive to EXT4:
```bash
sudo mkfs.ext4 /dev/sda1
```
This command will format the entire partition as EXT4. If you want to format the whole drive and not just a partition, use /dev/sda (without a partition number), but be careful as this will erase everything on that drive.

#### 5. Erstelle mount point:

```bash
sudo mkdir /mnt/usb
```

#### 6. Mount the USB Drive:

```bash
sudo mount /dev/sda1 /mnt/usb
```
[Video](https://www.youtube.com/watch?v=7qAbG20H9ug&ab_channel=PcMac)

### Automate Mounting on Boot

#### 1. Ensure fstab is Correct:

Double-check your /etc/fstab file for syntax errors or incorrect entries:

1. Create Mount Point (check if the folder was created):

```bash
sudo mkdir -p /mnt/usb
```

```diff 
- for nextcloud use /media/name_of_your_extern_drive
```

2. Open the fstab file and edit the file:
   
```bash
sudo nano /etc/fstab
```

3. Add an entry for your USB drive. you can add direct the path instead of the `UUID`, for example:

```text
/dev/sda1 /mnt/usb ext4 defaults,nofail 0 0
```

4. Test the configuration:

```bash
sudo mount -a
```

5. Verify the Mount: Check if the usb is mounted by running:

```bash
sudo df -h
```

you should see `/mnt/usb` listed.

#### 2. Reload Systemd Daemon:

After editing fstab, run:

```bash
sudo systemctl daemon-reload
```

#### 3. Test the Mount:

Try mounting again:

```bash
sudo mount -a
```
#### 4. Verify:

Check if it’s mounted:

```bash
sudo df -h
```

```text
sudo df -h
Filesystem      Size  Used Avail Use% Mounted on
. . .
/dev/sda1        26G   28K   25G   1% /media/usbdrive
```
#### 5. Manually Mount the Drive

```bash
sudo mount /dev/sd1 /media/usbdrive
```
Replace `/dev/sd1` with the appropriate device identifier found using `lsblk` or `blkid`.

##### 6. Reboot

```bash
sudo reboot
```
##### 7- Summary of Commansds

```bash
sudo blkid
lsblk
sudo mount /dev/sd1 /media/usbdrive
sudo dmesg | grep -i mount
sudo mkdir -p /media/usbdrive
sudo systemctl daemon-reload
sudo mount -a
sudo df -h
```

### Edit the config file:

```bash
sudo nano /home/pi/nextcloud/config/config.php
```

```text 
'trusted_domains' =>
array (
  0 => 'localhost',
  1 => 'domain-name.com ohne http schreiben'
),
```

#### Überprüfe `config.php`, ob aktualiziert wurde

docker <container_name> /path_to_config_file_in_container /local_path

```bash
sudo docker cp nextcloud: /var/www/html/config/config.php /home/copy_config.php
```

Lösche die Datei 

```bash
sudo rm file_name
```

#### Copy the File from the Container to Your Host and check the changes

```bash
sudo docker cp nextcloud:/var/www/html/config/config.php /tmp/config.php
```

#### Die weitere Befehle:
```bash
sudo mkfs.ext4 /dev/sda1
```
Erstelle mout Punkt z.B. `/media/usbdrive`

```bash
sudo mkdir /media/usbdrive
```

```bash
sudo mount /dev/sda1 /media/usbdrive
```

```bash
sudo chown -R www-data:www-data /media/usbdrive
```

Set Permissions:

```bash
sudo chmod -R 750 /media/usbdrive
```

* 7 (rwx): Full permissions for the owner (www-data).
* 7 (rwx): Full permissions for the group (www-data).
* 0 (---): No permissions for others.

Zugriff Check:

```bash
sudo -u www-data ls /media/
```

## Remove container

Zuerst deinstalliere den Kontainer und dann das network. 

```bash
sudo docker stop nextcloud && sudo docker rm nextcloud
```

## Remove network

Zeige alle networks:

```bash
sudo docker network ls
```

```bash
docker network rm my-network
```

## Reboot raspberry pi. Start postgres und nextcloud

```bash
sudo docker start postgres
```

```bash
sudo docker start nextcloud
```
## Open bash into container `nextcloud`:

```bash
sudo docker exec -it nextcloud bash
```
## Path to the `config.php` file

`/var/wwww/html/config`

## Update/Preparing the `config.php` file in docker container

If your /home/pi/nextcloud directory is empty, it means that the initial setup and configuration files for Nextcloud have not been copied or created in that directory yet. This can happen if the Nextcloud container hasn't completed its setup process, or if there's an issue with the volume mounting.

Here are the steps to troubleshoot and ensure the Nextcloud configuration files are correctly created:

#### 1. Check Container Logs:
Ensure the Nextcloud container is running and check its logs to see if there are any errors during the setup process. You can do this with the following command:

```bash
sudo docker logs nextcloud
```

#### 2. Access the Docker Container:

* First get the container ID or name using:

```bash
sudo docker ps
```

* Second, access the container's shell:
  
```bash
sudo docker exec -it nextcloud /bin/bash
```

* Now, inside the container, navigate to the /var/www/html/config directory to see if config.php exists:

```bash
cd /var/www/html/config
ls
```

#### 3. Verify Volume Mounts:
Ensure that the volumes are correctly mounted. The command you used should map the container's /var/www/html directory to /home/pi/nextcloud on the host. If this mapping isn't working, the directory will remain empty. Check the volume mounts with:

```bash
sudo docker inspect nextcloud
```

Look for the Mounts section in the output to verify the source and destination paths.

#### 4. Restart the Container:
Sometimes, simply restarting the container can resolve initial setup issues. You can restart the container with:

```bash
sudo docker restart nextcloud
```

#### 5. Permissions:
Ensure that the user running the Docker daemon has read and write permissions for the /home/pi/nextcloud directory. You can change the permissions with:

```bash
sudo chown -R $(whoami):$(whoami) /home/pi/nextcloud
sudo chmod -R 755 /home/pi/nextcloud
```

#### Next Steps

If after these steps the directory is still empty, consider removing the container and starting fresh:

#### 1. Stop and Remove the Container:

```bash
sudo docker stop nextcloud
sudo docker rm nextcloud
```

#### 2. Remove Existing Data:

Ensure the /home/pi/nextcloud directory is empty or backed up before starting a new container.

#### 3. Run the Container Again:

```bash
sudo docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```

After starting the container, access the Nextcloud web interface through http://<your_host_ip>:8080 to complete the setup. This should populate the /home/pi/nextcloud directory with the necessary configuration files, including config.php.

## Zeige die Logdatei

docker exec -it <containder_name_or_container_id> /bin/bash

```bash
docker exec -it nextcloud /bin/bash
```

navigiere zum Verzeichnis

```bash
cd /var/www/html/data
```

zeige die Logdatei in echter Zeit

```bash
tail -f nextxloud.log
```

```bash
sudo docker logs container_id
```

real time logging

```bash
sudo docker logs -f container_id
```
## Update Postgres & Nextcloud containers

1. Stop containers

```bash
sudo docker stop <container_name>
```

3. Update containers

* update postgres
  
```bash
sudo docker pull postgers
```

* update nextcloud

```bash
sudo docker pull nextcloud
```

Die beiden Befehlen werden die neue Version herunterladen. Deine Einstellungen werden beibehalten.
Nach dem Update von beinden Kontainers starte sie wieder.

* check version

```bash
sudo docker exec <container_name_or_id> grep 'OC_VersionString' /var/www/html/version.php
```
## Play mp4 files

Öffne im Docker nextcloud package

```bash
docker exec -it <nextcloud_container_name> /bin/bash
```

#### Installiere `ffmpeg`
```bash
apt update && apt install -y ffmpeg
```

####  Verifiziere die instalieren Codes:

```bash
apk add ffmpeg
```

Wenn es immer noch nicht fuktioniert, lade das Video herunter. 

## enable/install cron

1. Check the OS Release Information

```bash
sudo docker exec -it <container_name> /bin/sh
```

2. Check the OS Release File

```bash
cat /etc/os-release
```

+ If the output includes entries like ID=debian or ID=ubuntu, then it’s Debian/Ubuntu-based.
* If you see ID=alpine, then it’s Alpine-based.

* for debian or ubuntu-based container:

```bash
sudo apt update && apt install -y cron
```

* for alpine-based container:

```bash
sudo apk update && apk add cron
```
  

