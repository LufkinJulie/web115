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
	
	if (getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor) && getFizzy(i, thirdDivisor)) 
		{
		third = "Tag your it";
		}
		else if (getFizzy(i, thirdDivisor))
		{
			third = "Sit";
		}
		else if (getFizzy(i, secondDivisor)) 
		{	
			third = "Run";
		}
		else if (getFizzy(i, firstDivisor)) 
		{
			third = "Goose";
		}
		else {
			third = "Duck";
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