var yoyo = require('yo-yo');
var moment = require('moment');
require('moment/locale/es');
// Le indicamos que la locacion de nuestra app es en Español
moment.locale('es');

module.exports = function pictureCard(pic) {
  var el;
  function render(picture) {
    return yoyo`<div class="card ${picture.liked ? 'liked' : ''}">
      <div class="card-image">
        <img class="activator" src="${picture.url}">
      </div>
      <div class="card-content">
        <a href="/user/${picture.user.username}" class="card-title activator">
          <img src="${picture.user.avatar}" class="avatar" />
          <span class="username">${picture.user.username}</span>
        </a>
        <small class="right time">${moment(picture.createdAt).fromNow()}</small>
        <p>
          <a href="#" class="left" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
          <a href="#" class="left" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
          <span class="left likes">${picture.likes} Me gusta</span>
        </p>
      </div>
    </div>`;
  }

  function like(liked) {
    pic.liked = liked;
    pic.likes += liked ? 1 : -1;
    var newEl = render(pic);
    yoyo.update(el, newEl);
    // Este return false lo que hace es no agregar una almohadilla a la url cuando
    // hacemos click sobre el corazon
    return false;
  }

  el = render(pic);
  return el
}
