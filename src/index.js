// Esta peticion de JavaScript se hace a través de Browserify pues
// este es el encargado de juntar todas las dependencias de desarrollo
// y otorgarlas a la interfaz que las necesite
var page = require('page');
require('./homepage');
require('./signup');

page();
