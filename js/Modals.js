// js/Modals.js

const btnAbrirModal = document.querySelectorAll(".openModalBtn");
const btnCerrarModal = document.querySelectorAll(".closeModalBtn");

// Abrir modales
btnAbrirModal.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault(); // evita el scroll al anchor

    const li = btn.closest(".modal_item");
    if (!li) return;

    // buscamos el primer enlace con href="#Algo"
    const a = li.querySelector("a[href^='#']");
    if (!a) return;

    const href = a.getAttribute("href"); // "#Studies", "#WinePrediction", etc.
    if (!href) return;

    const modalSelector = "#modal" + href.substring(1); // "#modalStudies", "#modalWinePrediction", ...
    const modal = document.querySelector(modalSelector);

    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      console.warn("Modal not found or showModal not supported:", modalSelector);
    }
  });
});

// Cerrar modales
btnCerrarModal.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    // subimos hasta el <dialog> más cercano
    const dialog = btn.closest("dialog");
    if (dialog) {
      dialog.close();
    }
  });
});
