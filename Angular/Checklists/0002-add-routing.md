## Add in app-routing.module.ts
```bash
const routes: Routes = [
  {path: 'route1', component: Route1Component},
  {path: 'route2', component: Route2Component},
  {path: '', pathMatch:'full', redirectTo: 'route1'}
];
```
Last path variable is set to empty. That's means, if you don't define some path will always open the route1.

link: https://angular.io/guide/router 
