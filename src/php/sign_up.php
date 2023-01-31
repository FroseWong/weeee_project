<?php
 


       //---------------------------------------------------
       include("./connection.php");
      
       $sql = "INSERT INTO Member(Username,Password, MemStatus, MemCreateDate) VALUES (?,?,1,NOW())";

       //執行
       $statement = $pdo->prepare($sql);
   
       //給值
       $statement->bindValue(1, $_POST["Username"]);
       $statement->bindValue(2, $_POST["password"]);
       $statement->execute();
   
       echo "加入成功，請重新登入!"; 



?>