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
export function asignaciones(){
let imgTablero1 = document.getElementById("imgn1");
let imgTablero2 = $("#imgn2");
let imgTablero3 = $("#imgn3");
let imgTablero4 = $("#imgn4");
let rutaImgTablero1 = imgTablero1.attr("src");
let rutaImgTablero2 = imgTablero2.attr("src");
let rutaImgTablero3 = imgTablero3.attr("src");
let rutaImgTablero4 = imgTablero4.attr("src");
return(  
[rutaImgTablero1,rutaImgTablero2,rutaImgTablero3,rutaImgTablero4]

);
}


// creacion de objeto tablero. Consta de 4 cajas, donde iran rotando las imagenes que se muestran un tiempo t1 cada imagen,
// durante un tiempo global t2, el cual cuando termina, se coge el valor de la imagen de cada casillero, y se suma, 
// guardandose en una variable llamada puntuación, que se usará despues.

let ObjTablero=[
  {
    Id:"#imgn1",
    "posTablero" : "Posicion 1", 
    // "Nombre" : "juan",
    "ruta":  asignaciones[0],
    "valor" : 5
  },
  {
    Id:"#imgn2",
    "posTablero" : "Posicion 2", 
    // "Nombre" : "jose",
    "ruta":  asignaciones[1],
    "valor" : 5
  },
  {
    Id:"#imgn3",
    "posTablero" : "Posicion 3", 
    // "Nombre" : "Paco",
    "ruta": asignaciones[2],
    "valor" : 5
  },
  {
    Id:"#imgn4",
    "posTablero" : "Posicion 4", 
    // "Nombre" : "pedro",
    ruta: asignaciones[3],
    "valor" : 5
  }
]

//IDENTIFICADORES DE LAS ETIQUETA IMG QUE SE MUESTRAN.
export const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"];



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

export function cambiaBote(){
    if(resultado.value >= montoApuesta.value){
      resultado.value -= montoApuesta.value
    }
    return resultado.value;
  }

 export function montoTirada(){
    let monto = 0;
    for (let i = 0 ; i < 4 ; i++){
       ObjTablero[i].ruta = $(Tablero[i]).attr("src");
      for(let j = 0 ; j < 9 ; j++){
      
      if (ObjFiguras[j].ruta == ObjTablero[i].ruta){      
        ObjTablero[i].valor = ObjFiguras[j].valor;
            monto += parseFloat(ObjTablero[i].valor);
        // monto+=i;          
        }     
        // console.log(monto)  
      }
      
    }
    return    monto.toFixed(2);
  } 