<?php

require_once('connection.php');

// include("Member.php");
// getMemberID();
// if (empty($_SESSION["MemberID"])) {
//     return;
// }
// $MID = $_SESSION["MemberID"];
// $MID = $_POST["mid"];
$PID = $_POST["pid"];

$sql = "SELECT * FROM ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where  ProductComment.ProductID='{$PID}'";

$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
