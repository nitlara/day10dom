let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	// create a new div element
	var newDiv = document.createElement("div");
	document.body.appendChild(newDiv);
	console.log(newDiv);
	// and give it some content
	newDiv.innerHTML = "Hello World";

	newDiv.style.background = "yellow";
});
