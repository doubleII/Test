## Table of content 
* Remove modal window overlay
* Reload a component


## Remove modal window overlay
```typescript
...
declare var $: any;
...
... mymethod(){
    // remove overlay
    $(".modal-backdrop.in").hide();
    }
```

## Reload component

```typescript
reload(){
    let currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([currentUrl]);
  }
```
