<?php
    include("connection.php");

    $memberID = $_POST['memberID'];

    $sql = 
    "SELECT * FROM Favor
     WHERE MemberID = $memberID AND FavorStatus = 1";

$statement = $pdo->prepare( $sql );
$statement->execute(); 
$data = $statement->fetchAll();
echo json_encode($data);

?>