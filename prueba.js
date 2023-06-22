window.addEventListener('DOMContentLoaded', function() {
  // Crear elementos del formulario
  var label1 = document.createElement('label');
  label1.textContent = 'Número:';

  var input1 = document.createElement('input');
  input1.type = 'number';

  var label2 = document.createElement('label');
  label2.textContent = 'Porcentaje:';

  var input2 = document.createElement('input');
  input2.type = 'number';

  var button = document.createElement('button');
  button.textContent = 'Operar';

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

//   // Funcionalidad de suma
//   button.addEventListener('click', function() {
//     var num1 = parseFloat(input1.value);
//     var num2 = parseFloat(input2.value);
//     var resultado = (num1 * num2)/100;
//     inputResultado.value = resultado;
//   });
// });

// window.addEventListener('load', function() {  
//     // Arreglo de imágenes
//     var imagenes = [   
//       {nombre:"Gran Premio",valor:"36",ruta:"/imagenes/granpremio.svg"},
//       {nombre:"siete",valor:"33",ruta:"/imagenes/siete.svg"},  
//       {nombre:"sandia",valor:"30",ruta:"/imagenes/sandia.svg"},
//       {nombre:"platanos",valor:"27",ruta:"/imagenes/platanos.svg"},
//       {nombre:"limon",valor:"24",ruta:"/imagenes/limon.svg"},
//       {nombre:"naranja",valor:"21",ruta:"/imagenes/naranja.svg"},
//       {nombre:"fresa",valor:"18",ruta:"/imagenes/fresa.svg"},
//       {nombre:"cereza",valor:"15",ruta:"/imagenes/cereza.svg"},
//       {nombre:"ciruela",valor:"12",ruta:"/imagenes/ciruela.svg"}
//     ];

//     // Carga las imágenes en el contenedor
//     cargarImagenes(imagenes, "#container");
//     cargarImagenes(imagenes, "#container");
//     cargarImagenes(imagenes, "#container");
//     cargarImagenes(imagenes, "#container");
//   });
  
//   function cargarImagenes(imagenes, contenedor) {
//     var contenedorElem = document.querySelector(contenedor);  
//     for (var i = 0; i < imagenes.length; i++) {
//       var imagen = document.createElement("img");
//       var texto= document.createElement("p");
//       texto.innerText=imagenes[i].nombre;
//       imagen.src = imagenes[i].ruta;
//       imagen.alt = imagenes[i].nombre;
//       imagen.dataset.valor = imagenes[i].valor;
//       contenedorElem.appendChild(imagen);
//       contenedorElem.appendChild(texto)
//     }
//   }

/** se comenta el código anterior, para que no estorbe con los siguientes codigos. */
  
// Crear un array de cuatro arrays
// var arrayPrincipal = [];

// // Crear los cuatro arrays y agregarlos al array principal
// for (var i = 0; i < 4; i++) {
//   var arraySecundario = [];

//   // Agregar la misma imagen a cada posición del array secundario
//   for (var j = 0; j < 9; j++) {
//     // Aquí debes proporcionar la ruta o la referencia a la imagen que deseas utilizar
//     var imagen = "ruta/a/la/imagen.jpg";
//     arraySecundario.push(imagen);
//   }

//   arrayPrincipal.push(arraySecundario);
// }

// // Imprimir el resultado
// console.log(arrayPrincipal);

// Array de rutas de las nueve imágenes diferentes
var imagenes = [
  "ruta/imagen1.jpg",
  "ruta/imagen2.jpg",
  "ruta/imagen3.jpg",
  "ruta/imagen4.jpg",
  "ruta/imagen5.jpg",
  "ruta/imagen6.jpg",
  "ruta/imagen7.jpg",
  "ruta/imagen8.jpg",
  "ruta/imagen9.jpg"
];

// Crear el array principal de cuatro arrays
var arrayPrincipal = [];

// Crear los cuatro arrays y asignarles las imágenes correspondientes
for (var i = 0; i < 4; i++) {
  var arraySecundario = [];

  // Agregar las imágenes al array secundario
  for (var j = 0; j < 9; j++) {
    var indiceImagen = j % imagenes.length; // Obtener el índice correspondiente a la posición actual
    arraySecundario.push(imagenes[indiceImagen]);
  }

  arrayPrincipal.push(arraySecundario);
}

// Imprimir el resultado
console.log(arrayPrincipal);
