<?php
       include("connection.php");
    

       $sql0 = "SELECT MAX(MemberID) FROM Member";
       $statement0 = $pdo->prepare($sql0);
       $statement0->execute(); 
       $data0 = $statement0->fetchAll();
       
       $maxID = $data0[0]["MAX(MemberID)"];
       $meNumber = 'ME'.str_pad($maxID+1,4,"0",STR_PAD_LEFT);


    $sql = "INSERT INTO Member(Username,Password, MemStatus, MemCreateDate, MemberNumber) VALUES (?,?,1,NOW(),'$meNumber')";

    //執行
    $statement = $pdo->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["Username"]);
    $statement->bindValue(2, $_POST["password"]);
    $statement->execute();

    echo "加入成功，請重新登入!"; 
 //    header("Location: ../login.html");


      



?>