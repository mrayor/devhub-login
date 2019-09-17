<?php
    $email = null;
    $password = null;


    $jsonitem = file_get_contents("data.json");
    $objitems = json_decode($jsonitem);

    $findUser = function($email, $password) use ($objitems) {
        foreach ($objitems as $user) {
            if ($user->email == $email && $user->password == $password) return $user->email.'&'.$user->fullName;
            // else return 
        }
        return false;
    };

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        if(!empty($_POST["email"]) && !empty($_POST["password"])) {
            $email = $_POST["email"];
            $password = $_POST["password"];
            $authUser = $findUser($email, $password) ?: false;
            if($authUser) {
                // session_start();
                // $_SESSION["authenticated"] = 'true';
                // header('Location: index.php');
                echo $authUser;
            }
            else {
                echo false;
            }
            
        } else {
            // header('Location: login.php');
            echo false;
        }
    }
?>