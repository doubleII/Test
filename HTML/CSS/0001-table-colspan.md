## Table of content

* Text format
* Custom column width
* Add colspan on the last two columns

## Text format

```css

/* text on one line */
th {
  white-space: nowrap;
}

/* header and content center */
th,
td {
  text-align: center;
}
```

## Custom column width

```css
/* last two columns 50 px */
th:last-child,
:nth-last-child(2),
td:last-child,
:nth-last-child(2) {
width: 50px;
}

/* last third col 70px*/
th:nth-last-child(2),
td:nth-last-child(3) {
  width: 70px;
}
```

## Add colspan on the last two colomns

```css 
/* last header should have double width */
th:last-child {
  width: 100px;
}

/* last two columns 1/2 width from header*/
td:last-child,
:nth-last-child(2) {
  width: 50px;
}
```

The Table in your `html` file.

```html
...
<tr>
  <th id="last-two-col-with-span" colspan="2">
    /* button plus (add) */
    <button type="button" class="btn btn-link">
         <span
              name="add-new-row-label"
              class="glyphicon glyphicon-plus"
            ></span>
    </button>
  </th>
</tr>
...
```





