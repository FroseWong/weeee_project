<?php
include("connection.php");


$sql0 = "SELECT MAX(JoID) FROM weeee.Jo;";
$statement0 = $pdo->prepare($sql0);
$statement0->execute(); 
$data0 = $statement0->fetchAll();

echo json_encode($data0[0]["MAX(JoID)"]);

?>