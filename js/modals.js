// js/Modals.js

document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // ABRIR MODALES
  // -----------------------------
  const openButtons = document.querySelectorAll(".modal_item.openModalBtn");

  openButtons.forEach((li) => {
    li.addEventListener("click", (event) => {
      event.preventDefault();

      // primer enlace con href="#Algo"
      const a = li.querySelector("a[href^='#']");
      if (!a) return;

      const href = a.getAttribute("href"); // "#Studies", "#WinePrediction", etc.
      if (!href) return;

      const modalIdFromHref = "modal" + href.substring(1); // "modalStudies"...
      const modal =
        document.getElementById(modalIdFromHref) ||
        document.getElementById(href.substring(1));

      if (modal && typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        console.warn("Modal not found or showModal not supported:", modalIdFromHref);
      }
    });
  });

  // -----------------------------
  // CERRAR MODALES
  // -----------------------------
  // aquí apuntamos directamente al <a> de la X dentro del <li class="closeModalBtn">
  const closeLinks = document.querySelectorAll("li.closeModalBtn a");

  closeLinks.forEach((a) => {
    a.addEventListener("click", (event) => {
      event.preventDefault();

      const dialog = a.closest("dialog");
      if (dialog) {
        dialog.close();
      } else {
        console.warn("No dialog found to close for:", a);
      }
    });
  });
});
