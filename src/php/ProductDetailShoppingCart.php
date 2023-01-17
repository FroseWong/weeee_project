<?php
require_once('connection.php');
// -----------判斷有無加過購物車---------------

$MID = $_POST['MID'];
$PID = $_POST['PID'];
$TAL = $_POST['TAL'];
$NEWQTY = $_POST['QTY'];

// $sqlif = "SELECT count(ProductID) From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";
$sqlif = "SELECT count(ProductID) From Cart  where MemberID='{$MID}' and ProductID='{$PID}'";

$statementif = $pdo->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();

foreach ($dataif as $key => $value) {
    $tempif = $value[0];
}
// echo ($tempif);
// -----------如果使用者沒加過購物車---------------
if ($tempif == 0) {
    // $sqlzero = "INSERT INTO Favor (MemberID,ProductID,FavorStatus)VALUES ('{$MID}','{$PID}',1)";
    $sqlzero = "INSERT INTO Cart (ProductID,MemberID,SubTotal,Quantity)VALUES ('{$MID}','{$PID}','{$TAL}','{$QTY}')";
    // INSERT INTO Cart (ProductID,MemberID,SubTotal,Quantity)VALUES (41,1,10000,10);
    $statement = $pdo->prepare($sqlzero);
    $statement->execute();
}
// -----------如果使用者有加過購物車,先找已加入個數---------------
if ($tempif == 1) {
    $sqlsel = "SELECT Quantity FROM Cart where ProductID='{$PID}' AND MemberID='{$MID}'";
    $statement = $pdo->prepare($sqlsel);
    $statement->execute();
    $datasel = $statement->fetchAll();
    foreach ($datasel as $key => $value) {

        $OLDQTY = $value[$key];
    }
    $ALLQTY = $OLDQTY + $NEWQTY;
    // --------加總後加入購物車---------
    $sqlone = "UPDATE Cart SET Quantity=$ALLQTY WHERE ProductID='{$PID}' AND MemberID='{$MID}'";
    $statement = $pdo->prepare($sqlone);
    $statement->execute();
    // echo json_encode(!$tempsel);
}
