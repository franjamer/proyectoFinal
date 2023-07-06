    
    // Funcion para sacar un numero aleatorio del 0 al 8
    function NumeroAleatorio(){
        let salida=Math.floor(Math.random()*10)%8
        return( salida)
    }
    console.log(NumeroAleatorio());

// array de identificadores de tablero
    const grupoMarcos=["#imgn1", "#imgn2","#imgn3","#imgn4"]
    // array de las rutas de las imagenes protagonistas
    const grupoFiguras=[
        "./imagenes/granpremio.svg","./imagenes/siete.svg","./imagenes/sandia.svg",
        "./imagenes/platanos.svg","./imagenes/limon.svg","./imagenes/naranja.svg",
        "./imagenes/fresa.svg","./imagenes/cereza.svg","./imagenes/ciruela.svg"
        ]

    const Tablero=["imgn1","imgn2","imgn3","imgn4"];
    // Objeto TAblero con id, ruta, y valor
    const objTablero=[
    {
    id:Tablero[0],
     ruta: document.getElementById(Tablero[0]).getAttribute("src"),
     valor : 1
    },
    {
    id:Tablero[1],
    ruta: document.getElementById(Tablero[1]).getAttribute("src"),
    valor : 1
    },
    {
    id:Tablero[2],
    ruta: document.getElementById(Tablero[2]).getAttribute("src"),
    valor : 1
    },
    {
    id:Tablero[3],
    ruta: document.getElementById(Tablero[3]).getAttribute("src"),
    valor : 1
    }

    ]
// creación de objeto figuras
// const ObjFiguras=()=>{
    const objFiguras = [
      {
        id:1,
        nombre:"ciruela",
      ruta:  "../imagenes/ciruela.svg",
      valor: 0.05
      },{
        id:2,
        nombre:"cereza",
      ruta:  "../imagenes/cereza.svg",
      valor: 0.10 
      },{
        id:3,
        nombre:"fresa",
      ruta:  "../imagenes/fresa.svg",
      valor: 0.20
      },{
        id:4,
        nombre:"naranja",
      ruta:  "../imagenes/naranja.svg",
      valor: 0.5
      },{
        id:5,
        nombre: "limon",
      ruta:  "../imagenes/limon.svg",
      valor: 1
      },{
        id:6,
        nombre: "Platanos",
      ruta:  "../imagenes/platanos.svg",
      valor: 2
      },{
        id:7,
        nombre: "sandia",
      ruta:  "../imagenes/sandia.svg",
      valor: 5
      },{
        id:8,
        nombre: "siete",
      ruta:  "../imagenes/siete.svg",
      valor: 10
      },{
      id:9,
      nombre: "granpremio",
      ruta:   "../imagenes/granpremio.svg",
      valor:  20
    }
  ]
//   return( objFiguras);
//   }

    console.log(objTablero[3].ruta)
    console.log(objTablero[0].valor)
    console.log(Tablero[0])
    console.log(grupoFiguras[NumeroAleatorio()])
    





  //recorrido base del tablero de 4 posiciones lectura de propiedades
for(let i=0; i<=Tablero.lengh-1;i++){
    console.log(i)
    console.log(document.getElementById(Tablero[i]).getAttribute("Id"))
    document.getElementById(Tablero[NumeroAleatorio()]).getAttribute("Id");
  } 

/**Funcion que recorre el objeto del tablero,y que tiene por parametro la propiedad del objetoTablero, para poder comparar, cambiar, etc */
//funcion de recorrido de tablero
  function recorridoObjTablero(){
  let resultadoTab=[]
    for ( let i=0; i<=objTablero.length-1; i++){
      let valor=NumeroAleatorio();
      resultadoTab.push(valor);
      
    // console.log(resultadoTab[i])
    }
  return resultadoTab;
  }




let valorTablero=recorridoObjTablero()
console.log(valorTablero)


//recorrido de grupo figuras, que es un array
for (let j=0; j<=grupoFiguras.length-1; j++){
    console.log(grupoFiguras[NumeroAleatorio()])    
    // console.log(ObjFiguras[j].nombre)
}


function recorridoObjFiguras(){
    let resultadoFig=[];
    for (let j=0; j<=objFiguras.length-1; j++){
        let valor=objFiguras[NumeroAleatorio()].ruta;
        console.log(valor)
        resultadoFig.push(valor);
        console.log(resultadoFig[j])
    }
    return resultadoFig;
}

console.log(recorridoObjFiguras())

/**Alimentacion de nuevos valores de objTablero */
for(let i=0; i<=objTablero.length-1;i++){
  console.log(i)
  // objTablero[i].ruta=objFiguras[NumeroAleatorio()].ruta
  // console.log(objTablero[i].ruta)
}
console.log(objTablero[0].ruta)
/**funcion para leer el atributo src de un elemento img de html */
function leersrcElemento(){  
  let idObjTablero;  
  let lecturaSrcElementoImg;
  for(let k=0; k<=Tablero.length-1;k++){
let elementoImg=document.getElementById(objTablero[k].id);
console.log(elementoImg);
    idObjTablero=objTablero[k].id;
    console.log(idObjTablero);
    lecturaSrcElementoImg=elementoImg.getAttribute("src");
    console.log(lecturaSrcElementoImg);
  }
  return (lecturaSrcElementoImg)//la funcion devuelve el valor del atrributo src del elemento solicitado
}
/*fin de la funcion leerSrcElemento */


console.log(leersrcElemento())
/** recorrido para vaciar el atributo src del elemento img de html */
for (let k=0; k<=Tablero.length-1;k){
  let elementoImg=document.getElementById(objTablero[k].id);
console.log(elementoImg)
  elementoImg.src="/imagenes/siete.svg";
  console.log(elementoImg.src)
}

// recorrido
for(let k=0; k<=Tablero.length-1;k++){
  let idObjTablero=objTablero[k].id
  console.log(idObjTablero)
  
  //leemos el valor del src de tablero
  let lecturaSrcElementoImg=document.getElementById(idObjTablero).getAttribute("src")
  console.log(lecturaSrcElementoImg)
  
  //cambiamos la src del elemento img, con la id de tablero k
  let rutaAcambiar=objFiguras[NumeroAleatorio()].ruta;
  console.log(rutaAcambiar)
  
  let escrituraSrcTablero=document.getElementById(idObjTablero).setAttribute("src", '+ rutaAcambiar+')
  console.log(escrituraSrcTablero)
  // lectura de la id de tablero
  let lecturaIdTablero= document.getElementById(Tablero[k]).getAttribute("Id");
if( document.getElementById(Tablero[NumeroAleatorio()]).getAttribute("Id")==Tablero[k]){
  // document.getElementById(Tablero[k]).setAttribute("src",recorridoObjFiguras())
  console.log(Tablero[k])
 
  console.log(lecturaIdTablero)
  console.log(escrituraSrcTablero)
  
}}






function miFuncion(){
    console.log("Ejecutando mi funcion repetidamente")
}


//ejecutar la funcion cada 2 segundos
let intervaloFiguras= setInterval(recorridoObjFiguras,50);
let intervaloTablero= setInterval(recorridoObjTablero,50);
//funciones parada de tiempo
    setTimeout(function(){
    clearInterval(intervaloFiguras);
    clearInterval(intervaloTablero);
    },1000)


