<?php
//DB連線資訊
include("connection.php");
$joID = $_GET['joID'];
$joCommentID = $_GET['joCommentID'];

//建立SQL
$sql = "UPDATE JoComment
SET JoCommentStatus = (CASE JoCommentStatus WHEN 1 THEN 0 WHEN 0 THEN 1 END)
WHERE JoCommentID = ?;";

//執行
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $joCommentID);
$statement -> execute();

//頁面導回HTML
header("Location: ../jo/detail.html?joID=" . $joID);
?>