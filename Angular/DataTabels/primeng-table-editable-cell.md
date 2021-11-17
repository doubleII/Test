## Table interface
... in arbeit

```typeScript
export interface ITable {
Col1: string;
Col2: string;
Col3: string;
Col4-Dropbox: Function[];
Col5-Dropbox: Function[];
Col6: string;
Col7-Checkbox: boolean;
Col8-Checkbox: boolean;

}
```

## Dropbox interface
... in arbeit

```typeScript
// prime-ng dropbox convention
export interface Function {
  label: string;
  value: string;
}
```

## Table html
... in arbeit

To take data from editable cells you need to add `(onEditComplete)="onEditComplete($event)"` and  `  [pEditableColumn]="item[col.field]" [pEditableColumnField]="item[col.field]"` into a p-table. If you don't do that onEditComplete event get empty data back. 

```diff
@@ To fire the event onEditComplete you need to press Enter key! @@
```
       

```html
<p>personal-equipment works!</p>
<p-table
  [value]="list"
  [columns]="cols"
  [paginator]="true"
  [rows]="10"
  responsiveLayout="scroll"
  (onEditComplete)="onEditComplete($event)"
>
  <ng-template pTemplate="header" let-columns>
    <tr>
      <th *ngFor="let col of cols" [pSortableColumn]="col.field">
        {{ col.header }}
        <p-sortIcon
          [field]="col.field"
          ariaLabel="Activate to sort"
          ariaLabelDesc="Activate to sort in descending order"
          ariaLabelAsc="Activate to sort in ascending order"
        ></p-sortIcon>
      </th>
      <th style="text-align: center">
        <button id="button-add" type="button" class="btn btn-link">
          <span class="glyphicon glyphicon-plus"></span>
        </button>
      </th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item>
    <tr>
      <td
        *ngFor="let col of cols"
        [pEditableColumn]="col.header"
        [pEditableColumnField]="item[col.field]"
        [ngClass]="{ 'disable-td': !col.editable }"
      >
        <!--not editable columns-->
        <div
          *ngIf="
            (!col.editable && col.field === 'Col1') ||
            col.field === 'Col2' ||
            col.field === 'Col3'
          "
        >
          {{ item[col.field] }}
        </div>

        <div *ngIf="!col.editable && col.field === 'Col4-Dropdown'">
          <!-- {{ item[col.field] | json }} -->
          <p-dropdown
            [options]="item[col.field]"
            [style]="{ width: '100%' }"
            (onChange)="onChangeFunc($event, item)"
          ></p-dropdown>
        </div>

        <div *ngIf="!col.editable && col.field === 'Col5-Dropdown'">
          <!-- {{ item[col.field] | json }} -->
          <p-dropdown
            [options]="item[col.field]"
            [style]="{ width: '100%' }"
            [disabled]="item.Functions[0].label === 'label' ? false : true"
            (onChange)="onChangeUnit($event, item)"
          ></p-dropdown>
        </div>

        <div *ngIf="!col.editable && col.field === 'Col6'">
          {{ item[col.field] }}
        </div>

        <div *ngIf="!col.editable && col.field === 'Col7-Checkbox'">
          <input
            type="checkbox"
            [ngModel]="item[col.field]"
            (change)="onChangeGewehr($event, item)"
          />
        </div>

        <div *ngIf="!col.editable && col.field === 'Col8-Checkbox'">
          <input
            type="checkbox"
            [ngModel]="item[col.field]"
            (change)="onChangeFem($event, item)"
          />
        </div>

        <!--editable columns-->
        <p-cellEditor *ngIf="col.editable">
          <ng-template pTemplate="input">
            <input type="text" [(ngModel)]="item[col.field]" />
          </ng-template>

          <ng-template pTemplate="output">
            {{ item[col.field] }}
          </ng-template>
        </p-cellEditor>
      </td>

      <td style="text-align: center">
        <button
          id="button-add"
          type="button"
          class="btn btn-link"
          (click)="onDelete(item)"
        >
          <span class="glyphicon glyphicon-trash"></span>
        </button>
      </td>
    </tr>
  </ng-template>
</p-table>

```
