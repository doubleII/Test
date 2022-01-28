## Table of content
* Creating an Angular App
* Introduction
* Create an Application with routing enabled and scss style
* Add Linter
* Add Angualr material
* Or add Bootstrap
* Update package.json
* Project structure best practices
* Connect to the rest-api


## Creating an Angular App

## Introduction

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
 ## Or add Bootstrap and JQuery
 
 This command installs both bootstrap3 and jquery.
 
 1. Install bootstrap and jquery using `npm`.
 ```bash 
 npm install bootstrap@3 jquery --save
 ```
 
 if you want to install the last version of bootstrap dont define any version.
 
 ```bash
  npm install bootstrap jquery --save
 ```
 
2. After both packages have been installed successfully, check into node_module folder for: 

    * node_module/bootstrap/dist/css/bootstrap.min.css
    * node_module/jquery/dist/jquery.min.js
    * node_module/bootstrap/dist/js/bootstrap.min.js
  
3. Add the configuration into angular.js

```json
...,
  "styles": [
              ...,
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
   "scripts": [
     "node_modules/jquery/dist/jquery.min.js",
     "node_modules/bootstrap/dist/js/bootstrap.min.js"
   ]
...,
```

To install Bootstrap 4 look [here](https://angular.de/artikel/angular-bootstrap-scss-angular-cli/)
 
 ##
 Finally try the following steps to ensure that your app works properly:

| Step                                     | Command         |
| ---------------------------------------- | --------------- |
| Run linter (quality check for your code) | `npm run lint`  |
| Build your app                           | `npm run build` |
| Start debugging your app                 | `npm start`     |

## Add Bootswatch

If your application works fine and you use Bootstrap, you can install bootswatch to.

For this example is used bootstrapp version `5.1.3`. To check your installed version use:

After the bootstrapp package has been installed successufully, check into node_module folder for:
   * node_module/bootstrapp/scss

If this folder doesn't exist you need to install another bootstrap version, which include it.

```basch
npm view bootstrap version
```

1. Install bootswatch

```bash
npm install bootswatch
```

2. Add this configuration into style.scss

```bash
@import "~bootswatch/dist/[theme]/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/[theme]/bootswatch";
```

Be sure to import scss/bootstrap in between `-variables.scss` and select a bootswatch theme.

For more information see the [npm web page](https://www.npmjs.com/package/bootswatch)

3. Open `angular.js` find the styles and remove the `bootstrap.min.css` style:

```bash
  "styles": [
              ...,
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
```

For more information abot bootswatch open the [Bootswatch page](https://bootswatch.com/)


## Update package.json
To separate debugging and production build change the package.json file.

```json
{
...,
    "build": "ng build",
    "build-base": "ng build --base-href /your-wwwroot-folder-name/",
    "build-prod": "ng build --prod",
    "build-prod-base": "ng build --base-href /your-wwwroot-folder-name/",
    "watch": "ng build --watch --configuration development",
....
}
```

## Connect to the rest-api

1. Solution. 
   * Create in Visual Studio Web-Api Project.
   * Install `Microsoft.AspNet.WebApi.Cors` Nuget package.
   * Open `WebApiConfig.cs` and passt into the `Register`the following code:
```
EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
```
If you want to allow acces for all websites, header and method, then incloud asterisks between the brackets. </br>
For request without credentials the asterisk can be specified as wildcard. Asterisk tells browsers to allow requesting code from any web site `origin` to access the resource. </br>
For more information open [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)

It should looks something like this:
```c#
 public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
        }
```

2. Solution

If this guy above doesn't work, you can do following. Remove this code from `WebApiConfig.cs`, open the `Global.asax.cs` and put this guy into the file.
<br/>Your file schould looks something like this.

```c#
 public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

        protected void Application_BeginRequest()
        {
            var currentRequest = HttpContext.Current.Request;
            var currentResponse = HttpContext.Current.Response;

            string currentOriginValue = string.Empty;
            //string currentHostValue = string.Empty;

            var currentRequestOrigin = currentRequest.Headers["Origin"];
            //var currentRequestHost = currentRequest.Headers["Host"];

            var currentRequestHeaders = currentRequest.Headers["Access-Control-Request-Headers"];
            var currentRequestMethod = currentRequest.Headers["Access-Control-Request-Method"];

            if (currentRequestOrigin != null)
            {
                currentOriginValue = currentRequestOrigin;
            }

            currentResponse.AppendHeader("Access-Control-Allow-Origin", currentOriginValue);

            foreach (var key in Request.Headers.AllKeys)
            {
                if (key == "Origin" && Request.HttpMethod == "OPTIONS")
                {
                    currentResponse.AppendHeader("Access-Control-Allow-Credentials", "true");
                    currentResponse.AppendHeader("Access-Control-Allow-Headers", currentRequestHeaders);
                    currentResponse.AppendHeader("Access-Control-Allow-Methods", currentRequestMethod);
                    currentResponse.StatusCode = 200;
                    currentResponse.End();
                }
            }
        }
    }
```
 ##
 Time of last update 19.11.2021
 
