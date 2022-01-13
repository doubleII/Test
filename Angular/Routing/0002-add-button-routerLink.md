## Add button with router link
* Add one parameter
* Add two parameters

## Add one paramer
1. Add into html file:

```html
     <button class="btn btn-link" [routerLink]="['/link/', id]">
            <span class="glyphicon glyphicon-pencil" id="router-link-button"></span>
     </button>
```
2. Add routing into app-routing.module.ts
 ```typescript
const routes: Routes = [
  ...
  {path: 'mypath/:id', component: MyComponent},
...
];
```

3. Add into component.ts file:

```typeScript
...
 constructor( private route: ActivatedRoute) {
      this.route.params.subscribe(params => this.id = params['id']);
    }
   ...
```

# Add two parameters
```html
     <button class="btn btn-link" [routerLink]="['/link/', id, name]">
            <span class="glyphicon glyphicon-pencil" id="router-link-button"></span>
     </button>
```

2. Add routing into app-routing.module.ts
 ```typescript
const routes: Routes = [
  ...
  {path: 'mypath/:cdts/:id', component: MyComponent},
...
];
```

3. Add into component.ts file:

```typeScript
...
 constructor( private route: ActivatedRoute) {
      this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      });
    }
   ...
```
