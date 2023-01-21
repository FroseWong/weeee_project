//明暗碼切換

const checkEye = document.getElementById("checkEye");
const openPasswords =  document.getElementById("openPasswords");
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



//確認登入狀態
// const AM_I_LOGIN = sessionStorage.getItem("MEMBER_ID");
// if (AM_I_LOGIN) {
//   location.replace("../index.html");
// }

// const signup_name = document.querySelector("#name");
// const signup_email = document.querySelector("#email");
// const signup_pwd = document.querySelector("#pwd");
// const signup_pwdag = document.querySelector("#pwdag");
// const register = document.querySelector("#signin_submit");

// register.addEventListener("click", () => {
//   let error_msg = "";

//   // 姓名不能空
//   if ($("#name").val() == "") {
//     error_msg = error_msg + "姓名、";
//   }

//   // 信箱 錯誤警告
//   if (!$("#email").val()) {
//     error_msg = error_msg + "Email錯誤、";
//   }

//   // 密碼 錯誤警告
//   if (!$("#pwd").val()) {
//     error_msg = error_msg + "密碼錯誤";
//   }

//   // 無誤後送出
//   if (error_msg == "") {
//     fetch("../php/sign_up.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         signup_name: signup_name.value,
//         signup_email: signup_email.value,
//         signup_phone: signup_pwd.value,
//         signup_pwd: signup_pwdag.value,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((body) => {
//         // console.log(body);
//         if (body.successful) {
//           // successful 就送 SESSION 到 使用者Cookie
//           const { MEMBER_ID } = body;
//           sessionStorage.setItem("MEMBER_ID", MEMBER_ID);

//           if (sessionStorage.getItem("MEMBER_ID")) {
//             location = "../account_setting.html";
//           }
//         }
//       });
//   } else {
//     $("#error").html(error_msg + "，請再次確認");
//   }
// });

const app = Vue.createApp({
  data(){
    return {
      test:'123',
    }
  },
  methods:{
    openandcloseEyes(e){
      // console.log(e.target);
      console.log(this.$refs.passwordInput.value);
      if(e.target.classList.contains('fa-eye')){
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash');
        e.target.previousElementSibling.setAttribute('type','text')
      }
      else{
        e.target.previousElementSibling.setAttribute('type','password');
        e.target.classList.remove('fa-eye-slash');
        e.target.classList.add('fa-eye')
    }
    },
    test1(){
      console.log('test');
    }
   
  }, 
  mounted(){
   this.test1();
  },
  updated(){},
});

app.mount('#app');