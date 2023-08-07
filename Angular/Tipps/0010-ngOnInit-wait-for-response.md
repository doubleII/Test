## Table of content
* wait for respose

## Wait for response

Into ngOnInit() Event you can put your method where you can wait for the response. `ngOnInit Event cann not wait!`

Wait for httpclient repsonse by page loading:

```typescript
...
async ngOnInit() {
  await this.loading();
}

/**
* first authentification
* second authorization
*/
async loading() {
await this.loggingService.authorizaiton().toPromise()
.then((responese) => { 
  this.data = responese;
  console.log(this.data);
})
.catch((error) => {
  console.log('home-component authorizaiton: ', error);
  return;
});

await this.loggingService.authentification().toPromise()
.then((responese) => {
  this.data = responese; 
  console.log(this.data);
})
.catch((error) => { 
  console.log('home-component authentification: ', error);
  return;
});

this.report = {EventId: this.id, Sections: [], Standard: false, Linked: false};

}
```
