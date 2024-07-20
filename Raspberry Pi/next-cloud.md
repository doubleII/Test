## Table of content
* Tabelle
* Install Docker
* NextCloud Documentation
* Install postgres & next-cloud
* Speichermedien vorbereiten (USB als Datenbank)
* Remove network
* Remove container
* Installationsvideo
* Reboot raspberry pi. Start postgres und nextcloud
* Update/Preparing the config.php file in docker container

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

| postgres    | Second Header |
| ------------- | ------------- |
| username      |      -        |
| passwort      |      -        |
| db-hostname   |      -        |



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

## NextCloud

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

Überprüfe die `~\pi\nextcloud\ ` Dir, ob die nextcloud Settingsdateien da sind und trage das domain in der `config.php` Datei ein.

Aktiviere den externen Speicher

`User/Apps/Deaktierte` Apps klicke auf aktivieren

#### 6. External Speicher einstellen

#### Wie mounte ich ein Usb als Container

`-v /mediausbdrive:/data`: This mounts the host directory /media/usbdrive to the container directory /data. This is typically used to persist data outside the container, ensuring data is not lost when the container is stopped or removed.

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

```bash
umount sda
```

#### 3. Mit parted wird nun die USB-Festplatte formatiert und partitioniert. Es ist standardmäßig auf dem Raspberry Pi OS installiert:

```bash
sudo parted /dev/sda
```
#### 4. Der Befehl print zeigt vorhandene Partitionen an. Mit dem Befehl rm werden diese gelöscht. Gegebenenfalls muss der rm Befehl für alle vorhandenen Partitionen durchgeführt werden.
```bash
sudo rm 1
```

#### 5. Auf der Festplatte soll nun eine neue Partitionstabelle erstellt werden.

Erstelle `GUID Partition Table` ist standard for the layout of partition tables of a physical computer storage device, such as a hard disk drive or solid-state drive, using universally unique identifiers (UUIDs).

```bash
sudo mklabel gpt
```
#### 6. Da die Festplatte nun leer ist, muss eine Partition erstellt werden. Weil es sich um ein Linux-System handelt, ist das Dateisystem ext4 zu empfehlen.

```bash
mkpart primary ext4
```
Fortmattiede und lösche alle Daten in der Festplatte z.B. wenn sie als sb1 angeschloßen angezeigt wird. Als Start der Partition sollte 2 MB gewählt werden, als Ende die maximale Größe der USB-Festplatte.

Gib `Start` 2M, `End`  der Speicherkapazität z.B. 30GB

#### 7. Mit dem Befehl `print` kann geprüft werden, ob alles funktioniert hat

```bash
print
```

#### 8. Quit

```bash
quit
```
[link](https://lehrerfortbildung-bw.de/st_digital/medienwerkstatt/internet/pi-cloud/02_hdd_vorbereiten/)

#### 9. Die weitere Befehle:
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

Direkt Zugriff Check:

```bash
sudo -u www-data ls /media/usbdrive
```

## Remove network

Zuerst deinstalliere den Kontainer und dann das network. Zeige alle networks:

```bash
sudo docker network ls
```

## Remove container

```bash
sudo docker stop nextcloud && sudo docker rm nextcloud
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
