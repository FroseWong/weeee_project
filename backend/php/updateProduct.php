<?php
//取得請求參數
$productID = $_POST['productID'];
$productName = $_POST['productName'];
$productPrice = $_POST['productPrice'];
$productText = $_POST['productText'];
$productImgContent1 = $_POST['ProductImgContent1'];
$productImgContent2 = $_POST['ProductImgContent2'];
$productImgContent3 = $_POST['ProductImgContent3'];

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = "UPDATE Product SET ProductName = ?, ProductPrice = ?, ProductText = ?
WHERE ProductID = ?;";

// //執行
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $productName);
$statement->bindValue(2, $productPrice);
$statement->bindValue(3, $productText);
$statement->bindValue(4, $productID);
$statement->execute();

$folder = "../../frontend/";
$productImgPath1 = "";
$productImgPath2 = "";
$productImgPath3 = "";

if (strlen($_FILES['updatedImage_preview_1']['name']) != 0) {
    $str = $_FILES['updatedImage_preview_1']['name'];
    $index = strpos($str, ".", 0);
    $productImgPath1 = "img/temp/PoductImg_".$productID."_1".substr($str, $index, strlen($str) - $index);
    move_uploaded_file($_FILES['updatedImage_preview_1']["tmp_name"], $folder.$productImgPath1);
    $productImgPath1 = "./".$productImgPath1;
}
if (strlen($_FILES['updatedImage_preview_2']['name']) != 0) {
    $str = $_FILES['updatedImage_preview_2']['name'];
    $index = strpos($str, ".", 0);
    $productImgPath2 = "img/temp/PoductImg_".$productID."_2".substr($str, $index, strlen($str) - $index);
    move_uploaded_file($_FILES['updatedImage_preview_2']["tmp_name"], $folder.$productImgPath2);
    $productImgPath2 = "./".$productImgPath2;
}
if (strlen($_FILES['updatedImage_preview_3']['name']) != 0) {
    $str = $_FILES['updatedImage_preview_3']['name'];
    $index = strpos($str, ".", 0);
    $productImgPath3 = "img/temp/PoductImg_".$productID."_3".substr($str, $index, strlen($str) - $index);
    move_uploaded_file($_FILES['updatedImage_preview_3']["tmp_name"], $folder.$productImgPath3);
    $productImgPath3 = "./".$productImgPath3;
}

// 原始路徑
$sql = "SELECT * FROM ProductImg WHERE ProductID = ?;";
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $productID);
$statement->execute(); //執行
$productImage = $statement->fetch();

if (strlen($productImgPath1) == 0) {
    $productImgPath1 = $productImage['ProductImgPath1'];
}

if (strlen($productImgPath2) == 0) {
    $productImgPath2 = $productImage['ProductImgPath2'];
}

if (strlen($productImgPath3) == 0) {
    $productImgPath3 = $productImage['ProductImgPath3'];
}


// 更新ProductImg
$sql = "UPDATE ProductImg SET ProductImgContent1 = ?, ProductImgContent2 = ?, ProductImgContent3 = ?, ProductImgPath1 = ?, ProductImgPath2 = ?, ProductImgPath3 = ?
WHERE ProductID = ?;";

$statement = $pdo->prepare($sql);
$statement->bindValue(1, $productImgContent1);
$statement->bindValue(2, $productImgContent2);
$statement->bindValue(3, $productImgContent3);
$statement->bindValue(4, $productImgPath1);
$statement->bindValue(5, $productImgPath2);
$statement->bindValue(6, $productImgPath3);
$statement->bindValue(7, $productID);
$statement->execute();

//頁面導回HTML
header("Location: ../product/detail.html?productID=" . $productID);

?>