
// firebase example
//function getNotesForName(name) {  
//  onNewListItem(nameInput.val() + "/notes", function(note) {
//    $("#note-list").append("<div>" + note + "</div>")
//  })
//}
//
//var functionString = getNotesForName.toString();
//
//var consoleLogExample = $("#ex1");
//
//var formattedExample = $("<pre>");
//
//formattedExample.text(functionString);
//
//consoleLogExample.html(formattedExample);


// objects
//donut = {name: "donut", 
//         picture:  "http://www.withsprinklesontop.net/wp-content/uploads/2012/01/DSC_0406x900.jpg", 
//         price: "5", 
//         rating: "10/10", 
//         weight: "0.5lb"}
//
//var functionString1 = JSON.stringify(donut)
//
//var consoleLogExample1 = $("#ex2");
//
//var formattedExample1 = $("<pre>");
//
//formattedExample1.text(functionString1);
//
//consoleLogExample1.html(formattedExample1);

// functions
function saySomething() {
  $(".bubble").html("");
  console.log("clicked");
  $(".bubble").show();
}

var functionString2 = saySomething.toString()

var consoleLogExample2 = $("#ex3");

var formattedExample2 = $("<pre>");

formattedExample2.text(functionString2);

consoleLogExample2.html(formattedExample2);

// JQuery

function jQuery() {
 $("#div-id-name").html("hi")
}

var functionString3 = jQuery.toString()

var consoleLogExample3 = $("#ex4");

var formattedExample3 = $("<pre>");

formattedExample3.text(functionString3);

consoleLogExample3.html(formattedExample3);

// Text Effects

var lettersToFade = $(".ghostly").children();
var index = 0
setInterval(function() {
  if (index >= lettersToFade.length) {
    index = 0
  }
  var letterToFade = $(lettersToFade[index]);
  letterToFade.animate({"opacity": "0"}, {
    complete: function() {
      letterToFade.animate({opacity: "1"})
    }
  }) 	
  index = index + 1
}, 150)









