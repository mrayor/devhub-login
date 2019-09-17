<?php
	$fullname = null;
	$email = null;
	$password = null;

    // read json file
	$data = file_get_contents('data.json');
	// decode json
	$json_arr = json_decode($data);

	//find user
	$findUser = function($email) use ($json_arr) {
		foreach ($json_arr as $user) {
            if ($user->email == $email) return false;
		}
        return true;
	};

	// process post request
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		if(!empty($_POST["fullname"]) && !empty($_POST["email"]) && !empty($_POST["password"])) {
			$fullname = $_POST["fullname"];
			$email = $_POST["email"];
            $password = $_POST["password"];

            // check if user exist
            $regUser = $findUser($email) ?: false;
            if ($regUser) {
            	// add data
				$json_arr[] = array('id'=>'4', 'fullName'=>$fullname, 'email'=>$email, 'password'=>$password);

				// encode json and save to file
				file_put_contents('data.json', json_encode($json_arr));
				echo true;
            }
            else{
            	echo false;
            }
		}
	}
?>