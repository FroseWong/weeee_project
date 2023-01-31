<?php
$username = $_POST["username"];
$password = $_POST["password"];
include("connection.php");

//建立SQL
$sql = "SELECT * FROM End WHERE EndAccount = ? AND EndPwd = ?";

//執行
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $username);
$statement -> bindValue(2, $password);
$statement -> execute();
$data = $statement->fetch();

if ($data) {
    session_start();
    $_SESSION['backend_user'] = $data['EndAccount'];
    header("Location: ../order/list.html");
} else {
    header("Location: ../login.html?error=1");
}

?>