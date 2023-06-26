// numero aleatorio de 0 a 8
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
// funcion de número aleatorio de 0 a 3.
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
        "nombre":"ciruela",
      "ruta":  "/imagenes/ciruela.svg",
      "valor": 0.05
      },{
        "id":2,
        "nombre":"cereza",
      "ruta":  "/imagenes/cereza.svg",
      "valor": 0.10 
      },{
        "id":3,
        "nombre":"fresa",
      "ruta":  "/imagenes/fresa.svg",
      "valor": 0.20
      },{
        "id":4,
        "nombre":"naranja",
      "ruta":  "/imagenes/naranja.svg",
      "valor": 0.5
      },{
        "id":5,
        "nombre": "limon",
      "ruta":  "/imagenes/limon.svg",
      "valor": 1
      },{
        "id":6,
        "nombre": "Platanos",
      "ruta":  "/imagenes/platanos.svg",
      "valor": 2
      },{
        "id":7,
        "nombre": "sandia",
      "ruta":  "/imagenes/sandia.svg",
      "valor": 5
      },{
        "id":8,
        "nombre": "siete",
      "ruta":  "/imagenes/siete.svg",
      "valor": 10
      },{
      "id":9,
      "nombre": "granpremio",
      "ruta":   "/imagenes/granpremio.svg",
      "valor":  20
    }
]

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



/* ********************************************Creacion de las etiquetas de html****************** */
// insertamos los elementos de forma dinamica en el HTML.
const cabecera= document.querySelector("#cabecera");
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

pasoTiradas.id="pasoTiradas";

botonera.appendChild(pasoTiradas);

cobrar.id = "cobrarResultado";
botonera.appendChild(cobrar);


labelResultado.id="tituloResultado";
labelApuesta.class="Etiquetas-class";
labelResultado.textContent="Monto resultante";
labelResultado.for= "resultado";
cabecera.appendChild(labelResultado);

// elemento resultado
resultado.id="resultado";
// resultado.innerHTML="hola";
resultado.type="number";
resultado.textContent= "resultado de la tirada";
resultado.readOnly=true;//establece el campo resultado como de solo lectura.
resultado.min=0;
resultado.value=0;
resultado.title="resultado de la apuesta"
labelResultado.appendChild(resultado);

//Label de apuesta
labelApuesta.id="labelApuesta";
labelApuesta.textContent="Cantidad Apostada (€)";
labelApuesta.for= "apuesta";
labelApuesta.class="Etiquetas-class";
cabecera.appendChild(labelApuesta);

//Elemento montoApuesta 
montoApuesta.readOnly=false;
montoApuesta.required;
montoApuesta.min = 5;
montoApuesta.id="apuesta";
montoApuesta.type= "number";
montoApuesta.step=0.01;
montoApuesta.value= 5;//provisionalmente en centimos de euro
cabecera.appendChild(montoApuesta);



labelTirada.id="labelTirada";
labelTirada.textContent="Numero de Tiradas";
labelTirada.for= "tiradas";
labelApuesta.class="Etiquetas-class";
cabecera.appendChild(labelTirada);
// Elemento Tiradas
tiradas.id= "#tiradas";
tiradas.type="number";
tiradas.value=3;
cabecera.appendChild(tiradas);




/* **************************Fin de creacion de html ******************************* */ 

/** temporizadorCiclicoObjeto  tiene por parametros el tiempo que se muestra cada imagen, 
 * como intervalo, y el tiempo global, que tiene como parametro duracionTotal 
*/
  let total=0;
  function temporizadorCiclicoObjetosTablero(intervalo, duracionTotal){  
    let contador = 0;  
    const interval = setInterval(() => {      
    let totalinterno=0;
    let i=0;
    let j=0;
    $(".cajas").removeAttr("disabled") 
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
            
              }
            }       
        }
        if(contador==19){
          totalinterno+=ObjTablero[i].valor
        
          total=totalinterno;
         
        }  
    }       
      contador++;
    
      if (contador * intervalo >= duracionTotal * 1000) 
        {
            clearInterval(interval);                  
             
            totalizador();           
             
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


  
// $("#tirada").click(function(e){
//   let operacion= ((total * montoApuesta.value)/100)
//   console.log("el nuevo valor de la tirada es "+total);
//   console.log("el valor de la apuesta es "+ montoApuesta.value)
//   resultado.value=operacion;

//   console.log("el nuevo resultado del vote es " + operacion)
// })

let totalizador = function(){
  let operaciones=0;
  let tirada=montoTirada();
  let apuesta=parseFloat(montoApuesta.value);
  // if(montoTirada  >=15 && montoApuesta.value>=0){
    
        operaciones = (parseFloat(tirada) * apuesta);//se quita la division por 100 para probar
        // resultado.value=operaciones;
        console.log("el valor de la tirada es "+tirada)
        console.log("el valor de la apuesta es " + apuesta)
        // console.log("el resultado total de las operaciones es " + operaciones)
    // montoApuesta.value=montoApuesta.value.toFixed(2)
       
      resultado.value=parseInt(operaciones);
      // }
  // else
    // {
      // $(".cajas").attr("disabled","true")
      // operaciones =(parseFloat((total * montoApuesta.value)/100)).toFixed(2);//se quita la division por 100 para probar
      // resultado.value=parseFloat(operaciones).toFixed(2);
      // console.log("el resultado total de las operaciones es " + operaciones)
      // montoApuesta.value=montoApuesta.value.toFixed(2)
      
    // }
return parseInt(operaciones);
};

// funcion para pasar a tiradas el campo resultado.


// funcion para solo para contar cuanto vale la suma del valor de las figuras
let montoTirada = function(){
  let monto=0;
  for (let i=0; i<4;i++){
     ObjTablero[i].ruta=$(Tablero[i]).attr("src");
    for(let j=0; j<9;j++){
    
    if (ObjFiguras[j].ruta==ObjTablero[i].ruta){      
      ObjTablero[i].valor=ObjFiguras[j].valor;
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
      // tiempo de ruleta 
      // temporizadorCiclico(50, 1);
      reseteo()
      temporizadorCiclicoObjetosTablero(25,0.5)
    //   temporizadorFinal(0.1);   
    // nuevoValorBote(valorBote,total);
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

function pasoResultadoaTiradas(){
  let pasoaTiradas
  if (resultado.value>100){
    tiradas.value+=parseInt((resultado.value)/10)
  }
return pasoaTiradas;
}
  /** funciones para establecer limites superiores e inferiores para determinar si han salido cuatro figuras iguales.*/

let valorMinimoSup=function limitInf(indice){
  let minimo=0;
  
  if(indice>=0)
  {minimo=(ObjFiguras[indice].valor)*4
  console.log("Salieron 4 Ciruelas, y es el valor minimo posible")}
  else {
    minimo=((ObjFiguras[indice-1].valor)*3)+ObjFiguras[indice].valor
    // console.log(("Si salen 3 " + ObjFiguras[indice-1].nombre) + " iguales y una " + ObjFiguras[indice].nombre)
  }
   
  return minimo
}

let valorMáximoInf = function limitSup(indiceFig) {
  let maximo;
  if(indiceFig >= ObjFiguras.length-1){
    maximo=ObjFiguras[indice].valor*4;
  }
  else{
    maximo =((ObjFiguras[indiceFig+1].valor)*3) + ObjFiguras[indiceFig].valor
    // console.log(("Para cuatro "+ ObjFiguras[indiceFig].nombre + " si salen 3 " + ObjFiguras[indiceFig+1].nombre) + " iguales y una " + ObjFiguras[indiceFig].nombre + " será el valor minimo por encima del pleno para " + ObjFiguras[indiceFig].nombre)
  }
    
  return maximo;  
}

function premio(valor,indice)
{
  let salida="salieron los cuatro " + ObjFiguras[indice].nombre + " iguales ";
    for(let  i=0; i<4;i++){
        if (valorMáximoInf(i)<valor)
        {
            if (valorMinimoSup(i)>valor)
            {
              console.log("son las cuatro figuras iguales")
              salida="salieron los cuatro " + ObjFiguras[indice].nombre + " iguales ";
              return salida 
            }
         
        }
      
    }
  
}



function temporizadorCiclicoTablero(intervalo, duracionTotal,numero){  
  let contador = 0;  
  const interval = setInterval(() => {      
  let totalinterno=0;
  let descuentoInterno=0;
  let i=0;
  let j=0;
  descuentoInterno=(total-((ObjTablero[numero].valor).toFixed(2)));
  console.log("el valor de total, menos la caja " + numero + " es " + descuentoInterno)
    for(i=cuadrosSolitarios[numero].inicio;i<cuadrosSolitarios[numero].fin;i++)
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
              console.log(ObjTablero[i].ruta + " " + ObjTablero[i].valor);
            }
          }       
      }
      if(contador==19){       
        console.log("el descuento interno es " + descuentoInterno);
        totalinterno=ObjTablero[i].valor + descuentoInterno
        console.log("la suma total es " + totalinterno)
        total=totalinterno;
       
      }  
  }       
    contador++;
  
    if (contador * intervalo >= duracionTotal * 1000) 
      {
          clearInterval(interval);
                
          // console.log(total);
          total=totalinterno;     
          totalizador();
            // premio(total,j);
         
            // console.log("total externo es " + total)   
          console.log("Temporizador cíclico finalizado.");   
              
      }
  }, intervalo * 10);
}

function reseteo (){
  for(i=0; i<4;i++){
    ObjTablero[i].valor=0;
  }
}






































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