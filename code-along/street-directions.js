
// Structure
var form   = document.querySelector("form");
var street = document.querySelector("input");
var list   = document.querySelector("ul");
var route  = document.querySelector(".route");

// Events
form.addEventListener("submit", addStreet);
route.addEventListener("click", showRoute);

// Setup
var streets = [];


// Event handler functions
// ---------------------------------
// function addStreet(e) {
// 	e.preventDefault();
// 	streets.push(street.value);
6
// 	// Clean up
// 	form.reset();
// }

function showRoute(e) {

	e.preventDefault();
	streets.push(street.value);
		form.reset();

	console.log("showRoute");
	streets.forEach(directions);
}

// Update page functions
// ---------------------------------
function directions(item) {

	// Step 1 - create element
	var li = document.createElement("li");

	// Step 2 - blingification of the element
	li.textContent = item;

	// Step 3 - surgical insertion of our element
	list.appendChild(li);

}

