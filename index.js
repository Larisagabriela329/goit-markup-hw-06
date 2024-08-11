// Selectors for the first modal (order button and modal)
const orderButton = document.querySelector(".order-button");
const backdrop = document.querySelector(".modal-backdrop");

// Selectors for the second modal (menu button and mobile menu modal)
const menuButton = document.querySelector(".menu-button");
const mobileMenuBackdrop = document.querySelector(".mobile-menu-modal");

// Event listeners for the order modal
orderButton.addEventListener("click", toggleModal);
backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".close-button");
  if (!target) {
    return;
  }
  toggleModal();
});

// Event listeners for the mobile menu modal
menuButton.addEventListener("click", toggleMobileMenuModal);
mobileMenuBackdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".close-button");
  if (!target) {
    return;
  }
  toggleMobileMenuModal();
});

// Toggle functions
function toggleModal() {
  backdrop.classList.toggle("is-open");
}

function toggleMobileMenuModal() {
  mobileMenuBackdrop.classList.toggle("is-open");
}
