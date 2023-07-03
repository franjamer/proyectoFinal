export default function botoneras() {
  const botonera = document.querySelector("#botonera");
  const tirada =document.createElement("button")
  const pasoTiradas = document.createElement("button");
  const cobrar = document.createElement("button");
  const nuevaPart = document.createElement("button");
  tirada.id="boton";
  tirada.innerText = "Nueva Tirada";
  nuevaPart.id = "nuevaPartida";
  nuevaPart.innerHTML = "Nueva Partida";
 
  // boton que pasa el valor de resultado a tiradas
  pasoTiradas.id = "pasoTiradas";
  pasoTiradas.innerText = "Cobrar bote en Tiradas";
  

  // booton para cobrar lo que tenga en el bote.
  cobrar.id = "cobrarResultado";
  cobrar.innerHTML = "Pasar bote a mi Tarjeta";
  return (
  botonera.appendChild(tirada),
  botonera.appendChild(nuevaPart),
    botonera.appendChild(pasoTiradas),
    botonera.appendChild(cobrar)

  )

}
