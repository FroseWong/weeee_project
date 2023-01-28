<?php
//DB連線資訊
include("connection.php");

$memberID = $_POST["memberID"]; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
$OID = getMaxOrderID($pdo, $memberID);

getPurchaseProduct($pdo);

//取得目前orderID最大值
function getMaxOrderID($pdo, $memberID){
    $sql = "SELECT MAX(orderid) FROM `order` where memberID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $memberID);
    $statement->execute(); 
    $data = $statement->fetchAll();
     
    return $data[0]["MAX(orderid)"];
}

function getPurchaseProduct($pdo){
    $sql = "select p.productName, p.productPrice, i.productImgPath1, od.quantity, od.startDate, p.productID
    from product p
    join productimg i
    on p.productID = i.productID
    join orderdetail od
    on p.productID = od.productID
    where orderID = 21";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    // $statement->bindValue(1, $OID);
    $statement->execute(); //執行
    
    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    //將二維陣列取出顯示其值
    echo json_encode($data);
}




?>