<?php
       //MySQL相關資訊
       $db_host = "127.0.0.1";
       $db_user = "root";
       $db_pass = "zero8855";
       $db_select = "pdo";

       //建立資料庫連線物件
       $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

       //建立PDO物件，並放入指定的相關資料
       $pdo = new PDO($dsn, $db_user, $db_pass);

       //---------------------------------------------------

       //建立SQL
        $account = $_POST['Username'];
		$password = htmlentities($_POST[`Password`]);
        $sql = "INSERT INTO Weeee.Member(Username,`Password`,MemCreateDate) VALUES (?,?,NOW())";	
        // $sql = "SELECT * from member where Account = ? and PWD = ?";
        $statement = $pdo->prepare( $sql );
        $statement->bindParam(1 , $account); 
        $statement->bindParam(2 , $password); 
        $statement->execute(); 
		

    
        $data = $statement->fetchAll();
        print_r($data);
       if(count($data)=0)
       {
        $sql = "INSERT INTO Weeee.Member(Username,`Password`,MemCreateDate) VALUES (?,?,NOW())";
        session_start();
        $_SESSION["Username"] = $account;//寫入session
        $_SESSION[`Password`] = $password;
        header("Location:account_setting.php");//跳轉>會員設定(once);
       }
        else{
        echo "您已經是會員請登入";
       }
    
    // include("./connection.php");
    
    // // 接收前端傳來的JSON格式
    // $member = json_decode(file_get_contents("php://input"), true);
    
    // $sql = "INSERT INTO Weeee.Member(Username,`Password`,MemCreateDate)
    //     VALUES (?,?,NOW())";
    
    
    // $stmt = $pdo->prepare($sql);
    // $stmt->bindValue(1, $member["Username"]);
    // $stmt->bindValue(2, $member[`Password`]);
    // $stmt->bindValue(3, $member["MemCreateDate"]);

    // $stmt->execute();
    
    
    // // echo json_encode($stmt->);
    
    // if ($stmt->rowCount() != 0) {
    
    //     $sql = "SELECT *
    //     FROM weeee.Member 
    //     WHERE Username = ? and `password` = ? ;";
    //     $stmt = $pdo->prepare($sql);
    //     $stmt->bindValue(1, $member["Username"]);
    //     $stmt->bindValue(2, $member[`Password`]);
    //     $stmt->execute();
    
    //     $member_ID = $stmt->fetchAll();
    
    //     if (count($member_ID) != 0) {
    //         $member = $member_ID[0];
    //         $member["successful"] = true;
    //         session_start();
    //         if ($_SESSION != null) {
    //             session_regenerate_id();
    //         }
    //         $_SESSION["loggedin"] = true;
    //         $_SESSION["member"] = (object) $member;
    //         echo json_encode([
    //             "successful" => true,
    //             "MEMBER_ID" => $member["MEMBER_ID"],
    //         ]);
    //     } else {
    //         $resp_body = (object) [
    //             "successful" => false,
    //             "message" => "信箱或密碼錯誤"
    //         ];
    //         echo json_encode($resp_body);
    //     }
    // }



?>