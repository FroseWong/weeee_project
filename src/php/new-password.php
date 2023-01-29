<?php

require_once "controllerUserData.php";

$email = $_SESSION['email'];
if($email == false){
  header('Location: login-user.php');
}


if(isset($_SESSION['info'])){
  
    echo $_SESSION['info'];

}


if(count($errors) > 0){
      
        foreach($errors as $showerror){
            echo $showerror;
        }      
}



?>