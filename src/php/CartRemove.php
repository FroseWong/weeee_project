<?php
    //DB連線資訊
    include("connection.php");  
    
    //取得POST過來的值
    $CID = $_POST["CID"];

    //建立SQL
    $sql = "delete from cart where cartID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);

    //給值        
    $statement->bindValue(1 , $CID); 
    $statement->execute();

    echo "商品已移除!";
?>