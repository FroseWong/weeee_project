<?php
require_once('./Connection_08.php');
// -----------判斷有無加過收藏---------------

$MID=$_POST['MID'];
$PID=$_POST['PID'];

$sqlif="SELECT count(ProductID) From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";
// $sql ="SELECT FavorStatus From Favor where MemberID='{$MID}' and ProductID='{$PID}'";

$statementif = getcon()->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();

foreach($dataif as $key =>$value){
    $tempif= $value[0];
    echo ($tempif);
}
// -----------如果使用者有加過收藏---------------
if($tempif=0){




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