// parsing HTML

// DOM - Document Object Model

var document = 0;

let aboutMe = {
  name: "Evgeniy",
  surname: "Kiselev",
  lastName: "Dmitrievich",
  age: 18,
  salary: "1$",
  hasEducation: true,
  canPlayPiano: false,
  pension: null,
  skills: ["JS", "HTML", "CSS"],
};

document.title = "DOM";

aboutMe.name = "Daniil";
aboutMe.email = "test@test.com";
// delete aboutMe.salary
aboutMe.salary = 0;

console.log("Document = ", document);

// CRUD  - Create Read Update Delete

// search поиск

let counter = document.getElementById("counter");

// counter.textContent = "Hello";
// counter.style.color = "#FFFF00"

let plusButton = document.getElementById("btn-plus");
let minusButton = document.getElementById("btn-minus");
let resetButton = document.getElementById("btn-reset");

function counterUp() {
  let currentValue = Number(counter.textContent);
  // currentValue = currentValue + 1
  // currentValue += 1
  currentValue++;
  counter.textContent = currentValue;
  plusButton.blur();
}

plusButton.addEventListener("click", counterUp);

function counterDown() {
  let currentValue = Number(counter.textContent);
  currentValue--;
  counter.textContent = currentValue;
  minusButton.blur();
}

minusButton.onclick = counterDown;

function keyboardHandler(event) {

  if (event.key === "+") {
    counterUp();
  }

  if (event.key === "-") {
    counterDown();
  }
}

document.addEventListener("keydown", keyboardHandler);

function counterReset() {
  counter.textContent = 0;
  resetButton.blur();
}

resetButton.onclick = counterReset;
