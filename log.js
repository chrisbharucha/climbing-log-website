const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const addClimbModalButton = document.querySelectorAll('[data-add-climb-button]');
const modalOverlay = document.getElementById('modal-overlay');

//this listens for a button to be pressed that opens a particular modal
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

//this listens for a close button to be pressed, then closes the corresponding modal
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    //const modal = document.querySelector(button.dataset.modalTarget);
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

//this listens for the add climb button to be pressed, then closes the corresponding modal
addClimbModalButton.forEach(button => {
  button.addEventListener('click', () => {
    //const modal = document.querySelector(button.dataset.modalTarget);
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

//this makes it so the modal closes when the overlay is clicked
modalOverlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

//this opens a particular modal by adding the active class to the id
function openModal(modal) {
  if (modal == null) return
    modal.classList.add('active');
    modalOverlay.classList.add('active');
}

//this closes a particular modal by removing the active class from the id
function closeModal(modal) {
  if (modal == null) {
    return;
  }
  else {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
  }
}
