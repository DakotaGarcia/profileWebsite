/* Function that to add the "animate" class to the mobile menu icon */
function animateMenu(currentClass){
	currentClass.classList.toggle("animate");
	var x = document.getElementById("navBarID");
	if (x.className === "navBar") {
		x.className += " responsive";
	} else {
		x.className = "navBar";
	}
}
