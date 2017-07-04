var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
var IntlMessageFormat = require('intl-messageformat');

if(!window.Intl) {
  require("intl/locale-data/jsonp/en-US.js");
  require("intl/locale-data/jsonp/es.js");
  window.Intl = require('intl');
}
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en-US');

var MESSAGES = {};
var locale = 'en-US';

MESSAGES.es = es;
MESSAGES['en-US'] = en;

module.exports = {
    message: function (text, options) {
      options = options || {};
      var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
      return msg.format(options);
    },
    date: new IntlRelativeFormat(locale)
}
