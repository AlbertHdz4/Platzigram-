var page = require('page');
var yoyo = require('yo-yo');
var empty = require('empty-element');


page('/', function(ctx, next) {
  var main = document.getElementById('main-container');
  main.innerHTML = '<a href="/signup">Signup</a>';
});
