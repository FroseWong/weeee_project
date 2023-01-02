"use strict";
const saysomething__sendBtn = document.querySelector(".saysomething__send");
const saysomething__content = document.querySelector(".saysomething__content");
const jo__comment__list = document.querySelector(".jo__comment__list");
const useweeee = document.querySelector(".useweeee");

if (window.innerWidth <= 768) {
  let str = ` <div class="product-list">
  <a class="product-card" >
             <i class="fa-regular fa-heart"></i>
             <div class="product-card__location">
               <i class="fa-solid fa-location-dot"></i>
               <p class="p__location">桃園</p>
             </div>
             <div class="product-card__top">
               <div class="product-card__top__pic" >
                 <img src="./img/jo/jo_aquarium.jpg" alt="" />
               </div>
             </div>
             <div class="product-card__bottom">
               <span class="product-tag">水族館</span>
               <h6 class="product-name">桃園青埔 | Xpark 都會型水生公園門票</h6>
               <span class="gray"
                 ><i class="fa-solid fa-star"></i>4.4(44325) |
                 <span class="product-bought">590K+</span>個已訂購
               </span>
               <span class="price"
                 >TWD <span class="product-price">550</span>元</span
               >
             </div>
           </a>
     </div>`;
  useweeee.innerHTML = str;
}

$(".contact-leader").on("click", function () {
  console.log("hi");

  $(".contact-detail").toggle(1000);
});

saysomething__sendBtn.addEventListener("click", function () {
  if (saysomething__content.value !== "") {
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
    // console.log(str);
    jo__comment__list.insertAdjacentHTML("beforeend", str);
    saysomething__content.value = "";
    let joCommentAll = document.querySelectorAll(".jo__comment");
    joCommentAll[joCommentAll.length - 1].scrollIntoView({
      behavior: "smooth",
    });

    console.log(joCommentAll[joCommentAll.length - 1]);
    console.log(joCommentAll.length - 1);
  }
});
