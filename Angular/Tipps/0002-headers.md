## Default header

Default header with MessageService. Look Message Service for more information.

```typescript
 private log(message: string): void {
     this.messageService.add(`[schicht service]: ${message}`);
   }


 public headerDict() {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
 }
   
 public service(param: any): Observable<> {
  const data = {};
  ... // your body
  return this.http.post<any>( `${this.protocol}${this.baseurl}${this.subUrl}`, data, {headers: this.headerDict()} )
  .pipe( tap ( _ => console.log('fetch data:', _) ),
  catchError( this.handlerError<ISchicht[]>( 'your service method', )));
}
  
  private handlerError<T>( operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    // TODO send the error to the remote loggin
    // console.log('Server Side Error ', error);
    alert(`Server Side: ${error.statusText}: ${error.status}. ${error.error.Message}`);
    // TODO better job of transforming erroro for user consumpion
    this.log(`${operation} failed: ${error.message}`);

    // let the app keep running by returning an empty result
    return of(result as T);
  };
}
```

## with beary JWT Token

```typescript
    const headers1 = new HttpHeaders({
      'Content-Type':  'application/json',
       Authorization: 'Bearer ' + token
    });
```
