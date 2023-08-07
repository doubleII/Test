## Table of content
* html
* component
* server

## html

```html
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="error-template">
        <div *ngIf="error" class="error">
          <h2>Error Details:</h2>
          <hr>
          <pre>{{ errorDetails }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>>
```

## Component

Run the service from component

```typescript
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

## Service

```typescript

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/core/services/logging.service';

@Component({
  selector: 'app-http-error-response',
  templateUrl: './http-error-response.component.html',
  styleUrls: ['./http-error-response.component.scss'],
})
export class HttpErrorResponseComponent implements OnInit {

  data: any;
  error: boolean;
  errorDetails: string;
  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
    this.loggingService.authentification()
    .subscribe( response => 
      {
        this.data = response;
      }, (error:HttpErrorResponse) => {
        this.error = true;
        this.errorDetails = JSON.stringify(error, null, 2);
      });

      this.loggingService.authorizaiton()
      .subscribe( response => 
        {
          this.data = response;
        }, (error:HttpErrorResponse) => {
          this.error = true;
          this.errorDetails = JSON.stringify(error, null, 2);
        });
  }

}

```
