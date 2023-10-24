# chocolatey commands

## Table of content
* Commands, options, flags

## Commands, options, flags

**choco help info**

```bash
choco --help
```

**create choco package**

```bash
choco pack
```

**install choco package**

```bash
choco install <package_name> [<options/switches>]
```

**options**

Options provide the additional configuraiton or customization for command being executed.

Switches, on the other hand are, boolean flags that toggle particulare behavior or enable/disable a feature. 

**flags**

`-y` - yes, confirm all prompts

`-s` --source 

```bash
choco install git --source https://somewhere/out/there
```

`-s .` - aktueller ordner wird als source definiert.

```bash
install choco <package-name> -s . -y --version <desired paket-version>
```

The `.` specifies the current directory as the source for the package.

The flag `-y` confirm automaticaly any prompts during the installation.

Upgrade to desired version 10.0.0

```bash
upgrade <package-name> -s . -y --version 10.0.0
```

```bash
uninstall <package-name> -s . -y
```

Uninstall desired version 10.0.0

```bash
uninstall <package-name> -s . -y --version 10.0.0
```


