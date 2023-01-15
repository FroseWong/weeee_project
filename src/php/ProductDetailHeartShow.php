<?php
require_once('connection.php');
// -----------判斷有無加過收藏---------------

$MID = $_POST['MID'];
$PID = $_POST['PID'];

$sqlif = "SELECT FavorStatus From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";

$statementif = $pdo->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();

foreach ($dataif as $key => $value) {
    $tempif = $value[0];
}
echo json_encode($tempif);
?>