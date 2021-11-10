## Hide column using primeng table

To hide a column into primeng table use this example. 

1. Column.ts

```typeScript
export interface IColumn {
    field: any;
    header: string;
    editable: boolean;
    visibility: boolean;
}
```

2. Html

```html
<p-table
  [value]="list"
  [paginator]="true"
  [rows]="10"
  responsiveLayout="scroll"
>
  <ng-template pTemplate="header" let-columns>
    <tr>
      <th
        *ngFor="let col of cols"
        [pSortableColumn]="col.field"
        [hidden]="!col.visibility"
      >
        {{ col.header }}
        <p-sortIcon
          [field]="col.field"
          ariaLabel="Activate to sort"
          ariaLabelDesc="Activate to sort in descending order"
          ariaLabelAsc="Activate to sort in ascending order"
        ></p-sortIcon>
      </th>
    </tr>
  </ng-template>
  <ng-template pTemplate="body" let-item>
    <tr>
      <td
        *ngFor="let col of cols"
        [pEditableColumn]
        [ngClass]="{ 'disable-td': !col.editable }"
      >
        <div
          *ngIf="
            !col.editable">
          {{ item[col.field] }}
        </div>
        <!--editable-->
        <p-cellEditor *ngIf="col.editable">
          <ng-template pTemplate="input">
            <input pInputText type="text" [(ngModel)]="item[col.field]" />
          </ng-template>
          <ng-template pTemplate="output">
            {{ item[col.field] }}
          </ng-template>
        </p-cellEditor>
      </td>
    </tr>
  </ng-template>
</p-table>
```
