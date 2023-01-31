<?php
    session_start();
    $_SESSION["backend_user"] = null;
    header("Location: ../login.html");
?>