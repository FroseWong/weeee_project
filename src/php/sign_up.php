<?php
 
 


 function getPDO(){

    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "zero8855";
    $db_select = "weeee";
   
    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
   
    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);

    return $pdo;
    
}

       //---------------------------------------------------

       $sql = "INSERT INTO weeee.Member(Username,Password, MemStatus, MemCreateDate) VALUES (?,?,1,NOW())";

       //執行
       $statement = getPDO()->prepare($sql);
   
       //給值
       $statement->bindValue(1, $_POST["Username"]);
       $statement->bindValue(2, $_POST["password"]);
       $statement->execute();
   
       echo "加入成功，請重新登入!"; 



?>