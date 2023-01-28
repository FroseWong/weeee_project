<?php
include("connection.php");
// $path = $_POST["path"];
// echo $path;

$type = $_POST["type"];

$sql = 
"SELECT p.ProductID,p.ProductName, p.ProductPrice, p.ProductText, p.Location,p.ProductType ,p.ProductSecondType, p.ProductPurchased,p.ProductScoredPeople,i.ProductImgPath1 
FROM Product p
join ProductImg i 
on p.ProductID =  i.ProductID
where p.ProductStatus = 1";

if($type == "theme"){
    $sql .= 
    " AND ProductSecondType = '主題樂園' limit 6";
    }
    // if($type == "interest"){
    // $sql .= 
    // " order by j.JoPostDate desc
    // limit 6";
    // }
    if($type == "top10"){
        $sql .= 
        " order by ProductPurchased desc 
        limit 6";
    }
    if($type == "experience"){
        $sql .= 
        " AND ProductType = 'experience' limit 6";
    }


$statement =  $pdo->prepare($sql);

// if($path == "/weeee!/dist/productlist_new_travel.html"){
    // $statement->bindValue(1);
// }
// else
// if($path == "/weeee!/dist/productlist_new_ticket.html"){
//     $statement->bindValue(1, "transticket");
// }
// else
// if($path == "/weeee!/dist/productlist_new_exp.html"){
//     $statement->bindValue(1, "experience");
//  }
// elseif($path == "/weeee!/dist/productlist_new_ss_ticket.html"){
//     $statement->bindValue(1, "viewpointticket");
// }


$statement->execute();
$data = $statement->fetchAll();

//回傳json

// echo json_encode($data);
echo json_encode($data);


?>
