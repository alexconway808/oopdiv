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
  this.htmlElement = $("<div>Click Here</div>");
//Append the HTML Element to the body/p element
  $("p").append(this.htmlElement);
//Assign a click function to the HTML element
  $(this.htmlElement).click(this.click);
}


//Create a blue div and red div class
//This function defines a Bluediv subclass, this is the pigdog
function BlueDiv(color){}
//Create the new div by connecting it to prototype, this makes it draw
BlueDiv.prototype = new Div();

//Same for red Div
function RedDiv(color){}
RedDiv.prototype = new Div();


//Add a sub class specific click handler to add the color to both classes
BlueDiv.prototype.click = function(){
  $(this).css("color", "#0000FF");
  console.log("blue click");
}

RedDiv.prototype.click = function(){
  $(this).css("color", "#FF0000");
  console.log("red click")
};


//Add the document.ready function to get the new Bluediv and RedDiv to 
//render when the DOM is ready/loaded
$(document).ready(function(){
  var color = new BlueDiv();
  color.draw();

  var color = new RedDiv();
  color.draw();
});


