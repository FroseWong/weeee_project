<?php
$memberNumber = "ME0002"; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
$lastName = $_POST["lastName"];
$firstName = $_POST["firstName"];
$sex = $_POST["sex"];
$englishLastName = $_POST["englishLastName"];
$englishFirstName = $_POST["englishFirstName"];
$passport = $_POST["passport"];
$country = $_POST["country"];
$phone = $_POST["phone"];
// $username = $_POST["username"];
$birthDate = $_POST["birthDate"];
$friend = $_POST["friend"];
$family = $_POST["family"];
$couple = $_POST["couple"];
$pet = $_POST["pet"];
$handmade = $_POST["handmade"];
$onwater = $_POST["onwater"];
$farm = $_POST["farm"];
$extreme = $_POST["extreme"];

//DB連線資訊
include("connection.php");

//建立SQL
// $sql = "UPDATE Weeee.Member SET LastName = '郭', SET FirstName = '寧寶', SET Sex = 0, SET englishLastName = 'Kuo', SET englishFirstName = 'Ning-Bao', SET passportNumber = '315438771', SET country = '汐止國', SET phone = '0976234986', SET username = 'baobao@gmail.com', SET birthDate = '1990-12-01', SET interest.friend = true, SET interest.family = false, SET interest.couple = true, SET interest.pet = false, SET interest.handmade = false, SET interest.onwater = false, SET interest.farm = false, SET interest.extreme = true, WHERE MemberNumber = 'ME0001'";

$sql = "UPDATE Weeee.Member SET LastName = ?, FirstName = ?, Sex = ?, EnglishLastName = ?, EnglishFirstName = ?, Passport = ?, Country = ?, Phone = ?,  BirthDate = ? interest.friend = ?, interest.family = ?, interest.couple = ?, interest.pet = ?, interest.handmade = ?, interest.onwater = ?, interest.farm = ?, interest.extreme = ?  WHERE MemberNumber = ?";

//Username = ?, 


//執行
$statement = $pdo->prepare($sql);
$statement -> bindValue(1, $lastName);
$statement -> bindValue(2, $firstName);
$statement -> bindValue(3, $sex);
$statement -> bindValue(4, $englishLastName);
$statement -> bindValue(5, $englishFirstName);
$statement -> bindValue(6, $passport);
$statement -> bindValue(7, $country);
$statement -> bindValue(8, $phone);
// $statement -> bindValue(9, $username);
$statement -> bindValue(9, $birthDate);
$statement -> bindValue(10, $friend);
$statement -> bindValue(11, $family);
$statement -> bindValue(12, $couple);
$statement -> bindValue(13, $pet);
$statement -> bindValue(14, $handmade);
$statement -> bindValue(15, $onwater);
$statement -> bindValue(16, $farm);
$statement -> bindValue(17, $extreme);
$statement -> bindValue(18, $memberNumber);
$statement -> execute();

//頁面導回HTML
header("Location: ../account_setting.html");
?>