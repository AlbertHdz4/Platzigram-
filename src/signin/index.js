var page = require('page');
var empty = require('empty-element');
var template = require("./template");

page('/signin', function(ctx, next) {
  var main = document.getElementById('main-container');
  var title = document.getElementsByTagName('title');
  title[0].innerHTML='Platzigram - Signin';
  empty(main).appendChild(template);
});
