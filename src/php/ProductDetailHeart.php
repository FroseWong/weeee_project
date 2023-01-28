<?php
require_once('connection.php');
// -----------取得會員---------------
include("Member.php");
getMemberID();
// -----------如果沒登入:回傳---------------
if (empty($_SESSION["MemberID"])) {
    echo json_encode("NotFound");
    return;
}
// -----------判斷有無加過收藏---------------
$MID = $_SESSION["MemberID"];

$PID = $_POST['PID'];

$sqlif = "SELECT count(ProductID) From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";

$statementif = $pdo->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();

foreach ($dataif as $key => $value) {
    $tempif = $value[0];
}
// echo ($tempif);
// -----------如果使用者沒加過收藏---------------
if ($tempif == 0) {
    $sqlzero = "INSERT INTO Favor (MemberID,ProductID,FavorStatus)VALUES ('{$MID}','{$PID}',1)";
    $statement = $pdo->prepare($sqlzero);
    $statement->execute();
    echo json_encode(true);
}
// -----------如果使用者有加過收藏---------------
if ($tempif == 1) {
    $sqlsel = "SELECT * FROM Favor where ProductID='{$PID}' AND MemberID='{$MID}'";
    $statement = $pdo->prepare($sqlsel);
    $statement->execute();
    $datasel = $statement->fetchAll();

    foreach ($datasel as $key => $value) {
        $tempsel = $value[3];
    }
    // --------如果使用者已收藏---------
    if ($tempsel == 1) {
        $sqlone = "UPDATE Favor SET FavorStatus=0 WHERE ProductID='{$PID}' AND MemberID='{$MID}'";
        $statement = $pdo->prepare($sqlone);
        $statement->execute();
    }
    // --------如果使用者未收藏---------
    if ($tempsel == 0) {
        $sqlone = "UPDATE Favor SET FavorStatus=1 WHERE ProductID='{$PID}' AND MemberID='{$MID}'";
        $statement = $pdo->prepare($sqlone);
        $statement->execute();
    }
    echo json_encode(!$tempsel);
}
