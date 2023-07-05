    
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
        "../imagenes/granpremio.svg","../imagenes/siete.svg","../imagenes/sandia.svg",
        "../imagenes/platanos.svg","../imagenes/limon.svg","../imagenes/naranja.svg",
        "../imagenes/fresa.svg","../imagenes/cereza.svg","../imagenes/ciruela.svg"
        ]

    const Tablero=["imgn1","imgn2","imgn3","imgn4"];
    // Objeto TAblero con id, ruta, y valor
    const ObjTablero=[
    {
    id:Tablero[0],
     ruta: document.querySelector(Tablero[0].src),
     valor : 1
    },
    {
    id:Tablero[1],
    ruta: document.querySelector(Tablero[1].src),
    valor : 1
    },
    {
    id:Tablero[2],
    ruta: document.querySelector(Tablero[2].src),
    valor : 1
    },
    {
    id:Tablero[3],
    ruta: document.querySelector(Tablero[3].src),
    valor : 1
    }

    ]
    console.log(ObjTablero[0].valor)
    console.log(Tablero[0])
    console.log(grupoFiguras[3])





 
for(let i=0; i<=Tablero.lengh-1;i++){
    // console.log(i)
    console.log(document.getElementById(nombreArray[i]).getAttribute("Id"))
    document.getElementById(nombreArray[NumeroAleatorio()]).getAttribute("Id");} 
  
function recorridoObjTablero(){
let resultado=[]
for ( let i=0; i<=ObjTablero.length-1; i++){
    let valor=NumeroAleatorio();
    resultado.push(valor);
    console.log(resultado[i])
}
return resultado;
}
let valorTablero=recorridoObjTablero()
console.log(valorTablero)

for (let j=0; j<=grupoFiguras.length-1; j++){
    console.log(grupoFiguras[NumeroAleatorio()])
    
}

function miFuncion(){
    console.log("Ejecutando mi funcion repetidamente")
}

//ejecutar la funcion cada 2 segundos

let intervalo= setInterval(recorridoObjTablero,1000);


setTimeout(function(){
    clearInterval(intervalo);

},10000)