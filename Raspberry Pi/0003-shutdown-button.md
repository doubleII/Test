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


Default GPIO Pin: GPIO pin 3 (physical pin 5) is used for the shutdown function.
Button Configuration: You need to connect a momentary push-button switch between GPIO pin 3 and ground (physical pins 5 and 6 on the GPIO header, respectively).
