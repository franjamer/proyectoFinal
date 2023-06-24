// window.addEventListener('load', function() {  
//   // Arreglo de imágenes
//   var imagenes = [   
//     {nombre:"Gran Premio",valor:"36",ruta:"/imagenes/granpremio.svg"},
//     {nombre:"siete",valor:"33",ruta:"/imagenes/siete.svg"},  
//     {nombre:"sandia",valor:"30",ruta:"/imagenes/sandia.svg"},
//     {nombre:"platanos",valor:"27",ruta:"/imagenes/platanos.svg"},
//     {nombre:"limon",valor:"24",ruta:"/imagenes/limon.svg"},
//     {nombre:"naranja",valor:"21",ruta:"/imagenes/naranja.svg"},
//     {nombre:"fresa",valor:"18",ruta:"/imagenes/fresa.svg"},
//     {nombre:"cereza",valor:"15",ruta:"/imagenes/cereza.svg"},
//     {nombre:"ciruela",valor:"12",ruta:"/imagenes/ciruela.svg"}
//   ];

//   // Carga las imágenes en el contenedor
//   cargarImagenes(imagenes, "#container");
//   // cargarImagenes(imagenes, "#container");
//   // cargarImagenes(imagenes, "#container");
//   // cargarImagenes(imagenes, "#container");
// });

// function cargarImagenes(imagenes, contenedor) {
//   var contenedorElem = document.querySelector(contenedor);  
  

//   contenedorElem.style.width="300px";
//   contenedorElem.style.height="600px";
//   contenedorElem.style.background= "burlywood";
//   contenedorElem.style.display= "flex";
//   // contenedorElem.style.flexdirecction="column";
//   // contenedorElem.style.justify = "space-evenly";
//   // contenedorElem.style.wrap= "wrap";
//   for (let j=0; i<4;i++){
//     arrayPremios= document.createElement("section");
//     arrayPremios.appendChild(imagen);
//     arrayPremios.style.background="bisque";
//   }

//   for (var i = 0; i < imagenes.length; i++) {
//     var contImagen = document.createElement("span");
//     var imagen = document.createElement("img");
//     var texto= document.createElement("p");
//     // contenedorElem $(contenedorElem).hasClass(className);
//     texto.innerText=imagenes[i].nombre;
//     imagen.src = imagenes[i].ruta;
//     imagen.alt = imagenes[i].nombre;
//     imagen.style.width= "50px";
//     imagen.style.height = "50px";
    

//     imagen.dataset.valor = imagenes[i].valor;
//     contenedorElem.appendChild(contImagen);
//     contImagen.appendChild(imagen);
//     contenedorElem.appendChild(imagen);
//     contenedorElem.appendChild(texto);
   
//     //  imagen.width = 
//     // imagen.className=
//   }
// }

//creamos un elemento section desde js. Este elemento que 
//vamos a crar es hijo del elemento body.

// function crearElementos(elemento,num,padre){
  
//   for (i=0;i<num; i++){
//     document.createElement(elemento);
//     document.padre.appendChild(elemento);
//     let arrayElementos=[];
//     arrayElementos[i]={
//       "id": i,
//       "contenido": "hola" + i
//     }
//     elemento.setAttribute("id",i)
    
//   }
// }


// let sectionFr = document.createElement("section");
// //añadimos estilo css a el elemento creado anteriormente.
// sectionFr.style.backgroundColor = "red";
// sectionFr.style.width="80%";
// sectionFr.style.height = "50px";
// sectionFr.style.margin = "auto";
// //añadimos el atributo id a la etiqueta sectionFr.
// sectionFr.setAttribute("id","sectionOne");
// document.body.appendChild(sectionFr);


// //creamos un elemento parrafo con su etiqueta p. Este elemento p está dentro, o es hijo del elemento sectionFr. 
// let parrafo = document.createElement("p");
// parrafo.setAttribute("id","sectionTwo")
// sectionFr.appendChild(parrafo);
// sectionFr.appendChild(parrafo);

// //creamos otro elemento texto que está dentro del elemento p creado anteriormente.
// let texto = document.createTextNode("Este es un texto dentro de p. es un ejemplo de atributo desde js");
// parrafo.appendChild(texto);
// parrafo.appendChild(texto);
// crearElementos(div,2,body);




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



/* ***********************************************************************************
Creacion de las etiquetas de html
   *********************************************************************************** */
// insertamos los elementos de forma dinamica en el HTML.
const cabecera= document.querySelector("#cabecera");
const etiqueta = document.createElement("input");//es el control numérico que muestra cuanto quieres apostar.
const apostar = document.createElement("button");//es el botón que adjudica el valor del control numérico, al campo resultado antes de tirar.
const labelResultado = document.createElement("label");
const resultado= document.createElement("input");//es el campo donde se muestra el valor del resultado cuando finaliza la tirada.
labelResultado.id="tituloResultado";
labelResultado.textContent="Resultado de la Tirada"
resultado.id="resultado";
resultado.innerHTML="hola";
resultado.type="text";
resultado.textContent= "resultado de la tirada";
resultado.readOnly=true;//establece el campo resultado como de solo lectura.
resultado.value=0;
resultado.title="resultado de la apuesta"
etiqueta.readOnly=false;
etiqueta.required;
etiqueta.min = 5;
etiqueta.id="apuesta";
etiqueta.type= "number";
etiqueta.step=0.01
etiqueta.value= etiqueta.min;//provisionalmente en centimos de euro
apostar.id="apostar";
apostar.disabled=true;
apostar.hidden=true;
cabecera.appendChild(etiqueta);
cabecera.appendChild(apostar);
cabecera.appendChild(labelResultado);
labelResultado.appendChild(resultado);

resultado.id="resultado";
document.querySelector("#apostar").classList.add("boton");//añadir una clase, que ya está en css
apostar.innerHTML="Apostar"//poner texto dentro del boton 
/* **************************Fin de creacion de html ******************************* */ 

// /*****modificacion del campo numerico mediante una funcion****** */
// function cargaValores(){
//   document.getElementById("resultado").addEventListener("click",cambiaValores);
// }
// function cambiaValores(){
//   let inputNumero = document.getElementById("resultado");
//   inputNumero.value= operacion;
//   console.log(inputNumero.value);
// }

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
          totalinterno+=ObjTablero[i].valor
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





// let valorBote=0;
// let añadirAlBote= function(valor){
//   let vuelta=valor;
//   console.log("el nuevo valor del bote es "+ vuelta);
//   return  Math.floor(vuelta);
// }
// console.log(añadirAlBote(total))

// let nuevoValorBote= function (bote,tirada){
// let resultadon=Math.floor((bote*tirada)/100) ;
// console.log("le nuevo valor del bote es "+ resultado.value) 
// resultado.value=resultadon;
// ;
// }

  let operacion= ((total * etiqueta.value)/100)
$("#tirada").click(function(e){
  console.log("el nuevo valor de la tirada es "+total);
  console.log("el valor de la apuesta es "+ etiqueta.value)
  resultado.value=operacion;

  console.log("el nuevo resultado del vote es " + operacion)
})

function totalizador(){
  let operaciones=0;
  if(total>=15){
        operaciones =etiqueta.value + (parseFloat((total * etiqueta.value))).toFixed(2);//se quita la division por 100 para probar
        resultado.value=parseFloat(operaciones);
        console.log("el resultado total de las operaciones es " + operaciones)
    // etiqueta.value=etiqueta.value.toFixed(2)
        etiqueta.value=resultado.value;
      }
  else
    {
      operaciones =etiqueta.value - (parseFloat((total * etiqueta.value)/100)).toFixed(2);//se quita la division por 100 para probar
      resultado.value=parseFloat(operaciones);
      console.log("el resultado total de las operaciones es " + operaciones)
      // etiqueta.value=etiqueta.value.toFixed(2)
      etiqueta.value=resultado.value;
    }

};

let montoTirada = function(){
  let monto=0;
  for (let i=0; i<4;i++){
    ObjTablero[i].ruta=$(Tablero[i]).attr("src");
    if (Tablero[i]==ObjTablero[i].Id){      
          monto+=ObjTablero[i].valor;
      }      
  }
  return monto;
} 

// evento click que pone todo en marcha
/** este es el evento click principal, que inicia la partida. */

$("#boton").click(function(e){    
      // tiempo de ruleta 
      // temporizadorCiclico(50, 1);
      temporizadorCiclicoObjetosTablero(25,0.5)
    //   temporizadorFinal(0.1);   
    // nuevoValorBote(valorBote,total);
  });

  // botones individual para mover cada una de las cajas con un boton.

  $("#caja1").click(function(e){    

    temporizadorCiclicoTablero(25,0.5,0)

});
  $("#caja2").click(function(e){    

    temporizadorCiclicoTablero(25,0.5,1)

});
  $("#caja3").click(function(e){    

    temporizadorCiclicoTablero(25,0.5,2)

});
  $("#caja4").click(function(e){    

    temporizadorCiclicoTablero(25,0.5,3)

});


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



// let sonIguales = function losMismos (){
// let valoresIguales=0;
//   for (i=0;i<3;i++){
//   if ((ObjTablero[i].valor==ObjTablero[i+1].valor)&&(i<=3)){
//     valoresIguales+=ObjTablero[i].valor;
//   }
//   console.log(ObjTablero[i].nombre)
// }

// return valoresIguales;
// }

function temporizadorCiclicoTablero(intervalo, duracionTotal,numero){  
  let contador = 0;  
  const interval = setInterval(() => {      
  let totalinterno=0;
  let descuentoInterno=0;
  let i=0;
  let j=0;
  descuentoInterno=total-ObjTablero[numero].valor;
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