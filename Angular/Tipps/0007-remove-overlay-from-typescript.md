## How to remove modal window overlay and reload a component

```bash
reload(){
    let currentUrl = this._router.url;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([currentUrl]);
    // remove overlay
    $(".modal-backdrop.in").hide();
  }
```
