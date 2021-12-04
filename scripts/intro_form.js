function getInfo() 
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var personal_background = "Personal Background: "  + document.getElementById("personal_background").value;
	var professional_background = "Professional Background: " + document.getElementById("professional_background").value;
	var academic_background = "Academic Background: " + document.getElementById("academic_background").value;
	var subject_background = "Background in this subject: " + document.getElementById("subject_background").value;
	var computer = "Primary Computer Platform: " + document.getElementById("computer").value;
	var courses = "Courses I'm Taking, & Why: " + document.getElementById("courses").value;
	var remember_me = "Something to Remember Me By: " + document.getElementById("remember_me").value;
	var sharing = "I'd Also Like to Share: " + document.getElementById("sharing").value;
	
	// display welcome
	document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	// create array to forward information.
	const newInfo = [personal_background, professional_background, academic_background, subject_background, computer, remember_me, sharing];
	// place array information in new function name
	getBackground(newInfo);
}
function getBackground(newInfo)
{
	for (let i = 0; i < newInfo.length; i++)
	{
		// creating the list element
		var newList = document.createElement("li");
		
		// text output
		var newTextOutput = document.createTextNode(newInfo[i]);
			
		// append info
		newList.appendChild(newTextOutput);
			
		// where to place on page
		var place = document.getElementsByTagName("ul")[0];
		place.appendChild(newList);
	}
}

