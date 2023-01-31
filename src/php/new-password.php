<?php require_once "controllerUserData.php"; ?>
<?php 
$Username = $_SESSION['Username'];
if($Username == false){
  header('Location: login-user.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>重設密碼</title>
   
    <link rel="stylesheet" href="style.css">
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
            <div class="col-md-4 offset-md-4 form">
                <form action="new-password.php" method="POST" autocomplete="off">
                    <h2 class="text-center">重設密碼</h2>
                    <?php 
                    if(isset($_SESSION['info'])){
                        ?>
                        <div class="alert alert-success text-center">
                            <?php echo $_SESSION['info']; ?>
                        </div>
                        <?php
                    }
                    ?>
                    <?php
                    if(count($errors) > 0){
                        ?>
                        <div class="alert alert-danger text-center">
                            <?php
                            foreach($errors as $showerror){
                                echo $showerror;
                            }
                            ?>
                        </div>
                        <?php
                    }
                    ?>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="請輸入新密碼" required>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="cpassword" placeholder="再次確認您輸入的新密碼" required>
                    </div>
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="change-password" value="重設">
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>