window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	let select = document.getElementById("mySelect");
	for (var i = 0; i < countries.length; i++) {
		var option = document.createElement("option");
		option.setAttribute("value", countries[i]);
		option.text = countries[i];
		select.appendChild(option);
	}
	document.querySelector("#mySelect").addEventListener("change", function() {
		var country = document.getElementById("mySelect").value;
		var onClickAction = "alert('" + country + "');";
		document.getElementById("btn").setAttribute("onClick", onClickAction);
	});
};
