## How to remove modal window overlay and reload a component

```typescript
...
declare var $: any;
...
... mymethod(){
    // remove overlay
    $(".modal-backdrop.in").hide();
    }
```
