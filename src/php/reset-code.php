


<?php 
 require_once "controllerUserData.php";
$Username = $_SESSION['Username'];
if($Username == false){
  header('Location: login-user.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>驗證</title>
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
                <form action="reset-code.php" method="POST" autocomplete="off">
                    <h2 class="text-center">請正確輸入您的驗證碼用以重設密碼</h2>
                    <?php 
                    if(isset($_SESSION['info'])){
                        ?>
                        <div class="alert alert-success text-center" style="padding: 0.4rem 0.4rem">
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
                        <input class="form-control" type="number" name="otp" placeholder="請輸入驗證碼" required>
                    </div>
                    <div class="form-group">
                        <input class="form-control button" type="submit" name="check-reset-otp" value="送出">
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>