var yoyo = require('yo-yo');
var landing = require('../landing');

var signupForm = yoyo`<div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form class="signup-form">
                    <h2>Registrate para ver fotos de tus amigos estudiando en Platzi</h2>
                    <div class="section">
                      <!-- Clases que ocultan los botones ya sea en escritorio o en moviles -->
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar Sesión con Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar Sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="secti">
                      <input type="email" name="email" value="" placeholder="Correo Electrónico">
                      <input type="text" name="name" value="" placeholder="Nombre Completo">
                      <input type="text" name="username" value="" placeholder="Nombre de Usuario">
                      <input type="password" name="password" value="" placeholder="Contraseña">
                      <button type="submit" class="btn waves-effect waves-light btn-signup">Regístrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>`;

module.exports = landing(signupForm);
