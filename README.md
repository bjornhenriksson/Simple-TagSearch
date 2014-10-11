Simple-TagSearch
================

Search functions and scripts tends to be over complicated. My short and
functional live TagSearch script let's you add multiple tags and styles and is
only 19 lines of code.

[DEMO](http://bjornhenriksson.se/search)

- !No need for jQuery UI (sweeeeeeeet!)
- !Requires jQuery or Zepto.js

No need for JSON files or databases. All your search tags and results go on
page (also let's google index them all). Don't worry it hides all the results
until the users searches for something that exists in a link and then shows
that one.


How to use
----------

Add your search box with an id:

```html
<input type="text" id="searchthis">
```

Paste your results anywhere on your page like this:

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

Add one line of JavaScript:

```javascript
$(function () {
    $('#searchthis').tagsearch();
});
```

Don't forget to add the classname for each link (.searchitem). Put your title
for the item just before the span tag of each link. Put your search tags within
the span tag of each link. These will not be shown, but users can search for
them.

You can add as many tags that you want. Link to whatever you want and style it
however you want.

I'd love to see where and if you use this! :)
