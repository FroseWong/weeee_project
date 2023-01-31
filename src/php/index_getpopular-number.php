<?php
include("connection.php");



$sql0 = "SELECT count(*) FROM Product
        WHERE Location = '台南' AND ProductType = 'sightseeing'";

$statement = $pdo->prepare($sql0);
$statement->execute();
$data0 = $statement->fetchAll();

$sql1 = "SELECT count(*) FROM Product
        WHERE Location = '南投' AND ProductType = 'sightseeing'";

$statement = $pdo->prepare($sql1);
$statement->execute();
$data1 = $statement->fetchAll();

$sql2 = "SELECT count(*) FROM Product
        WHERE Location = '台中' AND ProductType = 'sightseeing'";

$statement = $pdo->prepare($sql2);
$statement->execute();
$data2 = $statement->fetchAll();


$sql3 = "SELECT count(*) FROM Product
        WHERE Location = '彰化' AND ProductType = 'sightseeing'";

$statement = $pdo->prepare($sql3);
$statement->execute();
$data3 = $statement->fetchAll();


$sql4 = "SELECT count(*) FROM Product
        WHERE Location = '新竹' AND ProductType = 'sightseeing'";

$statement = $pdo->prepare($sql4);
$statement->execute();
$data4 = $statement->fetchAll();





$popular = [$data0[0]["count(*)"],$data1[0]["count(*)"],$data2[0]["count(*)"],$data3[0]["count(*)"],$data4[0]["count(*)"]];

// echo json_encode($data[0]["count(*)"]);
echo json_encode($popular);


?>