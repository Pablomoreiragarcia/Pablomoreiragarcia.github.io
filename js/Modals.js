const btnAbrirModal = document.querySelector("#openModalBtn");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click",()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click",()=>{
    modal.close();
})