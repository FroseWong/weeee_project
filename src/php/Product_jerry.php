<?php
include("connection.php");
$msort = $_POST["msort"];
$key = $_POST["key"];
// echo $path;
if(!$key == "" ){
    $sql = 
    "SELECT * from (
        SELECT p.ProductID,p.ProductName, p.ProductPrice, p.ProductText, p.Location, p.ProductSecondType, i.ProductImgPath1 ,p.ProductPurchased, p.ProductScoredPeople
        FROM Product p
        join ProductImg i 
        on p.ProductID =  i.ProductID
        where p.ProductStatus = 1 
        and p.ProductName like ?
        or p.Location like ?
        or p.ProductSecondType like ?
        or p.ProductText like ?  ) a
        join(
        select ProductID, avg(ProductCommentScore) as score
        from ProductComment 
        group by ProductID) b
        on a.ProductID = b.ProductID;";
        $statement =  $pdo->prepare($sql);
        $statement->bindValue(1, '%'.$key.'%');
        $statement->bindValue(2, '%'.$key.'%');
        $statement->bindValue(3, '%'.$key.'%');
        $statement->bindValue(4, '%'.$key.'%');
        

}else{



$sql = 
"SELECT * from (
    SELECT p.ProductID,p.ProductName, p.ProductPrice, p.ProductText, p.Location, p.ProductSecondType, i.ProductImgPath1 ,p.ProductPurchased, p.ProductScoredPeople
    FROM Product p
    left join ProductImg i 
    on p.ProductID =  i.ProductID
    where p.ProductStatus = 1 and p.ProductType = ?  ) a
    left join(
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
else
if($msort == "vp"){
    $statement->bindValue(1, "viewpointticket");
}

}

$statement->execute();
$data = $statement->fetchAll();

//回傳json

echo json_encode($data);


?>