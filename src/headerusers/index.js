var yoyo = require('yo-yo');

module.exports = function headerUsers(pic) {
  var el;
  function renderUsers(picture) {
    console.log(picture)
    return yoyo`
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
      <div class="row pic-container">
        <div class="col s3 m3 offset-s2 offset-m2 container-photos">
            <img src="../${picture.url.img0}" class="avatar-users" />
            <div class="avatar-users hide-info"><i class="fa fa-heart"></i>${picture.descriptions.like0}</div>
        </div>
        <div class="col s3 m3 container-photos">
            <img src="../${picture.url.img1}" class="avatar-users" />
            <div class="avatar-users hide-info"><i class="fa fa-heart"></i>${picture.descriptions.like1}</div>
        </div>
        <div class="col s3 m3 container-photos">
            <img src="../${picture.url.img2}" class="avatar-users" />
            <div class="avatar-users hide-info"><i class="fa fa-heart"></i>${picture.descriptions.like2}</div>
        </div>
      </div>
      <div class="row pic-container">
        <div class="col s3 m3 offset-s2 offset-m2 container-photos">
            <img src="../${picture.url.img3}" class="avatar-users" />
            <div class="avatar-users hide-info"><i class="fa fa-heart"></i>${picture.descriptions.like3}</div>
        </div>
        <div class="col s3 m3 container-photos">
            <img src="../${picture.url.img4}" class="avatar-users" />
            <div class="avatar-users hide-info"><i class="fa fa-heart"></i>${picture.descriptions.like4}</div>
        </div>
        <div class="col s3 m3 container-photos">
            <img src="../${picture.url.img5}" class="avatar-users" />
            <div class="avatar-users hide-info"><i class="fa fa-heart"></i>${picture.descriptions.like5}</div>
        </div>
      </div>
    </div>`;
  }

  el = renderUsers(pic);
  return el
}
