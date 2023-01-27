<?php

function CheckMemberID(){

   //判斷session是否存在
    if(!isset($_SESSION)){
        session_start(); 
    }
    
    //有登入session->回傳ID，無登入session->回傳空字串""
    return isset($_SESSION["MemberID"]) ? $_SESSION["MemberID"] : ""; 
    
    }
    $MID = $_SESSION["MemberID"];
?>