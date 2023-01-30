<?php
//DB連線資訊
include("connection.php");

//取得請求參數
include("./Member.php");        
$memberID = getMemberID();

if (strlen($_FILES['imageFile']['name']) != 0) {
    $str = $_FILES['imageFile']['name'];
    $index = strpos($str, ".", 0);
    $memberImg = "img/temp/MemberImg_".$memberID.substr($str, $index, strlen($str) - $index);
    move_uploaded_file($_FILES['imageFile']["tmp_name"], "../".$memberImg);

    // 更新ProductImg
    $sql = "UPDATE Member SET MemberImg = ?
    WHERE MemberID = ?;";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "./".$memberImg);
    $statement->bindValue(2, $memberID);
    $statement->execute();
}

//頁面導回HTML
header("Location: ../".$_POST["originalUrl"]);

?>