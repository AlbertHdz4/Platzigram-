var page = require('page');


page('/', function(ctx, next) {
  var main = document.getElementById('main-container');
  document.getElementsByTagName('title')
  [0].innerHTML='Platzigram';
  main.innerHTML = "<a href='./signup'>Signup</a>";
});
