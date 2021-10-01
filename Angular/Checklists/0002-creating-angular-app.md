## SCSS Folder Structure
1. Create a folder in your `src` project folder called `styles`.
2. Move your style.scss file into the newly creaged `styles` folder.
3. Update your `angular.json` file.

```json
{
...
   "styles": [
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles.scss"
            ],
...
}
```
to 

```json
{
...
   "styles": [
              "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "src/styles/styles.scss"
            ],
...
}
```
