function getNames() 
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var middleInitial = document.getElementById("middleInitial").value;
	let numCount = 140;
	let firstDivisor = 3;
	let secondDivisor = 5;
	let thirdDivisor = 7;
	
	if (middleInitial) 
	{
		document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${middleInitial}, ${lastName}!`;
	} 
	else 
	{
		document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	}
	getAnswer(numCount, firstDivisor, secondDivisor, thirdDivisor);
}
function getFizzy(firstDivisor, secondDivisor, thirdDivisor) 
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
function getAnswer(numCount,firstDivisor, secondDivisor, thirdDivisor) 
{
	for (let i = 1; i <= numCount; i++)
	{
		var third;
	
	if	(getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor) && getFizzy(i, thirdDivisor)) 
		{
			third = "Old Dog Coding";
		}
		else if (getFizzy(i, secondDivisor) && getFizzy(i, thirdDivisor))
		{
			third = "Dog Coding";
		}
		else if (getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor))
		{
			third = "Old Dog";
		}	
		else if (getFizzy (i, firstDivisor) && getFizzy(i, thirdDivisor))
		{
			third = "Old Coding";
		}
		else if(getFizzy(i, thirdDivisor))
		{
			third = "Coding";
		}
		else if (getFizzy(i, secondDivisor)) 
		{	
			third = "Dog";
		}
		else if (getFizzy(i, firstDivisor)) 
		{
			third = "Old";
		}
		else {
			third = "Welcome";
		}
		// creating the list element
		var newEl = document.createElement("li");
		
		// text output
		var newList = document.createTextNode(i + ": " + third);
			
		// append info
		newEl.appendChild(newList);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newEl);
	}
}