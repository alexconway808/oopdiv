//Main Class
//Create base div class
function Div(){
  this.color = null;
  this.htmlElement = null;
  this.draw = function (){
    this.htmlElement = $("<div>"+this.color+"</div>");
    $('body').append(this.htmlElement);
  }
}

//Define RedDiv and BlueDiv
function RedDiv(){
  Div.call(this);
}

function BlueDiv(){
  Div.call(this);
}


//Create an instance to proove it works
$( document ).ready(function (){
  var newredDiv = new RedDiv();
  var newblueDiv  = new BlueDiv();
  newredDiv.draw();
  newblueDiv.draw();
});






// //Create sub classes
// function RedDiv(color){
// RedDiv.prototype = new Div();
//   Div.call(this);
//   this.color = "#FF0000";
// }


// function BlueDiv(color){
// BlueDiv.prototype = new Div();
//   Div.call(this);
//   this.color = "#0000FF";
// }



// //
// RedDiv.prototype.click = function(){

// }


//Main class attempt 2

//Div.prototype.draw = function (){
//   this.element = $('<div>DIV ON THE SCREEN</div>');
//     $('p').append(this.element);
//     $(this.element).click(this.click);
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