document.getElementById('showPassword')
	.addEventListener("click", function(event){
		var checkVal = document.getElementById("inputPassword");
		if (checkVal.type === "password") {
			checkVal.type = "text";
		} else {
			checkVal.type = "password";
		}
	});