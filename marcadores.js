export const cabecera = document.querySelector("#cabecera");

export function marcadores (){

const labelApuesta = document.createElement("label");
const montoApuesta = document.createElement("input");//es el control numérico que muestra cuanto quieres apostar.
const labelResultado = document.createElement("label");
const resultado= document.createElement("input");//es el campo donde se muestra el valor del resultado cuando finaliza la tirada.
const labelTirada = document.createElement("label");
const tiradas = document.createElement("input");
// propiedades del label de resultado
labelResultado.id ="tituloResultado";
labelApuesta.className ="Etiquetas-class";
labelResultado.textContent ="Monto resultante";
labelResultado.for = "resultado";
// propiedades del elemento elemento resultado
resultado.id ="resultado";
resultado.className= "marcador" ; 

// resultado.innerHTML="hola";
resultado.type = "number";
resultado.textContent =  "resultado de la tirada";
resultado.readOnly = true;//establece el campo resultado como de solo lectura.
resultado.min = 0;
resultado.value = 0;
resultado.title = "resultado de la apuesta"
//propiedades del Label de apuesta
labelApuesta.id="labelApuesta";
labelApuesta.textContent="Cantidad Apostada (€)";
labelApuesta.for= "apuesta";
labelApuesta.className="Etiquetas-class";
labelApuesta.className= "is-primary is-rounded";
//propiedades del Elemento montoApuesta 
montoApuesta.readOnly = false;
montoApuesta.className= "marcador"

montoApuesta.required;
montoApuesta.min = 5;
montoApuesta.id = "apuesta";
montoApuesta.className= "";
montoApuesta.type =  "number";
montoApuesta.step = 0.01;
montoApuesta.value =  5;//provisionalmente en centimos de euro
//propiedades del label del elemento tiradas
labelTirada.id = "labelTirada";
labelTirada.className= "";
labelTirada.textContent = "Numero de Tiradas";
labelTirada.for =  "tiradas";
labelTirada.class = "Etiquetas-class";
// atributos de Elemento Tiradas
tiradas.id = "tiradas";
tiradas.className="marcador";
tiradas.type ="number";
tiradas.defaultValue =3;
tiradas.value = 3;
tiradas.type ="number";
tiradas.readOnly = true;
    return(
        cabecera.appendChild(labelResultado),
        cabecera.appendChild(labelApuesta),
        cabecera.appendChild(labelTirada),
        labelResultado.appendChild(resultado),        
        labelApuesta.appendChild(montoApuesta),        
        labelTirada.appendChild(tiradas)
    )
}