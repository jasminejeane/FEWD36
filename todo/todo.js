
// Structure
var form   = document.querySelector("form");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var list   = document.querySelector("ul");


// Events
form.addEventListener("submit", addTask);

// Setup


// Event handler functions
// ---------------------------------
function addTask(e) {
	// form doesn't clear automatically when the page loads
	e.preventDefault();

	var task = input1.value;
	var date = input2.value;

// Step 1 - create elements: li and input
	var li = document.createElement("li");
	var check = document.createElement("input");

	// Step 2 - getting the right text to display
	// li.textContent = check + " " + task +" " + date;

	//step 2.2 setting the attribute of the input (the checkbox )
	var attr = document.createAttribute("type");
	attr.value = "checkbox";
	//puts this little bit into he input so in reads ex. 
	//(<input class="input2" type= "date" placeholder="mm/dd/yyyy">)
	check.setAttributeNode(attr);

	list.appendChild(check);
	li.textContent = task +" " + date;

	// Step 3 - surgical insertion of our element
	list.appendChild(li);




	// Clean up
	form.reset();
}


// Update page functions
// ---------------------------------


