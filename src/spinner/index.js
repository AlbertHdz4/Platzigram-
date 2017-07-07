var yoyo = require('yo-yo');
var translate = require('../translate');
var empty = require('empty-element');

var el = yoyo`
  <div class="loader height-frame ">Loading...</div>
  `;

module.exports = function header(ctx, next) {
  var container = document.getElementById('main-container');
  empty(container).appendChild(el);
  next();
}
