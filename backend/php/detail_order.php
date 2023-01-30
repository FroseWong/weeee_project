<?php
//取得請求參數
$orderID = $_GET['orderID'];


//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "SELECT `Order`.OrderDate, `Order`.TotalPrice, `Member`.MemberNumber, `Member`.username
from `Order`
join `Member`
on `Order`.MemberID = `Member`.MemberID
where `Order`.OrderID = ?;";


// //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $orderID);
$statement->execute(); //執行

// //抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetch();


//建立SQL語法
$sql = "SELECT Product.ProductNumber, Product.ProductName, OrderDetail.Quantity, Product.ProductPrice
from Product
inner join OrderDetail
on Product.ProductID = OrderDetail.ProductID
where OrderDetail.OrderID = ?;";




//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $orderID);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$orderDetailList = $statement->fetchAll();

$data['OrderDetailList'] = $orderDetailList;

//將結果回傳
echo json_encode($data);
?>