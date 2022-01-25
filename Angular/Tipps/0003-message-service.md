## Message Service

```typescript

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[];
  constructor() {
    this.messages = [];
   }

   add(message: string): void {
     console.log('[message add]');
     this.messages.push(message);
   }

   clear(): void {
    console.log('[message clear]');
     this.messages = [];
   }
}

```
