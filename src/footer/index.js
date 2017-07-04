var yoyo = require('yo-yo');
var translate = require('../translate');

var el = yoyo
  `
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <!-- Los prefijos s## nos ayudan a saber primero, s, m o l-->
        <!-- si es para dispositivos small medium o large y los numeros,-->
        <!-- indican cuantas columnas se tomaran de las 12 que se encuentran-->
        <!-- disponibles-->
        <div class="col s12 l3 center-align">
          <a href="#" data-activates="dropdown1" class="dropdown-button btn btn-flat">${translate.message('language')}</a>
          <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col s12 l3 push-l6 center-align">© 2017 Platzigram</div>
  </footer>
  `;

function lang(locale) {
  console.log(`Este es el valor de locale ${locale}`)
  localStorage.locale = locale;
  // Con esta linea volvemos a recargar la pagina sin importar
  // el sitio en el que estemos ya sea en el home, en el signin
  // o signup
  location.reload();
  return false;
}

document.body.appendChild(el);
