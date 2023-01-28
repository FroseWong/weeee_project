<?php
//取得請求參數
$joID = $_GET['joID'];


//DB連線資訊
include("connection.php");
// {
//     JoTitle: "揪團吃合菜",
//     JoNumber: "JO0001",
//     MemberID: "1",
//     JoContact: "LINE:111",
//     Location: "台北",
//     JoDetailedAddressed: "饒河街夜市",
//     JoContent:"嗚嗚嗚好好吃",
//     JoCommentList: [
//         {
//             JoCommentID: "JO123",
//             MemberID: "1",
//             JoCommentContent: "好想參加這團",
//             JoCommentStatus: 1,
//             JoCommentTime: "2022-01-01"
//         },
//         {
//             JoCommentID: "JO123",
//             MemberID: "1",
//             JoCommentContent: "好想參加這團",
//             JoCommentStatus: 1,
//             JoCommentTime: "2022-01-01"
//         }
//     ]
// }
//建立SQL語法
$sql = "SELECT JoTitle, JoNumber, MemberID, JoContact, `Location`, JoDetailedAddressed, JoContent, JoStartDate, JoStatus
from Jo
WHERE JoID = ?;";


// //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $joID);
$statement->execute(); //執行

// //抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetch();

// {
//     JoTitle: "揪團吃合菜",
//     JoNumber: "JO0001",
//     MemberID: "1",
//     JoContact: "LINE:111",
//     Location: "台北",
//     JoDetailedAddressed: "饒河街夜市",
//     JoContent:"嗚嗚嗚好好吃",
// }

//建立SQL語法
$sql = "SELECT JoCommentID, MemberID, JoCommentContent, JoCommentStatus, JoCommentTime
from JoComment
WHERE JoID = ?;";




//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $joID);
$statement->execute(); //執行

//抓出全部且依照順序封裝成一個二維陣列
$joCommnetList = $statement->fetchAll();

$data['JoCommentList'] = $joCommnetList;

//將結果回傳
echo json_encode($data);
?>