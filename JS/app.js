
//Create base div class
function Div(){
  this.color = null;
  this.draw = function (){
    var newDiv = $("<div>"+this.color+"</div>");
    $('body').append(newDiv);
  }
}


//Create an instance to proove it works
$( document ).ready(function (){
  var testDiv = new Div();
  var newredDiv = new RedDiv();
  var newblueDiv  = new BlueDiv();
  testDiv.draw();
  newredDiv.draw();
  newblueDiv.draw();
});


//Create sub classes
function RedDiv(){
  Div.call(this);
  this.color = "#FF0000";
  // newDiv.css("background-color", "#FF0000");
  // newDiv.css("height", "50px");
  // newDiv.css("width", "50px");
}

function BlueDiv(){
  Div.call(this);
  this.color = "#0000FF";
}


//Main class
// Div.prototype.draw = function (){
//   var newDiv = $('<div id="Div">DIV ON THE SCREEN</div>');
//     $('body').append(newDiv);
// }



// //Add a draw method to your base class that adds a <div> to the page
// Base.prototype.draw = function(){
//   add
// }


// //Create a blue div and red div class and make them draw with the
// //right colors
// function.blue(color){
//   Base.call(this, color);
// }

// var blue = NewBlue(#000099);
// var red = NewRed(#111111);

// //Add a sub class specific click handler to both classes


// //When your page loads draw a red and blue div
// document.body.onload = addDivs;

// function addDivs (){
//   var newDiv = document.createElement("div");
//   var newContent = document.
// }