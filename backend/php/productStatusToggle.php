<?php
//DB連線資訊
include("connection.php");

$productID = $_GET['productID'];

//建立SQL
$sql = "UPDATE Product
SET ProductStatus = (CASE ProductStatus WHEN 1 THEN 0 WHEN 0 THEN 1 END)
WHERE ProductID = ?";

//執行
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $productID);
$statement -> execute();

//頁面導回HTML
header("Location: ../product/detail.html?productID=" .$productID);
?>