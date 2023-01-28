<?php
    include("connection.php");

    $memberID = $_POST['memberID'];
    $pid = $_POST['pid'];

    $sqlif = "SELECT count(ProductID) From Favor  where MemberID='{$memberID}' and ProductID='{$pid}'";

    $statementif = $pdo->prepare($sqlif);

    $statementif->execute();

    $dataif = $statementif->fetchAll();
    $tempif = $dataif[0]['0'];

// -----------如果使用者沒加過收藏---------------

    if($tempif===0){
        $sqlzero = "INSERT INTO Favor (MemberID,ProductID,FavorStatus)VALUES ('{$memberID}','{$pid}',1)";
        $statement = $pdo->prepare($sqlzero);
        $statement->execute();
        echo json_encode('yo');
    }

// -----------如果使用者有加過收藏---------------

if ($tempif === 1) {
    $sqlsel = "SELECT * FROM Favor where ProductID='{$pid}' AND MemberID='{$memberID}'";
    $statement = $pdo->prepare($sqlsel);
    $statement->execute();
    $datasel = $statement->fetchAll();

    $tempsel = $datasel[0]['FavorStatus'];

    // --------如果使用者已收藏---------
    if ($tempsel === 1) {
        $sqlone = "UPDATE Favor SET FavorStatus=0 WHERE ProductID='{$pid}' AND MemberID='{$memberID}'";
        $statement = $pdo->prepare($sqlone);
        $statement->execute();
    }
    // --------如果使用者未收藏---------
    if ($tempsel === 0) {
        $sqlone = "UPDATE Favor SET FavorStatus=1 WHERE ProductID='{$pid}' AND MemberID='{$memberID}'";
        $statement = $pdo->prepare($sqlone);
        $statement->execute();
    }
    echo json_encode('yo');

    // echo json_encode($datasel[0]['FavorStatus']);

}

// echo json_encode('yo');


// echo json_encode($dataif[0]['0']);

?>