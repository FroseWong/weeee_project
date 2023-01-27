<?php
include("connection.php");
$msort = $_POST["msort"];
// echo $path;


$sql = 
"SELECT * from (
    SELECT p.ProductID,p.ProductName, p.ProductPrice, p.ProductText, p.Location, p.ProductSecondType, i.ProductImgPath1 ,p.ProductPurchased, p.ProductScoredPeople
    FROM Product p
    join ProductImg i 
    on p.ProductID =  i.ProductID
    where p.ProductStatus = 1 and p.ProductType = ?  ) a
    join(
    select ProductID, avg(ProductCommentScore) as score
    from ProductComment 
    group by ProductID) b
    on a.ProductID = b.ProductID;";




$statement =  $pdo->prepare($sql);

if($msort == "ss"){
    $statement->bindValue(1, "sightseeing");
}
else
if($msort == "tt"){
    $statement->bindValue(1, "transticket");
}
else
if($msort == "ep"){
    $statement->bindValue(1, "experience");
 }
elseif($msort == "vp"){
    $statement->bindValue(1, "viewpointticket");
}


$statement->execute();
$data = $statement->fetchAll();

//回傳json

echo json_encode($data);


?>