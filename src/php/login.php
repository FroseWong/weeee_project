<?php
include("./connection.php");
$member = json_decode(file_get_contents("php://input"), true);

// 判斷有沒有接收到資料
if ($member == null) {
  $member["message"] = "無會員資訊";
  $member["successful"] = false;
  echo json_encode($member);
  return;
}

// -----------------------------------------------------
$sql = "
    select *
    from Weeee.Member where 
    Username = :Username and Password = :Password;
  ";
// -----------------------------------------------------

$stmt = $pdo->prepare($sql);
$stmt->bindValue(":Username", $member["Username"]); // 信箱
$stmt->bindValue(":Password", $member["Password"]); // 密碼
$stmt->execute();

$members = $stmt->fetchAll();
// 取得資料 != 0
if (count($members) != 0) {
  $member = $members[0];
  $member["successful"] = true;
  session_start();
  if ($_SESSION != null) {
    session_regenerate_id();
  }
  $_SESSION["loggedin"] = true;
  $_SESSION["member"] = (object) $member;
  echo json_encode([
    "successful" => true,
    "MemberID" => $member["MemberID"],
  ]);
} else {
  $resp_body = (object) [
    "successful" => false,
    "message" => "信箱或密碼錯誤"
  ];
  echo json_encode($resp_body);
}