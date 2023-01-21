<?php
    include("../php/connection.php");	

    //建立SQL
    $sql = "SELECT * FROM weeee.Member WHERE  Username = ? and `Password` = ?";

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["Username"]);
    $statement->bindValue(2, $_POST["Password"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["MemberID"];
        $memberName = $row["Username"];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){

        include("../php/Member.php");        
    
        //將會員資訊寫入session
        setMemberInfo($memberID, $memberName);

        //登入成功        
        echo "Y"; 

    }else{

        //登入失敗
        echo "N"; 
        
    }
?>