//array maestro de imagenes
export const grupoFiguras=[
    "../imagenes/granpremio.svg","../imagenes/siete.svg","../imagenes/sandia.svg",
    "../imagenes/platanos.svg","../imagenes/limon.svg","../imagenes/naranja.svg",
    "../imagenes/fresa.svg","../imagenes/cereza.svg","../imagenes/ciruela.svg"
    ]

// creación de objeto figuras
export let ObjFiguras = [
    {
      "id":1,
      "nombre":"ciruela",
    "ruta":  "../imagenes/ciruela.svg",
    "valor": 0.05
    },{
      "id":2,
      "nombre":"cereza",
    "ruta":  "../imagenes/cereza.svg",
    "valor": 0.10 
    },{
      "id":3,
      "nombre":"fresa",
    "ruta":  "../imagenes/fresa.svg",
    "valor": 0.20
    },{
      "id":4,
      "nombre":"naranja",
    "ruta":  "../imagenes/naranja.svg",
    "valor": 0.5
    },{
      "id":5,
      "nombre": "limon",
    "ruta":  "../imagenes/limon.svg",
    "valor": 1
    },{
      "id":6,
      "nombre": "Platanos",
    "ruta":  "../imagenes/platanos.svg",
    "valor": 2
    },{
      "id":7,
      "nombre": "sandia",
    "ruta":  "../imagenes/sandia.svg",
    "valor": 5
    },{
      "id":8,
      "nombre": "siete",
    "ruta":  "../imagenes/siete.svg",
    "valor": 10
    },{
    "id":9,
    "nombre": "granpremio",
    "ruta":   "../imagenes/granpremio.svg",
    "valor":  20
  }
]


export let imgTablero1 = $("#imgn1");
export let imgTablero2 = $("#imgn2");
export let imgTablero3 = $("#imgn3");
export let imgTablero4 = $("#imgn4");
export let rutaImgTablero1 = imgTablero1.attr("src");
export let rutaImgTablero2 = imgTablero2.attr("src");
export let rutaImgTablero3 = imgTablero3.attr("src");
export let rutaImgTablero4 = imgTablero4.attr("src");

export let ObjTablero=[
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
      ruta: rutaImgTablero4,
      "valor" : 5
    }
  ]

//IDENTIFICADORES DE LAS ETIQUETA IMG QUE SE MUESTRAN.
export const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"];  
// variables para enlazar con las etiquetas img que hemos llamado tablero

let imgTablero1 = $("#imgn1");
let imgTablero2 = $("#imgn2");
let imgTablero3 = $("#imgn3");
let imgTablero4 = $("#imgn4");
let rutaImgTablero1 = imgTablero1.attr("src");
let rutaImgTablero2 = imgTablero2.attr("src");
let rutaImgTablero3 = imgTablero3.attr("src");
let rutaImgTablero4 = imgTablero4.attr("src");
//Creación de array de objetos para manejar los cuadros individualmente
const cuadrosSolitarios=[
    {
      "id": 1,
      "inicio":0,
      "fin":1
    },
    {
      "id":2,
      "inicio":1,
      "fin":2
    },
    {
      "id":3,
      "inicio": 2,
      "fin": 3
    },
    {
      "id":4,
      "inicio":3,
      "fin":4,
    }
]

// export function numAleato();
export default function numAleato(){
    let aleatorio=Math.random(); 
    let numeroEntero = Math.trunc(aleatorio *10);
    numeroEntero= numeroEntero % 9;    
    console.log(numeroEntero);
    return numeroEntero;    
}
export function reseteo (){
    for(i=0; i<4;i++){
      ObjTablero[i].valor=0;
    }
  }

