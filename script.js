
// firebase example
function getNotesForName(name) {  
  onNewListItem(nameInput.val() + "/notes", function(note) {
    $("#note-list").append("<div>" + note + "</div>")
  })
}

// objects
addListItem("product-list", {name: "donut", picture:  "http://www.withsprinklesontop.net/wp-content/uploads/2012/01/DSC_0406x900.jpg", price: "5", rating: "10/10", weight: "0.5lb"})


var functionString = getNotesForName.toString();

var consoleLogExample = $("#ex1");

var formattedExample = $("<pre>");

formattedExample.text(functionString);

consoleLogExample.html(formattedExample);

