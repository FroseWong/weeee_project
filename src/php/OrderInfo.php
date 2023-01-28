<?php
//DB連線資訊
include("connection.php");

$memberID = $_POST["memberID"]; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
$OID = getMaxOrderID($pdo, $memberID);

getPurchaseInfo($pdo, $OID);

//取得目前orderID最大值
function getMaxOrderID($pdo, $memberID){
    $sql = "SELECT MAX(orderid) FROM `order` where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $memberID);
    $statement->execute(); 
    $data = $statement->fetchAll();
     
    return $data[0]["MAX(orderid)"];
}

//取得訂購人email、訂單號碼及折抵點數
function getPurchaseInfo($pdo, $OID){
    $sql = "select email, orderNumber, discount
    from `order`
    where orderid = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $OID);
    $statement->execute(); //執行
    
    $data = $statement->fetchAll();
    
    echo json_encode($data);
}
?>