function getNames() {
	let fName=document.getElementById("fName").value;
	let lName=document.getElementById("lName").value;
	let mInitial=document.getElementById("mInitial").value;
	
	if (mInitial) {
	document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${fName} ${mInitial}, ${lName}!`;
	} 
	else {
		document.getElementById('welcome').textContent=`Welcome to Old Dog Coding, ${fName} ${lName}!`;
	}
	let numCount = prompt(`How high can you count ${fName}?`);
	getAnswer(numCount);
}
function getAnswer(count) {
	for (let i=0; i<=count; i++) {
		var evenOdd;
		
	if (i % 2 === 0) {
		evenOdd = "This number is even";
	} else {
		evenOdd = "This number is odd";
	}
		// creating the list element
		var newEl = document.createElement("li");
		
		// text output
		var newList = document.createTextNode(i + " Old Dog Coding -" + evenOdd);
			
		// append info
		newEl.appendChild(newList);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newEl);
	}
}