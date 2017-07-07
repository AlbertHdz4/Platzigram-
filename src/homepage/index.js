var page = require('page');
var empty = require('empty-element');
var template = require("./template");
var request = require('superagent');
var axios = require('axios');
var headerMidware = require('../header');
var spinner = require('../spinner');

page('/', headerMidware, spinner, asyncLoad, function(ctx, next) {
  var main = document.getElementById('main-container');
  var title = document.getElementsByTagName('title');
  title[0].innerHTML='Platzigram - Homepage';

  empty(main).appendChild(template(ctx.pictures));
});

function loadPictures(ctx, next) {
  request
    .get('/api/pictures')
    .end(function(err, res) {
      if(err) return console.log(err);
      // CTX nos permite compartir datos a través de los midwares
      // en este caso nos permite compartir las fotos
      // a la siguiente funcion que va ejecutar page
      ctx.pictures = res.body;
      // Next llamará a la siguiente funcion
      // midware y nos aseguramos que se llame despues de
      // toda esta ejecucion, llamando al metodo next desde dentro
      // de esta funcion
      next();
    })
};

async function asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('./api/pictures').then((res) => res.json())
    next();
  } catch(err) {
    return console.log(`Error: ${err}`);
  }
}

function loadPicturesAxios(ctx, next) {
  axios
    .get('/api/pictures')
    .then(function(res) {
      //Axios no tiene un body, tiene un data
      ctx.pictures = res.data;
      next();
    })
    .catch(function(err) {
      console.log(err);
    })
};

function loadPicturesFetch(ctx, next) {
  fetch('/api/pictures')
    .then(function(res) {
      return res.json();
    })
    .then(function(pictures) {
      ctx.pictures = pictures;
      next();
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    })
}
