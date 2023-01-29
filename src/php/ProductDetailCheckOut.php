<?php
require_once('connection.php');

// -----------取得會員---------------
include("Member.php");
getMemberID();
// -----------如果沒登入:回傳---------------
if (empty($_SESSION["MemberID"])) {
    echo json_encode(false);
    
}
else{
    echo json_encode(true);
}
