
// Respuesta 1
// // Objeto con propiedades iniciales
// var objeto = {
//     ruta: 'ruta/imagen.jpg',
//     nombre: 'imagen',
//     valor: 1
//   };
  
//   // Función para asignar el valor de la propiedad ingresada
//   function asignarValor() {
//     var propiedad = document.getElementById('propiedad').value;
//     var valor = document.getElementById('valor').value;
  
//     // Verificar si la propiedad existe en el objeto
//     if (propiedad in objeto) {
//       // Asignar el valor ingresado a la propiedad correspondiente
//       objeto[propiedad] = valor;
      
//       // Mostrar la propiedad y su valor en la etiqueta
//       document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];
//     } else {
//       console.log('La propiedad ingresada no existe en el objeto.');
//     }
//   }
  





// Respuesta numero 2

// // Objeto con propiedades iniciales
// var objeto = {
//     ruta: 'ruta/imagen.jpg',
//     nombre: 'imagen',
//     valor: 1
//   };
  
//   // Función para asignar el valor de la propiedad ingresada
//   function asignarValor() {
//     var propiedad = document.getElementById('propiedad').value;
//     var valor = document.getElementById('valor').value;
  
//     // Verificar si la propiedad existe en el objeto
//     if (propiedad in objeto) {
//       // Asignar el valor ingresado a la propiedad correspondiente
//       objeto[propiedad] = valor;
  
//       // Mostrar la propiedad y su valor en la etiqueta
//       document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];
  
//       // Habilitar el botón de mostrar propiedades
//       document.getElementById('mostrarBtn').disabled = false;
//     } else {
//       console.log('La propiedad ingresada no existe en el objeto.');
//     }
//   }
  
//   // Función para borrar los valores de todas las propiedades
//   function borrarValores() {
//     // Iterar sobre todas las propiedades del objeto
//     for (var propiedad in objeto) {
//       if (objeto.hasOwnProperty(propiedad)) {
//         // Borrar el valor de la propiedad
//         objeto[propiedad] = null;
//       }
//     }
  
//     // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//     document.getElementById('etiqueta').innerText = '';
//     document.getElementById('mostrarBtn').disabled = true;
//   }
  
//   // Función para mostrar las propiedades actuales
//   function mostrarPropiedades() {
//     var propiedadesActuales = '';
  
//     // Iterar sobre todas las propiedades del objeto
//     for (var propiedad in objeto) {
//       if (objeto.hasOwnProperty(propiedad)) {
//         // Concatenar la propiedad y su valor
//         propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//       }
//     }
  
//     // Mostrar las propiedades actuales en el campo correspondiente
//     document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
//   }
  




// Respuesta 3
// este código en principio no hace nada en html.
// Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }





// Respuesta 4

// Array de objetos
var arrayObjetos = [];

// Objeto con propiedades iniciales
var objeto = {
  ruta: 'ruta/imagen.jpg',
  nombre: 'imagen',
  valor: 1
};

// Función para asignar el valor de la propiedad ingresada
function asignarValor() {
  var propiedad = document.getElementById('propiedad').value;
  var valor = document.getElementById('valor').value;

  // Verificar si la propiedad existe en el objeto
  if (propiedad in objeto) {
    // Asignar el valor ingresado a la propiedad correspondiente
    objeto[propiedad] = valor;

    // Mostrar la propiedad y su valor en la etiqueta
    document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

    // Habilitar el botón de mostrar propiedades
    document.getElementById('mostrarBtn').disabled = false;
  } else {
    console.log('La propiedad ingresada no existe en el objeto.');
  }
}

// Función para borrar los valores de todas las propiedades
function borrarValores() {
  // Iterar sobre todas las propiedades del objeto
  for (var propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      // Borrar el valor de la propiedad
      objeto[propiedad] = null;
    }
  }

  // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
  document.getElementById('etiqueta').innerText = '';
  document.getElementById('mostrarBtn').disabled = true;
}

// Función para mostrar las propiedades actuales
function mostrarPropiedades() {
  var propiedadesActuales = '';

  // Iterar sobre todas las propiedades del objeto
  for (var propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      // Concatenar la propiedad y su valor
      propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
    }
  }

  // Mostrar las propiedades actuales en el campo correspondiente
  document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
}

// Función para agregar el objeto actual al array de objetos
function agregarObjeto() {
  var nombreObjeto = document.getElementById('nombreObjeto').value;

  // Crear un nuevo objeto y asignarle los valores del objeto actual
  var nuevoObjeto = {
    nombre: nombreObjeto,
    ruta: objeto.ruta,
    valor: objeto.valor
  };

  // Agregar el nuevo objeto al array
  arrayObjetos.push(nuevoObjeto);

  console.log('Objeto agregado al array:', nuevoObjeto);
}





// respuesta 5

// Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }

// // Función para mostrar los elementos del array
// function mostrarArray() {
//   var elementosArray = '';

//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];
//     elementosArray += 'Elemento ' + (i + 1) + ': ' + JSON.stringify(objetoActual) + '\n';
//   }

//   // Mostrar los elementos del array en el campo correspondiente
//   console.log(elementosArray);
// }

// // Función para borrar los valores del array
// function borrarValoresArray() {
//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];

//     // Borrar los valores de todas las propiedades del objeto
//     for (var propiedad in objetoActual) {
//       if (objetoActual.hasOwnProperty(propiedad)) {
//         objetoActual[propiedad] = null;
//       }
//     }
//   }
// }

// // Función para borrar el array
// function borrarArray() {
//   // Borrar todos los elementos del array
//   arrayObjetos = [];
// }




// respuesta 6


// Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }

// // Función para mostrar los elementos del array
// function mostrarArray() {
//   var elementosArray = '';

//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];
//     elementosArray += 'Elemento ' + (i + 1) + ': ' + JSON.stringify(objetoActual) + '\n';
//   }

//   // Mostrar los elementos del array en el campo correspondiente
//   console.log(elementosArray);
// }

// // Función para borrar los valores del array
// function borrarValoresArray() {
//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];

//     // Borrar los valores de todas las propiedades del objeto
//     for (var propiedad in objetoActual) {
//       if (objetoActual.hasOwnProperty(propiedad)) {
//         objetoActual[propiedad] = null;
//       }
//     }
//   }
// }

// // Función para borrar el array
// function borrarArray() {
//   // Borrar todos los elementos del array
//   arrayObjetos = [];
// }


// respuesta 7
// esta respuesta no funciona

// Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }

// // Función para mostrar los elementos del array
// function mostrarArray() {
//   var elementosArray = '';

//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];
//     elementosArray += 'Elemento ' + (i + 1) + ': ' + JSON.stringify(objetoActual) + '\n';
//   }

//   // Mostrar los elementos del array en el campo correspondiente
//   document.getElementById('resultado').innerText = elementosArray;
// }

// // Función para borrar los valores del array
// function borrarValoresArray() {
//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];

//     // Borrar los valores de todas las propiedades del objeto
//     for (var propiedad in objetoActual) {
//       if (objetoActual.hasOwnProperty(propiedad)) {
//         objetoActual[propiedad] = null;
//       }
//     }
//   }
// }

// // Función para borrar el array
// function borrarArray() {
//   // Borrar todos los elementos del array
//   arrayObjetos = [];
// }

// // Función para guardar el array en un archivo de texto
// function guardarArray() {
//   fetch('/guardar', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(arrayObjetos)
//   })
//     .then(response => response.text())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

// // Función para cargar el contenido del archivo en el array
// function cargarArray() {
//   fetch('/cargar')
//     .then(response => response.json())
//     .then(data => {
//       arrayObjetos = data;
//       console.log('Array cargado:', arrayObjetos);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }



// respuesta 8
// en esta respuesta no funciona el boton cargar array, todo lo demas, incluso el boton guardar, funcionan correctamente.

// // Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }

// // Función para mostrar los elementos del array
// function mostrarArray() {
//   var elementosArray = '';

//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];
//     elementosArray += 'Elemento ' + (i + 1) + ': ' + JSON.stringify(objetoActual) + '\n';
//   }

//   // Mostrar los elementos del array en el campo correspondiente
//   document.getElementById('resultado').innerText = elementosArray;
// }

// // Función para borrar los valores del array
// function borrarValoresArray() {
//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];

//     // Borrar los valores de todas las propiedades del objeto
//     for (var propiedad in objetoActual) {
//       if (objetoActual.hasOwnProperty(propiedad)) {
//         objetoActual[propiedad] = null;
//       }
//     }
//   }
// }

// // Función para borrar el array
// function borrarArray() {
//   // Borrar todos los elementos del array
//   arrayObjetos = [];
// }

// // Función para guardar el array en un archivo de texto
// function guardarArray() {
//   var data = JSON.stringify(arrayObjetos);
//   var blob = new Blob([data], { type: 'text/plain' });
//   var url = URL.createObjectURL(blob);
//   var link = document.createElement('a');
//   link.href = url;
//   link.download = 'array.txt';
//   link.click();
// }

// // Función para cargar el contenido del archivo en el array
// function cargarArray(event) {
//   var file = event.target.files[0];
//   var reader = new FileReader();

//   reader.onload = function(e) {
//     var contents = e.target.result;
//     arrayObjetos = JSON.parse(contents);
//     console.log('Array cargado:', arrayObjetos);
//   };

//   reader.readAsText(file);
// }

// respueta 9

// // Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }

// // Función para mostrar los elementos del array
// function mostrarArray() {
//   var elementosArray = '';

//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];
//     elementosArray += 'Elemento ' + (i + 1) + ': ' + JSON.stringify(objetoActual) + '\n';
//   }

//   // Mostrar los elementos del array en el campo correspondiente
//   document.getElementById('resultado').innerText = elementosArray;
// }

// // Función para borrar los valores del array
// function borrarValoresArray() {
//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];

//     // Borrar los valores de todas las propiedades del objeto
//     for (var propiedad in objetoActual) {
//       if (objetoActual.hasOwnProperty(propiedad)) {
//         objetoActual[propiedad] = null;
//       }
//     }
//   }
// }

// // Función para borrar el array
// function borrarArray() {
//   // Borrar todos los elementos del array
//   arrayObjetos = [];
// }

// // Función para guardar el array en un archivo de texto en el escritorio
// function guardarArray() {
//   var data = JSON.stringify(arrayObjetos);
//   var blob = new Blob([data], { type: 'text/plain' });
//   var url = URL.createObjectURL(blob);
//   var link = document.createElement('a');
//   link.href = url;
//   link.download = '"C:\Users\fcoja\OneDrive\Escritorio\array.txt"';
//   link.click();
// }

// // Función para cargar el contenido del archivo en el array
// function cargarArray(event) {
//   var file = event.target.files[0];
//   var reader = new FileReader();

//   reader.onload = function(e) {
//     var contents = e.target.result;
//     arrayObjetos = JSON.parse(contents);
//     console.log('Array cargado:', arrayObjetos);
//   };

//   reader.readAsText(file);
// }



// respuesta 10
// esta respuesta sigue sin funcionar en cuanto a carga de fichero,
// por lo que se opta por la solución en que solo se guarda el array.

// Array de objetos
// var arrayObjetos = [];

// // Objeto con propiedades iniciales
// var objeto = {
//   ruta: 'ruta/imagen.jpg',
//   nombre: 'imagen',
//   valor: 1
// };

// // Función para asignar el valor de la propiedad ingresada
// function asignarValor() {
//   var propiedad = document.getElementById('propiedad').value;
//   var valor = document.getElementById('valor').value;

//   // Verificar si la propiedad existe en el objeto
//   if (propiedad in objeto) {
//     // Asignar el valor ingresado a la propiedad correspondiente
//     objeto[propiedad] = valor;

//     // Mostrar la propiedad y su valor en la etiqueta
//     document.getElementById('etiqueta').innerText = propiedad + ': ' + objeto[propiedad];

//     // Habilitar el botón de mostrar propiedades
//     document.getElementById('mostrarBtn').disabled = false;
//   } else {
//     console.log('La propiedad ingresada no existe en el objeto.');
//   }
// }

// // Función para borrar los valores de todas las propiedades
// function borrarValores() {
//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Borrar el valor de la propiedad
//       objeto[propiedad] = null;
//     }
//   }

//   // Limpiar la etiqueta y deshabilitar el botón de mostrar propiedades
//   document.getElementById('etiqueta').innerText = '';
//   document.getElementById('mostrarBtn').disabled = true;
// }

// // Función para mostrar las propiedades actuales
// function mostrarPropiedades() {
//   var propiedadesActuales = '';

//   // Iterar sobre todas las propiedades del objeto
//   for (var propiedad in objeto) {
//     if (objeto.hasOwnProperty(propiedad)) {
//       // Concatenar la propiedad y su valor
//       propiedadesActuales += propiedad + ': ' + objeto[propiedad] + '\n';
//     }
//   }

//   // Mostrar las propiedades actuales en el campo correspondiente
//   document.getElementById('propiedadesActuales').innerText = propiedadesActuales;
// }

// // Función para agregar el objeto actual al array de objetos
// function agregarObjeto() {
//   var nombreObjeto = document.getElementById('nombreObjeto').value;

//   // Crear un nuevo objeto y asignarle los valores del objeto actual
//   var nuevoObjeto = {
//     nombre: nombreObjeto,
//     ruta: objeto.ruta,
//     valor: objeto.valor
//   };

//   // Agregar el nuevo objeto al array
//   arrayObjetos.push(nuevoObjeto);

//   console.log('Objeto agregado al array:', nuevoObjeto);
// }

// // Función para mostrar los elementos del array
// function mostrarArray() {
//   var elementosArray = '';

//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];
//     elementosArray += 'Elemento ' + (i + 1) + ': ' + JSON.stringify(objetoActual) + '\n';
//   }

//   // Mostrar los elementos del array en el campo correspondiente
//   document.getElementById('resultado').innerText = elementosArray;
// }

// // Función para borrar los valores del array
// function borrarValoresArray() {
//   // Iterar sobre los elementos del array
//   for (var i = 0; i < arrayObjetos.length; i++) {
//     var objetoActual = arrayObjetos[i];

//     // Borrar los valores de todas las propiedades del objeto
//     for (var propiedad in objetoActual) {
//       if (objetoActual.hasOwnProperty(propiedad)) {
//         objetoActual[propiedad] = null;
//       }
//     }
//   }
// }

// // Función para borrar el array
// function borrarArray() {
//   // Borrar todos los elementos del array
//   arrayObjetos = [];
// }

// // Función para guardar el array en un archivo de texto en el escritorio
// function guardarArray() {
//   var data = JSON.stringify(arrayObjetos);
//   var blob = new Blob([data], { type: 'text/plain' });
//   var url = URL.createObjectURL(blob);
//   var link = document.createElement('a');
//   link.href = url;
//   link.download = 'array.txt';
//   link.click();
// }

// // Función para cargar el contenido del archivo en el array
// function cargarArray() {
//     var fileInput = document.getElementById('cargarInput');
//     var file = fileInput.files[0];
//     var reader = new FileReader();
  
//     reader.onload = function (e) {
//       var contents = e.target.result;
//       arrayObjetos = JSON.parse(contents);
//       console.log('Array cargado:', arrayObjetos);
//     };
  
//     reader.readAsText(file);
//   }


// respuesta 11


// objetos.js
// var objeto = {
//     ruta: '',
//     nombre: '',
//     valor: 0
//   };
//   var objetosArray = [];
  
//   function asignarValor() {
//     var propiedad = document.getElementById('propiedadInput').value;
//     var valor = document.getElementById('valorInput').value;
//     objeto[propiedad] = valor;
//     mostrarPropiedades();
//   }
  
//   function mostrarPropiedades() {
//     var etiqueta = document.getElementById('etiqueta');
//     etiqueta.textContent = JSON.stringify(objeto);
  
//     var resultado = document.getElementById('resultado');
//     resultado.value = JSON.stringify(objeto, null, 2);
//   }
  
//   function agregarObjeto() {
//     var nombreObjeto = document.getElementById('nombreObjetoInput').value;
//     var nuevoObjeto = {
//       nombre: nombreObjeto,
//       ruta: '',
//       valor: 0
//     };
//     objetosArray.push(nuevoObjeto);
//     mostrarObjetos();
//   }
  
//   function mostrarObjetos() {
//     var resultado = document.getElementById('resultado');
//     resultado.value = JSON.stringify(objetosArray, null, 2);
//   }
  
//   function borrarValores() {
//     objetosArray.forEach(function(objeto) {
//       objeto.ruta = '';
//       objeto.valor = 0;
//     });
//     mostrarObjetos();
//   }
  
//   function guardarArray() {
//     var contenido = JSON.stringify(objetosArray, null, 2);
//     var blob = new Blob([contenido], { type: 'text/plain' });
//     var a = document.createElement('a');
//     a.href = URL.createObjectURL(blob);
//     a.download = 'array.txt';
//     a.click();
//   }
  
//   function cargarArray() {
//     var fileInput = document.getElementById('cargarInput');
//     var file = fileInput.files[0];
//     var reader = new FileReader();
  
//     reader.onload = function(event) {
//       var contenido = event.target.result;
//       objetosArray = JSON.parse(contenido);
//       mostrarObjetos();
//     };
  
//     reader.readAsText(file);
//   }
  
//   document.getElementById('cargarInput').addEventListener('change', cargarArray);
  
