<?php 
session_start();
//本機用
$con = mysqli_connect('127.0.0.1', 'root', 'zero8855', 'weeee');
//上線用
// $con = mysqli_connect('127.0.0.1', 'tibamefe_since2021', 'vwRBSb.j&K#E', 'tibamefe_tgd103g2');

$Username = "";
$name = "";

$errors = array();

//if user signup button
// if(isset($_POST['signup'])){
//     // $name = mysqli_real_escape_string($con, $_POST['name']);
//     $Username = mysqli_real_escape_string($con, $_POST['Username']);
//     $password = mysqli_real_escape_string($con, $_POST['password']);
//     $cpassword = mysqli_real_escape_string($con, $_POST['cpassword']);
//     if($password !== $cpassword){
//         $errors['password'] = "Confirm password not matched!";
//     }
//     $Username_check = "SELECT * FROM weeee.Member WHERE Username = '$Username'";
//     $res = mysqli_query($con, $Username_check);
//     if(mysqli_num_rows($res) > 0){
//         $errors['Username'] = "Username that you have entered is already exist!";
//     }
//     if(count($errors) === 0){
//         $encpass = password_hash($password, PASSWORD_BCRYPT);
//         $code = rand(999999, 111111);
//         $status = "notverified";
//         $insert_data = "INSERT INTO weeee.Member (Username, password, code, status)
//                         values('$Username', '$encpass', '$code', '$status')";
//         $data_check = mysqli_query($con, $insert_data);
//         if($data_check){
//             $subject = "Username Verification Code";
//             $message = "Your verification code is $code";
//             $sender = "From: shahiprem7890@gmail.com";
//             if(mail($Username, $subject, $message, $sender)){
//                 $info = "We've sent a verification code to your Username - $Username";
//                 $_SESSION['info'] = $info;
//                 $_SESSION['Username'] = $Username;
//                 $_SESSION['password'] = $password;
//                 header('location: user-otp.php');
//                 exit();
//             }else{
//                 $errors['otp-error'] = "Failed while sending code!";
//             }
//         }else{
//             $errors['db-error'] = "Failed while inserting data into database!";
//         }
//     }

// }
    //if user click verification code submit button
    if(isset($_POST['check'])){
        $_SESSION['info'] = "";
        $otp_code = mysqli_real_escape_string($con, $_POST['otp']);
        $check_code = "SELECT * FROM weeee.Member WHERE code = $otp_code";
        $code_res = mysqli_query($con, $check_code);
        if(mysqli_num_rows($code_res) > 0){
            $fetch_data = mysqli_fetch_assoc($code_res);
            $fetch_code = $fetch_data['code'];
            $Username = $fetch_data['Username'];
            $code = 0;
            $status = 'verified';
            $update_otp = "UPDATE weeee.Member SET code = $code, status = '$status' WHERE code = $fetch_code";
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

    // //if user click login button
    // if(isset($_POST['login'])){
    //     $Username = mysqli_real_escape_string($con, $_POST['Username']);
    //     $password = mysqli_real_escape_string($con, $_POST['password']);
    //     $check_Username = "SELECT * FROM weeee.Member WHERE Username = '$Username'";
    //     $res = mysqli_query($con, $check_Username);
    //     if(mysqli_num_rows($res) > 0){
    //         $fetch = mysqli_fetch_assoc($res);
    //         $fetch_pass = $fetch['password'];
    //         if(password_verify($password, $fetch_pass)){
    //             $_SESSION['Username'] = $Username;
    //             $status = $fetch['status'];
    //             if($status == 'verified'){
    //               $_SESSION['Username'] = $Username;
    //               $_SESSION['password'] = $password;
    //                 header('location: home.php');
    //             }else{
    //                 $info = "It's look like you haven't still verify your Username - $Username";
    //                 $_SESSION['info'] = $info;
    //                 header('location: user-otp.php');
    //             }
    //         }else{
    //             $errors['Username'] = "Incorrect Username or password!";
    //         }
    //     }else{
    //         $errors['Username'] = "It's look like you're not yet a member! Click on the bottom link to signup.";
    //     }
    // }

    //if user click continue button in forgot password form
    if(isset($_POST['check-Username'])){
        $Username = mysqli_real_escape_string($con, $_POST['Username']);
        $check_Username = "SELECT * FROM weeee.Member WHERE Username='$Username'";
        $run_sql = mysqli_query($con, $check_Username);
        if(mysqli_num_rows($run_sql) > 0){
            $code = rand(999999, 111111);
            $insert_code = "UPDATE weeee.Member SET code = $code WHERE Username = '$Username'";
            $run_query =  mysqli_query($con, $insert_code);
            if($run_query){
                $subject = "Password Reset Code";
                $message = "Your password reset code is $code";
                $sender = "From: shahiprem7890@gmail.com";
                if(mail($Username, $subject, $message, $sender)){
                    $info = "我們已寄送重設密碼的驗證碼至您的信箱 - $Username";
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
        $check_code = "SELECT * FROM weeee.Member WHERE code = $otp_code";
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
            $update_pass = "UPDATE weeee.Member SET code = $code, password = '$encpass' WHERE Username = '$Username'";
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
        header('location:https://tibamef2e.com/tgd103/g2/frontend/login.html');
    }
?>