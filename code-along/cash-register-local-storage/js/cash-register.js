// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;
var receipt = {
	"items": []
};

var myFirebaseRef = new Firebase("https://cashregisterfewd36.firebaseio.com/");

// Events
// ------------------------------------------------
window.addEventListener("load", setPageState);
form.addEventListener("submit", enter);


// Event handler functions
// ------------------------------------------------

function dataChanged(snapshot){

	if (snapshot.val() === null){
		return;
	}

	totalValue = 0;
	entries.innerHTML ="";
	receipt = snapshot.val();

	receipt.items.forEach(createLine);
}

function setPageState(event) {

	myFirebaseRef.on("value", dataChanged);

	// error checking. return early if nothing saved yet
	


	// Repopulate the list


}

function enter(event) {
	event.preventDefault();

	// get the current entry value from form, convert to number with parseFloat
	var cost = parseFloat(input.value);

	// update page
	createLine(cost);

	// clean up!
	input.value = "";

	// save to local storage
	receipt.items.push(cost);
	// localStorage.setItem("receipt", JSON.stringify(receipt));'
	myFirebaseRef.set(receipt);
}


// Update page functions
// ------------------------------------------------
function createLine(item) {

	// create and append the new list item
	var li = document.createElement("li");

	// update the value for the total
	totalValue = totalValue + item;

	// set the text content for both the new list item and the total
	li.textContent = formatCurrency(item);
	total.textContent = formatCurrency(totalValue);

	entries.appendChild(li);

}


// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}
