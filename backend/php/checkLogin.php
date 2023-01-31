<?php
    session_start();
    if (!isset($_SESSION['backend_user'])) {
        $response = [];
        $response["loginCheckFailed"] = true;
        echo json_encode($response);
        exit();
    }
?>