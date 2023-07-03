
//IDENTIFICADORES DE LAS ETIQUETA IMG QUE SE MUESTRAN.
export const Tablero=["#imgn1","#imgn2","#imgn3","#imgn4"];
// creación de array de elementos Tablero con sus ids
 const idsTablero = ()=>{
    const salidaIdTablero=[
    document.getElementById("imgn1"),
    document.getElementById("imgn2"),
    document.getElementById("imgn3"),
    document.getElementById("imgn4")
    ]
    return salidaIdTablero;
    }
// asignacion de atributo id a cada elemento de tablero
    const laIdTablero=idsTablero();
    
    // creacion de array de atributos srcs del array tablero
 export const srcTablero = ()=>{
        const salidaSrcTablero=    [
            {"ruta":Tablero[0].src}, 
            {"ruta":Tablero[1].src}, 
            {"ruta":Tablero[2].src}, 
            {"ruta":Tablero[3].src}
        ]
        return salidaSrcTablero;
    }
// creacion de objeto tablero. Consta de 4 cajas, donde iran rotando las imagenes que se muestran un tiempo t1 cada imagen,
// durante un tiempo global t2, el cual cuando termina, se coge el valor de la imagen de cada casillero, y se suma, 
// guardandose en una variable llamada puntuación, que se usará despues.
export const arrayObjetosTablero=()=>{
    const ObjTablero=[
    {
      Id:"#imgn1",
      "posTablero" : "Posicion 1", 
      // "Nombre" : "juan",
      "ruta":  laIdTablero[0].src,
      "valor" : 5
    },
    {
      Id:"#imgn2",
      "posTablero" : "Posicion 2", 
      // "Nombre" : "jose",
      "ruta": laIdTablero[1].src,
      "valor" : 5
    },
    {
      Id:"#imgn3",
      "posTablero" : "Posicion 3", 
      // "Nombre" : "Paco",
      "ruta": laIdTablero[2].src,
      "valor" : 5
    },
    {
      Id:"#imgn4",
      "posTablero" : "Posicion 4", 
      // "Nombre" : "pedro",
      "ruta": laIdTablero[3].src,
      "valor" : 5
    }
  ]
  return ObjTablero;
}

export const arrayCompletoTablero=arrayObjetosTablero()

console.log(arrayCompletoTablero[0].Id)
