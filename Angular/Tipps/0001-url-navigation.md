## Reload Page

Reload the same url address.

```typescript
  reload(){
    console.log('[..service]: reload()');
    let currentUrl = this.router.url;
    console.log('url: ', currentUrl);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
```

## Redirect To

Redirect to another url address.

```typescript
  redirectTo(cdts: string, id: string){
    var refreshUrl = `${this.update_personal}${cdts}/${id}`;
    console.log(refreshUrl);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl(refreshUrl);
  }
```

## Add parameters to the url

```typescript
import {ActivatedRoute} from '@angular/router';
...

constructor(private activatedRoute: ActivatedRoute){
}

public yourMethod () {
  this.router.navigate(
    [], 
    {
      relativeTo: this.activatedRoute,
      queryParams: { id: 'myNewValue', s: 'mySortValue' },
      queryParamsHandling: 'merge'
    });
 }
```
