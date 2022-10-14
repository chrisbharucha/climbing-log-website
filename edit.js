const openModalButton = document.getElementById('edit-button');
const closeModalButton = document.getElementById('edit-modal-close-button');

const editModal = document.getElementById('edit-modal');
const editModalOverlay = document.getElementById('edit-modal-overlay');

const backButton = document.createElement('button');
backButton.className = 'back-button';

/*
this functions opens the edit modal interface by
adding the 'active' class to editModal and editModalOverlay
which allows the 'active' css styles to be seen
*/
function openEditModal() {
  if (editModal == null) {
    console.log("Error: edit modal not found");
    return;
  }
  else {
    editModal.classList.add('active');
    editModalOverlay.classList.add('active');
  }
}

/*
this function closes the edit modal interface by
removing the 'active' class from editModal and
editModalOverlay which hides 'active' css styles
*/
function closeEditModal() {
  if (closeModalButton == null) {
    console.log("Error: close button not found");
    return;
  }
  else {
    editModal.classList.remove('active');
    editModalOverlay.classList.remove('active');
  }
}

function renderEditModal() {
  //setting title of modal
  document.getElementById('edit-modal-title').innerText = 'Select Type';

  //resetting modal body
  document.getElementById('edit-modal-body').innerHTML = '';

  const element = document.createElement('div');

  const boulderButton= document.createElement('button');
  boulderButton.innerText = 'Boulder';
  boulderButton.onclick = renderEditBoulder;
  element.appendChild(boulderButton);

  const editModalBody = document.getElementById('edit-modal-body');
  editModalBody.appendChild(element);

  openEditModal();
}

  
function renderEditBoulder() {
  //reset the list of climbs
  document.getElementById('edit-modal-body').innerHTML = '';

  //setting title of modal
  document.getElementById('edit-modal-title').innerText = 'Edit Your Boulders';
  
  //creating a back button to go back to renderEditModal modal
  backButton.innerText = '<-';

  document.getElementById('edit-modal-title').prepend(backButton);

  /*
  this goes through the climbs array and displays
  any climbs of type = 'Boulder' to the edit modal
  */
  climbs.forEach(climb => {
    if (climb.type === 'boulder') {
      const element = document.createElement('div');
      element.innerText = 'Grade: '
      + climb.grade + ' Attempts: ' + climb.attempts
      + ' Date: ' + climb.date;

      const editModalBody = document.getElementById('edit-modal-body');
      editModalBody.appendChild(element);
    }
    else {
      //do nothing
    }
  });
}