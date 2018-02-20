var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

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
      changeColors(clicked_color);
      h1.style.backgroundColor = clicked_color;
    }
    else {
      this.style.backgroundColor = "#232323";
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