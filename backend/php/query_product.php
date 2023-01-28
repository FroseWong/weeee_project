<?php

//DB連線資訊
include("connection.php");

//建立SQL語法
$sql = [];
if (isset($_GET['productNumber'])) { //分辨你是不是按了搜尋
    //1. 取得請求參數
    $productName = $_GET['productName'];
    $productNumber = $_GET['productNumber'];
    $productStatus = $_GET['productStatus'];
    $productType = isset($_GET['productType']) ? $_GET['productType'] : []; // ['experience','sightseeing']

  

    $sql = "SELECT  ProductNumber, ProductName, ProductStatus, ProductType, ProductID
    from Product 
    WHERE 1 = 1";

    $criteria = "";
    if (strlen($productName) != 0){
        $criteria = $criteria . " AND ProductName like '%". $productName."%'";
    }
    if (strlen($productNumber) != 0){
        $criteria = $criteria . " AND ProductNumber = '". $productNumber."'";
    }
    if (strlen($productStatus) != 0){
        $criteria = $criteria . " AND ProductStatus = '". $productStatus."'";
    } 
    if (count($productType) != 0){
        $queryProductType = "(";
        for($i = 0; $i < count($productType); $i++){
            if(strlen($queryProductType) != 1){
                $queryProductType = $queryProductType . ",";
            }
           $queryProductType = $queryProductType .  "'$productType[$i]'";
        }
        $queryProductType = $queryProductType . ")"; //('experience', 'sightseeing', 'transticket', 'viewpointticket')

        $criteria = $criteria . " AND ProductType IN ". $queryProductType;
    } 

    $sql = $sql . $criteria . ";";
} 
else {
    $sql = "SELECT  ProductNumber, ProductName, ProductStatus, ProductType, ProductID
    from Product;";
}



//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
echo json_encode($data);
?>