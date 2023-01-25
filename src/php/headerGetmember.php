<?php
include("connection.php");

$memberID = $_POST['memberID'];

$sql = "SELECT * FROM 
		( SELECT m.MemberID, m.FullName, m.MemberImg 
		FROM Member m 
		WHERE m.MemberID = $memberID) m
		LEFT JOIN
		(SELECT count(*) ,memberid 
		FROM cart 
		GROUP BY memberid) c
		ON m.memberid = c.memberid;";

$statement = $pdo->prepare($sql);
$statement->execute();

$data = $statement->fetchAll();

echo json_encode($data);
// echo json_encode($memberID);

?>