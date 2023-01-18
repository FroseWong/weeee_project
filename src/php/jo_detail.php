<?php
include("connection.php");
// $path = $_POST["path"];
// echo $path;

$id = $_POST["id"];
$sql = 
"SELECT 
j.JoID, j.JoTitle,j.JoContent, j.MemberID,m.FullName, j.JoPostDate, j.JoStartDate,  case dayofweek(JoStartDate) when 1 then '星期天' when 2 then '星期一' when 3 then '星期二' when 4 then '星期三' when 5 then '星期四' when 6 then '星期五' when 7 then '星期六' end as week
, j.Location, j.JoDetailedAddressed,j.JoAttend,j.JoContact,j.JoUseWeeee,j.ProductID
,j.JoImg, j.click, m.MemberImg, datediff(DATE(JoStartDate),DATE(NOW())) as left_days
FROM Jo j
join Member m
on j.MemberID = m.MemberID
where j.JoID = $id";

$statement =  $pdo->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);