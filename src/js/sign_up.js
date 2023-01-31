var checkEye = document.getElementById("checkEye");
var openPasswords =  document.getElementById("password");
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
var openPasswordag =  document.getElementById("passwordag");
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