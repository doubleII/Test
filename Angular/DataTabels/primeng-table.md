## Table of content
* Install PrimeNG V-10.1.3 lts
## Add prime packages

In this example used primeng `10.1.3` and primeicon `` </br>
lts (long time supported) </br>
```bash
npm install primeng-lts@10.1.3 --save
```

```bash
npm install primeicons --save
```

install angualr cdk (component dev kid)
```bash
npm install @angular/cdk --save
```

```json
{ 
      "compilerOptions": {
          //...other options
          "paths": {
              "primeng/*": ["node_modules/primeng-lts/*"]
          }
      }
   ...,
}
```

## Fake REST API

https://jsonplaceholder.typicode.com/todos/

## Create service

## Create model

## Add HttpClientModel into `app.modules.ts`

`import { HttpClientModule } from '@angular/common/http';`

imports:[</br>
....,</br>
`HttpClientModule` </br>
]

