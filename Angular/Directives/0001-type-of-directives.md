## Table of content
* Components
* Structural Drictives
* Attributes Directives
* Build-in Direvtives

Directives in Angular are custom style or behavior of the DOM elements.

## Components - Directives with a templates

## Structural Directives

Adds and removes DOM elements to change DOM layout

## Attributes Directive

Change the appearance or bevahior of an element

## Build-in Directives

* ngClass

ngClass is used for class binding - adding or removing several classes. Adding an ngClass property binding sets the element's classes accordingly.

```html
<div [ngClass]="myClass"> Add/remove this class (show/hide)</div>
```

* ngStyle
* ngIf

Show/ hide an element

```html
<div *ngIf="isEnabled">Show this message</div>
```

```html
<div>{{ isSelected ? "X" : "" }}</div>
```

* ngSwitch
* ngFor

ngFor is a repeater directive - presents a list of items

```html
<div *ngFor="let course of courses">{{course.Name}}</div>
```




