<?php require_once "controllerUserData.php"; ?>
<?php
if($_SESSION['info'] == false){
    header('Location: https://tibamef2e.com/tgd103/g2/frontend/login.html');  
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>重設成功</title>
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <!-- <link rel="stylesheet" href="style.css"> -->
</head>
<style>
    .form{
       text-align:center;
       padding-top:20px;
    }
    .form-control{
        font-size:20px;
        margin-top:10px;
    }
    .form-control button{
        font-size:20px;
        display:block;

    }
  </style>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4 form login-form">
            <?php 
            if(isset($_SESSION['info'])){
                ?>
                <div class="alert alert-success text-center">
                <?php echo $_SESSION['info']; ?>
                </div>
                <?php
            }
            ?>
                <form action="./controllerUserData.php" method="POST">
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="login-now" value="請點擊這裡進行登入">
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>