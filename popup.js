function togglePasswords(){
	if (!show){
		show = true;
		revealPasswords();
	} else {
		show = false;
		hidePasswords();
	}
}

function revealPasswords(){
	chrome.tabs.executeScript(null, {file: "reveal.js"});
}

function hidePasswords(){
	if (!show){
		chrome.tabs.executeScript(null, {file: "hide.js"});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("btn").addEventListener("mouseover", revealPasswords);
	document.getElementById("btn").addEventListener("mouseout", hidePasswords);
	document.getElementById("btn").addEventListener("click", togglePasswords);
});

show = false; //currently not showing passwords
