import { Tablero, srcTablero,arrayObjetosTablero } from "./tablero.js";
//array maestro de imagenes
export const grupoFiguras=[
    "../imagenes/granpremio.svg","../imagenes/siete.svg","../imagenes/sandia.svg",
    "../imagenes/platanos.svg","../imagenes/limon.svg","../imagenes/naranja.svg",
    "../imagenes/fresa.svg","../imagenes/cereza.svg","../imagenes/ciruela.svg"
    ]


    const arrayCompletoTablero=arrayObjetosTablero()







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
      arrayTablero[i].valor=0;
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
      //  arrayTablero[i].ruta
      arrayCompletoTablero[i].ruta = Tablero[i].attr("src");
      for(let j = 0 ; j < 9 ; j++){
      
      if (arrayFiguras[j].ruta == arrayCompletoTablero[i].ruta){      
        arrayCompletoTablero[i].valor = arrayFiguras[j].valor;
            monto += parseFloat(arrayTablero[i].valor);
        // monto+=i;          
        }     
        // console.log(monto)  
      }
      
    }
    return    monto.toFixed(2);
  } 