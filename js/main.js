$(document).ready(function() {
	$('#showPassword').on('click', function(event){
			var checkVal = $('#inputPassword');
			if (checkVal.attr('type') === 'password') {
				checkVal.attr('type', 'text');
			} else {
				checkVal.attr('type', 'password');
			}
		});
	$('form').on("submit", function(e){
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
	            		/* user this data to log in
	            			email: message.ao@gmail.com
	            			password: 1234;
	            		*/
	            		alert('you have successfully logged in.')
						// console.log(data);
	            	}
	            	else{
	            		$('.alert').removeClass('d-none');
	            	}
	            }
			})
		});
});

