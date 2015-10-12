$(document).ready(function() {

$('#start').click(function() {
  return fizzbuzzer();
});

  

var fizzbuzzer = function() {

  var num = +prompt("Enter a number from 1 to 100.");
  
 

    if (num % 1 != 0) {
      alert("Please do not enter decimals or letters.");
    } 
    else {
      for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) {
          $("#body").append("fizzbuzz <br>");
         
        } else if (i % 3 === 0) {
          $("#body").append("fizz <br>");
          
        } else if (i % 5 === 0) {
          $("#body").append("buzz <br>");
          
        } else {
          $("#body").append(i + "<br>");
          
        }                 
      }
    }
  }
}

);