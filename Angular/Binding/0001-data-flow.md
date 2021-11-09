## In Angular the data can flow between the model and view in the following directions:
1. Model to view. 

``` html
<input type="text" [ngModel]="myValue">
```
3. View to model.

```html
(input)="change($event)"            // calling a method called change from the component class
(input)="myValue=$event.target.value" // on input save the new value in the title property
```

5. Two way data binding.

```html
<input [(ngModel)]="myValue" type="text" >
```
