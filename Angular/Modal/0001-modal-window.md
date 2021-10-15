## Table of content
* modal-window-component.html
* modal-window-component.ts
* modal-window.service.ts

## Introduction

For this example i use Angular 6-lts and bootstrap 3. This is a simply way to make your component reusable, which make it easy to maintain.

We will open a modal window from another window and execute a function in this component. We will pass some data from the `parent window` into the `child window` as well. For this, we are using separate modal service for creating/desrtoying modal window. 

1. Modal service.

The modal service hat three methods:
* open modal window
* close modal window
* save data 

This service has two private parameters.

## HTML model window component (modal-window-component.html)

To call component from another component as modal window we need to keep in mind:

1. This is very imporent.

```diff
-  id="modalCenter"
-  aria-labelledby="modalCenterTitle"
-  <h5 class="modal-title" id="modalCenterLongTitle">  
  ```
  
```html
<!-- Modal -->
<div
  class="modal fade"
  id="modalCenter"
  tabindex="-1"
  role="dialog"
  aria-labelledby="modalCenterTitle"
  aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCenterLongTitle">
          {{ title }}
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
          (click)="close(this)"
        >
          Schlißen
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-dismiss="modal"
          (click)="save(this)"
        >
          {{ buttonName }}
        </button>
      </div>
    </div>
  </div>
</div>

```

## Parent component

parent.component.html

```bash
<div #modal></div>
<button
  type="button"
  class="btn btn-primary"
  data-toggle="modal"
  data-target="#modalCenter"
  (click)="editRow()"
>
  Launch demo modal
</button>
```
