## Table of content
* Install bootstrpa & jquery
* Uninstall bootstrap & jquery

## Install

1. Install bootstrap & jquery using `nmp`.

Add Bootstrap `verson 3` and jquery.

```bash
npm install bootstrap@3 jquery --save
```
2. Add the dependencies into `angular.js`.

```json
{
  ...,
  
  "style":[
    ...,
      "node_modules/bootstrap/dist/css/bootstrap.css"
  ],
  "script": [
    ...,
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.js"
  ]
  ...,
}
```
2. Icons Bootstrap 3

link: https://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp


## Uninstall

Uninstall bootstrap & jquery using `nmp`.

```bash
npm uninstall bootstrap@3 jquery --save
```
