<script src="https://smtpjs.com/v3/smtp.js"></script>

<!-- <script>
const str = "認證碼";

  Email.send({
  Host: "smtp.elasticemail.com",
  Username: "weeeeproject2@gmail.com",
  Password: "3C030F022C721ED1FA84624A4392657C07F2",
  To: "chusmile1021@gmail.com", // 收件者
  From: "weeeeproject2@gmail.com",
  Subject:=$subject, //標題
  Body:=$code // 內文
}).then((message) => alert(message));

</script> -->

<?php 
session_start();
//本機用
// $con = mysqli_connect('127.0.0.1', 'root', 'zero8855', 'weeee');
//上線用
$con = mysqli_connect('127.0.0.1', 'tibamefe_since2021', 'vwRBSb.j&K#E', 'tibamefe_tgd103g2');

$Username = "";
$name = "";

$errors = array();


    //if user click verification code submit button
//     if(isset($_POST['check'])){
//         $_SESSION['info'] = "";
//         $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
//         $check_code = "SELECT * FROM weeee.Member WHERE code = $otp_code";
//         $code_res = mysqli_query($con, $check_code);
//         if(mysqli_num_rows($code_res) > 0){
//             $fetch_data = mysqli_fetch_assoc($code_res);
//             $fetch_code = $fetch_data['code'];
//             $Username = $fetch_data['Username'];
//             $code = 0;
//             $status = 'verified';
//             $update_otp = "UPDATE weeee.Member SET code = $code, status = '$status' WHERE code = $fetch_code";
//             $update_res = mysqli_query($con, $update_otp);
//             if($update_res){
//                 $_SESSION['name'] = $name;
//                 $_SESSION['Username'] = $Username;
//                 header('location: home.php');
//                 exit();
//             }else{
//                 $errors['otp-error'] = "Failed while updating code!";
//             }
//         }else{
//             $errors['otp-error'] = "You've entered incorrect code!";
//         }
//     }

//     //if user click continue button in forgot password form
//     if(isset($_POST['check-Username'])){
//         $Username = mysqli_real_escape_string($con, $_POST['Username']);
//         $check_Username = "SELECT * FROM weeee.Member WHERE Username='$Username'";
//         $run_sql = mysqli_query($con, $check_Username);
//         if(mysqli_num_rows($run_sql) > 0){
//             $code = rand(999999, 111111);
//             $insert_code = "UPDATE weeee.Member SET code = $code WHERE Username = '$Username'";
//             $run_query =  mysqli_query($con, $insert_code);
//             if($run_query){
//                 $subject = "Password Reset Code";
//                 $message = "Your password reset code is $code";
//                 $sender = "From: shahiprem7890@gmail.com";
//                 if(mail($Username, $subject, $message, $sender)){
//                     $info = "我們已寄送重設密碼的驗證碼至您的信箱 - $Username 驗證碼 $code";
//                     $_SESSION['info'] = $info;
//                     $_SESSION['Username'] = $Username;
//                     header('location: reset-code.php');
//                     exit();
//                 }else{
//                     $errors['otp-error'] = "發生錯誤";
//                 }
//             }else{
//                 $errors['db-error'] = "資料庫資訊有誤";
//             }
//         }else{
//             $errors['Username'] = "您的帳號不存在,請確認您的輸入無誤";
//         }
//     }

//     //if user click check reset otp button
//     if(isset($_POST['check-reset-otp'])){
//         $_SESSION['info'] = "";
//         $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
//         $check_code = "SELECT * FROM weeee.Member WHERE code = $otp_code";
//         $code_res = mysqli_query($con, $check_code);
//         if(mysqli_num_rows($code_res) > 0){
//             $fetch_data = mysqli_fetch_assoc($code_res);
//             $Username = $fetch_data['Username'];
//             $_SESSION['Username'] = $Username;
//             $info = "請輸入您的新密碼";
//             $_SESSION['info'] = $info;
//             header('location: new-password.php');
//             exit();
//         }else{
//             $errors['otp-error'] = "You've entered incorrect code!";
//         }
//     }

//     //if user click change password button
//     if(isset($_POST['change-password'])){
//         $_SESSION['info'] = "";
//         $password = mysqli_real_escape_string($con, $_POST['password']);
//         $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
//         if($password !== $cpassword){
//             $errors['password'] = "Confirm password not matched!";
//         }else{
//             $code = 0;
//             $Username = $_SESSION['Username']; //getting this Username using session
//             $encpass = password_hash($password, PASSWORD_BCRYPT);
//             $update_pass = "UPDATE weeee.Member SET code = $code, password = '$encpass' WHERE Username = '$Username'";
//             $run_query = mysqli_query($con, $update_pass);
//             if($run_query){
//                 $info = "您的密碼已重設成功，請使用新密碼登入";
//                 $_SESSION['info'] = $info;
//                 header('Location: password-changed.php');
//             }else{
//                 $errors['db-error'] = "重設密碼失敗";
//             }
//         }
//     }
    
//    //if login now button click
//     if(isset($_POST['login-now'])){
//         header('location:https://tibamef2e.com/tgd103/g2/frontend/login.html');
        
//     }



    //上線用

        //if user click verification code submit button
        if(isset($_POST['check'])){
            $_SESSION['info'] = "";
            $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
            $check_code = "SELECT * FROM Member WHERE code = $otp_code";
            $code_res = mysqli_query($con, $check_code);
            if(mysqli_num_rows($code_res) > 0){
                $fetch_data = mysqli_fetch_assoc($code_res);
                $fetch_code = $fetch_data['code'];
                $Username = $fetch_data['Username'];
                $code = 0;
                $status = 'verified';
                $update_otp = "UPDATE Member SET code = $code, status = '$status' WHERE code = $fetch_code";
                $update_res = mysqli_query($con, $update_otp);
                if($update_res){
                    $_SESSION['name'] = $name;
                    $_SESSION['Username'] = $Username;
                    header('location: home.php');
                    exit();
                }else{
                    $errors['otp-error'] = "Failed while updating code!";
                }
            }else{
                $errors['otp-error'] = "You've entered incorrect code!";
            }
        }
    
        //if user click continue button in forgot password form
        if(isset($_POST['check-Username'])){
            $Username = mysqli_real_escape_string($con, $_POST['Username']);
            $check_Username = "SELECT * FROM Member WHERE Username='$Username'";
            $run_sql = mysqli_query($con, $check_Username);
            if(mysqli_num_rows($run_sql) > 0){
                $code = rand(999999, 111111);
                $insert_code = "UPDATE Member SET code = $code WHERE Username = '$Username'";
                $run_query =  mysqli_query($con, $insert_code);
                if($run_query){
                    $subject = "Password Reset Code";
                    $message = "Your password reset code is $code";
                    $sender = "From: shahiprem7890@gmail.com";
                    if(mail($Username, $subject, $message, $sender)){
                        $info = "我們已寄送重設密碼的驗證碼至您的信箱 - $Username 驗證碼 $code";
                        $_SESSION['info'] = $info;
                        $_SESSION['Username'] = $Username;
                        header('location: reset-code.php');
                        exit();
                    }else{
                        $errors['otp-error'] = "發生錯誤";
                    }
                }else{
                    $errors['db-error'] = "資料庫資訊有誤";
                }
            }else{
                $errors['Username'] = "您的帳號不存在,請確認您的輸入無誤";
            }
        }
    
        //if user click check reset otp button
        if(isset($_POST['check-reset-otp'])){
            $_SESSION['info'] = "";
            $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
            $check_code = "SELECT * FROM Member WHERE code = $otp_code";
            $code_res = mysqli_query($con, $check_code);
            if(mysqli_num_rows($code_res) > 0){
                $fetch_data = mysqli_fetch_assoc($code_res);
                $Username = $fetch_data['Username'];
                $_SESSION['Username'] = $Username;
                $info = "請輸入您的新密碼";
                $_SESSION['info'] = $info;
                header('location: new-password.php');
                exit();
            }else{
                $errors['otp-error'] = "You've entered incorrect code!";
            }
        }
    
        //if user click change password button
        if(isset($_POST['change-password'])){
            $_SESSION['info'] = "";
            $password = mysqli_real_escape_string($con, $_POST['password']);
            $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
            if($password !== $cpassword){
                $errors['password'] = "Confirm password not matched!";
            }else{
                $code = 0;
                $Username = $_SESSION['Username']; //getting this Username using session
                $encpass = password_hash($password, PASSWORD_BCRYPT);
                $update_pass = "UPDATE Member SET code = $code, password = '$encpass' WHERE Username = '$Username'";
                $run_query = mysqli_query($con, $update_pass);
                if($run_query){
                    $info = "您的密碼已重設成功，請使用新密碼登入";
                    $_SESSION['info'] = $info;
                    header('Location: password-changed.php');
                }else{
                    $errors['db-error'] = "重設密碼失敗";
                }
            }
        }
        
       //if login now button click
        if(isset($_POST['login-now'])){
            // header('location:https://tibamef2e.com/tgd103/g2/frontend/login.html');
            header("Location: ../login.html");
        }
?>