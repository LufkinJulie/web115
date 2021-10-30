function getNames()
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var middleInitial = document.getElementById("middleInitial").value;
	
	if (middleInitial) 
	{
	document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${middleInitial}, ${lastName}!`;
	} 
	else 
	{
		document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	}
	var numCount = prompt(`How high can you count ${firstName}?`);
	getAnswer(numCount);
}
function getAnswer(count) 
{
	for (var i = 1; i <= count; i++) 
	{
		var evenOdd;
		
	if (i % 2 === 0) {
		evenOdd = "This number is even";
	} else {
		evenOdd = "This number is odd";
	}
		// creating the list element
		var newList = document.createElement("li");
		
		// text output
		var newTextOutput = document.createTextNode(i + ":" + " Old Dog Coding - " + evenOdd);
			
		// append info
		newList.appendChild(newTextOutput);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newList);
	}
}