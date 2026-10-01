let sizeButtons = document.getElementsByClassName("size-btn");

function selectSize(event) {
  let activeSize = document.querySelector(".size-btn.active");
  // if(activeSize !== null){
  //     activeSize.classList.remove("active");
  // }
  activeSize?.classList.remove("active");

  let clickedSize = event.target;
  clickedSize.classList.add("active");

  let fieldSize = event.target.innerText;

  switch (fieldSize) {
    case "S":
      createField(200);
      break;
    case "M":
      createField(300);
      break;
    case "L":
      createField(500);
      break;
  }

  console.log("Выбранный размер = ", event.target.innerText);
}

for (let btn of sizeButtons) {
  btn.onclick = selectSize;
}

// <div class="square"></div>
function createSquare() {
  let square = document.createElement("div"); // <div></div>
  square.classList.add("square");
  return square;
}

function createField(count) {
  let field = document.querySelector("#field");
  field.innerHTML = "";

  for (let i = 0; i < count; i++) {
    let square = createSquare();

    square.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = getRandomColor();
        event.target.style.transition = "none";
    });
    
    square.addEventListener("mouseleave", function(event){
        event.target.style.transition = "all 3s linear";
        event.target.style.backgroundColor = "#555";
    });

    field.appendChild(square);
  }
}

function getRandomColor(){
    let colors = ["red", "yellow", "purple", "blue"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
