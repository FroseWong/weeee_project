<?php
//DB連線資訊
include("../db/connection.php");

//建立SQL語法
$sql = "SELECT * FROM Member";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->query($sql);

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
foreach ($data as $index => $row) {
       echo print_r($row);
}

?>