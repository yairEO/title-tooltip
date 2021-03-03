;(function(root, factory){
  var define = define || {};
  if( typeof define === 'function' && define.amd )
      define([], factory);
  else if( typeof exports === 'object' && typeof module === 'object' )
      module.exports = factory();
  else if(typeof exports === 'object')
      exports["titleTooltip"] = factory()
  else
      root.titleTooltip = factory()
}(this, function(){
function titleTooltip( opts ){
  opts = Object.assign({
    delay: 400,
    id: 'titleTtip',
    onShow(){}
  }, opts||{})

  // do not continue if already exists
  if( opts.id in window ) return

  var hoverTimeout, titledElm;

  // bind global event listeners
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)

  // create & inject custom tooltip
  var tipElm = document.createElement('div')
  tipElm.id = opts.id
  document.body.append(tipElm)

  // event handlers
  function onOver(e){
    titledElm = e.target.closest('[title]')
    document.removeEventListener('mousemove', onMove)

    if( titledElm && titledElm.title ){
      document.addEventListener('mousemove', onMove)
      hoverTimeout = setTimeout(showTooltip)
      tipElm.innerHTML = titledElm.title
      // save current title and empty the attribute. restore on mouse-out
      titledElm._entitled = titledElm.title
      titledElm.title = ''
    }
    else
      onOut()
  }

  /**
   * On mouse out, revert back everything as it was beofre mouse over
   */
  function onOut(e){
    clearTimeout(hoverTimeout)
    document.removeEventListener('mousemove', onMove)
    tipElm.removeAttribute('style')

    if( titledElm && titledElm._entitled )
      titledElm.title = titledElm._entitled

    titledElm = null
  }

  function showTooltip(){
    reposition(titledElm, tipElm)
  }

  function onMove(e){
    requestAnimationFrame(() => {
      var rect = tipElm.getBoundingClientRect()
      tipElm.style.setProperty('--mouse-pos', e.clientX - rect.left)
    })
  }

  function destroy(){
    document.removeEventListener('mouseover', onOver)
    document.removeEventListener('mouseout', onOut)
    document.removeEventListener('mousemove', onMove)
    document.body.removeChild(tipElm)
  }

  return {
    showTooltip, onOver, onOut, tipElm, destroy
  }
}

return titleTooltip
}))
