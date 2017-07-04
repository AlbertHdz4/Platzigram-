var yoyo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');

var signupForm = yoyo`<div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form class="signup-form">
                    <h2>${translate.message('signup.subheading')}</h2>
                    <div class="section">
                      <!-- Clases que ocultan los botones ya sea en escritorio o en moviles -->
                      <a href="" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> ${translate.message('signup.text')}</a>
                    </div>
                    <div class="divider"></div>
                    <div class="secti">
                      <input type="email" name="email" value="" placeholder="${translate.message('email')}">
                      <input type="text" name="name" value="" placeholder="${translate.message('fullname')}">
                      <input type="text" name="username" value="" placeholder="${translate.message('username')}">
                      <input type="password" name="password" value="" placeholder="${translate.message('password')}">
                      <button type="submit" class="btn waves-effect waves-light btn-signup">${translate.message('signup.call-to-action')}</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ${translate.message('signup.have-account')} <a href="/signin">${translate.message('signin')}</a>
                </div>
              </div>
            </div>`;

module.exports = landing(signupForm);
