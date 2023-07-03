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