const btnAbrirModal = document.querySelectorAll(".openModalBtn");
const btnCerrarModal = document.querySelectorAll(".closeModalBtn");


btnAbrirModal.forEach(btn => {
    btn.addEventListener("click", event => {
        const li = btn.closest(".modal_item");
        const a = li.querySelector("a");
        const href = a.getAttribute("href");
        
        if (href) {
            document.querySelector("#modal" + href.substring(1)).showModal();
        }
    });
});

btnCerrarModal.forEach(btn => {
    btn.addEventListener("click", event => {
        const modalId = btn.parentElement.parentElement.id;
        const modal = document.getElementById(modalId);
        modal.close();
        
    });
});