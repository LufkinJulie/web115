function getNames() 
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var middleInitial = document.getElementById("middleInitial").value;
	let numCount = 140;
	let firstDivisor = 3;
	let secondDivisor = 5;

	if (middleInitial) 
	{
	document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${firstName} ${middleInitial}, ${lastName}!`;
	} 
	else 
	{
		document.getElementById("welcome").textContent=`Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	}
	getAnswer(numCount, firstDivisor, secondDivisor);
}
function getFizzy(firstDivisor, secondDivisor) 
{
	if (firstDivisor % secondDivisor === 0) 
	{
		return true;
	} 
	else 
	{
		return false;
	}
}
function getAnswer(numCount,firstDivisor, secondDivisor) 
{
	for (let i=1; i<=numCount; i++) 
	{
		var third;
	
	if (getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor)) 
		{
			third = "Old Dog Coding";
		}
		else if (getFizzy(i, secondDivisor)) 
		{	
			third = "Coding";
		}
		else if (getFizzy(i, firstDivisor)) 
		{
			third = "Dog";
		}
		else 
		{
			third = "Old";
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