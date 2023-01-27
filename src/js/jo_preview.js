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
const attendP = document.querySelector(".attend");
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
  joAttend,
  joStartDate,
  joStartTime,
  useweeee,
  img,
  imgName,
} = JSON.parse(sessionStorage.getItem("joNew"));

// console.log(joTitle);

joTitleP.textContent = joTitle;
joContentP.textContent = joContent;
dateAndTimeP.textContent = `${joStartDate} ${joStartTime}`;
locationP.textContent = joLocation;
detailAddressP.textContent = joDetailAddress;
attendP.textContent = joAttend;
contactP.textContent = joContact;
// joContactInput.value = joContact;
// joLocationInput.value = joLocation;
// joDetailAddressInput.value = joDetailAddress;
// joAttendInput.value = joAttend;
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
      test: "123",
      joTitle: "",
      joContent: "",
      joContact: "",
      joLocation: "",
      joDetailAddress: "",
      joAttend: "",
      joStartDate: "",
      joStartTime: "",
      useweeee: "",
      img: "",
      sightseeingList: [],
      targettravel: "",
      targettravelID: "",
      imgName: "",
      JoUseWeeee: "",
      headerFullName: "",
      headerMemberImg: "",
      memberID: "", // Frose
      favorProductList: [], // Frose
    };
  },
  created() {
    this.useweeee = useweeee;
    this.joTitle = joTitle;
    this.joContent = joContent;
    this.joContact = joContact;
    this.joLocation = joLocation;
    this.joDetailAddress = joDetailAddress;
    this.joAttend = joAttend;
    this.joStartDate = joStartDate;
    this.joStartTime = joStartTime;
    this.img = img;
    this.imgName = imgName;
    this.memberID = header.memberID; // Frose
    this.getdata_product_list();
  },
  mounted() {},
  updated() {
    document.querySelector(
      ".product-card-row__picsrc"
    ).style.backgroundImage = `url('${this.targettravel.ProductImgPath1}')`;
  },
  methods: {
    changeHeart(e) {
      // console.log("hi");
      // console.log(this.$refs.hollow);
      // e.stopPropagation();
      // let a = e.target;
      // let b = e.target.nextElementSibling
      //   ? e.target.nextElementSibling
      //   : e.target.previousElementSibling;
      // a.classList.add("hidden");
      // b.classList.remove("hidden");
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
        data: {},

        dataType: "json",
        success: function (response) {
          // console.log(response);

          // 取得所有觀光行程商品放到array中
          response.forEach((product) => {
            if (product.ProductType === "sightseeing")
              that.sightseeingList.push(product);
          });
          // console.log(that.sightseeingList);

          // 一一比對使用者所選的商品是哪個
          that.sightseeingList.forEach((s) => {
            if (that.useweeee === s.ProductName) that.targettravel = s;
          });

          // 確認that.targettravel是否存在，如果存在給1，不存在給0
          that.JoUseWeeee = that.targettravel ? 1 : 0;

          // console.log(that.targettravelID);
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
          joTitle: this.joTitle,
          joContent: this.joContent,
          joContact: this.joContact,
          joLocation: this.joLocation,
          joDetailAddress: this.joDetailAddress,
          joAttend: this.joAttend,
          joStartDate: this.joStartDate,
          joStartTime: this.joStartTime,
          JoUseWeeee: this.JoUseWeeee,
          targettravelID: this.targettravelID,
          img: this.img,
          imgName: this.imgName,
        },

        dataType: "json",
        success: function (response) {
          console.log(response);
          const id = response[0]["0"];
          console.log(id);
          location.href = "jo_detail.html?id=" + id;
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    clickHeart(pid, e) {
      e.stopPropagation();
      // console.log(e);
      // console.log(e.target.closest(".change-heart"));
      // console.log(e.target.closest(".change-heart"));
      // console.log(pid, e);
      // 如果已登入，給予click之後更換愛心的事件
      if (this.memberID) {
        e.target.closest(".change-heart").classList.toggle("clicked");
      } else {
        alert("請先完成登入");
        location.href = "./login.html";
      }

      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/index_clickHeart.php",
        data: {
          memberID: that.memberID,
          pid,
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
    renderHeart() {
      // this.jo_list_end = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/index_renderHeart.php",
        data: {
          memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          // console.log("renderHeart", response);
          // console.log(response);
          response.forEach((p) => that.favorProductList.push(p.ProductID));

          // console.log(that.favorProductList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    gotoproductDetail(id) {
      // e.preventDefault();
      location.href = `./productdetail.html?id=${id}`;
    },
    contactLeader() {
      if (this.memberID) {
        $(".contact-detail").toggle(1000);
      } else {
        alert("請先完成登入");
        location.href = "./login.html";
      }
    },
  },
  mounted() {
    $(".contact-leader").on("click", function () {
      $(".contact-detail").toggle(1000);
    });
    this.renderHeart();
  },
  updated() {
    this.headerFullName = header.headerFullName;
    this.headerMemberImg = header.headerMemberImg;
  },
});

app.mount(".jo_preview");
