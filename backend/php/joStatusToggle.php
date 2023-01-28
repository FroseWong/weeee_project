<?php
//DB連線資訊
include("connection.php");

$joID = $_GET['joID'];

//建立SQL
$sql = "UPDATE Jo
SET JoStatus = (CASE JoStatus WHEN 1 THEN 0 WHEN 0 THEN 1 END)
WHERE JoID = ?";

//執行
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $joID);
$statement -> execute();

//頁面導回HTML
header("Location: ../jo/detail.html?joID=" .$joID);
?>