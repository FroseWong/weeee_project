<?php
//確認是否登入
include("checkLogin.php");
//取得請求參數
$productID = $_GET['productID'];


//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "SELECT ProductID, ProductNumber, ProductName, ProductPrice, ProductStatus, ProductText, ProductType, ProductSecondType
from Product
where ProductID = ?;";


// //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $productID);
$statement->execute(); //執行

// //抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetch();

$sql = "SELECT * FROM ProductImg WHERE ProductID = ?;";
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $productID);
$statement->execute(); //執行

$productImage = $statement->fetch();

$data['ProductImage'] = $productImage;

//將結果回傳
echo json_encode($data);
?>