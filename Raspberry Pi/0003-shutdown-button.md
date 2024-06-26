## Table of content
* shutdown button

## Shutdown button

Open the config file:

```bash
sudo nano /boot/firmware/config.txt
```

Find the section Additional overlays and parameters are documented ...

add following entry `dtoverlay=gpio-shutdown`


`Additional overlays and parameters are documented` <br>
`/boot/firmware/overlays/README` <br>
`dtoverlay=gpio-shutdown` 
