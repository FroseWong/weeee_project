<?php
include("connection.php");
// include("CheckLogin.php");

// CheckMemberID();
// if (empty($_SESSION["MemberID"])) {
//     echo json_encode("NotFound");
//     return;
// } else {
// 	// $MID = $_SESSION["MemberID"];
// 	$memberID = $_SESSION["MemberID"];
// }
include("Member.php");

getMemberID();
if (empty($_SESSION["MemberID"])) {
    echo json_encode("NotFound");
    return;
}

$memberID = $_SESSION["MemberID"];

// $memberID = $_POST['memberID'];

// $sql = "SELECT * FROM 
// 		( SELECT m.MemberID, m.FullName, m.MemberImg 
// 		FROM Member m 
// 		WHERE m.MemberID = $memberID) m
// 		LEFT JOIN
// 		(SELECT count(*) ,memberid 
// 		FROM cart 
// 		GROUP BY memberid) c
// 		ON m.memberid = c.memberid;";

// update

$sql =  "SELECT * FROM 
	( SELECT m.MemberID, m.FullName, m.MemberImg 
	FROM Member m 
	WHERE m.MemberID = $memberID) m
	LEFT JOIN
	(SELECT count(*) ,ca.memberid
	FROM cart ca
	join product p
	on ca.productID = p.productID
	where p.ProductStatus = 1
	GROUP BY memberid) c
	ON m.memberid = c.memberid";


$statement = $pdo->prepare($sql);
$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
// echo json_encode($memberID);

?>