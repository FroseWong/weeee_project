<?php
include("./Member.php");        
$memberID = getMemberID();

//DB連線資訊
include("connection.php");

//建立SQL語法
// $sql = "SELECT * FROM Order WHERE MemberID = ?";
$sql = "SELECT Jo.JoTitle, Jo.Location, Jo.JoDetailedAddressed, Jo.JoStartDate, Jo.JoID
from Jo 
WHERE MemberID = ?;";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);
?>