if (sessionStorage.getItem('userEmail') === null || sessionStorage.getItem('userName') === null) {
	var current_path2 = window.location.pathname.split('/').pop();
	if (current_path2 !== "login.html") {
		window.location.href = "login.html";
	}
}
else{
	var current_path2 = window.location.pathname.split('/').pop();
	if (current_path2 !== "dashboard.html") {
		window.location.href = "dashboard.html";
	}
	
}