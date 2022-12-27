"use strict";

const saysomething__sendBtn = document.querySelector(".saysomething__send");
const saysomething__content = document.querySelector(".saysomething__content");
const jo__comment__list = document.querySelector(".jo__comment__list");

$(".contact-leader").on("click", function () {
  console.log("hi");

  $(".contact-detail").toggle(1000);
});

saysomething__sendBtn.addEventListener("click", function () {
  let str = `<div class="jo__comment">
<div class="jo__comment__left">
  ${saysomething__content.value}
</div>
<div class="jo__comment__right">
  <div class="mamber-img"></div>
  <div class="member-name">Emily</div>
  <div class="member-leavetime">2022/12/11</div>
</div>
</div>`;
  //   console.log(saysomething__content.value);
  console.log(str);
  jo__comment__list.insertAdjacentHTML("beforeend", str);
  saysomething__content.value = "";
});
