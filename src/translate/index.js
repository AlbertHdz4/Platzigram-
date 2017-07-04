
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
if(!window.Intl) {
  require("intl/locale-data/jsonp/en-US.js");
  require("intl/locale-data/jsonp/es.js");
  window.Intl = require('intl');
}
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var IntlMessageFormat = require('intl-messageformat');
var es = require('./es');
var en = require('./en-US');

var MESSAGES = {};
// Vamos acceder al local Storage para poder obtener el
// idioma que el usuario ha seleccionado, si es la primera
// vez que se ingresa al Storage nos marcara null es por eso
// que le asignamos el idioma español
var locale = localStorage.locale || 'es';

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
