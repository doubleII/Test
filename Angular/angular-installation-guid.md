## Table of Contents
* install mvn
* install node.js
* install angular


## Install Node Version Manager MVN

[mvn-github](https://github.com/nvm-sh/nvm)

1. Install mvn

2. Check the installaion

```bash
nvm -v
```

## Install node js

Install specific node js version:

Show available node js versions

```bash
run nvm list available
```

example:

```bash
$ install 14.17.6
...
Installation complete. If you want to use this version, type

nvm use 14.17.6

$ nvm use 14.17.6
Now using node v14.17.6 (x64-bit)
$ node -v
v14.17.6
```

## Install Angular

Install specifc angular cli version `global`

```bash
npm install -g @angular/@cli6.2.9
...
ng version
...
```

## Visual Studio

**Error**
```code
PS C:\Development> ng -v
ng : File C:\Program Files\nodejs\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at 
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ ng -v
+ ~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess

```

**Step 1**

First, you have to need to open the command prompt and run this command. Visual Studio Terminal

```bash
set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
```

**Step 2**

Now you have to run the second command on your Visual Studio. This command is:

```bash
set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
```

**Step 3**

To view their policy, you need to run this command in your (VS Terminal) command prompt:

```bash
Get-ExecutionPolicy -list
```

```
output:

Scope ExecutionPolicy
----- ---------------

MachinePolicy Undefined
UserPolicy Undefined
Process Undefined
CurrentUser RemoteSigned
LocalMachine Undefined
CurrentUser RemoteSigned
LocalMachine Undefined
```

```bash
$ ng -v
```

```
PS C:\Development\DefaultCollection\Rheinland-Pfalz\Web Applications\Common\WebChronologie\ui\ui-webchronologie> ng -v

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/


Angular CLI: 6.2.9
Node: 14.17.6
OS: win32 x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.8.9
@angular-devkit/build-angular     0.8.9
@angular-devkit/build-optimizer   0.8.9
@angular-devkit/build-webpack     0.8.9
@angular-devkit/core              0.8.9
@angular-devkit/schematics        0.8.9
@angular/cli                      6.2.9
@ngtools/webpack                  6.2.9
@schematics/angular               0.8.9
@schematics/update                0.8.9
rxjs                              6.2.2
typescript                        2.9.2
webpack                           4.16.4
```

This can you use on your system to if you have the same problem after the angular installation.
