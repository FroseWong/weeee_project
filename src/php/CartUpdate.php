<?php    
    include("connection.php");

    //取得POST過來的值
    $CID = $_POST["CID"];
    $Date = $_POST["Date"];
    $Quantity = $_POST["Quantity"];
    
    //返回訊息文字 
    // $message = "修改成功!";

    //建立SQL
    $sql = "UPDATE Cart set CartStartDay = ?, Quantity = ? WHERE CartID = ?";
    
    //執行
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $Date);     
    $statement->bindValue(2 , $Quantity);
    $statement->bindValue(3 , $CID);
    $statement->execute();
    
    //導頁    
    // echo $CID.$Date.$Quantity;
?>