## Table of content
* EventEmitter from service

## EventEmitter from service

Your service.ts file

```typescript
...
  @Output()
  public domChange = new EventEmitter();
  
 ...
 
 yourMethod() {
  this.domChange.emit('put your value here');
 }
```

Your component file

```typescript
....
// in your method
this.employeeService.domChange.subscribe( r => {
  console.log('>> your value from service: ', r);
  this.addForm.controls.newUser.setValue(r);
});
....
```
