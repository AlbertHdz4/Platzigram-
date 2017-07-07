var yoyo = require('yo-yo');

module.exports = function headerUsers(pic) {
  var el;
  function renderUsers(picture) {
    console.log(picture)
    return yoyo`
      <div>
        <div class="row">
          <div class="col s5 m5">
            <a href="/users/${picture.user.username}" class="card-title activator">
              <img src="${picture.user.avatar}" class="avatar-users" />
              <p class="header-username">${picture.user.username}</p>
            </a>
          </div>
          <div class="col s5 m5 center-align">
            <p class="paragraphs">${picture.user.about}</p>
          </div>
        </div>
        <div class="pic-container">
          <div class="container-photos">
              <img src="../${picture.url.img0}" class="pic-users" />
              <div class="hide-frame">
                  <i class="fa fa-heart"></i>${picture.descriptions.like0}
              </div>
          </div>
          <div class="container-photos">
              <img src="../${picture.url.img1}" class="pic-users" />
              <div class="hide-frame">
                  <i class="fa fa-heart"></i>${picture.descriptions.like1}
              </div>
          </div>
          <div class="container-photos">
              <img src="../${picture.url.img2}" class="pic-users" />
              <div class="hide-frame">
                  <i class="fa fa-heart"></i>${picture.descriptions.like2}
              </div>
          </div>
          <div class="pic-container">
            <div class="container-photos">
                <img src="../${picture.url.img3}" class="pic-users" />
                <div class="hide-frame">
                    <i class="fa fa-heart"></i>${picture.descriptions.like3}
                </div>
            </div>
            <div class="container-photos">
                <img src="../${picture.url.img4}" class="pic-users" />
                <div class="hide-frame">
                    <i class="fa fa-heart"></i>${picture.descriptions.like4}
                </div>
            </div>
            <div class="container-photos">
                <img src="../${picture.url.img5}" class="pic-users" />
                <div class="hide-frame">
                    <i class="fa fa-heart"></i>${picture.descriptions.like5}
                </div>
            </div>
        </div>
      </div>
      `;
  }

  el = renderUsers(pic);
  return el
}
