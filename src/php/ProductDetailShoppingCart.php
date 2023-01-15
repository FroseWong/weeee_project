<?php
require_once('connection.php');
// -----------判斷有無加過收藏---------------

$MID = $_POST['MID'];
$PID = $_POST['PID'];

$sqlif = "SELECT count(ProductID) From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";
// SELECT count(ProductID) From Cart  where MemberID=1 and ProductID=400
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
    // INSERT INTO Cart (ProductID,MemberID,SubTotal,Quantity)VALUES (41,1,10000,10);
    $statement = $pdo->prepare($sqlzero);
    $statement->execute();
}
// -----------如果使用者有加過收藏---------------
if ($tempif == 1) {
    $sqlsel = "SELECT * FROM Favor where ProductID='{$PID}' AND MemberID='{$MID}'";
    // SELECT Quantity FROM Cart where ProductID=41 AND MemberID=1
    $statement = $pdo->prepare($sqlsel);
    $statement->execute();
    $datasel = $statement->fetchAll();

    foreach ($datasel as $key => $value) {
        $tempsel = $value[3];
    }
    // --------如果使用者已收藏---------
    if ($tempsel == 1) {
        $sqlone = "UPDATE Favor SET FavorStatus=0 WHERE ProductID='{$PID}' AND MemberID='{$MID}'";
        // UPDATE Cart SET Quantity=1000 WHERE ProductID=41 AND MemberID=1;
        $statement = $pdo->prepare($sqlone);
        $statement->execute();
    }
    // --------如果使用者未收藏---------
    echo json_encode(!$tempsel);
}
?>