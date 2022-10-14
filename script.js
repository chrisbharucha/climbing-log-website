document.title = "insert title here"

var boulderingCheckbox = document.getElementById('log-boulder-checkbox');
var sportCheckbox = document.getElementById('log-sport-checkbox');
var tradCheckbox = document.getElementById('log-trad-checkbox')

// *************** Model ***************

//climbs is an array of objects that stores the info of logged climbs
let climbs;

//first retrieve localStorage (and convert back to array)
const savedClimbs = JSON.parse(localStorage.getItem('climbs'));
     
//next, check if it's an array:
// - if it is, set climbs array = to its value
// - else, set climbs = to an empty array
if (Array.isArray(savedClimbs)) {
  climbs = savedClimbs;
}
else {
  climbs = [];
}


function createClimb(isBoulder, isSport, isTrad, grade, attempts, date) {
  //generates a unique id for the climb based on time of entry
  const id = '' + new Date().getTime();

  if (isBoulder) {
    climbs.push({
      id: id,
      type: "Boulder",
      grade: grade,
      attempts: attempts,
      date: date
    });
  }
  else if (isSport) {
    climbs.push({
      id: id,
      type: "Sport",
      grade: grade,
      attempts: attempts,
      date: date
    });
  }
  else if (isTrad) {
    climbs.push({
      id: id,
      type: "Trad",
      grade: grade,
      attempts: attempts,
      date: date
    });
  }
  else {
    console.log('Error: no type detected');
  }

  saveClimb();
}

//this function saves the data from climbs so
//if a user refreshes the page the data is saved
function saveClimb() {
  localStorage.setItem('climbs', JSON.stringify(climbs));
}



// *************** Controller ***************

//this allows only bouldering to be checked when bouldering is selected
boulderingCheckbox.addEventListener('change', () => {
  if (boulderingCheckbox.checked) {
    sportCheckbox.checked = false;
    tradCheckbox.checked = false;
  }
  else {
    // do nothing
  }
});

//this allows only sport to be checked when sport is selected
sportCheckbox.addEventListener('change', () => {
  if (sportCheckbox.checked) {
    boulderingCheckbox.checked = false;
    tradCheckbox.checked = false;
  }
  else {
    // do nothing
  }
});

//this allows only trad to be checked when trad is selected
tradCheckbox.addEventListener('change', () => {
  if (tradCheckbox.checked) {
    boulderingCheckbox.checked = false;
    sportCheckbox.checked = false;
  }
  else {
    // do nothing
  }
});


//this function takes the info from the modal and calls the 
//createClimb function with the values from all the inputs
function addClimb() {
  const boulderCheckbox = document.getElementById('log-boulder-checkbox');
  const isBoulder = boulderCheckbox.checked;

  const sportCheckbox = document.getElementById('log-sport-checkbox');
  const isSport = sportCheckbox.checked;

  const tradCheckbox = document.getElementById('log-trad-checkbox');
  const isTrad = tradCheckbox.checked;

  const gradeTextbox = document.getElementById('log-grade-textbox');
  const grade = gradeTextbox.value;

  const attemptsNumberbox = document.getElementById('log-attempts-number');
  const attempts = attemptsNumberbox.value;

  const datepicker = document.getElementById('log-datebox');
  const date = datepicker.value;

  createClimb(isBoulder, isSport, isTrad, grade, attempts, date);
}

// *************** View ***************

//this function renders the graph based on data input
function render() {

}