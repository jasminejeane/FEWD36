// Structure
// -------------------------------------
var list = document.querySelector("ul");


// Setup
// -------------------------------------
var theme = {
	'color': 'white'
};


// Events
// -------------------------------------
window.addEventListener("load", pageLoad);
list.addEventListener("click", handleClick);


// Event handler functions
// -------------------------------------
function handleClick(event) {
	// Return early unless the swatch was clicked
	if (event.target.tagName === "UL") {
		return;
	}
	var swatchElement = event.target;
	var swatchColor = swatchElement.getAttribute("class");

	// 1. Update data model
	theme.color = swatchColor;

	// 2. Call function to update page
	changeColor(theme);

	// 3. Save the data model to localStorage
	localStorage.setItem('theme', JSON.stringify(theme));
}

function pageLoad(event) {
	// Get the data model out of localStorage

	// if the localStorage key is null, just use the default data (setup above)
	if (localStorage.getItem('theme') == null) {
		changeColor(theme);
	} else {
		theme = JSON.parse(localStorage.getItem('theme'));
		changeColor(theme);
	}
}


// Update page functions
// -------------------------------------
function changeColor(theme) {
	var body = document.querySelector("body");
	body.className = theme.color;
	var name = document.querySelector("span");
	name.textContent = theme.color;
}
