Simple Tag Search
=================

- No need for jQuery UI
- Requires jQuery or Zepto.js

Usage
-----

Add a search input

```html
<input type="text" id="searchthis" />
```

Add search terms

```html
<a href="http://google.com" class="searchitem">
    Research by John
    <span>john research tanzania</span>
</a>

<a href="http://google.com" class="searchitem">
    Water cooperation in Tanzania
    <span>casper whiljt water research tanzania cooperation africa</span>
</a>
```

Add one line of JavaScript

```javascript
$(function () {
    $('#searchthis').tagsearch();
});
```

Options
-------

Pass options to `tagsearch` like this

```javascript
$('#search').tagsearch({
    'item_selector': '.terms > li',
    'tag_selector': '.terms .tag'
});
```
