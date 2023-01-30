<?php

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = [];
if (isset($_GET['memberNumber'])) { //分辨你是不是按了搜尋
    //1. 取得請求參數
    $orderNumber = $_GET['orderNumber'];
    $memberNumber = $_GET['memberNumber'];
    $from = $_GET['from'];
    $to = $_GET['to'];

    $sql = "SELECT  MemberNumber, OrderDate, OrderNumber, OrderID 
    from `Order` 
    join Member
    on `Order`.MemberID = Member.MemberID 
    WHERE 1 = 1";
    $criteria = "";
    if (strlen($memberNumber) != 0){
        $criteria = $criteria . " AND MemberNumber = '". $memberNumber."'";
    }
    if (strlen($orderNumber) != 0){
        $criteria = $criteria . " AND OrderNumber = '". $orderNumber."'";
    }
    if (strlen($from) != 0 && strlen($to) != 0){
        $criteria = $criteria . " AND OrderDate BETWEEN '". $from ."' and '". $to ."'";
    } 

    $sql = $sql . $criteria . ";";

} 
else {
    $sql = "SELECT  MemberNumber, OrderDate, OrderNumber, OrderID  
    from `Order`
    join Member
    on `Order`.MemberID = Member.MemberID;";
}



//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);
?>