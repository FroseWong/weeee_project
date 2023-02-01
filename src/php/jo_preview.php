<?php
include("connection.php");

$joTitle = $_POST['joTitle'];
$joContent = $_POST['joContent'];
$joContact = $_POST['joContact'];
$joLocation = $_POST['joLocation'];
$joDetailAddress = $_POST['joDetailAddress'];
$joAttend = $_POST['joAttend'];
$joStartDate = $_POST['joStartDate'];
$joStartTime = $_POST['joStartTime'];
$JoUseWeeee = $_POST['JoUseWeeee'];
if($JoUseWeeee==1) $targettravelID = $_POST['targettravelID'];
$img = $_POST['img'];
$imgName = $_POST['imgName'];

$MemberID = $_POST['memberID'];

$JoImg = './img/jo/'.$imgName;

$sql0 = "SELECT MAX(JoID) FROM `Jo`";
$statement0 = $pdo->prepare($sql0);
$statement0->execute(); 
$data0 = $statement0->fetchAll();

$maxID = $data0[0]["MAX(JoID)"];
$JoNumber = 'JO'.str_pad($maxID+1,5,"0",STR_PAD_LEFT); 




if($JoUseWeeee==1)
        {
            $sql = "INSERT into Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoStatus,JoUseWeeee,ProductID,JoContact,Location,JodetailedAddressed,JoNumber,JoImg,JoAttend)
            values('$joTitle','$joContent','$MemberID',NOW(),'$joStartDate.' '.$joStartTime',1,'$JoUseWeeee','$targettravelID','$joContact','$joLocation','$joDetailAddress','$JoNumber','$JoImg','$joAttend')";
        }
else if($JoUseWeeee==0)
        {
            $sql = "INSERT into Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoStatus,JoUseWeeee,JoContact,Location,JodetailedAddressed,JoNumber,JoImg,JoAttend)
            values('$joTitle','$joContent','$MemberID',NOW(),'$joStartDate.' '.$joStartTime',1,'$JoUseWeeee' ,'$joContact','$joLocation','$joDetailAddress','$JoNumber','$JoImg','$joAttend')";
        }
$statement = $pdo->prepare( $sql );
$statement->execute(); 

$output_file = $imgName; // 圖片名稱存在output_file

// get last_insert_ID
$sql1 = "SELECT LAST_INSERT_ID()";
$statement = $pdo->prepare( $sql1 );
$statement->execute(); 

$data1 = $statement->fetchAll();

 // Convert base64 string to an image
 $ifp = fopen($output_file, "wb"); 
 $data = explode(',', $img); // $img是base64
 fwrite($ifp, base64_decode($data[1])); 
 fclose($ifp); 

 // Save image to a folder
 //存圖片在dist
 $folder = "../img/jo/";
 $filepath = $folder.$output_file;
 if(!file_exists($folder)) {
     mkdir($folder, 0777, true);
 }
 rename($output_file,$filepath);

 // Convert base64 string to an image
 $ifp = fopen($output_file, "wb"); 
 $data = explode(',', $img); // $img是base64
 fwrite($ifp, base64_decode($data[1])); 
 fclose($ifp); 

 //存圖片在src
 $folder = "../../src/img/jo/";
 $filepath = $folder.$output_file;
 if(!file_exists($folder)) {
    mkdir($folder, 0777, true);
}
rename($output_file,$filepath);

echo json_encode($data1); //原始

// echo json_encode($JoNumber);

// echo 'id';

?>