<?php
include("connection.php");
// $tryStr = $_POST["try"];
$joTitle = $_POST['joTitle'];
$joContent = $_POST['joContent'];
$joContact = $_POST['joContact'];
$joLocation = $_POST['joLocation'];
$joDetailAddress = $_POST['joDetailAddress'];
$joAttend = $_POST['joAttend'];
$joStartDate = $_POST['joStartDate'];
$joStartTime = $_POST['joStartTime'];
$targettravelID = $_POST['targettravelID'];

$MemberID = 1;
$JoUseWeee = 1;
$JoImg = './img/jo/jo_nanjingeasteat1.jpg';
$JoNumber = 'asd1234';
// $img = $_POST['img'];
// $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';


// $sql = "INSERT INTO weeee.Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoUseWeeee,ProductID,JoContact,JodetailedAddressed,JoNumber,JoImg)
// values($joTitle,$joContent,$MemberID,NOW(),$joStartDate.' '.$joStartTime,1,$targettravelID,$joContact,$joDetailAddress,$JoNumber,$JoImg)";

$sql = "INSERT into Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoStatus,JoUseWeeee,ProductID,JoContact,Location,JodetailedAddressed,JoNumber,JoImg,JoAttend)
values('$joTitle','$joContact','$MemberID',NOW(),'$joStartDate.' '.$joStartTime',1,1,'$targettravelID','$joContact','$joLocation','$joDetailAddress','$JoNumber','$JoImg','$joAttend')";

$statement = $pdo->prepare( $sql );
$statement->execute(); 

echo json_encode($targettravelID);

?>