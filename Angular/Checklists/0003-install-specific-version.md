## Table of content
* Last version
* Specific version localy
* 
## Install Angular last version

This version is installed into `%AppData%\npm` </br>
`-g` means globaly.

Install globally
```bash
npm install -g @angular/cli
```
Install locally
```bash
npm install @angular/cli
```
## Install Angular specific version
Install specific version of angular CLI into particular folder.

these versions are current as of May 18th 2021 
info from https://www.npmjs.com/package/@angular/cli -> Versions

### Angular 2: looks like this is the last RC version before switching to angular 4 
```bash 
npx -p @angular/cli@1.0.0-rc.2 ng new angular-2-app
```

### Angular 4: the last CLI version before Angular 5
```bash
npx -p @angular/cli@1.4.10 ng new angular4app
```

### Angular 5: the last CLI version before Angular 6
```bash
npx -p @angular/cli@1.7.4 ng new angular5app
```

### Angular 6: CLI version 6 (lts)
```bash
npx -p @angular/cli@6.2.9 ng new angular6app 
```

if not work you can use </br> 
```bash
npx -p @angular/cli@6.2.x ng new angular6app 
```
or you can define only the version `6.x`. It applies to all versions.

more specific </br> 
```bash
npx -p @angular/cli@6 new angular6app --skip-git --skip-tests --strict --style scss --routing
```

### Angular 7:CLI version 7 (lts)
```bash
npx -p @angular/cli@7.3.10 ng new angular7app 
```

### Angular 8: CLI version 8 (lts)
```bash
npx -p @angular/cli@8.3.29 ng new angular8app 
```

### Angular 9: CLI version 9 (lts)
```bash
npx -p @angular/cli@9.1.15 ng new angular9app
```

### Angular 10: CLI version 10 (lts)
```bash
npx -p @angular/cli@10.2.3 ng new angular10app
```

### Angular 11: CLI version 11 (lts)
```bash
npx -p @angular/cli@11.2.13 ng new angular11app
```

### Angular 12: current
```bash
npx -p @angular/cli@12.0.0 ng new angular12app
```
