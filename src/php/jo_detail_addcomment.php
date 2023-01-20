<?php
include("connection.php");
// $path = $_POST["path"];
// echo $path;

$memberid = $_POST["memberid"];
$comment = $_POST['comment'];
$JoCommentTime = $_POST['JoCommentTime'];
$joID = $_POST['joID'];

// $data = $memberid.' and '.$joID .' and '.$comment.' and '.$JoCommentTime;

$sql = 
"INSERT into JoComment (MemberID,JoID,JoCommentTime,JoCommentContent)
values('$memberid','$joID','$JoCommentTime','$comment');";

$statement =  $pdo->prepare($sql);
$statement->execute();

$sql1 = "SELECT  m.MemberImg ,m.FullName
            FROM JoComment jc
	        join  Member m
	    	on jc.MemberID = m.MemberID
            WHERE jc.MemberID = $memberid
            limit 1;";

$statement =  $pdo->prepare($sql1);
$statement->execute();

$data1 = $statement->fetchAll();
// $data1 = mysql_insert_id();

// $data = $statement->fetchAll();
echo json_encode($data1);
// echo $data1;

?>