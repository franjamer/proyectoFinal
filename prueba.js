window.addEventListener('DOMContentLoaded', function() {
  // Crear elementos del formulario
  var label1 = document.createElement('label');
  label1.textContent = 'Número 1:';

  var input1 = document.createElement('input');
  input1.type = 'number';

  var label2 = document.createElement('label');
  label2.textContent = 'Número 2:';

  var input2 = document.createElement('input');
  input2.type = 'number';

  var button = document.createElement('button');
  button.textContent = 'Sumar';

  var labelResultado = document.createElement('label');
  labelResultado.textContent = 'Resultado:';

  var inputResultado = document.createElement('input');
  inputResultado.type = 'text';
  inputResultado.disabled = true;

  // Agregar elementos al documento
  var container = document.body;

  container.appendChild(label1);
  container.appendChild(input1);
  container.appendChild(document.createElement('br'));

  container.appendChild(label2);
  container.appendChild(input2);
  container.appendChild(document.createElement('br'));

  container.appendChild(button);
  container.appendChild(document.createElement('br'));

  container.appendChild(labelResultado);
  container.appendChild(inputResultado);

  // Funcionalidad de suma
  button.addEventListener('click', function() {
    var num1 = parseFloat(input1.value);
    var num2 = parseFloat(input2.value);
    var resultado = num1 + num2;
    inputResultado.value = resultado;
  });
});

window.addEventListener('load', function() {  
    // Arreglo de imágenes
    var imagenes = [
      {nombre:"cereza",valor:"36",ruta:"./imagenes/cereza.svg"},
      {nombre:"ciruela",valor:"33",ruta:"./imagenes/ciruela.svg"},
      {nombre:"fresa",valor:"30",ruta:"./imagenes/fresa.svg"},
      {nombre:"limon",valor:"27",ruta:"./imagenes/limon.svg"},
      {nombre:"naranja",valor:"24",ruta:"./imagenes/naranja.svg"},
      {nombre:"platanos",valor:"21",ruta:"./imagenes/platanos.svg"},
      {nombre:"sandia",valor:"18",ruta:"./imagenes/sandia.svg"},
      {nombre:"siete",valor:"15",ruta:"./imagenes/siete.svg"},     
      {nombre:"Gran Premio",valor:"12",ruta:"./imagenes/granpremio.svg"}
    ];

    // Carga las imágenes en el contenedor
    cargarImagenes(imagenes, "#container");
    cargarImagenes(imagenes, "#container");
    cargarImagenes(imagenes, "#container");
    cargarImagenes(imagenes, "#container");
  });
  
  function cargarImagenes(imagenes, contenedor) {
    var contenedorElem = document.querySelector(contenedor);  
    for (var i = 0; i < imagenes.length; i++) {
      var imagen = document.createElement("img");
      var texto= document.createElement("p");
      texto.innerText=imagenes[i].nombre;
      imagen.src = imagenes[i].ruta;
      imagen.alt = imagenes[i].nombre;
      imagen.dataset.valor = imagenes[i].valor;
      contenedorElem.appendChild(imagen);
      contenedorElem.appendChild(texto)
    }
  }
  