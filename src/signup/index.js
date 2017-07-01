var page = require('page');
var empty = require('empty-element');
var template = require("./template");

page('/signup', function(ctx, next) {
  var main = document.getElementById('main-container');
  var title = document.getElementsByTagName('title');
  title[0].innerHTML='Platzigram - Signup';
  empty(main).appendChild(template);
});
