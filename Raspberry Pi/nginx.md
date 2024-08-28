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
      - '80:80' #HTTP Traffic change the port to example 73:80 (user_port:server) if used 
      - '81:81' #Dashboard Port
      - '443:443' #HTTPS Traffic
    volumes:
      - ./config.json:/app/config/production.json
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
      -  /etc/nginx/nginx.conf:/etc/nginx/nginx.conf
      -  /etc/nginx/config.d/site.conf:/etc/nginx/conf.d/site.conf
      -  /etc/nginx/ssl/certs:/etc/nginx/ssl
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

Add the `private.key` file into `` 


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
## Mount Configuration Files


