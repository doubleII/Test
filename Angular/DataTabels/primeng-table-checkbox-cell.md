## Table of content
* Info
* dropbox interface
* common interface
* column interface
* component
* html

## Info

To use this example first you need to install all primeng packages and then import all modules into `app.modules.ts`, they are necessery.

This table fit checkbox and dropbox, has sorting function and can be editable. 

More Info you can find here. [Go to Primeng Web Site](https://primefaces.org/primeng/showcase/#/setup)

## Fit dropdown box inside the primeng table
The Primeng SelectedItem API is designed to have label-value pairs.

I use string as value into the `dropbox-model.ts`.

```typeScript
export interface IDropBox{
label: string,
value: string
}
```

## Column Interface

```typeScript
export interface IColumns{
    field: any,
    header: string,
    editable: boolean
}
```

## Add model for the dropdown box
Into `my-table-model.ts`

``` typeScript
export interface ITable {
    Id: number,
    Datum: Date,
    StartTime: Date,
    EndTime: Date,
    dropBox: IDropBox,
    Direct: boolean,
}

```
## component
table-with-dropbox-component.ts 

```typeScript
...

public selectedItem: string;
// only for test
//public dropBox: IDropBox[];
  .
  .
  .
ngOnInit() {
  // only for test
  //this.dropBox = {label: 'l1', value: 'v1'};
  loadDataFromYourApi();
      this.cols = [
      { field: 'Date', header: 'Datum', editable: false },
      { field: 'StartTime', header: 'Startzeit', editable: false },
      { field: 'EndTime', header: 'Endzeit', editable: false },
      { field: 'dropBox', header: 'myDropBoxCell', editable: false },
      { field: 'Direct', header: 'myCheckBox', editable: false }
  ]; }
}

  loadDataFromYourApi(): void {
    console.log(`[component]: load data`);
    this.yourService.getData()
    .subscribe((data) => {this.list = data;}, 
    (error) => {console.error(error);}, 
    () => {console.log('[schicht]: got list', this.list)});
  }
  .
  .
  .
...
```

## HTML

into table-with-dropbox-component-component.html

```html
<div class="container-fluid">
  <p-table
    [value]="list"
    [columns]="cols"
    [scrollable]="true"
    scrollHeight="700px"
  >
    <ng-template pTemplate="header" let-columns>
      <tr>
        <th *ngFor="let col of cols" [pSortableColumn]="col.header">
          {{ col.header }}
          <p-sortIcon
            [field]="col.field"
            ariaLabel="Activate to sort"
            ariaLabelDesc="Activate to sort in descending order"
            ariaLabelAsc="Activate to sort in ascending order"
          ></p-sortIcon>
        </th>
        <th id="add-col">
          <button
            id="button-add"
            type="button"
            class="btn btn-default"
            data-toggle="modal"
            data-target="#modalCenter"
            (click)="addNewRow()"
          >
            <span
              name="add-new-row-label"
              class="glyphicon glyphicon-plus"
            ></span>
          </button>
        </th>
        <th></th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-item>
      <tr>
        <td
          *ngFor="let col of cols"
          [pEditableColumn]
          [ngClass]="{ 'disable-td': !col.editable }"
        >
          <div *ngIf="!col.editable && col.field === 'Datum'">
            {{ item[col.field] | date: "dd.MM.yyyy" }}
          </div>
          <div
            *ngIf="
              (!col.editable && col.field === 'StartTime') ||
              col.field === 'EndTime' || " >
            {{ item[col.field] | date: "HH:mm:ss" }}
          </div>
          <div *ngIf="!col.editable && col.field === 'dropBox'">
            <!-- {{ item[col.field] | json }} USE TO DEBUG-->
            <p-dropdown
              [options]="item[col.field]"
              [(ngModel)]="selectedItem"
              [style]="{ width: '100%' }"
              (onChange)="onChangeDrop()"
            ></p-dropdown>
          </div>
          <div *ngIf="col.header === 'Direct'">
            <input
              type="checkbox"
              [ngModel]="item[col.field]"
              (change)="onChange($event, item)"
            />
          </div>
          <p-cellEditor *ngIf="col.editable">
            <ng-template pTemplate="input">
              <input type="text" [(ngModel)]="item[col.field]" />
            </ng-template>
            <ng-template pTemplate="output">
              {{ item[col.field] }}
            </ng-template>
          </p-cellEditor>
        </td>
        <td>
          <button
            id="button-edit"
            type="button"
            class="btn btn-default"
            data-toggle="modal"
            data-target="#modalCenter"
            (click)="editRow(item)"
          >
            <span class="glyphicon glyphicon-pencil" id="edit-row-label"></span>
          </button>
        </td>
        <td>
          <button
            id="button-copy"
            type="button"
            class="btn btn-default"
            data-toggle="modal"
            data-target="#modalCenter"
            (click)="copyRow(item)"
          >
            <span name="edit" class="glyphicon glyphicon-duplicate"></span>
          </button>
        </td>
      </tr>
    </ng-template>
  </p-table>
</div>
```
