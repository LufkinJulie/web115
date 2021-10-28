function getNames() {
	let fName=document.getElementById("fName").value;
	let lName=document.getElementById("lName").value;
	let mInitial=document.getElementById("mInitial").value;
	let numCount = 140;
	let firstDivisor = 3;
	let secondDivisor = 5;

	if (mInitial) {
	document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${fName} ${mInitial}, ${lName}!`;
	} 
	else {
		document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${fName} ${lName}!`;
	}
	getAnswer(numCount, firstDivisor, secondDivisor);
}
function getFizzy(firstDivisor, secondDivisor) {
	if (firstDivisor % secondDivisor === 0) {
		return true;
	} else {
		return false;
	}
}
function getAnswer(numCount,firstDivisor, secondDivisor) {
	for (let i=1; i<=numCount; i++) {
		var third;
	
	if (getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor)) {
		third = "Tag your it";
		}
		else if (getFizzy(i, secondDivisor)) {	
		third = "Run";
		}
		else if (getFizzy(i, firstDivisor)) {
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