const AM_I_LOGIN = sessionStorage.getItem("MemberID");
if (AM_I_LOGIN) {
  location.replace("../index.html");
}
// ################################################################

//                  登入、sessionStorage.setItem
// ################################################################
(() => {
  // 取欄位值
  
  // 1. 綁定 id="login_btn" 登入功能
  document.getElementById("login_btn").addEventListener("click", () => {

    const Username = document.querySelector('#Username').value; // 信箱 輸入欄
    const Password = document.querySelector('#Password').value; // 密碼 輸入欄
    //const errMsg = document.querySelector("#error"); // 錯誤訊息欄
 

    fetch("../php/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Username: Username.value,
        Password: Password.value,
        
      }),
      
    })
   
      .then((resp) => resp.json()) // 取得後
      .then((body) => {
        errMsg.textContent = "";
        const { successful, message } = body;
        if (successful) {
          // true 就送 SESSION 到 使用者Cookie
          const { MemberID} = body;
          sessionStorage.setItem("MemberID", MemberID);
        } else {
          // 失敗將收到的錯誤訊息寫進 HTML
          //errMsg.textContent = message;
        }
      });
  });
})();