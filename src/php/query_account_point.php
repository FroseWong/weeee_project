<?php
include("./Member.php");        
$memberID = getMemberID();

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "SELECT Order.OrderNumber, PointRecord.PointsChange, Order.OrderDate, Order.TotalPrice
from PointRecord
inner join `Order`
on PointRecord.OrderID = Order.OrderID
WHERE MemberID = ?";



//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);
?>