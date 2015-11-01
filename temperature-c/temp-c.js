
var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');
var buttonOne = document.querySelector('.c_to_f');
var buttonTwo = document.querySelector('.f_to_c');
// var body = document.querySelector("body");

// tempF.addEventListener('keyup', calcFtoC);
// tempC.addEventListener('keyup', calcCtoF);
buttonOne.addEventListener('click', calcCtoF);
buttonTwo.addEventListener('click', calcFtoC);


$(".fc").hide().show("slow");

 function calcCelciusToFahrenheit(c){
        var f = c * 9/5 + 32
        return f;
      }

      //Fahrenheit to celcius: (fahrenheit - 32) * 5/9
      
      function  calcFahrenheitToCelcius(f){
        var c = (f-32) * (5/9)
        return c;

      } 




function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}


function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFahrenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}



// function calcFtoC(event) {
//   if (tempF.value.length > 0) {
//     tempC.value = calcFahrenheitToCelcius(tempF.value)
//   } else {
//     tempC.value = '';
//   }
// }

// function calcCtoF(event) {
//   if (tempC.value.length > 0) {
//     tempF.value = calcCelciusToFahrenheit(tempC.value)
//   } else {
//     tempF.value = '';
//   }
// }
