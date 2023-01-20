<?php
include("connection.php");
// $path = $_POST["path"];
// echo $path;

$id = $_POST["id"];
$sql = 
"SELECT
jc.JoCommentTime,jc.JoCommentContent,m.FullName,m.MemberImg
FROM JoComment jc
join Member m
on jc.MemberID = m.MemberID
where jc.JoID = $id";

$statement =  $pdo->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);
?>