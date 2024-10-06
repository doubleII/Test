## Table of content
* Wie verbindet man `Nginx Proxy Manager` mit `nextcloud` auf raspberry pi


## Wie verbindet man `Nginx Proxy Manager` mit `nextcloud` auf rasperry pi.

Du brauchst dafür zwei Raspbery pi, einen für `Nginx` und einen für `Nextcloud`. Um `nginx` Server mit `nextcloud` Server zu verbinden, muss das `domain` mit dem `Nginx` Server verknüpft werden.

#### Grundlegendes zum Setup:
* Nginx Proxy Manager ist so eingerichtet, dass Anfragen über Port `443` (HTTPS) akzeptieren kann:
* Der Proxy leitet Anfragen an ihren Nextcloud-Instanze über Port(z.B. 8080) weiter.

### IONOS Domain: vergehensweise
* Domain registrieren
* SSL Zertifikat erstellen
  * private-key.key
  * ssl_certificat.cer
  * ssl_certificate_INTERMEDIATE.cer

* Installiere `Nginx` auf Docker Kontainer auf dem Raspberry Pi 1
* Installiere `Nextcloud` auf Docker Kontainer  auf dem Raspberry Pi 2
* Das Domain muss mit dem Raspery Pi 1 IP verknüpft werden. Der Nginx Server ist der Proxy Server and die Browser abfragen zum `Nextcloud` Server gehen über ihn.

Browser Abfrage -> Nginx Proxy Server (PORT 433) -> (PORT XXXX HTTP in Nginx Proxy Manager)

```diff
- Sehr wichtig, verküpfe das domain nicht mit dem Nextcloud
```

### Step 1: Configuriere Nginx Proxy Manager
* Öffne Nginx Proxy Manager Web Page `Proxy Host`
* Füge die Host Settings ein:
  Z.B.:
  * Domain name `my-domain.de`
  * Schema `http` es ist wichtig
  * IP Adresse (heir trage die Nextcloud IP Adresse ein)
  * Port (hier trage den Nextcloud Port ein)
  * SSL Certificates wähle `add ssl certificate` -> `custom` und trage (private_key.key, certificate.cer and ssl_certificate_INTERMEDIATE.cer) ein.
### Step 2: Domain in der `hosts` eintrage

Füge das Domain in der `/etc/hosts` Datei die Verklüpfung domain - ip Adresse ein.

### Step 3: Test

#### Überprüfe das Netzwerk:

```bash
nslookup <my_domain.de>
```

Ersetze sie mit deinem IP Adresse und Port Nr.: 

#### Test direkt lokaler Zugriff:

```bash
http://xxx.xxx.xxx.xx:8080/login ## http://ip:port/login
```

#### curl

```
curl -I https://my_domain.de/login
```

### Step 4: Checke Nginx logs

#### In Echtzeit

```bash
sudo docker logs -f <nginx-proxy-manager-container-name>

```

## END

Ganzwichtig, du brauchst nicht die Konfig-Dataein zu ändern. Du machst alles über die Proxy Manager Web Interface.
