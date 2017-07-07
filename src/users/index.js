var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var headerMidware = require('../header');
var axios = require('axios');

page('/users/ahernandez', headerMidware, loadUserPictures, function(ctx, next) {
  var main = document.getElementById('main-container');
  var title = document.getElementsByTagName('title');
  title[0].innerHTML='Platzigram - ahernandez';
  empty(main).appendChild(template(ctx.pictures));
});


function loadUserPictures(ctx, next) {
  axios
    .get('/user/pics')
    .then(function(res) {
      ctx.pictures = res.data;
      next();
    })
    .catch(function(err) {
      console.log(err);
    });
};
