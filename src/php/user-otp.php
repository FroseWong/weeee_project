<?php
require_once "controllerUserData.php";

$Username = $_SESSION['Username'];
if($Username == false){
  header('Location: login.html');
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