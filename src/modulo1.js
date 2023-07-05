
import { arrayObjetosTablero, Tablero, srcTablero } from "./tablero.js";
import { arrayObjFiguras } from "./figuras.js";
// import { marcadores } from "./marcadores.js";
//array maestro de imagenes
// export const grupoFiguras=[
//     "../imagenes/granpremio.svg","../imagenes/siete.svg","../imagenes/sandia.svg",
//     "../imagenes/platanos.svg","../imagenes/limon.svg","../imagenes/naranja.svg",
//     "../imagenes/fresa.svg","../imagenes/cereza.svg","../imagenes/ciruela.svg"
//     ]

// const arrayCompletoTablero=arrayObjetosTablero()

// export function numAleato();
let miAleatorio= function numAleato(){
    // let aleatorio=Math.random(); 
    let numeroEntero = Math.round(Math.random() *10);


    numeroEntero= numeroEntero % 9;    
    // console.log(numeroEntero);
    return numeroEntero;    
}
console.log(numAleato())

 function cambiaBote(){
    if(resultado.value >= document.getElementById("apuesta").value){//montoApuesta.value){
      resultado.value -= montoApuesta.value
    }
    return resultado.value;
  }


// console.log(arrayObjetosTablero[0].Id)
// console.log("valor de array Completo Tablero es " + arrayCompletoTablero[0].valor);
// console.log(elTablero)
export function montoTirada(){
      let arrayTablero;
      let monto = 0;
      for (let i = 0 ; i < 4 ; i++){
        // const idsTablero="#"+Tablero[i];
console.log("el valor del i de monto tiradas es"+i);
        // arrayCompletoTablero[i].ruta
        // arrayObjetosTablero[i].ruta = document.querySelector(Tablero[i]).attr("src");
        // for(let j = 0 ; j < 9 ; j++){
        
        // if (arrayFiguras[j].ruta == arrayCompletoTablero[i].ruta){      
          // arrayCompletoTablero[i].valor = arrayFiguras[j].valor;
              // monto += parseFloat(arrayCompletoTablero[i].valor);
          // monto+=i;          
          // }     
          // console.log(monto)  
        }
        
      }
      // return    monto.toFixed(2);
    // } 