<?php
$memberNumber = "ME0003"; //TODO 先寫死，到時候登入功能做好，可從 php session取得會員編號
$lastName = $_POST["lastName"];
$firstName = $_POST["firstName"];
$sex = $_POST["sex"];
$englishLastName = $_POST["englishLastName"];
$englishFirstName = $_POST["englishFirstName"];
$passport = $_POST["passport"];
$country = $_POST["country"];
$phone = $_POST["phone"];
$birthDate = $_POST["birthDate"];
$friend = isset($_POST["friend"]) ? 1 : 0;
$family = isset($_POST["family"]) ? 1 : 0;
$couple = isset($_POST["couple"]) ? 1 : 0;
$pet = isset($_POST["pet"]) ? 1 : 0;
$handmade = isset($_POST["handmade"]) ? 1 : 0;
$onwater = isset($_POST["onwater"]) ? 1 : 0;
$farm = isset($_POST["farm"]) ? 1 : 0;
$extreme = isset($_POST["extreme"]) ? 1 : 0;

//DB連線資訊
include("connection.php");

//建立SQL
$sql = "UPDATE Weeee.Member SET LastName = ?, FirstName = ?, Sex = ?, EnglishLastName = ?, EnglishFirstName = ?, Passport = ?, Country = ?, Phone = ?,  BirthDate = ?, Friend = ?, Family = ?, Couple = ?, Pet = ?, Handmade = ?, Onwater = ?, Farm = ?, Extreme = ?  WHERE MemberNumber = ?";

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