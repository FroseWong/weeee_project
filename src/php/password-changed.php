<?php
require_once "controllerUserData.php";

if($_SESSION['info'] == false){
    header('Location: login-user.php');  
}

if(isset($_SESSION['info'])){
    
   
    echo $_SESSION['info']; 
    
}


?>
