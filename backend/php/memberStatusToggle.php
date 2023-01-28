<?php
//DB連線資訊
include("connection.php");

$memberNumber = $_GET['memberNumber'];

//建立SQL
$sql = "UPDATE Member
SET MemStatus = (CASE MemStatus WHEN 1 THEN 0 WHEN 0 THEN 1 END)
WHERE MemberNumber = ?";

//執行
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $memberNumber);
$statement -> execute();

//頁面導回HTML
header("Location: ../member/list.html");
?>