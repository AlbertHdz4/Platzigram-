// Esta peticion de JavaScript se hace a través de Browserify pues
// este es el encargado de juntar todas las dependencias de desarrollo
// y otorgarlas a la interfaz que las necesite
var page = require('page');

var main = document.getElementById('main-container');

page('/', function(ctx, next) {
  main.innerHTML = 'Home <a href="/signup">Signup</a> Sign Out Otro Link'; //diga home
})

page('/signup', function(ctx, next) {
  main.innerHTML = '<a href="/">Home</a> Sign Up Sign Out hola coomo estas '; //diga home
})

page.start()
