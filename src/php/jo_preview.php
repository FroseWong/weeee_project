<?php
include("connection.php");
$tryStr = $_POST["try"];
$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

echo json_encode($tryStr)

?>