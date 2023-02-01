<?php

require_once('connection.php');
// -----------取得商品ID---------------
$Pro = isset($_POST["productid"]) ? $_POST["productid"] : "";

$temp = "SELECT ProductStatus FROM weeee.Product where ProductID='$Pro'";

$statement = $pdo->prepare($temp);

$statement->execute();

$data0 = $statement->fetchAll();

foreach ($data0 as $key => $value) {
    $tempif = $value[0];
}

if ($tempif == 0) {
    echo json_encode(false);
    return;
}

$sql = "SELECT * FROM Product JOIN ProductImg on Product.ProductID=ProductImg.ProductID WHERE Product.ProductID='{$Pro}' ";

$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
