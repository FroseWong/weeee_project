<?php
include("connection.php");
// $path = $_POST["path"];
// echo $path;

$type = $_POST["type"];
$sql = 
"SELECT 
j.JoID, j.JoTitle, j.MemberID, j.JoPostDate, j.JoStartDate,  case dayofweek(JoStartDate) when 1 then '星期天' when 2 then '星期一' when 3 then '星期二' when 4 then '星期三' when 5 then '星期四' when 6 then '星期五' when 7 then '星期六' end as week
, j.Location, j.JoDetailedAddressed
,j.JoImg, j.click, m.MemberImg,m.FullName, datediff(DATE(JoStartDate),DATE(NOW())) as left_days
FROM Jo j
join Member m
on j.MemberID = m.MemberID
where JoStatus = 1 and j.JoStartDate >= NOW()";

if($type == "hot"){
$sql .= 
" order by j.click desc
limit 6";
}
if($type == "new"){
$sql .= 
" order by j.JoPostDate desc
limit 6";
}
if($type == "end"){
    $sql .= 
    " order by left_days
    limit 6";
}
$statement =  $pdo->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();
echo json_encode($data);





?>