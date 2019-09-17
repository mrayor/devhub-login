<?php
	// $fullName = null;
	// $email = null;
	// $password = null;

    // read json file
	$data = file_get_contents('data.json');
	// decode json
	$json_arr = json_decode($data, true);

    // add data
	$json_arr[] = array('id'=>'4', 'fullName'=>'Jeff Darwin', 'email'=>'maven.h@gmail.com', 'password'=>'1234');

	// encode json and save to file
	file_put_contents('data.json', json_encode($json_arr));

?>