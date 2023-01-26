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




// const app = Vue.createApp({
//   data(){
//     return {
     
//     }
//   },
//   methods:{
    
//     openandcloseEyes(e){
//       // console.log(e.target);
//       console.log(this.$refs.passwordInput.value);
//       if(e.target.classList.contains('fa-eye')){
//         e.target.classList.remove('fa-eye');
//         e.target.classList.add('fa-eye-slash');
//         e.target.previousElementSibling.setAttribute('type','text')
//       }
//       else{
//         e.target.previousElementSibling.setAttribute('type','password');
//         e.target.classList.remove('fa-eye-slash');
//         e.target.classList.add('fa-eye')
//     }
//     },



   
//   }, 
//   mounted(){

//   },
//   updated(){},
// });

// app.mount('#app');

    
    