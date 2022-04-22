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
