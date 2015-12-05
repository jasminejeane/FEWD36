// Structure
// ----------------------------------------------

var pictures = document.querySelector(".pictures");
var names = document.querySelector(".names");
var feed = document.querySelector(".feed");



// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------

var cat = {

	picture: "baby.jpg",
	name: "Daisy"
};


// Event handlers
// ----------------------------------------------

window.addEventListener("load", setupPage);


// Update page functions
// ----------------------------------------------
	function setupPage() {

		mockPictures.forEach(createPicture);

	}


	function createPicture(item) {


	// 1. Create element (li)
	var li = document.createElement("li");
	var img = document.createElement("img");

	//2. decorate element 
img.setAttribute("src", "images/" + item)
	// 3. Inserti nit othe DOM
	names.appendChild(li);

}

function createName(item) {

		// 1. Create element (li)

	var li  = document.createElement("li");

	//2. decorate element 
	li.textContent = item;


	//append

	names.appendChild(li);


}

	function createPost(item) {


	// 1. Create element (li)
	var li = document.createElement("li");
		var p = document.createElement("p");
		var img = document.createElement("img");

	//2. decorate element 
	p.textContent = item.name;
	img.setAttribute("src", "images/" + item.picture);

	// 3. Inserti nit othe DOM
	li.appendChild(p);
	li.appendChild(img);
	feed.appendChild(li);


}