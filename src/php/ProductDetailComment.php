<?php



require_once('connection.php');


if (empty($_POST["sort"])) {
    $_POST["sort"] = 1;
}
$sort = $_POST["sort"];


// -----------每頁顯示、取得商品ID--------------

if ($sort == 1) {
    $PageNum = (string)3;
    $comment = $_POST["comment"] == 1 ? $_POST["comment"] = 0 : ($_POST["comment"] - 1) * 3;
    $PID = $_POST["pid"];
    $sql = "select * from ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where ProductID='$PID' order by ProductCommentTime DESC limit $PageNum offset $comment";
}
if ($sort == 2) {
    $PageNum = (string)3;
    $comment = $_POST["comment"] == 1 ? $_POST["comment"] = 0 : ($_POST["comment"] - 1) * 3;
    $PID = $_POST["pid"];
    $sql = "select * from ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where ProductID='$PID' order by ProductCommentTime ASC limit $PageNum offset $comment";
}
if ($sort == 3) {
    $PageNum = (string)3;
    $comment = $_POST["comment"] == 1 ? $_POST["comment"] = 0 : ($_POST["comment"] - 1) * 3;
    $PID = $_POST["pid"];
    $sql = "select * from ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where ProductID='$PID' order by ProductCommentScore DESC limit $PageNum offset $comment";
}
if ($sort == 4) {
    $PageNum = (string)3;
    $comment = $_POST["comment"] == 1 ? $_POST["comment"] = 0 : ($_POST["comment"] - 1) * 3;
    $PID = $_POST["pid"];
    $sql = "select * from ProductComment JOIN Member on ProductComment.MemberID=Member.MemberID where ProductID='$PID' order by ProductCommentScore ASC limit $PageNum offset $comment";
}
$statement = $pdo->prepare($sql);

$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
