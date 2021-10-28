function getNames() {
	let fName=document.getElementById("fName").value;
	let lName=document.getElementById("lName").value;
	let mInitial=document.getElementById("mInitial").value;
	let numCount = 140;
	if (mInitial) {
	document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${fName} ${mInitial}, ${lName}!`;
	} 
	else {
		document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${fName} ${lName}!`;
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
		var newEl = document.createElement("li");
		
		// text output
		var newList = document.createTextNode(i + " " + third);
			
		// append info
		newEl.appendChild(newList);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newEl);
	}
}