<?php
require_once "./controllerUserData.php";

    if(count($errors) > 0){
                         
        foreach($errors as $error){
        echo $error;
        }
                               
 }

?>