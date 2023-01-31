<?php
//DB連線資訊
include("connection.php");

$memberID = $_POST["memberID"]; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
$OID = getMaxOrderID($pdo, $memberID);

// getPurchaseInfo($pdo, $OID);
getPurchaseProduct($pdo, $OID);

//取得目前orderID最大值
function getMaxOrderID($pdo, $memberID){
    $sql = "SELECT MAX(OrderID) FROM `Order` where MemberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $memberID);
    $statement->execute(); 
    $data = $statement->fetchAll();
     
    return $data[0]["MAX(OrderID)"];
}

//取得訂單商品資訊
function getPurchaseProduct($pdo, $OID){
    $sql = "select p.ProductName, p.ProductPrice, i.ProductImgPath1, od.Quantity, od.StartDate, p.ProductID
    from Product p
    join ProductImg i
    on p.ProductID = i.ProductID
    join OrderDetail od
    on p.ProductID = od.ProductID
    where OrderID = ?";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $OID);
    $statement->execute(); //執行
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    //將二維陣列取出顯示其值
    echo json_encode($data);
}

?>