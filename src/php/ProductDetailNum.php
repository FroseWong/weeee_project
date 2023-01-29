<?php

require_once('connection.php');

$PID = $_POST["pid"];

$sql = "SELECT count(ProductCommentID),avg(ProductCommentScore)From ProductComment  where  ProductID='$PID'";

$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

foreach ($data as $key => $value) {
    $num = $value[0];
    $score = $value[1];
}

$dot=',';
echo ($num);
echo ($dot);
echo ($score);
