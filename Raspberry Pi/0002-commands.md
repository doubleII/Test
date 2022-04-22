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
