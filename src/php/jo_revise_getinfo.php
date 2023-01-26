<?php
include("connection.php");

$memberID = $_POST['memberID'];
$jid = $_POST['jid'];

$sql= "SELECT * FROM Jo
WHERE MemberID = $memberID AND JoID = $jid";

$statement =  $pdo->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);

?>