const usernameInput = document.querySelector("#Username");
const passwordInput = document.querySelector("#password");


var checkEye = document.getElementById("checkEye");
var openPasswords =  document.getElementById("openPasswords");
checkEye.addEventListener("click", function(e){
  if(e.target.classList.contains('fa-eye')){
    e.target.classList.remove('fa-eye');
    e.target.classList.add('fa-eye-slash');
    openPasswords.setAttribute('type','text')
  }else{
    openPasswords.setAttribute('type','password');
    e.target.classList.remove('fa-eye-slash');
    e.target.classList.add('fa-eye')
  }
});
var checkEyeag = document.getElementById("checkEyeag");
var openPasswordag =  document.getElementById("openPasswordag");
checkEyeag.addEventListener("click", function(e){
  if(e.target.classList.contains('fa-eye')){
    e.target.classList.remove('fa-eye');
    e.target.classList.add('fa-eye-slash');
    openPasswordag.setAttribute('type','text')
  }else{
    openPasswordag.setAttribute('type','password');
    e.target.classList.remove('fa-eye-slash');
    e.target.classList.add('fa-eye')
  }
});
// function doSubmit() {
//   if (document.getElementById("Username").value == "") {
//     alert("請填寫[帳號]");
//     return false;
//   }
//   if (document.getElementById("password").value == "") {
//     alert("請填寫[密碼]");
//     return false;
//   }

//   //AJAX送出表單內容
//   $.ajax({
//     method: "POST",
//     url: "../php/login.php",
//     data: {
//       Username: $("#Username").val(),
//       Password: $("#Password").val(),
//     },
//     dataType: "text",
//     success: function (response) {
//       if (response == "Y") {
//         //登入成功->導回產品頁
//         alert("登入成功");
//         location.href = "./index.html";
//       } else {
//         // i;
//         alert("帳號或密碼錯誤");
//       }
//     },
//     error: function (exception) {
//       alert("發生錯誤: " + exception.status);
//     },
//   });
// }

usernameInput.addEventListener("keyup", function (e) {
  //   console.log(e.which);

  if (e.which === 13) doSubmit();
});

passwordInput.addEventListener("keyup", function (e) {
  //   console.log(e.which);

  if (e.which === 13) doSubmit();
});
