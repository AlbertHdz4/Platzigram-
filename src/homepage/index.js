var page = require('page');
var empty = require('empty-element');
var template = require("./template");

page('/', function(ctx, next) {
  var main = document.getElementById('main-container');
  var title = document.getElementsByTagName('title');
  title[0].innerHTML='Platzigram - Homepage';
  var pictures = [
    {
      user: {
        username: 'ahernandez',
        avatar: 'https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/17155671_1288914331173722_1801883158916523163_n.jpg?oh=1b6d9594b1dc93ac65e33603f1b48587&oe=59DB0BE3'
      },
      url: 'office.jpg',
      likes: 14,
      liked: true,
      createdAt: new Date()
    },
    {
      user: {
        username: 'ahernandez',
        avatar: 'https://scontent.fmex3-1.fna.fbcdn.net/v/t1.0-9/17155671_1288914331173722_1801883158916523163_n.jpg?oh=1b6d9594b1dc93ac65e33603f1b48587&oe=59DB0BE3'
      },
      url: 'office.jpg',
      likes: 2,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];

  empty(main).appendChild(template(pictures));
});
