// js/Modals.js

document.addEventListener("DOMContentLoaded", () => {
  // Delegación de eventos: escuchamos todos los clics en el documento
  document.addEventListener("click", (event) => {
    // ---------------------------
    // ABRIR MODALES
    // ---------------------------
    const openBtn = event.target.closest(".openModalBtn");
    if (openBtn) {
      event.preventDefault();

      // El botón es el <li class="modal_item openModalBtn ...">
      const li = openBtn.closest(".modal_item");
      if (!li) return;

      // Buscamos el primer <a href="#Algo">
      const a = li.querySelector("a[href^='#']");
      if (!a) return;

      const href = a.getAttribute("href"); // "#Studies", "#WinePrediction", etc.
      if (!href) return;

      const modalIdFromHref = "modal" + href.substring(1); // "modalStudies", "modalWinePrediction", ...
      const modal =
        document.getElementById(modalIdFromHref) ||
        document.getElementById(href.substring(1)); // por si algún id ya viene con "modal"

      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        console.warn("Modal not found or showModal not supported:", modalIdFromHref);
      }

      return; // ya gestionado este click
    }

    // ---------------------------
    // CERRAR MODALES
    // ---------------------------
    const closeBtn = event.target.closest(".closeModalBtn");
    if (closeBtn) {
      event.preventDefault();

      // Buscamos el <dialog> más cercano
      const dialog = closeBtn.closest("dialog");
      if (dialog) {
        dialog.close();
      } else {
        console.warn("No dialog found to close for:", closeBtn);
      }
    }
  });
});
