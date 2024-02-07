const btnAbrirModal = document.querySelectorAll(".openModalBtn");
const btnCerrarModal = document.querySelectorAll(".closeModalBtn");


btnAbrirModal.forEach(btn => {
    btn.addEventListener("click", event => {
        const li = btn.closest(".row_curriculum_item");
        const a = li.querySelector("a");
        const href = a.getAttribute("href");

        if (href == "#Studies") {
            document.querySelector("#modalStudies").showModal();
        } else if (href == "#Skills") {
            document.querySelector("#modalSkills").showModal();
        } else if (href == "#Experience") {
            document.querySelector("#modalExperience").showModal();
        }
    });
});

btnCerrarModal.forEach(btn => {
    btn.addEventListener("click", event => {
        const modalId = btn.parentElement.id;
        const modal = document.getElementById(modalId); // Encuentra el modal utilizando su ID
        modal.close(); // Cierra el modal
        
    });
});