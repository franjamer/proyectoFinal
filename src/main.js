
// import { arrayObjetosTablero, Tablero, srcTablero } from "./tablero.js";
// import { arrayObjFiguras } from "./figuras.js";
// import numAleato from "./modulo1.js";
// import { montoTirada } from "./modulo1.js";
// import  botoneras  from "./botonera.js";
// import { marcadores } from './marcadores.js';
// import { cambiaBote } from "./modulo1.js";

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

/* ********************************************Creacion de las etiquetas de html****************** */
// const cuerpo = document.querySelector("#cuerpo");
// asignaciones();
botoneras();

// 
// botoneras();

marcadores();
const arraySrcTablero = srcTablero();
const arrayFiguras = arrayObjFiguras();
const arrayTablero = arrayObjetosTablero();
const idDeTablero=Tablero;


let recorridoTablero= function recorreTablero(){
  for (let i=0; i>=4; i++){
    console.log(idDeTablero[i])
    console.log(arrayFiguras[i].ruta)
  }
  return( idDeTablero, arrayFiguras[i].ruta)
}
console.log(idDeTablero[0])
console.log(arrayFiguras[1].ruta)
arraySrcTablero[2].ruta=arrayFiguras[3].ruta
console.log(arraySrcTablero[2].ruta)
/* **************************Fin de creacion de html ******************************* */ 
function reseteo (){
  for(let i=0; i<4;i++){
    arrayTablero[i].valor=0;
  }
  return 
}

let totalizador = function(){
  let operaciones = 0;
  
        let apuesta=parseFloat(document.getElementById("apuesta").value);
        operaciones = (parseInt(montoTirada()/100) * apuesta);//se quita la division por 100 para probar
        // resultado.value=operaciones;
        console.log("el valor de la tirada es "+ montoTirada())
        console.log("el valor de la apuesta es " + apuesta)
        // resultado.value = (operaciones); 
    return (operaciones);
};

console.log(arrayTablero[0].Id)

arrayObjetosTablero();

/** temporizadorCiclicoObjeto  tiene por parametros el tiempo que se muestra 
 * cada imagen,como intervalo, y el tiempo global, que tiene como parametro 
 * duracionTotal 
*/
console.log(idDeTablero[0])

  let total=0;
  function temporizadorCiclicoObjetosTablero(intervalo, duracionTotal){  
    let contador = 0;  
    const interval = setInterval(() => {      
    let totalinterno = 0;
    let i = 0;
    let j = 0;
    
    // document.getElementsByClassName("cajas").removeAttr("disabled") 
      for(i = 0 ; i < 4 ; i++)
    { 
      let marco= document.getElementById(arrayTablero[i])
      let srcValor= [src]
      console.log(marco.srcValor);
      if(idDeTablero[i]=== arrayTablero[i].Id){
        console.log("la id del arrayTablero "+ arrayTablero[i].Id + " es igual a la idDeTablero "+ idDeTablero[i])
        
      }

      // let srcValor=frame.src  
        console.log(idDeTablero[i])
        console.log(arrayTablero[i].ruta)
      let comparacion = (arrayTablero[i].Id == idDeTablero[i]);      
      if(comparacion)
        { 
          // document.querySelector(idDeTablero[i]).attr("src",arrayFiguras[numAleato()].ruta); 
            // arrayTablero[i].ruta = document.querySelector(idDeTablero[i]).attr("src");
            for (j = 0 ; j < 8 ; j++)
            // {
              if ((arrayFiguras[j].ruta == arrayTablero[i].ruta) && (contador == 19))
              {
                console.log(arrayTablero[i].valor)
                console.log(arrayFiguras[j].valor)
                arrayTablero[i].valor = arrayFiguras[j].valor            
               
              // }
             
            }       
        }
        if(contador == 19){
          console.log("penultimo paso del conteo")
          // totalinterno += arrayTablero[i].valor;        
          // total = totalinterno;         
        }  
    }       
      contador++;
    
      if (contador * intervalo >= duracionTotal * 1000) 
        {
            clearInterval(interval);       
            totalizador();           
             tiradas.value-=1;
            console.log("Temporizador cíclico finalizado.");                   
        }
    }, intervalo * 10);
}
/**
 * la siguiente funcion devuelve el calculo de ganancia o perdida de la tirada.
 * una vez que le damos al click del boton tirar, se captura el valor del bote, se guarda
 * la suma de las figuras que salen cuando dejan de cambiar, y se hace la siguiente cuenta
 *   ((suma de las figuras/100)* valor del bote), y el resultado se cambia 
 * en el campo de apuesta, por el valor que hubiera.
 */

/*************cambio del mecanismo*********************************************************** */

/** el nuevo mecanismo es con combinaciones completas, es decir, en la tabla de premios
 * hay dos cifras. La cifra que hay entre paréntesis, es lo que vale cada figura, y la cifra que está fuera 
 * del paréntesis es jackpot, y es si sale las cuatro figuras iguales, y es multiplicativo, es decir, que lo que
 * se iba ganando, se le suma esa cifra.
 */

// funcion para pasar a tiradas el campo resultado.
// funcion para solo para contar cuanto vale la suma del valor de las figuras

// evento click que pone todo en marcha
/** este es el evento click principal, que inicia la partida. */
document.getElementById("superBoton").addEventListener("click", ()=>{
  // (e).preventDefault();
  console.log("estoy pulsando el superbotón")
})
document.getElementById("boton").addEventListener("click",()=>{   
    console.log("estoy danto al boton de tirar"); 
  cambiaBote();
        reseteo();
 document.getElementById("resultado").value -= document.getElementById("apuesta").value;// montoApuesta.value;     
          if(tiradas.value >= 1){
            temporizadorCiclicoObjetosTablero(25,0.5);   
          }
          else{
            alert("Se te agotaron las tiradas, por favor, renueva saldo para seguir jugando.")
          }  
      return (
          (console.log("el boton tirar está pulsado"))
        )
      }
    );

  // botones individual para mover cada una de las cajas con un boton.

document.getElementById("caja1").click(function(e){ 
    temporizadorCiclicoTablero(25,0.5,0)
    montoTirada();
});
  document.getElementById("caja2").click(function(e){    
    temporizadorCiclicoTablero(25,0.5,1)
    montoTirada();
});
  document.getElementById("caja3").click(function(e){    
    temporizadorCiclicoTablero(25,0.5,2)
    montoTirada();
});
  document.getElementById("caja4").click(function(e){  
    
    temporizadorCiclicoTablero(25,0.5,3)
    montoTirada();
});
document.getElementById("pasoTiradas").click(function(){
  pasoResultadoaTiradas()
  parseInt(tiradas.value=pasoResultadoaTiradas());
  parseInt(resultado.value =0);
})

/*****************************funcion para relacionar cantidad apostada con bote******************************* */
//esta funcion la sustituiremos por un modal que sale cuando carga la página y el campo resultado no tiene valor, o es 0.
// function cambiaBote(){
//   if(resultado.value >= montoApuesta.value){
//     resultado.value -= montoApuesta.value
//   }
//   return resultado.value;
// }

/*******************funcion para convertir el resultado de la tirada principal en tiradas********************** */
function pasoResultadoaTiradas(){
  let resVal = parseInt(resultado.value);
  let tirVal = parseInt(tiradas.value);
  if (tirVal >= 3 || resVal > 10){
    tirVal=tirVal+(resVal/10);    
    return (parseInt(tirVal));
  }
  else{
    alert("no queda bote para pasar a tiradas")
  }
}

/********************creacion de modal para ingresar saldo*************** */
const abrirModal = document.querySelector("#nuevaPartida");
const modal = document.querySelector(".modales");
const cerrarModal = document.querySelector(".modal__cierre");
const nuevoSaldo = document.querySelector("#nuevoSaldo")
abrirModal.addEventListener('click', (e)=>{
  e.preventDefault();

  modal.classList.add("modal---mostrar");
});
cerrarModal.addEventListener("click",(e)=>{
  e.preventDefault();
  resultado.value = nuevoSaldo.value;
  tiradas.value = tiradas.defaultValue;
  modal.classList.remove("modal---mostrar");
});

/**********************creacion de modal para premio********************** */
let modalPremio = document.querySelector("#premio");
let cerrarPremioModal = document.querySelector(".modal_cierre_premios");
modalPremio.addEventListener("click",(e)=>{
  e.preventDefault();
  console.log("has pulsado el boton cerrar de la ventana de premios");
  modalPremio.classList.remove("modal---mostrar");
});

/********************creacion de modal para cobrar premio en tarjeta de crédito*************** */
const abrirModalTarjeta = document.querySelector("#cobrarResultado");
const modalTarjeta = document.querySelector("#tarjeta");
const cerrarModalTarjeta = document.querySelector(".modal__cierre");

abrirModalTarjeta.addEventListener('click', (e)=>{
  e.preventDefault();
  modalTarjeta.classList.add("modal---mostrar");
});
modalTarjeta.addEventListener("click",(e)=>{
  e.preventDefault();

  modalTarjeta.classList.remove("modal---mostrar");
});

  /** funcion para mover las figuras individualmente.*/
function temporizadorCiclicoTablero(intervalo, duracionTotal,numero){  
  let contador = 0;  
  const interval = setInterval(() => {      
  let totalinterno = 0;
  let descuentoInterno = 0;
  let i = 0;
  let j = 0;
  descuentoInterno=(total-((arrayTablero[numero].valor).toFixed(2)));
  console.log("el valor de total, menos la caja " + numero + " es " + descuentoInterno)
    for(i=cuadrosSolitarios[numero].inicio;i<cuadrosSolitarios[numero].fin;i++)
    {   
      let comparacion=(arrayTablero[i].Id==Tablero[i]);      
      if(comparacion)
        {        
          $(Tablero[i]).attr("src", arrayFiguras[numAleato()].ruta); 
            arrayTablero[i].ruta = $(Tablero[i]).attr("src");
            for (j=0; j<8;j++)
            {
              if ((arrayFiguras[j].ruta==arrayTablero[i].ruta)&&(contador==19))
              {
                arrayTablero[i].valor = arrayFiguras[j].valor
                console.log(arrayTablero[i].ruta + " " + arrayTablero[i].valor);
              }
            }       
        }
      // condicion para actualizar las variables que varian cuando termine la tirada
      if(contador == 19){       
        console.log("el descuento interno es " + descuentoInterno);
        totalinterno=arrayTablero[i].valor + descuentoInterno
        console.log("la suma total es " + totalinterno)
        total = totalinterno;
       
        }  
    }       
    contador ++;
  // condicion para salir del bucle del setInterval
    if (contador * intervalo >= duracionTotal * 1000) 
      {
          clearInterval(interval);
          tiradas.value=controlTiradas(tiradas.value);
          totalizador();
          console.log("Temporizador cíclico finalizado.");                 
      }
  }, intervalo * 10);
}
let controlTiradas = function (valorTiradas){
  let nuevoValorTirada=parseInt(valorTiradas);
  if(parseInt(tiradas.value)>>1){
    tiradas.readOnly = true;
   nuevoValorTirada -= 1;   
  }
  else {
    nuevoValorTirada=0;
    alert("ya no te quedan tiradas, pasa saldo, o renueva saldo")
    $(".cajas").attr("disabled",true)
  }
  return nuevoValorTirada;
}


let evaluarPremio=function(numero) {
  let premio = '';

  switch (true) {
    case numero === 80:{
      premio = 'Premio gordo: HAS GANADO TODO EL BOTE';
      modalPremio.classList.add("modal---mostrar");
      break;
    }      
    case numero === 40:{
       modalPremio.classList.add("modal---mostrar");
      premio = 'Segundo premio: HAS GANADO 1/2 BOTE';
      break;
    }     
    case numero === 20:{
      modalPremio.classList.add("modal---mostrar");
        premio = 'Tercer premio: HAS GANADO 1/3 DEL BOTE';
      break;
    }    
    default:
      premio = 'Sin premio';      
  }
  return premio;
}
