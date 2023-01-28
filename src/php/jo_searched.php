<?php
include("connection.php");
// $path = $_POST["path"];
// echo $path;

$loc = $_POST["loc"];
$key = $_POST["key"];

$key2 = '%'.$key.'%';
$sql = 
"SELECT 
j.JoID, j.JoTitle, j.MemberID, j.JoPostDate, j.JoStartDate,  case dayofweek(JoStartDate) when 1 then '星期天' when 2 then '星期一' when 3 then '星期二' when 4 then '星期三' when 5 then '星期四' when 6 then '星期五' when 7 then '星期六' end as week
, j.Location, j.JoDetailedAddressed
,j.JoImg, j.click, m.MemberImg, m.FullName, datediff(DATE(JoStartDate),DATE(NOW())) as left_days
FROM Jo j
join Member m
on j.MemberID = m.MemberID
where JoStatus = 1 and j.JoStartDate >= NOW() and JoTitle like ? and j.Location like ? ";
$statement =  $pdo->prepare($sql);
$statement->bindValue(1, $key2);
$statement->bindValue(2, $loc);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);






?>