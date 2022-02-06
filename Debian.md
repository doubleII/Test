## Install debian

#### create bootalbe usb stick 
</br>download rufus
</br>link: https://rufus.ie/
</br>download debian
</br>link: https://www.debian.org/distrib/
</br> ftp ...
</br>create bootable usb and install debian

link: 

## Wichtige packages
CMD Befehle:

#### wenn admin password definiert wird
```bash 
su -
```

```bash 
usermod -aG sudo benutzername // 
```
#### else weiter hier
```bash 
sudo apt purge gnome-games xterm
```

```bash 
sudo apt autoremove --purge
```

```bash 
sudo apt-update && sudo apt dist-upgrade
```

```bash 
sudo apt install htop vim tlp timeshift firefox-esr-l10-de // package for snapshot
```

```bash 
sudo apt install flatpak gnome-software-plugin-flatpak
```

```bash 
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flat...​
```

show os-release version
```bash
cat /etc/os-release
```

https://backports.debian.org/Instructions/

deb http://deb.debian.org/debian​ buster-backports main in /etc/apt/sources.list einfügen.

```bash 
apt-get -t buster-backports install `package`
```
```bash 
sudo apt install arc-theme papirus-icon-theme
```

```bash
sudo apt install intel-microcode
```

```bash 
sudo apt install nvidia-detect
```

```bash 
sudo apt install nvidia-driver
```

```bash 
sudo apt install ttf-mscorefonts-installer rar unrar libavcodec-extra gstreamer1.0-libav gstreamer1.0-plugins-ugly gstreamer1.0-vaapi
```

## Sonstiges
#### Debian 10 installieren und einrichten crash course
tutorial: https://www.youtube.com/watch?v=22hMhVnuylo&t=990s
#### vbox fullscreen. Mehr Info in OneNote 
tutorial: https://www.youtube.com/watch?v=WiYNrx1Grak&t=288s&ab_channel=OSPY

```bash
go to /media //folder
```

```bash
sudo mkdir cdrom1
```

```bash
sudo mount /dev/cdrom /media/cdrom1
```
