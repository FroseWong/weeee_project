<?php
include("./Member.php");        
$memberID = getMemberID();
$joID = $_GET['joID'];

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "DELETE FROM JoComment WHERE JoID = ?"; 

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $joID);
$statement->execute(); //執行

//建立SQL語法
$sql = "DELETE FROM Jo WHERE JoID = ?";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $joID);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);

//頁面導回HTML
header("Location: ../account_jo.html");
?>