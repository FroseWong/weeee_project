<?php



    //    //MySQL相關資訊
    //    $db_host = "127.0.0.1";
    //    $db_user = "root";
    //    $db_pass = "zero8855";
    //    $db_select = "pdo";

    //    //建立資料庫連線物件
    //    $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

    //    //建立PDO物件，並放入指定的相關資料
    //    $pdo = new PDO($dsn, $db_user, $db_pass);

    //    //---------------------------------------------------

    //    //建立SQL
    //     $account = $_POST['account'];
	// 	$password = htmlentities($_POST['password']);
    //     $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES (?,?, NOW())";	
    //     // $sql = "SELECT * from member where Account = ? and PWD = ?";
    //     $statement = $pdo->prepare( $sql );
    //     $statement->bindParam(1 , $account); 
    //     $statement->bindParam(2 , $password); 
    //     $statement->execute(); 
		

    
    //     $data = $statement->fetchAll();
    //     print_r($data);
    //    if(count($data)=0)
    //    {
    //     $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES (?,?, NOW())";	
    //     session_start();
    //     $_SESSION["account"] = $account;//寫入session
    //     $_SESSION["password"] = $password;
    //     header("Location:account_setting.php");//跳轉>會員設定(once);
    //    }
    //     else{
    //     echo "您已經是會員請登入";
    //     header("Location:login.html");
    //    }
    
    include("./connection.php");
    
    // 接收前端傳來的JSON格式
    $member = json_decode(file_get_contents("php://input"), true);
    
    $sql = " 
        INSERT INTO MEMBER(MEMBER_ID,EMAIL,PASSWORD,PASSWORDAG,REGISTER_DAY)
        VALUES (?,?,?,?,?,now());
    ";
    
    
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(1, $member["signup_MEMBER_ID"]);
    $stmt->bindValue(2, $member["signup_email"]);
    $stmt->bindValue(3, $member["signup_phone"]);
    $stmt->bindValue(4, $member["signup_pwd"]);
    $stmt->bindValue(5,$member["signup_pwdag"])
    $stmt->execute();
    
    
    // echo json_encode($stmt->);
    
    if ($stmt->rowCount() != 0) {
    
        $sql = "
        SELECT *
        FROM MEMBER 
        WHERE EMAIL = ? and password = ? ;";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(1, $member["signin_email"]);
        $stmt->bindValue(2, $member["signin_pwd"]);
        $stmt->execute();
    
        $member_ID = $stmt->fetchAll();
    
        if (count($member_ID) != 0) {
            $member = $member_ID[0];
            $member["successful"] = true;
            session_start();
            if ($_SESSION != null) {
                session_regenerate_id();
            }
            $_SESSION["loggedin"] = true;
            $_SESSION["member"] = (object) $member;
            echo json_encode([
                "successful" => true,
                "MEMBER_ID" => $member["MEMBER_ID"],
            ]);
        } else {
            $resp_body = (object) [
                "successful" => false,
                "message" => "信箱或密碼錯誤"
            ];
            echo json_encode($resp_body);
        }
    }



?>