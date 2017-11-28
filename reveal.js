var inputs = document.getElementsByTagName("input");

if (typeof passwordInputs == "undefined"){
	passwordInputs = [];
}

for (var i = 0; i < inputs.length; i++){
	if (inputs[i].type == "password"){
		passwordInputs.push(inputs[i]);
		inputs[i].autocomplete = "off";
		inputs[i].type = "text";
	}
}
