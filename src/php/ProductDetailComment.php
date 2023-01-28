<?php

require_once('connection.php');

// include("Member.php");
// getMemberID();
// if (empty($_SESSION["MemberID"])) {
//     return;
// }
// $MID = $_SESSION["MemberID"];
// $MID = $_POST["mid"];



$PageNum = (string)3;
$comment = $_POST["comment"] == 1 ? $_POST["comment"] = 0 : ($_POST["comment"]-1)*3;
$PID = $_POST["pid"];
$sql = "select * from ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where ProductID='$PID' order by ProductCommentID limit $PageNum offset $comment";
// $sql = "SELECT * FROM ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where  ProductComment.ProductID='{$PID}'";

$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
