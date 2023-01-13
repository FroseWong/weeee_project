<?php
require_once('./Connection_08.php');
// -----------判斷有無加過收藏---------------

// $MID=1;
// $PID=1;
$MID=$_POST['MID'];
$PID=$_POST['PID'];

$sqlif="SELECT count(ProductID) From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";
// $sql ="SELECT FavorStatus From Favor where MemberID='{$MID}' and ProductID='{$PID}'";

$statementif = getcon()->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();

foreach($dataif as $key =>$value){
    $tempif= $value[0];
}
echo ($tempif);
// -----------如果使用者沒加過收藏---------------
if($tempif==0){
    $sqlzero= "INSERT INTO Favor (MemberID,ProductID,FavorStatus)VALUES ('{$MID}','{$PID}',1)";
   $statement = getcon()->prepare($sqlzero);
   $statement->execute();
}
if($tempif==1){
    $sqlone= "UPDATE Favor SET FavorStatus=0 WHERE ProductID='{$MID}'";
   $statement = getcon()->prepare($sqlone);
   $statement->execute();
}

// foreach($data as $key => $value){
//     $temp= $value[0];
// }

// echo implode($data[0]);

// if($temp==0){

//     $sql = "UPDATE Favor SET FavorStatus=1 WHERE MemberID='{$MID}'";
//    $statement = getcon()->prepare($sql);

//    $statement->execute();
   
//    $data = $statement->fetchAll();

// }



?>