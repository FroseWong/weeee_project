const footerCheck = document.querySelector(".footer-mail-check");
const footerInput = document.querySelector(".footer-mail");

emailRule =
  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

footerCheck.addEventListener("click", function () {
  const mail = footerInput.value;

  if (mail.search(emailRule) != -1) {
    alert(`感謝您的訂閱，您的信箱為${mail}`);
    footerInput.value = "";
  } else alert("請輸入正確信箱格式");
});
