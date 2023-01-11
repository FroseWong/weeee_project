<?php
include("Connection.php");
$path = $_POST["path"];
// echo $path;


$sql = 
"SELECT p.ProductName, p.ProductPrice, p.ProductText, p.Location, p.ProductSecondType, i.ProductImgPath 
FROM Product p
join ProductImg i 
on p.ProductID =  i.ProductID
where p.ProductStatus = 1 and p.ProductType = ? ";




$statement =  $pdo->prepare($sql);

    $statement->bindValue(1, "sightseeing");
}
else
if($path == "/WEEEE_PROJET/dist/productlist_travelticket.html"){
    $statement->bindValue(1, "transticket");
}
else
if($path == "/WEEEE_PROJET/dist/productlist_experience.html"){
    $statement->bindValue(1, "experience");
 }
elseif($path == "/WEEEE_PROJET/dist/productlist_sightseeingticket.html"){
    $statement->bindValue(1, "viewpointticket");
}


$statement->execute();
$data = $statement->fetchAll();

//回傳json

echo json_encode($data);


?>