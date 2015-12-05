









//Events
//----------------------------------------------------
form.addEventListener("submit", getMovies);






//Event Handlers
//-----------------------------------------------------------
function getMovies(e){
	e.preventDefault();
	console.log("getMovies");

	var search = input.value;
	var url =

	// make ajax request
	jQuery.getJSON(url, updateMovies);
}

//Update Page
//-----------------------------------------------------------
function updateMovies(json){
	console.log("updateMovies";)
}
