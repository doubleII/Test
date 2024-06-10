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

## NextCloud Documentation

[link](https://help.nextcloud.com/t/menu-configuration-reference-for-backups-config-networking-security-system-tools-updates/126011)

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

## Speichermedien vorbereiten (USB als Datenbank)

1. Mit dem Befehl lsblk werden Ihnen angeschlossene Datenträger angezeigt:

```bash
sudo lsblk
```

2. Umount `sba` `sda(x)`. Der Specher darf nicht gemount werden.

```bash
umount sda
```

3. Mit parted wird nun die USB-Festplatte formatiert und partitioniert. Es ist standardmäßig auf dem Raspberry Pi OS installiert:

```bash
sudo parted /dev/sda
```
4. Der Befehl print zeigt vorhandene Partitionen an. Mit dem Befehl rm werden diese gelöscht. Gegebenenfalls muss der rm Befehl für alle vorhandenen Partitionen durchgeführt werden.
```bash
sudo rm 1
```

5. Auf der Festplatte soll nun eine neue Partitionstabelle erstellt werden.

Erstelle `GUID Partition Table` ist standard for the layout of partition tables of a physical computer storage device, such as a hard disk drive or solid-state drive, using universally unique identifiers (UUIDs).

```bash
sudo mklabel gpt
```
6. Da die Festplatte nun leer ist, muss eine Partition erstellt werden. Weil es sich um ein Linux-System handelt, ist das Dateisystem ext4 zu empfehlen.

```bash
mkpart primary ext4
```
Fortmattiede und lösche alle Daten in der Festplatte z.B. wenn sie als sb1 angeschloßen angezeigt wird. Als Start der Partition sollte 2 MB gewählt werden, als Ende die maximale Größe der USB-Festplatte.

Gib `Start` 2M, `End`  der Speicherkapazität z.B. 30GB

7. Mit dem Befehl `print` kann geprüft werden, ob alles funktioniert hat

```bash
print
```

8. Quit

```bash
quit
```
[link](https://lehrerfortbildung-bw.de/st_digital/medienwerkstatt/internet/pi-cloud/02_hdd_vorbereiten/)

9. Die weitere Befehle:
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

## Reboot raspberry pi. Start postgres und nextcloud

```bash
sudo docker start postgres
```

```bash
sudo docker start nextcloud
```

