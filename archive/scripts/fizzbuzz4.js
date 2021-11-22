function getNames() 
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var middleInitial = document.getElementById("middleInitial").value;
	var numCount = document.getElementById("numCount").value;
	var firstDivisor = document.getElementById("firstDivisor").value;
	var secondDivisor = document.getElementById("secondDivisor").value;
	var thirdDivisor = document.getElementById("thirdDivisor").value;
	var firstWord = document.getElementById("firstWord").value;
	var secondWord = document.getElementById("secondWord").value;
	var thirdWord = document.getElementById("thirdWord").value;

	if (middleInitial) 
	{
		document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${middleInitial}, ${lastName}!`;
	} 
	else 
	{
		document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	}
	getAnswer(numCount,firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord);
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
function getAnswer(numCount,firstDivisor, secondDivisor, thirdDivisor, firstWord, secondWord, thirdWord) 
{
	for (let i = 1; i <= numCount; i++)
	{	
		var third;
	if (getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor) && getFizzy(i, thirdDivisor))  
		{
			third = `${firstWord} ${secondWord} ${thirdWord}`;
		}
		else if (getFizzy(i, secondDivisor) && getFizzy(i, thirdDivisor))
		{
			third =`${secondWord} ${thirdWord}`;
		}
		else if (getFizzy(i, firstDivisor) && getFizzy(i, secondDivisor)) 
		{
			third = `${firstWord} ${secondWord}`;
		}
		else if (getFizzy(i, firstDivisor) && getFizzy(i, thirdDivisor)) 
		{
			third = `${firstWord} ${thirdWord}`;
		}
		else if (getFizzy(i, thirdDivisor))
		{
			third = `${thirdWord}`;
		}
		else if (getFizzy(i, secondDivisor)) 
		{	
			third = `${secondWord}`;
		}
		else if (getFizzy(i, firstDivisor)) 
		{
			third = `${firstWord}`;
		}
		else
		{
			third = " ";
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