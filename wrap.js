(function() {
  var path = location.hash.substr(1);
  if (!path) {
    return;
  }
  var url = 'https://' + location.hostname.replace(/\./g, '-')
      + '.cdn.ampproject.org/c/'
      + (location.protocol == 'https:' ? 's/' : '')
      + path;
  var i = document.createElement('iframe');
  i.src = url;
  i.scrolling = 'yes';
  i.width = '100%';
  i.height = '100%';
  i.style.cssText = 'position:absolute;top:0;bottom:0;left:0;right:0;border:0;';
  document.body.appendChild(i);
})();