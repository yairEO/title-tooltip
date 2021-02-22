<h1 align="center">
  <a href='https://jsbin.com/safedoq/2/edit?html,css,js,output'>Title Tooltip</a>
</h1>
<h3 align="center">Converts title attributes into tooltips</h3>

<h3 align="center">
  👉 <a href='https://jsbin.com/safedoq/2/edit?html,css,js,output' target='_blank'>Demo</a> 👈
</h3>

---

If you want to have custom tooltips and all you have now are `title` attribute, and you don't want to change
anything in your markup, then this solution will automatically show ustom tooltips instead of your titles
and all you need to do is style them (or use the default style here)

For the positioning of the tooltips, I would recommend the super-lighweight script (`< 1kb`) [Nanopop](https://github.com/Simonwep/nanopop)


## Features:

* Super lightweight
* CSS customizability
* Custom delay

## Install:

Use from CDN / download from this repo / NPM

```
npm i @yaireo/title-tooltip -S
```

## Usage:

Import CSS file via JS

```js
import titleTooltip from '@yaireo/title-tooltip'
```

Import default CSS

```css
@import '@yaireo/title-tooltip/title-tooltip.css'
```

Finally, execute the command to automatically transform the *titles* to tooltips:

```js
// using Nanopop lib for positioning
titleTooltip({
  onShow: function(reference, popper){
    NanoPop.reposition(reference, popper,{position: 'bottom-middle'})
  }
})
```

