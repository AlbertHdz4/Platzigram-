var yoyo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate')/*.message*/;
var request = require('superagent');

module.exports = function template(pictures) {
  var el = yoyo`
  <div class="container timeline">
    <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
      <form enctype="multipart/form-data" class="form-upload" id="form-upload" onsubmit=${onSubmit}>
        <div id="fileName" class="fileUpload btn btn-flat cyan">
          <span><i class="fa fa-camera" aria-hidden="true"></i>${translate.message('upload-picture')}</span>
          <input name="picture" id="file" type="file" class="upload" onchange=${onChange} />
        </div>
        <button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload')}</button>
        <button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}><i class="fa fa-times" aria-hidden="true"></i></button>
      </form>
    </div>
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map((pic) => {
          return picture(pic);
        })}
      </div>
    </div>
  </div>
  `;

  function toggleButtons() {
    document.getElementById('fileName').classList.toggle('hide');
    document.getElementById('btnUpload').classList.toggle('hide');
    document.getElementById('btnCancel').classList.toggle('hide');
  }

  function cancel() {
    // debugger;
    toggleButtons();
    document.getElementById('form-upload').reset();
  }

  function onChange() {
    toggleButtons();
  }

  function onSubmit(ev) {
    // Cada submit cuando se da click en ellos, buscan de manera inmediata
    // la accion o evento submit y buscara el atributo action y con que metodo
    // redireccionara la accion (post, get).

    // Con esta linea de codigo evitamos que se lance un request
    // innecesario pues lo manejaremos de otra manera
    ev.preventDefault();
    // Para ello tomaremos los datos del formulario a traves de un prototipo o clase
    // llamado FormData, que viene dado dentro de window, lo que recibe
    // es el formulario con los datos (imagenes) cargados y resulta que dado
    // que el evento submit se dispara cuando le damos click al boton submit,
    // this contendra todo el formulario junto con los datos o bien imagenes
    // actuales que se estan enviando
    var data = new FormData(this);
    request
      .post('/api/pictures')
      .send(data)
      .end(function(err, res) {
        // La palabra reservada arguments nos permite imprimir
        // todos los parametros o bien ahora argumentos que
        // tiene la funcion al momento
        console.log(arguments);
        toggleButtons();
        document.getElementById('form-upload').reset();
      })
  }

  return layout(el);
}
