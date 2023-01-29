<?php

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = [];
if (isset($_GET['memberNumber'])) {
    //1. 取得請求參數
    $memberNumber = $_GET['memberNumber'];
    $joNumber = $_GET['joNumber'];
    $joTitle = $_GET['joTitle'];
    $joStatus = $_GET['joStatus'];
    $from = $_GET['from'];
    $to = $_GET['to'];

    //2.組裝SQL
    $sql = "SELECT  `Member`.MemberNumber, Jo.JoTitle, Jo.JoStartDate, Jo.JoNumber, Jo.JoStatus, Jo.JoID
    from Jo 
    join `Member`
    on `Member`.MemberID = Jo.MemberID
    WHERE 1 = 1";
    $criteria = "";
    if (strlen($memberNumber) != 0){
        $criteria = $criteria . " AND MemberNumber = '". $memberNumber."'";
    }
    if (strlen($joNumber) != 0){
        $criteria = $criteria . " AND JoNumber = '". $joNumber."'";
    }
    if (strlen($joTitle) != 0){
        $criteria = $criteria . " AND JoTitle = '". $joTitle."'";
    }
    if (strlen($joStatus) != 0){
        $criteria = $criteria . " AND JoStatus = '". $joStatus."'";
    } 
    if (strlen($from) != 0 && strlen($to) != 0){
        $criteria = $criteria . " AND JoStartDate BETWEEN '". $from ."' and '". $to ."'";
    } 

    $sql = $sql . $criteria . ";";

} 
else {
    $sql = "SELECT  `Member`.MemberNumber, Jo.JoTitle, Jo.JoStartDate, Jo.JoNumber, Jo.JoStatus, Jo.JoID
    from Jo 
    join `Member`
    on Member.MemberID = Jo.MemberID;";
}



//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);
?>