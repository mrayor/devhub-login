$(document).ready(function() {
	$('#showPassword').on('click', function(event){
			var checkVal = $('#loginPassword');
			if (checkVal.attr('type') === 'password') {
				checkVal.attr('type', 'text');
			} else {
				checkVal.attr('type', 'password');
			}
		});
	$('#login').on('submit', function(e){
		e.preventDefault();
		$('#submitBtn')
			.attr('disabled', true)
				.html('<i class="fas fa-spinner fa-pulse fa-fw "></i> Processing');
		var formData = new FormData(this);
		$.ajax({
			url: 'auth/validate.php',
			type : 'POST',
            data : formData,
            processData: false,
            cache: false,
            contentType: false,
            success: function(data){
            	$('#submitBtn')
            		.attr('disabled', false)
            			.html('<i class="fas fa-sign-in-alt" id="signIn"></i> Sign in');
            	if (data){
            		// 
            		var userData = data.split('&');
            		sessionStorage.setItem('userEmail', userData[0]);
            		sessionStorage.setItem('userName', userData[1]);
            		window.location.replace("dashboard.html");
            	}
            	else{
            		$('.alert').removeClass('d-none');
            	}
            }
		})
	});
	$('#inputPassword, #reInputPassword').on('keyup', function(){
		if ($('#inputPassword').val() !== $('#reInputPassword').val()) {
			$('#reInputPassword')[0].setCustomValidity('Passwords must match.');
		}
		else{
			$('#reInputPassword')[0].setCustomValidity('');
		}
	});
	$('#signUp').on('submit', function(e){
		e.preventDefault();
		$('#submitBtn')
			.attr('disabled', true)
				.html('<i class="fas fa-spinner fa-pulse fa-fw "></i> Processing');
		var formData = new FormData(this);
		$.ajax({
			url: 'auth/register.php',
			type : 'POST',
            data : formData,
            processData: false,
            cache: false,
            contentType: false,
            success: function(data){
            	$('#submitBtn')
            		.attr('disabled', false)
            			.html('<i class="fas fa-user-plus" id="register"></i> Sign up');
            	if (data) {
            		window.location.replace("login.html");
            		// console.log(true);
            	}
            	else{
            		$('.alert').removeClass('d-none');
            		// console.log(false);
            	}
            }
		})
	});
	$('#logout').on('click', function(e){
		sessionStorage.clear();
		window.location.replace("login.html");
	});
});

