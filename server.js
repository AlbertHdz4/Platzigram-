//Aqui creamos una variable llamada express y hacemos que reciba
// la libreria express de node_modules que se instalo con npm
var express = require('express');
var multer = require('multer');
var ext = require('file-extension');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname));
  }
})
var upload = multer({ storage: storage }).single('picture');

// app es una instancia de express que recibe todas las funciones
// o metodos de la libreria express y que podemos utilizar
// para dar respuesta a un requerimiento del usuario
var app = express();
// var usersRouter = express.Router();

// En la siguiente linea de codigo le indicamos que el motor de vista será
// pug
app.set('view engine', 'pug');

//Lo que hace esta linea es definirle un middleware (el cual es un
// software que asiste a una aplicacion para interactuar o comunicarse con otras
// aplicaciones, o paquetes de programas, redes, hardware y/o sistemas
// operativos) que se sirva el directorio css de manera publica o bien que
// cualquier usuario pueda acceder a el
app.use(express.static('public'));
// function restrict(req, res, next) {
//   if(req.user) return next();
//   res.redirect('/signup');
// }

//
// usersRouter.get('/ahernandez', function(req, res) {
//   res.render('index', {title: 'Platzigram - ahernandez'});
// });
//
// user.use('/users', usersRouter);

// con ayuda de la instancia app accedemos al metodo de express
// llamado get y recibe como parametro la ruta o URL y como
// segundo parametro una funcion que se va a ejecutar cuando
// el ruteo coincida, cuando acceda a la ruta / ejecuta la funcion
app.get('/', /*restrict,*/ function(req, res) {
  // res.send('Hola Mundo!');
  // Esta linea de codigo lo que hace es renderizar o "pintar" el
  // documento que nosotros le indiquemos entre las comillas, este
  // documento será buscado en la carpeta llamada view en donde este
  // este mismo archivo
  res.render('index', {title: 'Platzigram'});
});

app.get('/signup', function(req, res) {
  res.render('index', {title: 'Platzigram - Signup'});
});

app.get('/signin', function(req, res) {
  res.render('index', {title: 'Platzigram - Signin'});
});

app.get('/users/ahernandez', function(req, res) {
  res.render('index', {title: 'Platzigram - ahernandez'})
});

app.get('/user/pics', function(req, res) {
  var userPics = [
    {
      user: {
        username: 'ahernandez',
        avatar: 'https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/17155671_1288914331173722_1801883158916523163_n.jpg?oh=1b6d9594b1dc93ac65e33603f1b48587&oe=59DB0BE3',
        about: 'Hola mi nombre es Alberto, soy egresado de la Facutlad de Ingeniería de la UNAM, la programación es una de mis mayores pasiones junto con el soccer y viajar.'
      },
      url: {
        img0: 'edwin.jpg',
        img1: 'concert.jpg',
        img2: 'sib.jpg',
        img3: 'diploma.jpg',
        img4: 'edwin.jpg',
        img5: 'books.jpg'
      },
      descriptions: {
        like0: 23,
        like1: 15,
        like2: 10,
        like3: 5,
        like4: 32,
        like5: 23
      }
    }
  ];
  res.send(userPics);
});

app.get('/api/pictures', function(req, res) {
  var pictures = [
    {
      user: {
        username: 'ahernandez',
        avatar: 'https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/17155671_1288914331173722_1801883158916523163_n.jpg?oh=1b6d9594b1dc93ac65e33603f1b48587&oe=59DB0BE3'
      },
      url: 'diploma.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'edwinalma',
        avatar: 'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/15327491_1343185375714274_1023483270528854116_n.jpg?oh=e6b07260f06ea1e0af78d4c56ab40ee6&oe=59CE18BA'
      },
      url: 'dressup.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    },
  ];
  setTimeout(() => res.send(pictures), 2000);
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if(err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

// Por ultimo tenemos que correr el puerto en el que queremos que
// escuche, en este caso el 3000
app.listen(3000, function(err) {
  // En caso de existir un error, le indicamos que termine el proceso,
  // con process.exit() y se le pasa un parametro distinto de 0
  if(err) return console.log('Hubo un Error'), process.exit(1);
  console.log('Platzigram escuchando en el puerto 3000');
})
