document.addEventListener('keydown', function(event) {
  var delta = null;
  if (event.key === 'ArrowUp') {
    delta = 2;
  }
  if (event.key === 'ArrowDown') {
    delta = -2;
  }
  if (delta) {
    console.log('delta:', delta);
    document.getElementsByTagName('iframe')[0].contentDocument.body.parentElement.scrollLeft += delta;

    // Prevent further propagation of the event
    event.stopPropagation();
    event.preventDefault();
  }
});

console.log('Loaded Hoopla Tweaks by Chouser');
