import  grupoFiguras  from "./modulo1.js";
import  ObjFiguras  from "./modulo1.js";
import numAleato from "./modulo1.js";
import reseteo from "./modulo1.js";
import Tablero from "./modulo1.js";
import { imgTablero1,imgTablero2,imgTablero3,imgTablero4,rutaImgTablero1,rutaImgTablero2,rutaImgTablero3,rutaImgTablero4 } from "./modulo1.js";
import ObjTablero from "./modulo1.js";
import cuadrosSolitarios from "./modulo1.js";

// creación de objeto figuras
//  let ObjFiguras = [
//       {
//         "id":1,
//         "nombre":"ciruela",
//       "ruta":  "../imagenes/ciruela.svg",
//       "valor": 0.05
//       },{
//         "id":2,
//         "nombre":"cereza",
//       "ruta":  "../imagenes/cereza.svg",
//       "valor": 0.10 
//       },{
//         "id":3,
//         "nombre":"fresa",
//       "ruta":  "../imagenes/fresa.svg",
//       "valor": 0.20
//       },{
//         "id":4,
//         "nombre":"naranja",
//       "ruta":  "../imagenes/naranja.svg",
//       "valor": 0.5
//       },{
//         "id":5,
//         "nombre": "limon",
//       "ruta":  "../imagenes/limon.svg",
//       "valor": 1
//       },{
//         "id":6,
//         "nombre": "Platanos",
//       "ruta":  "../imagenes/platanos.svg",
//       "valor": 2
//       },{
//         "id":7,
//         "nombre": "sandia",
//       "ruta":  "../imagenes/sandia.svg",
//       "valor": 5
//       },{
//         "id":8,
//         "nombre": "siete",
//       "ruta":  "../imagenes/siete.svg",
//       "valor": 10
//       },{
//       "id":9,
//       "nombre": "granpremio",
//       "ruta":   "../imagenes/granpremio.svg",
//       "valor":  20
//     }
// ]

//Creación de array de objetos para manejar los cuadros individualmente
// const cuadrosSolitarios=[
//     {
//       "id": 1,
//       "inicio":0,
//       "fin":1
//     },
//     {
//       "id":2,
//       "inicio":1,
//       "fin":2
//     },
//     {
//       "id":3,
//       "inicio": 2,
//       "fin": 3
//     },
//     {
//       "id":4,
//       "inicio":3,
//       "fin":4,
//     }
// ]
// variables para enlazar con las etiquetas img que hemos llamado tablero

// let imgTablero1 = $("#imgn1");
// let imgTablero2 = $("#imgn2");
// let imgTablero3 = $("#imgn3");
// let imgTablero4 = $("#imgn4");
// let rutaImgTablero1 = imgTablero1.attr("src");
// let rutaImgTablero2 = imgTablero2.attr("src");
// let rutaImgTablero3 = imgTablero3.attr("src");
// let rutaImgTablero4 = imgTablero4.attr("src");

// creacion de objeto tablero. Consta de 4 cajas, donde iran rotando las imagenes que se muestran un tiempo t1 cada imagen,
// durante un tiempo global t2, el cual cuando termina, se coge el valor de la imagen de cada casillero, y se suma, 
// guardandose en una variable llamada puntuación, que se usará despues.
// let ObjTablero=[
//   {
//     Id:"#imgn1",
//     "posTablero" : "Posicion 1", 
//     // "Nombre" : "juan",
//     "ruta":  rutaImgTablero1,
//     "valor" : 5
//   },
//   {
//     Id:"#imgn2",
//     "posTablero" : "Posicion 2", 
//     // "Nombre" : "jose",
//     "ruta":  rutaImgTablero2,
//     "valor" : 5
//   },
//   {
//     Id:"#imgn3",
//     "posTablero" : "Posicion 3", 
//     // "Nombre" : "Paco",
//     "ruta": rutaImgTablero3,
//     "valor" : 5
//   },
//   {
//     Id:"#imgn4",
//     "posTablero" : "Posicion 4", 
//     // "Nombre" : "pedro",
//     ruta: rutaImgTablero4,
//     "valor" : 5
//   }
// ]

//IDENTIFICADORES DE LAS ETIQUETA IMG QUE SE MUESTRAN.
// const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"]

/* ********************************************Creacion de las etiquetas de html****************** */
// selectores de los elementos que insertamos de forma dinamica en el HTML.
const cabecera = document.querySelector("#cabecera");
const labelApuesta = document.createElement("label");
const montoApuesta = document.createElement("input");//es el control numérico que muestra cuanto quieres apostar.
const apostar = document.createElement("button");//es el botón que adjudica el valor del control numérico, al campo resultado antes de tirar.
const labelResultado = document.createElement("label");
const resultado= document.createElement("input");//es el campo donde se muestra el valor del resultado cuando finaliza la tirada.
const labelTirada = document.createElement("label");
const tiradas = document.createElement("input");
const botonera = document.querySelector("#botonera");
const pasoTiradas = document.createElement("button");
const cobrar = document.createElement("button");
const nuevaPart = document.createElement("button");

// boton para hacer una nueva partida
nuevaPart.id ="nuevaPartida";
// nuevaPart.className="modal";//agrega una clase,
nuevaPart.innerHTML = "Nueva Partida";
botonera.appendChild(nuevaPart);

// boton que pasa el valor de resultado a tiradas
pasoTiradas.id="pasoTiradas";
pasoTiradas.innerText ="Cobrar bote en Tiradas";
botonera.appendChild(pasoTiradas);

// booton para cobrar lo que tenga en el bote.
cobrar.id = "cobrarResultado";
cobrar.innerHTML ="Pasar bote a mi Tarjeta";
botonera.appendChild(cobrar);

// propiedades del label de resultado
labelResultado.id ="tituloResultado";
labelApuesta.class ="Etiquetas-class";
labelResultado.textContent ="Monto resultante";
labelResultado.for = "resultado";
cabecera.appendChild(labelResultado);

// propiedades del elemento elemento resultado
resultado.id ="resultado";
name="resultado"
// resultado.innerHTML="hola";
resultado.type = "number";
resultado.textContent =  "resultado de la tirada";
resultado.readOnly = true;//establece el campo resultado como de solo lectura.
resultado.min = 0;
resultado.value = 0;
resultado.title = "resultado de la apuesta"
labelResultado.appendChild(resultado);

//propiedades del Label de apuesta
labelApuesta.id="labelApuesta";
labelApuesta.textContent="Cantidad Apostada (€)";
labelApuesta.for= "apuesta";
labelApuesta.class="Etiquetas-class";
labelApuesta.className= "is-primary is-rounded";
cabecera.appendChild(labelApuesta);

//propiedades del Elemento montoApuesta 
montoApuesta.readOnly = false;
montoApuesta.required;
montoApuesta.min = 5;
montoApuesta.id = "apuesta";
montoApuesta.className= "is-primary is-rounded";
montoApuesta.type =  "number";
montoApuesta.step = 0.01;
montoApuesta.value =  5;//provisionalmente en centimos de euro
labelApuesta.appendChild(montoApuesta);

//propiedades del label del elemento tiradas
labelTirada.id = "labelTirada";
labelTirada.className= "is-primary is-rounded";
labelTirada.textContent = "Numero de Tiradas";
labelTirada.for =  "tiradas";
labelTirada.class = "Etiquetas-class";
cabecera.appendChild(labelTirada);

// atributos de Elemento Tiradas
tiradas.id = "tiradas";
tiradas.type ="number";
tiradas.defaultValue =3;
tiradas.value = 3;
tiradas.type ="number";
tiradas.readOnly = true;
labelTirada.appendChild(tiradas);
/* **************************Fin de creacion de html ******************************* */ 

/** temporizadorCiclicoObjeto  tiene por parametros el tiempo que se muestra cada imagen, 
 * como intervalo, y el tiempo global, que tiene como parametro duracionTotal 
*/
  let total=0;
  function temporizadorCiclicoObjetosTablero(intervalo, duracionTotal){  
    let contador = 0;  
    const interval = setInterval(() => {      
    let totalinterno = 0;
    let i = 0;
    let j = 0;
    $(".cajas").removeAttr("disabled") 
      for(i = 0 ; i < 4 ; i++)
    {      
      let comparacion = (ObjTablero[i].Id == Tablero[i]);      
      if(comparacion)
        {        
          $(Tablero[i]).attr("src",ObjFiguras[numAleato()].ruta); 
            ObjTablero[i].ruta = $(Tablero[i]).attr("src");
            for (j = 0 ; j < 8 ; j++)
            {
              if ((ObjFiguras[j].ruta == ObjTablero[i].ruta) && (contador == 19))
              {
                ObjTablero[i].valor = ObjFiguras[j].valor
            
              }
            }       
        }
        if(contador == 19){
          totalinterno += ObjTablero[i].valor;        
          total = totalinterno;         
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
let totalizador = function(){
  let operaciones = 0;
  let tirada=montoTirada();
  let apuesta=parseFloat(montoApuesta.value);
        operaciones = (parseFloat(tirada) * apuesta);//se quita la division por 100 para probar
        // resultado.value=operaciones;
        console.log("el valor de la tirada es "+ tirada)
        console.log("el valor de la apuesta es " + apuesta)
        resultado.value = parseInt(operaciones); 
  return parseInt(operaciones);
};
// funcion para pasar a tiradas el campo resultado.
// funcion para solo para contar cuanto vale la suma del valor de las figuras
let montoTirada = function(){
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
// evento click que pone todo en marcha
/** este es el evento click principal, que inicia la partida. */
$("#boton").click(function(e){   
      cambiaBote();
      reseteo();
      resultado.value -= montoApuesta.value;
      if(tiradas.value >= 1){
        temporizadorCiclicoObjetosTablero(25,0.5);   
      }
      else{
        alert("Se te agotaron las tiradas, por favor, renueva saldo para seguir jugando.")
      }      
  });

  // botones individual para mover cada una de las cajas con un boton.

  $("#caja1").click(function(e){ 
    temporizadorCiclicoTablero(25,0.5,0)
    montoTirada();
});
  $("#caja2").click(function(e){    
    temporizadorCiclicoTablero(25,0.5,1)
    montoTirada();
});
  $("#caja3").click(function(e){    
    temporizadorCiclicoTablero(25,0.5,2)
    montoTirada();
});
  $("#caja4").click(function(e){  
    
    temporizadorCiclicoTablero(25,0.5,3)
    montoTirada();
});
$("#pasoTiradas").click(function(){
  pasoResultadoaTiradas()
  parseInt(tiradas.value=pasoResultadoaTiradas());
  parseInt(resultado.value =0);
})

/*****************************funcion para relacionar cantidad apostada con bote******************************* */
//esta funcion la sustituiremos por un modal que sale cuando carga la página y el campo resultado no tiene valor, o es 0.
function cambiaBote(){
  if(resultado.value >= montoApuesta.value){
    resultado.value -= montoApuesta.value
  }
  return resultado.value;
}

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
  descuentoInterno=(total-((ObjTablero[numero].valor).toFixed(2)));
  console.log("el valor de total, menos la caja " + numero + " es " + descuentoInterno)
    for(i=cuadrosSolitarios[numero].inicio;i<cuadrosSolitarios[numero].fin;i++)
    {   
      let comparacion=(ObjTablero[i].Id==Tablero[i]);      
      if(comparacion)
        {        
          $(Tablero[i]).attr("src", ObjFiguras[numAleato()].ruta); 
            ObjTablero[i].ruta = $(Tablero[i]).attr("src");
            for (j=0; j<8;j++)
            {
              if ((ObjFiguras[j].ruta==ObjTablero[i].ruta)&&(contador==19))
              {
                ObjTablero[i].valor = ObjFiguras[j].valor
                console.log(ObjTablero[i].ruta + " " + ObjTablero[i].valor);
              }
            }       
        }
      // condicion para actualizar las variables que varian cuando termine la tirada
      if(contador == 19){       
        console.log("el descuento interno es " + descuentoInterno);
        totalinterno=ObjTablero[i].valor + descuentoInterno
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
// function reseteo (){
//   for(i=0; i<4;i++){
//     ObjTablero[i].valor=0;
//   }
// }
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


