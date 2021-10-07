## Table of content
* Add prime packages
* Fake REST API
* Create service
* Create model
* Add HttpClientModel into `app.modules.ts`
* Create an component
* Add primeng table


## Add prime packages

1. Install PrimeNG V-10.1.3 lts
In this example used primeng `10.1.3`</br>
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

1. Add serviec using `ng`. 
```bash
ng generate service /core/services/<my service>
```

Best practices for a project structure.
```
-- app
      |--modules
           |--[+] components
           |--[+] shared
                  |-- [+] models 
                        -- my-first.spec.ts
                        -- my-first.ts
                        -- my-second.spec.ts
                        -- my-second.ts
           |--[+] services
                  -- my-first.service.ts
                  -- my-first.service.spec.ts
                  -- my-second.service.ts
                  -- my-second.service.spec.ts
                        .
                        .
                        .
```

2. Add HttpClient </br>
`import { HttpClient, HttpClientModule } from '@angular/common/http';`

3. Add this guys to the `my-first.service.ts`

```bash
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
```

4. Add `getMyFirst` method.

```bash
export class MyFirstService {

  constructor(private http: HttpClient) { }

  public getMyFirst(): Observable<MyFirst[]>{
    return this.http.get<Schicht[]>(`http://${environment.SERVICE_IP}/...`)
    .pipe( map((response: MyFirst[]) => {
        return response as MyFirst[];
      }));
  }
```

## Create model
1. Add model using 
```bash
ng generate class /shared/models/<myModel>
``` 
3. Change the class with interface.

```
export interface MyFirst {
    userId: number;
    id: number;
    title: string;
    completed: string;
}
```

## Add HttpClientModel into `app.modules.ts`

`import { HttpClientModule } from '@angular/common/http';`

imports:[</br>
....,</br>
`HttpClientModule` </br>
]

## Create an component using `ng`

```bash
ng generete component my-first
```

1. Define into `MyFirstComponent` class the property `public listOfMyFirst: MyFirst[]`.
2. Put into the `ngInit()` method following code: 
```bash
this.myFirstService.getMyFirst().toPromese().then(f => this.listOfMyFirst = s);
```
## Add primeng table
Add finally into the `fy-first.component.ts` the following code:

```bash
<p-table [value]="MyFirst">
  <ng-template pTemplate="header">
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
      <th>Header 3</th>
      <th>Header 4</th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-first>
    <tr>
      <td>{{ first.userId }}</td>
      <td>{{ first.id }}</td>
      <td>{{ first.title }}</td>
      <td>{{ first.comleted }}</td>
    </tr>
  </ng-template>
</p-table>
```


