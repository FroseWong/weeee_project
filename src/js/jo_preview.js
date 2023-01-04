"use strict";
const saysomething__sendBtn = document.querySelector(".saysomething__send");
const saysomething__content = document.querySelector(".saysomething__content");
const jo__comment__list = document.querySelector(".jo__comment__list");
const useweeee = document.querySelector(".useweeee");
const joAddImg = document.querySelector(".jo_new__addimg");

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
  // console.log("hi");

  $(".contact-detail").toggle(1000);
});

if (sessionStorage.getItem("joNew")) {
  let {
    joTitle,
    joContent,
    joContact,
    joLocation,
    joDetailAddress,
    joNumber,
    joStartDate,
    joStartTime,
    useweeee,
    img,
  } = JSON.parse(sessionStorage.getItem("joNew"));

  // joTitleInput.value = joTitle;
  // joContentInput.value = joContent;
  // joContactInput.value = joContact;
  // joLocationInput.value = joLocation;
  // joDetailAddressInput.value = joDetailAddress;
  // joNumberInput.value = joNumber;
  // joStartDateInput.value = joStartDate;
  // joStartTimeInput.value = joStartTime;
  // useweeeeInput.value = useweeee;

  if (img) {
    let li_html = `
  <div class="img-space">
              <img src="${img}" class="preview">
              <div class="delete">
      <i class="fa-solid fa-xmark"></i>
    </div>
    </div>`;

    joAddImg.innerHTML = li_html;
    deleteInit();
  }
}
