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
Terminal Befehle:

#### wenn admin password definiert wird
</br> >$ su -
</br> >$ usermod -aG sudo benutzername // 
#### else weiter hier
</br> >$ sudo apt purge gnome-games xterm
</br> >$ sudo apt autoremove --purge

</br> $> sudo apt-update && sudo apt dist-upgrade
</br> >$ sudo apt install htop vim tlp timeshift firefox-esr-l10-de // package for snapshot

</b> >$ sudo apt install flatpak gnome-software-plugin-flatpak
</br> >$ flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flat...​

https://backports.debian.org/Instructions/
`deb http://deb.debian.org/debian​ buster-backports main` in `/etc/apt/sources.list` einfügen.
</br> >$ `apt-get -t buster-backports install `package`

</br> >$ sudo apt install arc-theme papirus-icon-theme

</br> >$ sudo apt install intel-microcode

</br> >$ sudo apt install nvidia-detect
</br> >$ sudo apt install nvidia-driver

</br> >$ sudo apt install ttf-mscorefonts-installer rar unrar libavcodec-extra gstreamer1.0-libav gstreamer1.0-plugins-ugly gstreamer1.0-vaapi

## Sonstiges
#### Debian 10 installieren und einrichten crash course
tutorial: https://www.youtube.com/watch?v=22hMhVnuylo&t=990s
#### vbox fullscreen. Mehr Info in OneNote 
tutorial: https://www.youtube.com/watch?v=WiYNrx1Grak&t=288s&ab_channel=OSPY
</br>go to /media //folder
</br> >$ sudo mkdir cdrom1
</br> >$ sudo mount /dev/cdrom /media/cdrom1
