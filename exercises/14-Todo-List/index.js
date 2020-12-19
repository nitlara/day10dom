document.getElementById("addToDo").addEventListener("change", function() {
	var input = document.getElementById("addToDo");
	var list = document.querySelector("ul");
	var item = document.createElement("li");
	item.innerHTML = '<i class="fa fa-trash"></i></span> ' + input.value;
	list.appendChild(item);
});

document.querySelector("ul").addEventListener("click", function(event) {
	event.target.parentNode.removeChild(event.target);
});
