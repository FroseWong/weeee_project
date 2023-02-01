<?php
require_once('connection.php');
error_reporting(0);
// -----------取得會員---------------
include("Member.php");
getMemberID();
// -----------如果沒登入:回傳---------------
if (empty($_SESSION["MemberID"])) {
    echo json_encode('NotFound');
    return;
}
$MID = $_SESSION["MemberID"];
$PID = $_POST['PID'];
$NEWQTY = $_POST['QTY'];
$DATE =  (string)$_POST['DATE'];
$sqlif = "SELECT count(ProductID) From Cart  where MemberID='{$MID}' and ProductID='{$PID}'";
$temp;
$statementif = $pdo->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();

foreach ($dataif as $key => $value) {
    $tempif = $value[0];
}
// -----------如果使用者沒加過購物車---------------
if ($tempif == 0) {
    $sqlzero = "INSERT INTO Cart (ProductID,MemberID,Quantity,CartStartDay)VALUES ('{$PID}','{$MID}','{$NEWQTY}','$DATE')";
    $statement = $pdo->prepare($sqlzero);
    $statement->execute();
    echo json_encode('ok');
    return;
}
// -----------如果使用者有加過購物車---------------
if ($tempif > 0) {
    // -----------找尋已加入購物車商品之時間---------------
    $sqldate = "SELECT CartID,count(CartID) FROM Cart  where ProductID='{$PID}' AND MemberID='{$MID}' AND CartStartDay='$DATE' GROUP BY CartID";
    $statement = $pdo->prepare($sqldate);
    $statement->execute();
    $datadate = $statement->fetchAll();
    foreach ($datadate as $key => $value) {
        $temp = $value[0];
    }
    if ($temp > 0) {
        $CARTID = $value[0];
        // -----------日期一樣，加入數量---------------
        $sqlsel = "SELECT Quantity FROM Cart where CartID='$CARTID'";
        $statement = $pdo->prepare($sqlsel);
        $statement->execute();
        $datasel = $statement->fetchAll();
        foreach ($datasel as $key => $value) {

            $OLDQTY = $value[$key];
        }
        $ALLQTY = $OLDQTY + $NEWQTY;
        // --------加總後加入購物車---------
        $sqlone = "UPDATE Cart SET Quantity=$ALLQTY WHERE  CartID='$CARTID'";
        $statement = $pdo->prepare($sqlone);
        $statement->execute();
        echo json_encode('ok');
        return;
    }
    // -----------日期不一樣，加入新的一筆---------------
    else {
        $sqlzsame = "INSERT INTO Cart (ProductID,MemberID,Quantity,CartStartDay)VALUES ('{$PID}','{$MID}','{$NEWQTY}','$DATE')";
        $statement = $pdo->prepare($sqlzsame);
        $statement->execute();
        echo json_encode('ok');
        return;
    }
}
