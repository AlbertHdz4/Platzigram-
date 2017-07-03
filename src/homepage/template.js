var yoyo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');


module.exports = function template(pictures) {
  var el = yoyo`
  <div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map((pic) => {
          return picture(pic);
        })}
      </div>
    </div>
  </div>
  `;
  return layout(el);
}
