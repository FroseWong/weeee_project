<?php
    //清除Session
    function Logout(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        session_unset();
        session_destroy();

    }
?>