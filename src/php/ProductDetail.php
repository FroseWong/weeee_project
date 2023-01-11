<?php

require_once('Connection_08.php');

$Pro = isset($_POST["productid"]) ? $_POST["productid"] : "";
// $Pro = isset($_GET["productid"]) ? $_GET["productid"] : "";
// $Pro= $_GET["productid"];
// $Pro= $_POST["productid"];


$sql = "SELECT * FROM Product JOIN ProductImg on Product.ProductID=ProductImg.ProductID WHERE Product.ProductID='{$Pro}' ";

$statement = getcon()->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
