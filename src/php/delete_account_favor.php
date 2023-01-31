<?php
include("./Member.php");        
$memberID = getMemberID();
$favorID = $_GET['favorID'];

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "DELETE FROM Favor WHERE FavorID = ?";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $favorID);
$statement->execute(); //執行

//頁面導回HTML
header("Location: ../account_favor.html");
?>