var numSquares = 6; // Keep track of mode for reset.
var colors = generateRandomColors(numSquares); // An array of 6 colors 
var BACKGROUND = "#232323";

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); // Pick a random element from the array.
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton")
var hardButton = document.querySelector("#hardButton")


easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors [i]){  // If the element exist
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
})

hardButton.addEventListener("click", function(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block"; //Reset the hidden from easy mode.
  }
})

resetButton.addEventListener("click", function(){
  // Generate all new colors array
  colors = generateRandomColors(numSquares);
  // Pick new random color from array
  pickedColor = pickColor();
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // Change the colors of the squares on the page
  for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clicked_color = this.style.backgroundColor;
    if (clicked_color === pickedColor){
      messageDisplay.textContent = "Success!";
      resetButton.textContent = "Play Again?"
      changeColors(clicked_color);
      h1.style.backgroundColor = clicked_color;
    }
    else {
      this.style.backgroundColor = BACKGROUND;
      messageDisplay.textContent = "Try Again!";
    }
    //compare color to picked color
  });
}

function changeColors(color) {
  // loop thorugh all squares
  for (var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length); // Give random number for the length of the array.
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //add num random colors to arr
  for (var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from [0, 255]
  var red = Math.floor(Math.random() * 256);
  //pick a "green" from [0, 255]
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" from [0, 255]
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}