<?php
include("connection.php");


$memberID = $_POST['memberID'];
// $memberID = 1;


$sql = 
"SELECT MemberID,Friend,Family,Couple,Pet,Handmade,Onwater,Farm,Extreme FROM Member
WHERE MemberID = $memberID";

$statement = $pdo->prepare( $sql );
$statement->execute(); 
$data = $statement->fetchAll();
// echo json_encode($data);
// print_r($data) ;
// echo $data[0]['Friend'];

$intereStr = '';
if($data[0]['Friend'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '朋友行程'" : "ProductSecondType = '朋友行程'";
if($data[0]['Family'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '家庭行程'" : "ProductSecondType = '家庭行程'";
if($data[0]['Couple'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '情侶行程'" : "ProductSecondType = '情侶行程'";
if($data[0]['Pet'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '寵物行程'" : "ProductSecondType = '寵物行程'";
if($data[0]['Handmade'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '手作體驗'" : "ProductSecondType = '手作體驗'";
if($data[0]['Onwater'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '水上活動'" : "ProductSecondType = '水上活動'";
if($data[0]['Farm'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '觀光農場'" : "ProductSecondType = '觀光農場'";
if($data[0]['Extreme'] === 1) $intereStr .= $intereStr ? "OR ProductSecondType = '極限運動'" : "ProductSecondType = '極限運動'";


if($intereStr!==''){
    $sql1 = "SELECT * FROM Product p
    join ProductImg i 
    on p.ProductID =  i.ProductID
    WHERE $intereStr ";
    
    $statement1 = $pdo->prepare( $sql1 );
    $statement1->execute(); 
    $data1 = $statement1->fetchAll();
    
    echo json_encode($data1);
} else echo json_encode('nothing');




?>