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
        $account = $_POST['account'];
		$password = htmlentities($_POST['password']);
        $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES (?,?, NOW())";	
        // $sql = "SELECT * from member where Account = ? and PWD = ?";
        $statement = $pdo->prepare( $sql );
        $statement->bindParam(1 , $account); 
        $statement->bindParam(2 , $password); 
        $statement->execute(); 
		

    
        $data = $statement->fetchAll();
        print_r($data);
       if(count($data)=0)
       {
        $sql = "INSERT INTO member(Account, PWD, CreateDate) VALUES (?,?, NOW())";	
        session_start();
        $_SESSION["account"] = $account;//寫入session
        $_SESSION["password"] = $password;
        header("Location:account_setting.php");//跳轉>會員設定(once);
       }
        else{
        echo "您已經是會員請登入";
        header("Location:login.html");
       }

?>