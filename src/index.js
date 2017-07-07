// Esta peticion de JavaScript se hace a través de Browserify pues
// este es el encargado de juntar todas las dependencias de desarrollo
// y otorgarlas a la interfaz que las necesite
var page = require('page');
require("babel-polyfill");
require('./homepage');
require('./signup');
require('./signin');
require('./footer');
require('./users');

// console.log(page());
page();


// Aqui se importan todas las plantillas del lado del cliente
