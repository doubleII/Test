## Table of content
* Create new Project
* Install ag-grid
* Add Linter
* Build and start the project
## Create Project

1. Create Angular workspace with an initial project using [`ng new`](https://angular.io/cli/new):

   ```bash
   ng new <app-name> --skip-git --skip-tests --strict --style scss --routing
   ```
 ## Install ag-grid
 
1. Open the Project directory and install ag-grid.  
```bash
npm install --save ag-grid-community ag-grid-angular
```

In certain circumstances npm will perform an "auto prune". This step ensures all expected dependencies are | present</br>
```bash
npm install
```

## Add Linter

1. Add [*ESLint*](https://eslint.org/) using [`ng add`](https://github.com/angular-eslint/angular-eslint#quick-start-with-angular-v12-and-later):

   ```bash
   ng add @angular-eslint/schematics --skip-confirmation
   ```

2. Add [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint#readme):

   ```bash
   npm install --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
   ```
   
##
 Finally try the following steps to ensure that your app works properly:

| Step                                     | Command         |
| ---------------------------------------- | --------------- |
| Run linter (quality check for your code) | `npm run lint`  |
| Build your app                           | `npm run build` |
| Start debugging your app                 | `npm start`     |


