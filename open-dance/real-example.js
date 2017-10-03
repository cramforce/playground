// https://www.google.com/search?q=Barack+Obama+and+Malia+had+an+awesome+night+out+in+NYC+and+looked+awesome+doing+it

(function() {
  var links = document.querySelectorAll('.amp_r');
  for (var i = 0; i < links.length; i++) {
    augment(links[i]);
  }
  var iframe = document.createElement('iframe');
  iframe.src = 'https://cramforce.github.io/playground/open-dance/example.html';
  iframe.style.cssText = 'width: 412px; height: 732px; position:absolute; left: -1000px;';
  iframe.name = 'prerenderFrame';
  document.body.appendChild(iframe);

  var prefetchCacheStub = document.createElement('link');
  prefetchCacheStub.rel = 'prefetch';
  prefetchCacheStub.href = 'https://cramforce.github.io/playground/open-dance/cache-stub2.html?1';
  document.head.appendChild(prefetchCacheStub);

  var prefetchPubStub = document.createElement('link');
  prefetchPubStub.rel = 'prefetch';
  prefetchPubStub.setAttribute('crossorigin', '');  // No cookies
  prefetchPubStub.href = 'https://cramforce.github.io/playground/open-dance/pub-stub2.html?2';

  document.head.appendChild(iframe);

  function augment(a) {
    document.documentElement.addEventListener('click', onclick, true);
  }

  function onclick(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    window.open('https://cramforce.github.io/playground/open-dance/pub-stub2.html?2', '_blank');
  }
})()