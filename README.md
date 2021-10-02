<p align="center">
  <a href='https://jsbin.com/safedoq/5/edit?html,css,js,output'>
    <img src="./demo.png?sanitize=true" alt="title-tooltip script demo"/>
  </a>
<p>
<h3 align="center">Converts title attributes into tooltips</h3>
<h1 align="center">
  <a href='https://jsbin.com/safedoq/5/edit?html,css,js,output'>Title Tooltip</a>
</h1>

If you want to have custom tooltips and all you have now are `title` attribute, and you don't want to change
anything in your markup, then this solution will automatically show ustom tooltips instead of your titles
and all you need to do is style them (or use the default style here)

For the positioning of the tooltips, I would recommend using my [super-lighweight script](https://github.com/yairEO/position)


## Features:

* Super lightweight
* CSS customizability
* Custom delay

## Install:

Use from CDN / Download from this repo / [NPM](https://www.npmjs.com/package/@yaireo/title-tooltip)

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
    // ".default" is only needed when the script is loaded as a <script> tag and not as an ES2015 module
    position.default({
      target    : popper,
      useRaf    : false,
      ref       : reference,
      offset    : [0, 5],
      placement : "center below",
      track     : {scroll:true}
    })
  }
})
```

