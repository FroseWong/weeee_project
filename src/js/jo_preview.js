"use strict";

const saysomething__sendBtn = document.querySelector(".saysomething__send");
const saysomething__content = document.querySelector(".saysomething__content");
const jo__comment__list = document.querySelector(".jo__comment__list");
const useweeeeP = document.querySelector(".useweeee");
const joAddImg = document.querySelector(".jo_new__addimg");
const joTitleP = document.querySelector(".jo__title");
const joContentP = document.querySelector(".jo__content");
const dateAndTimeP = document.querySelector(".date_and_time");
const locationP = document.querySelector(".location");
const detailAddressP = document.querySelector(".detailAddress");
const numberP = document.querySelector(".number");
const contactP = document.querySelector(".contact");

// console.log(numberP);
// console.log(contactP);
// console.log(joContentP);

// if (window.innerWidth <= 768) {
//   let str = ` <div class="product-list">
//     <a class="product-card" >
//                <i class="fa-regular fa-heart"></i>
//                <div class="product-card__location">
//                  <i class="fa-solid fa-location-dot"></i>
//                  <p class="p__location">桃園</p>
//                </div>
//                <div class="product-card__top">
//                  <div class="product-card__top__pic" >
//                    <img src="./img/jo/jo_aquarium.jpg" alt="" />
//                  </div>
//                </div>
//                <div class="product-card__bottom">
//                  <span class="product-tag">水族館</span>
//                  <h6 class="product-name">桃園青埔 | Xpark 都會型水生公園門票</h6>
//                  <span class="gray"
//                    ><i class="fa-solid fa-star"></i>4.4(44325) |
//                    <span class="product-bought">590K+</span>個已訂購
//                  </span>
//                  <span class="price"
//                    >TWD <span class="product-price">550</span>元</span
//                  >
//                </div>
//              </a>
//        </div>`;
//   useweeeeP.innerHTML = str;
// }

// if (sessionStorage.getItem("joNew")) {
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

// console.log(joTitle);

joTitleP.textContent = joTitle;
joContentP.textContent = joContent;
dateAndTimeP.textContent = `${joStartDate} ${joStartTime}`;
locationP.textContent = joLocation;
detailAddressP.textContent = joDetailAddress;
numberP.textContent = joNumber;
contactP.textContent = joContact;
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
    </div>
    `;

  joAddImg.innerHTML = li_html;
}
// }

let app = Vue.createApp({
  data() {
    return {
      joTitle: "",
      joContent: "",
      joContact: "",
      joLocation: "",
      joDetailAddress: "",
      joNumber: "",
      joStartDate: "",
      joStartTime: "",
      useweeee: "",
      img: "",
      sightseeingList: [],
      targettravel: "",
    };
  },
  created() {
    this.useweeee = useweeee;
    this.joTitle = joTitle;
    this.joContent = joContent;
    this.joContact = joContact;
    this.joLocation = joLocation;
    this.joDetailAddress = joDetailAddress;
    this.joNumber = joNumber;
    console.log(this.joNumber);
    this.getdata_product_list();
  },
  mounted() {},
  updated() {
    document.querySelector(
      ".product-card-row__picsrc"
    ).style.backgroundImage = `url('${this.targettravel.ProductImgPath}')`;
  },
  methods: {
    changeHeart(e) {
      // console.log("hi");
      // console.log(this.$refs.hollow);
      e.stopPropagation();
      let a = e.target;
      let b = e.target.nextElementSibling
        ? e.target.nextElementSibling
        : e.target.previousElementSibling;
      a.classList.add("hidden");
      b.classList.remove("hidden");
      // a.classList.add("hidden");
      // b.nextElementSibling.remove("hidden");
      // console.log(e.target.closest("div"));
      // console.log(e.target.closest("div").queryselectorAll("i"));
      // this.$refs.hollow.classList.add("hidden");
    },
    getdata_product_list() {
      // this.jo_list_hot = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/Product.php",
        data: {
          // type: "hot",
        },

        dataType: "json",
        success: function (response) {
          // console.log(response);
          response.forEach((product) => {
            if (product.ProductType === "sightseeing")
              that.sightseeingList.push(product);
          });
          // console.log(that.sightseeingList);
          that.sightseeingList.forEach((s) => {
            if (that.useweeee === s.ProductName) that.targettravel = s;
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    completePreview(e) {
      e.preventDefault();
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/jo_preview.php",
        data: {
          try: "try!",
        },

        dataType: "json",
        success: function (response) {
          console.log(response);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
  },
  mounted() {
    $(".contact-leader").on("click", function () {
      $(".contact-detail").toggle(1000);
    });
  },
});

app.mount(".jo_preview");
