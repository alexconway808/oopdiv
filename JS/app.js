//Create a base class, this is the "Animal class"
function Div(name){
  this.name = name;
//Create an htmlElement property
  this.htmlElement = null;
}


//Define a prototype called draw, this is like the climb prototype for Animals
//Add a draw method to your base class that adds a <div> to the page
Div.prototype.draw = function(){
//Create the HTML Element using This and Jquery
  this.htmlElement = $("<div>DIV IS HERE</div>");
//Append the HTML Element to the body/p element
  $("p").append(this.htmlElement);
//Assign a click function to the HTML element
  $(this.htmlElement).click(this.click);
}


//Create a blue div and red div class and make them draw with the
//right colors
//This function defines a blueDiv subclass, this is the pigdog
function blueDiv(color){}
//Create the new div by connecting it to prototype, this makes it draw
blueDiv.prototype = new Div();

//Same for red Div
function redDiv(color){}
redDiv.prototype = new Div();

//Add the document.ready function to get the new blueDiv and redDiv to 
//render when the DOM is ready/loaded
$(document).ready(function(){
  var color = new blueDiv();
  color.draw();

  var color = new redDiv();
  color.draw();
});


//Add a sub class specific click handler to add the color to both classes
blueDiv.prototype.click = function(){
  $(this).css("color", "0000FF");
}

redDiv.prototype.click = function(){
  $(this).css("color", "FF0000");
};
