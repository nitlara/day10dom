let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	// create a new div element
	var newli = document.createElement("li");
	document.ul.appendChild(newli);
	console.log(newli);
	// and give it some content
	newli.innerHTML = "Fourth element";
});

window.increaseCounter = function increaseCounter() {
	//increase the global counter in one
	counter++;
	//update the screen with the new value
	document.getElementById("screen").innerHTML = "The counter value is " + counter;
};
