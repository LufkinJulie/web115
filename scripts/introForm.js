function getInfo() 
{
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var personal_background = "Personal Background: "  + document.getElementById("personal_background").value;
	var professional_background = document.getElementById("professional_background").value;
	var academic_background = document.getElementById("academic_background").value;
	var subject_background = document.getElementById("subject_background").value;
	var computer = document.getElementById("computer").value;
	var courses = document.getElementById("courses").value;
	var remember_me = document.getElementById("remember_me").value;
	var sharing = document.getElementById("sharing").value;
	
	// display welcome
	document.getElementById("welcome").textContent = `Welcome to Old Dog Coding, ${firstName} ${lastName}!`;
	document.getElementById("personal_background").innerHTML = "Personal Background: " + personal_background; 
	// place array information in new function name
	getBackground(newInfo);
}
