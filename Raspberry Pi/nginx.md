## Table of content
* Link Nginx
* Install ngix using docker container

## Link Nginx

[link](https://nginxproxymanager.com/guide/#hosting-your-home-network)

## Install ngix using docker container

Die Datei findest du unter `/home/npm/`

```bash
mkdir npm
```

config.json

```bash
nano config.json
```

```json
{
  "database": {
    "engine": "mysql",
    "host": "db",
    "name": "npm",
    "user": "npm",
    "password": "npm",
    "port": 3306
  }
}
```

docker-compose.yml

```bash
sudo nano docker-compose.yml
```

```yml
# version: '3' # obsolated
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    ports:
      - '80:80' # Mapping to Port 80 inside the container. HTTP Traffic change the port to example 73:80 (user_port_change:server) if used 
      - '81:81' # Dashboard Port | Proxy Manager Web admin Interface
      - '443:443' # HTTPS Traffic
    volumes:
      - ./config.json:/app/config/production.json
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
      # -  /etc/nginx/nginx.conf:/etc/nginx/nginx.conf
      # -  /etc/nginx/config.d/site.conf:/etc/nginx/conf.d/site.conf
      # -  /etc/nginx/ssl/certs:/etc/nginx/ssl
  db:
    image: 'jc21/mariadb-aria:latest'
    environment:
      MYSQL_ROOT_PASSWORD: 'npm'
      MYSQL_DATABASE: 'npm'
      MYSQL_USER: 'npm'
      MYSQL_PASSWORD: 'npm'
    volumes:
      - ./data/mysql:/var/lib/mysql
  ```

In dem `npm` Verzeichnis 

```bash
sudo docker compose up -d
```

```bash
sudo docker update --restart always npm-app-1
```

```bash
sudo docker update --restart always npm-db-1
```

```bash
sudo docker start npm-app-1
```

```bash
sudo docker start npm-db-1
```

`
http://serverip:80/
`

Nginx Proxy Manager UI

`
http://serverip:81/
`

open bash into container `npm-app-1`:

```bash
sudo docker exec -it npm-app-1 bash
```
## Logs

* show nginx logs in real time

```bash
sudo docker logs -f <container_id or name>
```

```bash
tail -f letsencrypt.log
```

* read file direct in docker container:

open container `npm-app-1` container name

 ```bash
sudo docker exec -it npm-app-1 /bin/bash
```

```bash
cat <file_name>
```

### nginx proxy manager

[NginX Proxy Host Page 1](https://i.postimg.cc/2yM9y23P/proxy-host.png)

[NginX Proxy Host Page 2](https://i.postimg.cc/zB1gzWJ0/proxy-host-2.png)


## EXTRA THIS IS NOT NECESSARY : Mount Configuration Files

open container `npm-app-1` container name

 ```bash
sudo docker exec -it npm-app-1 /bin/bash
```

#### copy to local dir

```bash
sudo docker cp npm-app-1:/etc/nginx/nginx.conf /etc/nginx/nginx.conf
 ```

```bash
sudo docker cp npm-app-1:/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
```

```bash
sudo docker cp npm-app-1:/etc/nginx/ssl/certs /etc/nginx/ssl
```

#### copy local dir into container

```bash
sudo docker cp /etc/nginx/sites-available npm-app-1:/etc/nginx/
```

```bash
sudo docker cp /etc/nginx/sites-enabled npm-app-1:/etc/nginx/
```

## Reload Configuration Files

```bash
sudo docker exec <container_name> nginx -s reload
```

## Umleitung HTTP in HTTPS

* erstelle zwei neue Ordner unter `/etc/nginx/` lokal in raspberry pi

`sites-available` und `seites-enabled`

* füge die includes in `nginx.config` Datei ganz unten unter `# Custom `

```bash
include /etc/nginx/sites-enabled/*;
```

```bash
include /etc/nginx/sites-available/*;
```

## Setup the DNS 

* show nginx logs in real time

```bash
sudo docker logs -f <container_id or name>
```

* show letsenscrypt logs in real time

aus dem Kontainer:

```bash
sudo docker exec -it <container_name> /bin/bash
```

Pfad:

```bash
cd /tmp/letsencrypt-log/
```

```bash
tail -f letsencrypt.log
```

* read file direct in docker container:
```bash
cat <file_name>
```

### nginx proxy manager

[NginX Proxy Host Page 1](https://i.postimg.cc/2yM9y23P/proxy-host.png)

[NginX Proxy Host Page 2](https://i.postimg.cc/zB1gzWJ0/proxy-host-2.png)

## Domain

Wenn du ein Zerifikat erstellst, kriegst du den private key. Wenn du ihn nicht hast musst du ein neues generieren um den private key herunterladen zu können.

* Lade `ssl_certificate.cer` und `ssl_certificate_INTERMEDIATE.cer` Dateien aus der IONOS Seite herunter.
* kopiere die in raspberry pi unter `/temp/` combiniere die beiden `.cer` Dateien und speichere sie, die neue `combined.crt` und `private_key.key` Dataien und `/ect/nginx/ssl/`.
* ändere die `default.conf` Datei unter `sites-available` und kopiere sie aktualisiere den Kontaiener.
* starte nginx neu.


