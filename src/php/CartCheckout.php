<?php
    include("connection.php"); 

    $memberID = $_POST["memberID"]; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
    $email = $_POST["email"];
    $CID = $_POST["CID"];
    $totalPrice = $_POST["totalPrice"];
    $addPoints = $_POST["addPoints"];
    $discountPoints = $_POST["discountPoints"];
    $offsetPoints = $addPoints - $discountPoints;
    $str = '';
    $lastOID = getMaxOrderID($pdo);
    $OID = insertOrder($pdo, $memberID, $totalPrice, $lastOID, $email, $discountPoints);
    $productDateList = $_POST['productDateList'];
    $productIDList = $_POST['productIDList'];
    $productQuantityList = $_POST['productQuantityList'];


    insertOrderDetail($pdo, $productIDList, $productQuantityList, $productDateList, $OID);
    insertPlusPointRecord($pdo, $addPoints, $OID);
    insertMinusPointRecord($pdo, $discountPoints, $OID);
    updateMember($pdo, $offsetPoints, $memberID);
    deleteCart($pdo, $CID, $str);

    echo "購買完成!";


    // //---------------------------以 下 是 自 定 義 Function-------------------------

    //刪除購物車
    function deleteCart($pdo, $CID, $str){

        if($CID != null){
            for($i=0;$i<count($CID);$i++){
                $str .= $str ? " OR CartID =".$CID[$i]  : "CartID =".$CID[$i] ;
            }
            // echo json_encode($try);
            // $sql = "UPDATE cart set status = '2' where $str";
            // $sql = "update cart set status = 2 where CartID = 3 OR CartID = 4;";
            $sql = "delete from Cart where $str;";
        
            $statement = $pdo->prepare( $sql );
            $statement->execute(); 
            $data = $statement->fetchAll();
    
            // echo json_encode($data);
        }
    }

    //訂單明細存入
    function insertOrderDetail($pdo, $productIDList, $productQuantityList, $productDateList, $OID){
        // echo json_encode($productDateList);
        for($i=0;$i<count($productIDList);$i++){
            $sql = "insert into OrderDetail ( OrderID, ProductID, Quantity, StartDate, OrderDate) values ( ?, '$productIDList[$i]', '$productQuantityList[$i]', '$productDateList[$i]', Now())";
    
            $statement = $pdo->prepare( $sql );
            $statement->bindValue(1, $OID);
            $statement->execute(); 
            $data = $statement->fetchAll();
        }
        // echo json_encode($data);
    }

    //取得目前orderID最大值
    function getMaxOrderID($pdo){
        $sql = "SELECT MAX(OrderID) FROM `Order`";
        $statement = $pdo->prepare($sql);
        $statement->execute(); 
        $data = $statement->fetchAll();
         
        return $data[0]["MAX(OrderID)"] +1;
    }


    //成立訂單
    function insertOrder($pdo, $memberID, $totalPrice, $lastOID, $email, $discountPoints){

        $number = str_pad($lastOID, 4,'0',STR_PAD_LEFT);
        $orderNumber = 'OR'.$number;

        $sql = "insert into `Order` ( OrderDate, MemberID, TotalPrice, OrderNumber, Email, Discount) values( Now(), ?, ?, ?, ?, ?)";

        $statement = $pdo->prepare( $sql );
        $statement->bindValue(1, $memberID);
        $statement->bindValue(2, $totalPrice);
        $statement->bindValue(3, $orderNumber);
        $statement->bindValue(4, $email);
        $statement->bindValue(5, $discountPoints);
        $statement->execute(); 
        $data = $statement->fetchAll();

        return $pdo->lastInsertId();
    }

    //寫入weeee point使用紀錄
    function insertPlusPointRecord($pdo, $addPoints, $OID){

        $sql = "insert into PointRecord ( OrderID, PointsChange) values ( ?, ?)";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $OID);
        $statement->bindValue(2, $addPoints);
        $statement->execute();
        $data = $statement->fetchAll();
    }

    function insertMinusPointRecord($pdo, $discountPoints, $OID){

        if($discountPoints > 0){
            $discountPoints *= -1;
            $sql = "insert into PointRecord ( OrderID, PointsChange) values ( ?, ?)";
            $statement = $pdo->prepare( $sql );
            $statement->bindValue(1, $OID);
            $statement->bindValue(2, $discountPoints);
            $statement->execute(); 
            $data = $statement->fetchAll();
        }
    }

    //更新會員點數
    function updateMember($pdo, $offsetPoints, $memberID){
        $sql = "update Member set TotalPoints = TotalPoints + ? where MemberID = ?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $offsetPoints);
        $statement->bindValue(2, $memberID);
        $statement->execute(); 
        $data = $statement->fetchAll();
    }
    
?>