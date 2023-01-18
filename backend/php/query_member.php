<?php

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = [];
if (isset($_GET['memberNumber'])) {
    //1. 取得請求參數
    $memberNumber = $_GET['memberNumber'];
    $username = $_GET['username'];
    $memberStatus = $_GET['memberStatus'];
    $from = $_GET['from'];
    $to = $_GET['to'];

    //2.組裝SQL
    // $sql = "SELECT  MemberNumber, Username, MemCreateDate, MemStatus from Member";
    // $criteria = "";
    // if (strlen($memberNumber) != 0){
    //     if (strlen($criteria) != 0){
    //         $criteria = $criteria . " AND";
    //     }else{
    //         $criteria = $criteria . " WHERE";
    //     }
    //     $criteria = $criteria . " MemberNumber = ". $memberNumber;
    // }

    $sql = "SELECT  MemberNumber, Username, MemCreateDate, MemStatus from Member WHERE 1 = 1";
    $criteria = "";
    if (strlen($memberNumber) != 0){
        $criteria = $criteria . " AND MemberNumber = '". $memberNumber."'";
    }
    if (strlen($username) != 0){
        $criteria = $criteria . " AND Username = '". $username."'";
    }
    if (strlen($memberStatus) != 0){
        $criteria = $criteria . " AND MemStatus = '". $memberStatus."'";
    } 
    if (strlen($from) != 0 && strlen($to) != 0){
        $criteria = $criteria . " AND MemCreateDate BETWEEN '". $from ."' and '". $to ."'";
    } 

    $sql = $sql . $criteria . ";";

} 
else {
    $sql = "SELECT  MemberNumber, Username, MemCreateDate, MemStatus from Member;";
}



//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);
?>