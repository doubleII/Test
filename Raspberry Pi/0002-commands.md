## Config

Open the raspberry configuration tool.

```bash
raspi-config
```

The `dmesg` command is used to write kernel message to standard output

```bash
sudo dmesg -T
```

```bash 
sudo dmesg -help | more
```

Show only emergency messages

```bash
sudo dmesg -Tl emerg
```

Show all log files

```bash
ls -l /var/log/
```

Read some file 
The command `cat` is usung to view some file (read all line)

```bash 
cat /var/log/filename/
```

Keep open selected file

```bash
tail -f /var/log/filename/
```

`man` commands

Betriebsanleitung

```bash
man sudo
```

usb util

```bash 
sudo apt-get install usbutil
```

web camera 
```bash
sudo apt-get install fswebcam
```

update & upgrade

```bash
sudo apt-get update -y && sudo apt-get upgrade -y
```

hostname

```bash
sudo hostname -I
```

print current directory

```bash
pwd
```

move a file into a directory or mover dir into another dir

```bash
sudo mv index.html website/
```

```bash
sudo mv old_dir/ new_dir/
```

[link to another commands](https://www.codecademy.com/learn/learn-raspberry-pi/modules/raspberry-pi-command-line-module/cheatsheet)
