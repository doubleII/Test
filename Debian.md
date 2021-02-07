## Install debian

#### create bootalbe usb stick 
</br>download rufus
</br>link: https://rufus.ie/
</br>download debian
</br>link: https://www.debian.org/distrib/
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

</br> >$ sudo apt install htop vim tlp timeshift firefox-esr-l10-de

</b> >$ sudo apt install flatpak gnome-software-plugin-flatpak
</br> >$ flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flat...​

https://backports.debian.org/Instruct...​
`deb http://deb.debian.org/debian​ buster-backports main` in `/etc/apt/sources.list` einfügen.
</br> >$ `apt-get -t buster-backports install `package`

</br> >$ sudo apt install arc-theme papirus-icon-theme

</br> >$ sudo apt install intel-microcode

</br> >$ sudo apt install nvidia-detect
</br> >$ sudo apt install nvidia-driver

</br> >$ sudo apt install ttf-mscorefonts-installer rar unrar libavcodec-extra gstreamer1.0-libav gstreamer1.0-plugins-ugly gstreamer1.0-vaapi

## Sonstiges
