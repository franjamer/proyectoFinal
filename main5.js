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
  let total=0;
function temporizadorCiclicoObjeto(intervalo, duracionTotal){  
    let contador = 0;  
    const interval = setInterval(() => {      
    for(i=0;i<4;i++)
    {      
      let comparacion=(ObjTablero[i].Id==Tablero[i]);      
      if(comparacion)
        {        
          $(Tablero[i]).attr("src",ObjFiguras[numAleato()].ruta); 
            ObjTablero[i].ruta = $(Tablero[i]).attr("src");
            for (j=0; j<8;j++)
            {
              if ((ObjFiguras[j].ruta==ObjTablero[i].ruta)&&(contador==19))
              {
                ObjTablero[i].valor=ObjFiguras[j].valor
                console.log(ObjTablero[i].ruta + " " + ObjTablero[i].valor)
              }
            }       
        }
        if(contador==19){
          
          total+=ObjTablero[i].valor
          console.log("la suma total es " + total)
        }  
    }    

        
   
    
      contador++;
    
      if (contador * intervalo >= duracionTotal * 1000) 
        {
            clearInterval(interval);
            // miPuntuacion();        
            console.log(total);
             
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

// evento click que pone todo en marcha
/** este es el evento click principal, que inicia la partida. */

$("#boton").click(function(e){    
      // tiempo de ruleta 
      // temporizadorCiclico(50, 1);
      temporizadorCiclicoObjeto(25,0.5)
    //   temporizadorFinal(0.1);   
  });


























































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