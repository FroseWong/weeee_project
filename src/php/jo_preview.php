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
$img = $_POST['img'];
$imgName = $_POST['imgName'];

$MemberID = 1;
$JoUseWeee = 1;
$JoImg = './img/jo/'.$imgName;
$JoNumber = 'asd1234';
// $img = $_POST['img'];
// $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';


// $sql = "INSERT INTO weeee.Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoUseWeeee,ProductID,JoContact,JodetailedAddressed,JoNumber,JoImg)
// values($joTitle,$joContent,$MemberID,NOW(),$joStartDate.' '.$joStartTime,1,$targettravelID,$joContact,$joDetailAddress,$JoNumber,$JoImg)";

$sql = "INSERT into Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoStatus,JoUseWeeee,ProductID,JoContact,Location,JodetailedAddressed,JoNumber,JoImg,JoAttend)
values('$joTitle','$joContent','$MemberID',NOW(),'$joStartDate.' '.$joStartTime',1,1,'$targettravelID','$joContact','$joLocation','$joDetailAddress','$JoNumber','$JoImg','$joAttend')";

$statement = $pdo->prepare( $sql );
$statement->execute(); 

$output_file = $imgName;

// last_insert_ID
$sql1 = "SELECT LAST_INSERT_ID()";
$statement = $pdo->prepare( $sql1 );
$statement->execute(); 

$data1 = $statement->fetchAll();

 // Convert base64 string to an image
 $ifp = fopen($output_file, "wb"); 
 $data = explode(',', $img);
 fwrite($ifp, base64_decode($data[1])); 
 fclose($ifp); 

 // Save image to a folder
 $folder = "../img/jo/";
 $filepath = $folder.$output_file;
 if(!file_exists($folder)) {
     mkdir($folder, 0777, true);
 }
 rename($output_file,$filepath);

echo json_encode($data1);

// echo 'id';

?>