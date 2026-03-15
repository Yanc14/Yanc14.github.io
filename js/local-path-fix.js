// Fix absolute-root paths when previewing via file://
(function(){
  if (!(location && location.protocol === 'file:')) return;
  function fix(){
    ['src','data-src','data-srcset','href'].forEach(function(attr){
      document.querySelectorAll('['+attr+']').forEach(function(el){
        var v = el.getAttribute(attr);
        if (v && v.indexOf('/') === 0) el.setAttribute(attr, v.slice(1));
      });
    });
  }
  if (document.readyState !== 'loading') fix(); else document.addEventListener('DOMContentLoaded', fix);
})();
