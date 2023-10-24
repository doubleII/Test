# chocolatey commands

## Table of content
* Commands

## Commands

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

`-y` - yes, confirm all prompts

`-s` - install sidy by side multiple version of packages


```bash
install choco <package-name> . -y --version <desired paket-version>
```

The `.` specifies the current directory as the source for the package.

The flag `-y` confirm automaticaly any prompts during the installation.

Upgrade to desired version 10.0.0

```bash
upgrade <package-name> --version 10.0.0
```

```bash
uninstall <package-name> . -y
```

Uninstall desired version 10.0.0

```bash
uninstall <package-name> . -y --version 10.0.0
```
