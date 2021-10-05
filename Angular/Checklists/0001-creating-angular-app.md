# Creating an Angular App

## Introduction

**Before you start**, make sure to have the [prerequisites](0010-prerequisites.md) for this course installed.

This checklist contains *typical* steps to perform when creating a new Angular app for this course.

**Note** that you might need to change some of the command line arguments according to the needs of the sample you are working on (e.g. when you are learning how to write automated tests). For that, the checklist contains links to the documentation of the involved CLIs.

## Create an Application with routing enabled and scss style

1. Create Angular workspace with an initial project using [`ng new`](https://angular.io/cli/new):

   ```bash
   ng new <app-name> --skip-git --skip-tests --strict --style scss --routing
   ```
The flag `--strict` enalbes some additional type checking and safety features into tsjson.config file. 
``` json
{
   ...,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
   ...,
   ,
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
   ...,
}
```
and into angular.json
```json
{
   ...,
    "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
   ...,
}
```
2. Change directory into your new workspace: `cd <app-name>`

3. Delete auto-generated demo code in *app.component.html*

## Add Linter

1. Add [*ESLint*](https://eslint.org/) using [`ng add`](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-v12-and-later):

   ```bash
   ng add @angular-eslint/schematics --skip-confirmation
   ```

2. Add [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint#readme):

   ```bash
   npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```

   Next, find the */overrides/extends* section in *.eslintrc.json* and add two lines regarding TypeScript linting. The following code snippets shows how it should look like *after* your change:

   ```json
   {
        ...,
        "overrides": [
            ...,
            "extends": [
                "plugin:@angular-eslint/recommended",
                "plugin:@angular-eslint/template/process-inline-templates",
                "eslint:recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            ...
        ],
        ...
   }
   ```

## Add Angular Material

1. Add [*Angular Material*](https://material.angular.io/) using [`ng add`](https://material.angular.io/guide/getting-started). You can choose any color scheme you like. Choose *yes* for all other questions.

    ```bash
    ng add @angular/material --skip-confirmation
    ```

2. For building responsive designs, we add [*Angular Flex Layout*](https://github.com/angular/flex-layout):

    ```bash
    npm install --save-dev @angular/flex-layout
    ```

3. Import `FlexLayoutModule` in *app.module.ts*
import { FlexLayoutModule } from '@angular/flex-layout';

```bash
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
 ## Or add Bootstrap
 link: https://angular.de/artikel/angular-bootstrap-scss-angular-cli/
 
 ##
 Finally try the following steps to ensure that your app works properly:

| Step                                     | Command         |
| ---------------------------------------- | --------------- |
| Run linter (quality check for your code) | `npm run lint`  |
| Build your app                           | `npm run build` |
| Start debugging your app                 | `npm start`     |
    
## Update package.json
To separate debugging and production build change the package.json file.

```json
{
...,
    "build": "ng build",
    "build-prod": "ng build --prod",
    "watch": "ng build --watch --configuration development",
....
}
```
 ##
 Copied from Rainer Stropek
 link: https://github.com/rstropek/htl-leo-pro-5/tree/master/checklists
 
 Time of last update 01.10.2021 by doubleII
 
