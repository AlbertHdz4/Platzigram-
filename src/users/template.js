var yoyo = require('yo-yo');
var layout = require('../layout');
var headerUsers = require('../headerusers');

module.exports = function userLayout(pictures) {
  var userLayout = yoyo`
      <div class="container">
        ${pictures.map((pic) => {
          return headerUsers(pic);
        })}
      </div>
    `;
  return layout(userLayout);
}
