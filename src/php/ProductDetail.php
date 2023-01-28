<?php

require_once('connection.php');
// -----------取得商品ID---------------
$Pro = isset($_POST["productid"]) ? $_POST["productid"] : "";

$sql = "SELECT * FROM Product JOIN ProductImg on Product.ProductID=ProductImg.ProductID WHERE Product.ProductID='{$Pro}' ";

$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
