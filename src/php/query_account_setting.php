<?php
$memberNumber = "ME0001"; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "SELECT * FROM Weeee.Member WHERE MemberNumber = ?";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $memberNumber);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetch();

//將二維陣列取出顯示其值
echo json_encode($data);

?>