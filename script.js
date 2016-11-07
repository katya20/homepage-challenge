// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

var functionString = logArgs;

var consoleLogExample = $("#ex 1")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)
