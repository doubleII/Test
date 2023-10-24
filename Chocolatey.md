## Table of content
* Commands


## Commands

```bash
install choco <package-name> -s . -y --version <desired paket-version>
```

The `-s .` specifies the current directory as the source for the package.

The flag `-y` confirm automaticaly any prompts during the installation.

Upgrade to desired version 10.0.0

```bash
upgrade <package-name> --version 10.0.0
```


```bash
uninstall <package-name> -s . -y
```
