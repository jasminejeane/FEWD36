

// Structure
// -------------------------------------
var first = document.querySelector(".first-number");
var second = document.querySelector(".second-number");
var sign = document.querySelector(".sign");
var button = document.querySelector(".compare");


// Events
// -------------------------------------

button.addEventListener("click", compare);

// ...to do in next class!

function compare(event) {
    var firstvalue = parseFloat(first.value);
    console.log(first.value);
    var secondvalue = parseFloat(second.value);
    console.log(second.value);
    if (firstvalue > secondvalue){
        sign.textContent = ">";
    }
    else if (firstvalue < secondvalue){
        sign.textContent = "<";
    }
    else {
        sign.textContent = "=";
    }
    }
// Event handler functions
// -------------------------------------