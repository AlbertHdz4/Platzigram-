//Recordar que estas peticiones se obtienen de
// node_modules y las variables recibiran los valores
// que exportan estos archivos
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

// Ahora definimos una tarea para gulp,
// Recibe como primer parametro la tarea que va a realizar
// y como segundo parametro una funcion que se ejecutara cuando
// la llamemos
gulp.task('styles', function() {
  // Aqui definimos las tareas que realizara con gulp
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});

//Esta es una nueva tarea la cual indica a gulp que debe de mover,
// todos los archivsos desde la carpeta assets hasta la carpeta public
gulp.task('assets', function() {
  //glob
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
});

//Esta funcion compilara y generará todo nuestro bundle,
// tambien tendrá la opcion de solo compilar dependiendo del
// valor de watch.
const compile = (watch) => {
  //En esta linea lo que se hace es crear una variable que
  // recibe lo que nos devuelve watchify que a su vez recibe como
  // parametro lo que regresa browserify (bundler)
  var bundle = watchify(browserify('./src/index.js'));
  //Se crea una funcion que haga todo el build de los JavaScript
  function rebundle() {
    //Aqui definimos una nueva tarea ayudandonos de browserify, el cual
    // nos va a generar un bundle y este a su vez será procesado por
    // Babel a estandar ES2015 y despues será procesado por Gulp
    //browserify('./src/index.js')

    //Hemos borrado la tarea anterior y la sustituimos con
    // esta funcion y utilizando una nueva variable llamada bundle
    bundle
      .transform(babelify, {presets: ['es2015']})
      .bundle()
      .on('error', function(error) {
        console.log('Se ha originado un error', error);
        this.emit('end');
      })
      //source es otra libreria que nos ayuda a transformar lo que
      // nos devuelve el bundle() a algo que pueda entender Gulp y
      // poder seguir procesandolo y generar los documentos en carpeta
      // public de manera automatica
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }
  //lo que regresa watchify es un objeto que nos va a permitir
  // escuchar cada vez que pase un cambio en los archivos
  if(watch) {
    // Bundle tiene una funcion llamada on y on recibe un
    // String que es el nombre de un evento, ademas on,
    // recibe como parametro una funcion que se ejecutará cuando
    // cambie nuestros archivos de nuestro bundle
    bundle.on('update', function() {
      console.log('---> Bundling...');
      rebundle();
    });
  }
  rebundle();
}
//
// gulp.task('scripts', function() {
//   //Aqui definimos una nueva tarea ayudandonos de browserify, el cual
//   // nos va a generar un bundle y este a su vez será procesado por
//   // Babel a estandar ES2015 y despues será procesado por Gulp
//   //browserify('./src/index.js')
//     .transform(babelify, {presets: ['es2015']})
//     .bundle()
//     //source es otra libreria que nos ayuda a transformar lo que
//     // nos devuelve el bundle() a algo que pueda entender Gulp y
//     // poder seguir procesandolo y generar los documentos en carpeta
//     // public de manera automatica
//     .pipe(source('index.js'))
//     .pipe(rename('app.js'))
//     .pipe(gulp.dest('public'))
// });

//Estas dos tareas son distintas, una solo correera el comando build es
// decir si queremos solo correr o construir nuestro proyecto y la otra estará
// observando si los documentos han sido modificados
gulp.task('build', function() {
  return compile();
})

gulp.task('watch', function() {
  return compile(true);
})

// Tarea que gulp hará por default, recibe dos parametros la palabra default
// que indica que esta será la tarea por default o por defecto y un arreglo que
// recibe las tareas a realizar, estas pueden ser realizadas de manera simultanea
gulp.task('default', ['styles', 'assets', 'build']);
