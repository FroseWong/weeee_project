<?php
//    function getPDO(){

//     $db_host = "127.0.0.1";
//     $db_user = "tibamefe_since2021";
//     $db_pass = "vwRBSb.j&K#E";
//     $db_select = "tibamefe_tgd103g2";
   
//     //建立資料庫連線物件
//     $dsn = "mysql:host=".$db_host.";dbname=".$db_select;
   
//     //建立PDO物件，並放入指定的相關資料
//     $pdo = new PDO($dsn, $db_user, $db_pass);

//     return $pdo;
    
// }
include("./connection.php");

    //建立SQL
    $sql = "SELECT * FROM Member WHERE  Username = ? and Password = ?";
  
    //給值
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $_POST["Username"]);
    $statement->bindValue(2, $_POST["password"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    $MemStatus = "";
    
    foreach($data as $index => $row){
        $memberID = $row["MemberID"];
        $memberName = $row["Username"];
        $MemStatus = $row["MemStatus"];
    }
    // print_r($MemStatus);

    if($MemStatus==0){
    $MemStatus=22;
     echo "22";
    
    }

    //判斷是否有會員資料?
    elseif($memberID != "" && $memberName != ""){

        include("./Member.php");        
    
        //將會員資訊寫入session
        setMemberInfo($memberID, $memberName);

        //登入成功        
        echo "11"; 

    }else{

        //登入失敗
        echo "0"; 
       
    }




?>