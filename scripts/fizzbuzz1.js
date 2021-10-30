function getNames() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var middleInitial = document.getElementById("middleInitial").value;
	let numCount = 140;
	
	if (middleInitial) {
		document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${firstName} ${middleInitial}, ${lastName}!`;
	} 
	else {
		document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	}
	getAnswer(numCount);
}
function getAnswer(numCount) {
	for (let i=1; i<=numCount; i++) {
		var third;
	
	if (i % 5 === 0 && i % 3 == 0) {
		third = "Tag your it";
	}
		else if (i % 5 === 0) {	
		third = "Run";
	} 
		else if (i % 3 === 0) {
		third = "Goose";
	}
		else {
			third = "Duck";
		}
		// creating the list element
		var newList = document.createElement("li");
		
		// text output
		var newTextOutput = document.createTextNode(i + ": " + third);
			
		// append info
		newList.appendChild(newTextOutput);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newList);
	}
}
