<?php
    include("connection.php"); 

    $memberID = "6"; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
    
    $CID = $_POST["CID"];
    $totalPrice = $_POST["totalPrice"];
    $addPoints = $_POST["addPoints"];
    $discountPoints = $_POST["discountPoints"];
    $offsetPoints = $addPoints - $discountPoints;
    $str = '';
    $lastOID = getMaxOrderID($pdo);
    $OID = insertOrder($pdo, $memberID, $totalPrice, $lastOID);
    $productDateList = $_POST['productDateList'];
    $productIDList = $_POST['productIDList'];
    $productQuantityList = $_POST['productQuantityList'];


    insertOrderDetail($pdo, $productIDList, $productQuantityList, $productDateList, $OID);
    insertPlusPointRecord($pdo, $addPoints, $OID);
    insertMinusPointRecord($pdo, $discountPoints, $OID);
    updateMember($pdo, $offsetPoints, $memberID);
    // deleteCart($pdo, $CID, $str);


    // //---------------------------以 下 是 自 定 義 Function-------------------------

    //刪除購物車
    function deleteCart($pdo, $CID, $str){

        for($i=0;$i<count($CID);$i++){
            $str .= $str ? " OR CartID =".$CID[$i]  : "CartID =".$CID[$i] ;
        }
        // echo json_encode($try);
        // $sql = "UPDATE cart set status = '2' where $str";
        // $sql = "update cart set status = 2 where CartID = 3 OR CartID = 4;";
        $sql = "update cart set status = 2 where $str;";
    
        $statement = $pdo->prepare( $sql );
        $statement->execute(); 
        $data = $statement->fetchAll();

        // echo json_encode($data);
    }

    //訂單明細存入
    function insertOrderDetail($pdo, $productIDList, $productQuantityList, $productDateList, $OID){
        echo json_encode($productDateList);
        for($i=0;$i<count($productIDList);$i++){
            $sql = "insert into orderdetail ( orderid, productid, quantity, date) values ( ?, '$productIDList[$i]', '$productQuantityList[$i]', '$productDateList[$i]')";
    
            $statement = $pdo->prepare( $sql );
            $statement->bindValue(1, $OID);
            $statement->execute(); 
            $data = $statement->fetchAll();
        }
        // echo json_encode($data);
    }

    //取得目前orderID最大值
    function getMaxOrderID($pdo){
        $sql = "SELECT MAX(orderid) FROM `order`";
        $statement = $pdo->prepare($sql);
        $statement->execute(); 
        $data = $statement->fetchAll();
         
        return $data[0]["MAX(orderid)"] +1;
    }


    //成立訂單
    function insertOrder($pdo, $memberID, $totalPrice, $lastOID){

        $number = str_pad($lastOID, 4,'0',STR_PAD_LEFT);
        $orderNumber = 'OR'.$number;

        $sql = "insert into `order` ( orderdate, memberid, totalprice, ordernumber) values( Now(), ?, ?, ?)";

        $statement = $pdo->prepare( $sql );
        $statement->bindValue(1, $memberID);
        $statement->bindValue(2, $totalPrice);
        $statement->bindValue(3, $orderNumber);
        $statement->execute(); 
        $data = $statement->fetchAll();

        return $pdo->lastInsertId();
    }

    //寫入weeee point使用紀錄
    function insertPlusPointRecord($pdo, $addPoints, $OID){

        $sql = "insert into pointrecord ( orderid, pointschange) values ( ?, ?)";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $OID);
        $statement->bindValue(2, $addPoints);
        $statement->execute();
        $data = $statement->fetchAll();
    }

    function insertMinusPointRecord($pdo, $discountPoints, $OID){

        if($discountPoints > 0){
            $discountPoints *= -1;
            $sql = "insert into pointrecord ( orderid, pointschange) values ( ?, ?)";
            $statement = $pdo->prepare( $sql );
            $statement->bindValue(1, $OID);
            $statement->bindValue(2, $discountPoints);
            $statement->execute(); 
            $data = $statement->fetchAll();
        }
    }

    //更新會員點數
    function updateMember($pdo, $offsetPoints, $memberID){
        $sql = "update member set totalpoints = totalpoints + ? where memberid = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $offsetPoints);
        $statement->bindValue(2, $memberID);
        $statement->execute(); 
        $data = $statement->fetchAll();
    }
    
?>