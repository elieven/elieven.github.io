self.addEventListener('install', function() {
  // runs after detecting SW or a newer version of SW
  console.log('%c Service worker installed', 'color: #2779BD;');
  // cache fonts
  caches.open('fonts').then(function(cache){
    cache.add('/assets/font/poppins.css');
    cache.add('/assets/font/poppins-regular-webfont.woff');
    cache.add('/assets/font/poppins-regular-webfont.woff2');
    cache.add('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
  });
  // caches styles
  caches.open('images').then(function(cache){
    cache.add('https://image.ibb.co/gyCFbz/sts_logo.png'); // sts-kp
    cache.add('https://image.ibb.co/c4QRGz/gim_logo.jpg'); // gim-kp
  });
});

self.addEventListener('activate', function() {
  // runs after user closes all tabs from this site and a new one is opened
  console.log('%c Service worker activated', 'color: #5661B3;');
});