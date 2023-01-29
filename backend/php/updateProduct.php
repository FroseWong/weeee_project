<?php
//取得請求參數
$productID = $_POST['productID'];
$productName = $_POST['productName'];
$productPrice = $_POST['productPrice'];

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "UPDATE Product SET ProductName = ?, ProductPrice = ?
WHERE ProductID = ?;";

// //執行
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $productName);
$statement->bindValue(2, $productPrice);
$statement->bindValue(3, $productID);
$statement->execute(); 

//頁面導回HTML
header("Location: ../product/detail.html?productID=" . $productID);

?>