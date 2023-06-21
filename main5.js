function numAleato(){
    let aleatorio=Math.random();
    // let numAleatorio= aleatorio * 10;
    let numeroEntero = Math.trunc(aleatorio *10);
    // let numeroEntero = Math.floor(numAleatorio);
    // let numeroEntero = Math.ceil(numAleatorio);
    numeroEntero= numeroEntero % 9;  
    // console.log("numeroEntero es " + numeroEntero)   
    return numeroEntero;       
}
function numAleato3(){
    let aleatorio=Math.random();
    let numAleatorio= aleatorio * 10;
    let numeroEntero = Math.trunc((numAleatorio));
    numeroEntero= numeroEntero % 4;   
    return numeroEntero;       
}

//array maestro de imagenes
const grupoFiguras=[
"/imagenes/granpremio.svg","/imagenes/siete.svg","/imagenes/sandia.svg",
"/imagenes/platanos.svg","/imagenes/limon.svg","/imagenes/naranja.svg",
"/imagenes/fresa.svg","/imagenes/cereza.svg","/imagenes/ciruela.svg"
]

// creación de objeto figuras
 let ObjFiguras = [
  {
  "id":1,
  "nombre": "granpremio",
  "ruta":   "/imagenes/granpremio.svg",
  "valor":  36
},{
  "id":2,
  "nombre": "siete",
"ruta":  "/imagenes/siete.svg",
"valor": 33
},{
  "id":3,
  "nombre": "sandia",
"ruta":  "/imagenes/sandia.svg",
"valor": 30
},{
  "id":4,
  "nombre": "Platanos",
"ruta":  "/imagenes/platanos.svg",
"valor": 27
},{
  "id":5,
  "nombre": "limon",
"ruta":  "/imagenes/limon.svg",
"valor": 24
},{
  "id":6,
  "nombre":"naranja",
"ruta":  "/imagenes/naranja.svg",
"valor": 21
},{
  "id":7,
  "nombre":"fresa",
"ruta":  "/imagenes/fresa.svg",
"valor": 18
},{
  "id":8,
  "nombre":"cereza",
"ruta":  "/imagenes/cereza.svg",
"valor":15 
},{
  "id":9,
  "nombre":"ciruela",
"ruta":  "/imagenes/ciruela.svg",
"valor": 12
}
]
// variables para enlazar con las etiquetas img que hemos llamado tablero
let imgTablero1 = $("#imgn1");
let imgTablero2 = $("#imgn2");
let imgTablero3 = $("#imgn3");
let imgTablero4 = $("#imgn4");
let rutaImgTablero1 = imgTablero1.attr("src");
let rutaImgTablero2 = imgTablero2.attr("src");
let rutaImgTablero3 = imgTablero3.attr("src");
let rutaImgTablero4 = imgTablero4.attr("src");

// creacion de objeto tablero. Consta de 4 cajas, donde iran rotando las imagenes que se muestran un tiempo t1 cada imagen,
// durante un tiempo global t2, el cual cuando termina, se coge el valor de la imagen de cada casillero, y se suma, 
// guardandose en una variable llamada puntuación, que se usará despues.
let ObjTablero=[
  {
    Id:"#imgn1",
    "posTablero" : "Posicion 1", 
    // "Nombre" : "juan",
    "ruta":  rutaImgTablero1,
    "valor" : 5
  },
  {
    Id:"#imgn2",
    "posTablero" : "Posicion 2", 
    // "Nombre" : "jose",
    "ruta":  rutaImgTablero2,
    "valor" : 5
  },
  {
    Id:"#imgn3",
    "posTablero" : "Posicion 3", 
    // "Nombre" : "Paco",
    "ruta": rutaImgTablero3,
    "valor" : 5
  },
  {
    Id:"#imgn4",
    "posTablero" : "Posicion 4", 
    // "Nombre" : "pedro",
    ruta: imgTablero4,
    "valor" : 5
  }
]

//IDENTIFICADORES DE LAS ETIQUETA IMG QUE SE MUESTRAN.
const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"]

console.log("la imagen del tablero 0 es: " + ObjTablero[0].ruta)
/*
*  con esta funcion damos valores a las propiedades de ObjTablero en todas sus posiciones, 
*  pero no todas las propiedades
*/
/* ***********************************************************************************
Creacion de las etiquetas de html
   *********************************************************************************** */
// insertamos un elemento imput de tipo numérico, en el header.
const cabecera= document.querySelector("#cabecera");
const etiqueta = document.createElement("input");
etiqueta.id="apuesta";
etiqueta.type= "number";
etiqueta.value= 630;//provisionalmente en centimos de euro
cabecera.appendChild(etiqueta);
/* **************************Fin de creacion de html ******************************* */ 
// Variable para almacenar el valor de la apuesta
// let laApuesta = 0; 
let miApuesta = document.getElementById("apuesta");
miApuesta.addEventListener("input", function() 
  {
    laApuesta = parseInt(miApuesta.value);
    console.log("Nuevo valor de la apuesta:", laApuesta.valueOf(laApuesta));
    return laApuesta.valueOf(miApuesta);
  });




/** temporizadorCiclicoObjeto  tiene por parametros el tiempo que se muestra cada imagen, 
 * como intervalo, y el tiempo global, que tiene como parametro duracionTotal 
*/
function temporizadorCiclicoObjeto(intervalo, duracionTotal){  
    let contador = 0;
    const interval = setInterval(() => {
    for(i=0;i<4;i++){ 
      let comparacion=(ObjTablero[i].Id==Tablero[i]);
      console.log(comparacion)
      if(comparacion)
      {
        ObjTablero[i].ruta =  $(Tablero[i]).attr("src",ObjFiguras[numAleato()].ruta); 
      }     
    }
      contador++;
    
      if (contador * intervalo >= duracionTotal * 1000) 
        {
            clearInterval(interval);
            miPuntuacion();        
            console.log(miPuntuacion());
             
            console.log("Temporizador cíclico finalizado.");   
                       
        }
    }, intervalo * 10);

}

/**
 * la siguiente funcion devuelve el calculo de ganancia o perdida de la tirada.
 * @param {unNumero} unNumero 
 * @param {ratio} ratio 
 * @returns 
 */
const resultadoApuesta = function (unNumero,ratio){  
   let vueltaAppuesta;
   vueltaAppuesta=(ratio*unNumero)/100;  
  return vueltaAppuesta;
}


/**Esta funcion hace la suma de la propiedad valor de cada una de la imagenes que han salido al final de la presentacion */

let miPuntuacion = function (){ 
  // variables interiores de la funcion
  // let otroTableromas1=ObjTablero[0];
  // let otroTableromas2=ObjTablero[1];
  // let otroTableromas3=ObjTablero[2];
  // let otroTableromas4=ObjTablero[3];
// variables para enlazar el atributo src de las etiquetas img del tablero con lo que se necesite.
// let rutaImgTablero1=$(imgTablero1).attr("src");
// let rutaImgTablero2=$(imgTablero2).attr("src");
// let rutaImgTablero3=$(imgTablero3).attr("src");
// let rutaImgTablero4=$(imgTablero4).attr("src");

let puntuacion=0;
/** la siguiente funcion es para coger los puntos de cada casillero del tablero.
 *  tiene por parametros el indice del bucle padre, y la posicion del array de ObjTablero
 */
let resultadoTableroPuntos;

console.log(imgTablero1.attr("src"));
 function tableroPuntos (figIndice,posTablero){  
  let comparacionTableroFiguras=ObjFiguras[figIndice].ruta==Tablero[posTablero].src;
    if(comparacionTableroFiguras)
    {
      ObjTablero[posTablero].Nombre = ObjFiguras[figIndice].nombre 
      console.log(ObjTablero[posTablero].valor = ObjFiguras[figIndice].valor)
  //  console.log(otroTableromas[posicion].Nombre)
   puntuacion = ObjTablero[posTablero].valor;
      
    }
    return ("resultado de la suma de los puntos de los tableros" + puntuacion)
    puntuacion+=ObjFiguras[figIndice].valor
  console.log("este es el valor de la variable puntuacion " + puntuacion)
  // return puntuacion;
}


  /**con la siguiete iteracion, conseguimos ir dando valor a la variable puntuacion,
   *  para despues seguir la partida. */
  function contador(){
    for (j=0; j<4;j++){
      for (i=0;i<8; i++){    
        // tableroPuntos(i,j);
        tableroPuntos(i,0);
        // resultadoTableroPuntos(i,0);
        // tableroPuntos(i,1);
        // tableroPuntos(i,2);
        // tableroPuntos(i,3);
    resultadoTableroPuntos+=tableroPuntos(i,j);
      }

    }

  console.log("resultado de la suma de los valores de cada figura del tablero " + resultadoTableroPuntos)
return resultadoTableroPuntos;
  }

contador();


  // Con la siguiente linea, tenemos la puntuacion por tirada.

console.log("la puntuacion de esta tirada es: ");
let salidaPuntos= resultadoTableroPuntos/100;
return salidaPuntos;

} 



// console.log("variable miPuntuacion "+ miPuntuacion());
// calculo despues de apostar.
/* la idea es que si salen limones o figuras que estan por debajo, la apuesta es beneficiosa para la banca,
si salen por encima, el apostante es el que gana.
*/









// etiqueta.onchange=
//   valorApuesta=etiqueta.value;
// console.log("El nuevo valor de la apuesta es: " + valorApuesta)


/************************
 * la siguiente funcion  cambia el valor del control input, y se refleja en la consola.
 * 
 * 
 * 
 * 
 */
// $(document).ready(function() {
//   // Crea el campo de entrada de tipo numérico
//   const myInput = $("<input>", {
//     type: "number",
//     id: "myInput",
//     value: 0
//   });

  // Agrega el campo de entrada al cuerpo del documento
  // $("#cabecera").append(myInput);

  // Agrega un evento para capturar los cambios en el campo
//   etiqueta.on("input", function() {
//     const newValue = $(this).val(); // Obtén el nuevo valor del campo
//     console.log("Nuevo valor:", newValue); // Muestra el nuevo valor en la consola
//   });
// });


// let etiquetaValor= etiqueta.addEventListener("change", function(event) {
//   const valor = event.target.value;
//   // console.log("Nuevo valor:", valor);
//   return valor;
// });


// console.log(etiquetaValor)


// let input = $(etiqueta).val(etiqueta.value);
// input= 200;
// function mivalor(){
//   let valorz
// if (etiqueta.value!=input){
//   etiqueta.value=input
// return valorz
// }

// }
// etiqueta.on("input",mivalor(){
//   let resultado= mivalor()
//   return resultado;
// })

// console.log(mivalor())
// $(etiqueta).val(etiqueta.value);

  // const nuevoValor = $(this).val();
  // console.log("Nuevo valor:", nuevoValor);
// ;
// evento click que pone todo en marcha
/** este es el evento click principal, que inicia la partida. */

$("#boton").click(function(e){    
      // tiempo de ruleta 
      // temporizadorCiclico(50, 1);
      temporizadorCiclicoObjeto(25,0.5)

      


    //   temporizadorFinal(0.1);   
  });






/*
************************************************************************************* 
DE AQUI PARA ABAJO ES CODIGO NO VÁLIDO, ANTIGUO, OBSOLETO, QUE NO FUNCIONA, ...ETC
************************************************************************************* */

      // console.log("Esto son los puntos conseguidos: " + lospuntos)
      
      // console.log("el numero de salida de la funcion laPuntuacion es " + resultadoApuesta(laPuntuacion(),valorApuesta))
      // el parametro que se pone es la suma de los valores de las figuras que han salido al final.
   





   /*   *****************************************************************
      // condición que hace  que cuando el contador llegue al final, 
      // muestre la suma de los valores de las figuras de la última vuelta
   
   
      if(contador==20)
                  { 
                      // la suma de puntos la hace bien tal como está
                      let sumaPuntos=0;                      
                      sumaPuntos+=elqueatocado1.valor;
                      sumaPuntos+=elqueatocado2.valor;
                      sumaPuntos+=elqueatocado3.valor;
                      sumaPuntos+=elqueatocado4.valor;
                      console.log("Has ganado "+ sumaPuntos + " puntos")    
                  
                  }
        **********************************************************************          
*/
  /*
Nombre de funcion que devuelve el valor de una propiedad de un array

***************************************************************************
bucle doble para recorrer todos los huecos de tablero que NO FUNCIONA
for (let i=0;i<ObjFiguras.length-1; i++){  
  console.log("el valor de i es: " + i) 
      for (let j=0;j<ObjTablero.length-1;j++){  
              console.log("el valor de j es: " + j)
      ObjTablero[j].Nombre=ObjFiguras[i].nombre   
      console.log("El nombre del Tablero j es: " + ObjTablero[j].Nombre)               
              // if (ObjTablero[j].Nombre==ObjFiguras[i].nombre){
                
                ObjTablero[j].valor= ObjFiguras[i].valor;
                console.log("el nombre del casillero "+ j + " es: " + ObjTablero[j].Nombre)
                sumadorPuntos+=ObjTablero[j].valor;
              
              // }
            
         console.log( "el valor de sumador puntos es " + sumadorPuntos);     
      }             
      //  break
  }
*/   


// $("#parada").click(function(e){
//   for (let j=0;j<Tablero.length;j++){
//         console.log($(Tablero[j]).attr("src"));
//    } 
// const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"]
// // variables de los indices de los dos array anteriores
// let posFig = grupoFiguras.indexOf(grupoFiguras[numAleato()]);
// let posTab = Tablero.indexOf(Tablero[numAleato3()]);

// let indFig = function(){
//    return grupoFiguras.indexOf(grupoFiguras[numAleato()]);
// }
//     if (contador=2000)
//     {
//     if(elqueatocado1.valor == elqueatocado2.valor && elqueatocado2 == elqueatocado3 && elqueatocado3==elqueatocado4){
//   console.log(sumarValores());
//     }
//     if(elqueatocado3 == elqueatocado4){
// console.log(sumarValores());
//     }
//     if(elqueatocado3 == elqueatocado2){
// console.log(sumarValores());
//     }
//   }
    // console.log(ObjTablero[0].ruta)
    // console.log(ObjTablero[1].ruta)
    // console.log(ObjTablero[2].ruta)
    // console.log(ObjTablero[3].ruta)
    // console.log($(Tablero[0]).attr("src"));
  

// funcion de tiempo ciclico durante un tiempo determinado de duracion total
// function temporizadorCiclico(intervalo, duracionTotal) {
//     let contador = 0;
//     const interval = setInterval(() => {
//       console.log("Temporizador cíclico: ", contador);
//       contador++;
//       // $(ObjTableroTablero[0])
//   //  $(ObjTablero[0].ruta)=ObjFiguras[numAleato()].ruta 
//    console.log(ObjFiguras[numAleato()].ruta)
//   //  .attr("src",grupoFiguras[numAleato()]);
//   //  $(ObjTableroTablero[1]).attr("src",grupoFiguras[numAleato()]);
//   //  $(ObjTableroTablero[2]).attr("src",grupoFiguras[numAleato()]);
//   //  $(ObjTableroTablero[3]).attr("src",grupoFiguras[numAleato()]);
//   //  console.log(Objeto[0].ruta);

//   //  condicion de finalizacion de tiempo.
//       if (contador * intervalo >= duracionTotal * 1000) {
//         clearInterval(interval);
//         // MuestraRuta();
//         console.log("Temporizador cíclico finalizado.");
//       }
//     }, intervalo * 10);
//   }
// console.log("la ruta de la imagen de la posicion 1 es: " + ObjTablero[0].ruta)
    
    // $(Tablero[0]).attr("src",ObjFiguras[numAleato()].ruta);
    // $(Tablero[1]).attr("src",ObjFiguras[numAleato()].ruta);
    // $(Tablero[2]).attr("src",ObjFiguras[numAleato()].ruta);
    // $(Tablero[3]).attr("src",ObjFiguras[numAleato()].ruta);
//  console.log($(Tablero[0]=$(ObjTablero[0]).ruta));
//  contador++;
// console.log($(ObjTablero[0].ruta).attr("src"))
//  ("src",grupoFiguras[numAleato()]);
//  $(Tablero[1]).attr("src",grupoFiguras[numAleato()]);
//  $(Tablero[2]).attr("src",grupoFiguras[numAleato()]);
//  $(Tablero[3]).attr("src",grupoFiguras[numAleato()]);
// Código Funcional copiado a modo de backup
// const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"]
// // variables de los indices de los dos array anteriores
// let posFig = grupoFiguras.indexOf(grupoFiguras[numAleato()]);
// let posTab = Tablero.indexOf(Tablero[numAleato3()]);

// let indFig = function(){
//    return grupoFiguras.indexOf(grupoFiguras[numAleato()]);
// }
// // funcion de tiempo ciclico durante un tiempo determinado de duracion total
// function temporizadorCiclico(intervalo, duracionTotal) {
//     let contador = 0;
//     const interval = setInterval(() => {
//       console.log("Temporizador cíclico: ", contador);
//       contador++;
//    $(Tablero[0]).attr("src",grupoFiguras[numAleato()]);
//    $(Tablero[1]).attr("src",grupoFiguras[numAleato()]);
//    $(Tablero[2]).attr("src",grupoFiguras[numAleato()]);
//    $(Tablero[3]).attr("src",grupoFiguras[numAleato()]);
//       if (contador * intervalo >= duracionTotal * 1000) {
//         clearInterval(interval);
       
//         console.log("Temporizador cíclico finalizado.");
//       }
//     }, intervalo * 10);
//   }
// $("#boton").click(function(e){    
//       // tiempo de ruleta 
//       temporizadorCiclico(50, 1);
//     //   temporizadorFinal(0.1);   
// });
//  function comparaRuta(){ 
//   for (let i=0; i< ObjFiguras.length-1; i++)
//   {
//     if (ObjFiguras[i].ruta != ObjTablero[i].ruta)
//     {
//       ObjTablero[i].ruta += ObjFiguras[i].ruta;   
//       console.log("el nuevo valor es"  +  ObjTablero[i].ruta)
//     }
    
//     return (ObjTablero[i].ruta)
//   }
  
// }
// let sumaValores;
// let suma=0;
// function sumarValores(){ 
//   for (let i=0; i<Tablero.length; i++){
//     console.log (ObjTablero[i].posTablero);
//     ObjTablero[i].valor= i;
//     console.log(ObjTablero[i].valor);
//     suma=suma + ObjTablero[i].valor;
//     console.log("la suma vale " + suma)
   
//   } 
// }
/*
**************************************************************************************************************
 * ENSAYO DE FUNCION PARA CAMBIAR PROPIEDAD DE UN OBJETO. De momento NO FUNCIONA
function cambioValores( nombreObjeto, n, nombrePropiedad,valorPropiedad){
 elObjeto=$(nombreObjeto[n]);
  if(nombreObjeto.nombrePropiedad!=ObjTablero[0].Nombre){
    nombreObjeto.nombrePropiedad=valorPropiedad;
    console.log( "el nuevo valor de la propiedad " + nombrePropiedad + " del objeto " + nombreObjeto[$(n)] + " es: " + nombreObjeto.nombrePropiedad)
    console.log("el nombre del objeto es " + elObjeto[n].Nombre)
    return(elObjeto.nombrePropiedad);
  }

}
cambioValores(ObjTablero,0,"Nombre", "melon")
*********************************** */

/* ******************************************************* 
solo son testigos de consola para comprobacion

  let nombreTablero1 = otroTableromas1.Nombre;
  let nombreTablero2 = otroTableromas2.Nombre;
  let nombreTablero3 = otroTableromas3.Nombre;
  let nombreTablero4 = otroTableromas4.Nombre;
  let comparacion1=imgTablero1.attr("src")!=ObjFiguras[0].ruta;
  let comparacion2=imgTablero2.attr("src")!=ObjFiguras[1].ruta;
  let comparacion3=imgTablero3.attr("src")!=ObjFiguras[2].ruta;
  let comparacion4=imgTablero4.attr("src")!=ObjFiguras[3].ruta;
 console.log(comparacion1)
 console.log(comparacion2)
 console.log(comparacion3)
 console.log(comparacion4)
    console.log(otraImagen1);
    console.log(otraImagen2);
    console.log(otraImagen3);
    console.log(otraImagen4);
    nombreTablero1=ObjTablero[0].Nombre;
    console.log(nombreTablero1);
    console.log(otraImagen1);
    nombreTablero2=ObjTablero[1].Nombre; 
    console.log(nombreTablero2);
    console.log(otraImagen2);
    nombreTablero3=ObjTablero[2].Nombre;
    console.log(nombreTablero3);
    console.log(otraImagen3);
    nombreTablero4=ObjTablero[3].Nombre;
    console.log(nombreTablero4);
    console.log(otraImagen4);
************************************************************* */



















































































// let i=0;
// do {
   
//   for (let i=0; i<grupoFiguras.length; i++)
// console.log(indFig(numAleato()))
// setInterval(() => {
//      $(Tablero[0]).attr("src",grupoFiguras[indFig]);
//      $(Tablero[1]).attr("src",grupoFiguras[indFig]);
//      $(Tablero[2]).attr("src",grupoFiguras[indFig]);
//      $(Tablero[3]).attr("src",grupoFiguras[indFig]);
// }, 250); 
//   i++; 
// } while (i<1000);