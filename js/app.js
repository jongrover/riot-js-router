riot.route.start(true);

riot.route('/about', function () {
  riot.mount('main', 'about');
});

riot.route('/contact', function () {
  riot.mount('main', 'contact');
});

riot.route('/blog', function () {
  riot.mount('main', 'blog');
});
