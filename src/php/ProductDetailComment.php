<?php

require_once('connection.php');

$PID = $_POST["pid"];
$MID = $_POST["mid"];


$sql = "SELECT * FROM ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where  ProductComment.ProductID='{$PID}'";
// $sql = "SELECT * FROM ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where Member.MemberID='{$MID}' and ProductComment.ProductID='{$PID}'";

$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
