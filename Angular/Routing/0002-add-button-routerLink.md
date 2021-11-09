## Add button with router link

1. Add into html file:

```html
     <button class="btn btn-link" [routerLink]="['/link/', id]">
            <span class="glyphicon glyphicon-pencil" id="router-link-button"></span>
     </button>
```

2. Add into component.ts file:

```typeScript
...
 constructor( private route: ActivatedRoute) {
      this.route.params.subscribe(params => this.id = params['id']);
    }
   ...
```
