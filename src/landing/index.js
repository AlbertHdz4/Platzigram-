var yoyo = require('yo-yo');

module.exports = function landing(box) {
  return yoyo`<div class="container">
        <div class="row">
          <div class="col s10 push-s1">
            <div class="row">
              <!-- m5 se refiere a la anchura de columnas que tendra -->
              <div class="col m5 hide-on-small-only">
                <!-- imagen -->
                <img src="iphone.png" class="iphone" alt="">
              </div>
              ${box}
            </div>
          </div>
        </div>
      </div>`;
}
