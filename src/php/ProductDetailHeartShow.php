<?php

require_once('connection.php');


include("Member.php");
getMemberID();

if (empty($_SESSION["MemberID"])) {
    return;
}
$MID = $_SESSION["MemberID"];

// $MID = $_POST['MID'];
$PID = $_POST['PID'];
$sqlif = "SELECT FavorStatus From Favor  where MemberID='{$MID}' and ProductID='{$PID}'";

$statementif = $pdo->prepare($sqlif);

$statementif->execute();

$dataif = $statementif->fetchAll();
$tempif = null;
foreach ($dataif as $key => $value) {
    $tempif = $value[0];
}
if (empty($tempif)) {
    return;
}
echo json_encode($tempif);
