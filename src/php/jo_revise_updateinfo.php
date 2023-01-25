<?php
include("connection.php");


/*
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

$MemberID = 1;
// $JoUseWeee = 1;
$JoImg = './img/jo/'.$imgName;
// $JoNumber = 'asd1234';
// $img = $_POST['img'];
// $json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

// echo $JoUseWeeee;
// $sql = "INSERT INTO weeee.Jo (JoTitle,JoContent,MemberID,JoPostDate,JoStartDate,JoUseWeeee,ProductID,JoContact,JodetailedAddressed,JoNumber,JoImg)
// values($joTitle,$joContent,$MemberID,NOW(),$joStartDate.' '.$joStartTime,1,$targettravelID,$joContact,$joDetailAddress,$JoNumber,$JoImg)";
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
*/


$joTitle = $_POST['joTitle'];
$joContent = $_POST['joContent'];
$joContact = $_POST['joContact'];
$joLocation = $_POST['joLocation'];
$joDetailAddress = $_POST['joDetailAddress'];
$joAttend = $_POST['joAttend'];
$joStartDate = $_POST['joStartDate'].' '.$_POST['joStartTime'];
// $joStartTime = $_POST['joStartTime'];
$JoUseWeeee = $_POST['JoUseWeeee'];
if($JoUseWeeee==1) $targettravelID = $_POST['targettravelID'];
$img = $_POST['img'];
$imgisbase64 = $_POST['imgisbase64'];
$imgName = $_POST['imgName'];
$jid = $_POST['jid'];
$memberID = $_POST['memberID'];
$JoImg = './img/jo/'.$imgName;

if($JoUseWeeee==1)
        {
            $sql = "UPDATE Jo
                    SET JoTitle = '$joTitle',
                        JoContent = '$joContent',
                        JoStartDate = '$joStartDate',
                        JoUseWeeee = '$JoUseWeeee',
                        ProductID = '$targettravelID',
                        JoContact = '$joContact',
                        Location = '$joLocation',
                        JoDetailedAddressed = '$joDetailAddress',
                        JoImg = '$JoImg',
                        JoAttend = '$joAttend'
                        WHERE JoID =$jid";
        }
else if($JoUseWeeee==0)
        {
            $sql = "UPDATE Jo
                    SET JoTitle = '$joTitle',
                        JoContent = '$joContent',
                        JoStartDate = '$joStartDate',
                        JoUseWeeee = '$JoUseWeeee',
                        ProductID =  NULL,
                        JoContact = '$joContact',
                        Location = '$joLocation',
                        JoDetailedAddressed = '$joDetailAddress',
                        JoImg = '$JoImg',
                        JoAttend = '$joAttend'
                        WHERE JoID =$jid";
        }
$statement = $pdo->prepare( $sql );
$statement->execute(); 


if($imgisbase64 == 'true'){ //如果有改圖片才有base64，才有需要執行放圖片到資料夾中
    $output_file = $imgName;

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

}


// $sql= "SELECT * FROM Jo
// WHERE MemberID = $memberID AND JoID = $jid";

// $statement =  $pdo->prepare($sql);
// $statement->execute();
// $data = $statement->fetchAll();
// echo json_encode($jid);

echo json_encode($jid);



?>