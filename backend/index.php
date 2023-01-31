<?php
    session_start();
    if (isset($_SESSION['backend_user'])) {
        header("Location: ./order/list.html");
    } else {
        header("Location: ./login.html");
    }
?>