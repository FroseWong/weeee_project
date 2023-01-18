"use strict";
// const saysomething__sendBtn = document.querySelector(".saysomething__send");
// const saysomething__content = document.querySelector(".saysomething__content");
// const jo__comment__list = document.querySelector(".jo__comment__list");
// const useweeee = document.querySelector(".useweeee");

// window.addEventListener("resize", function () {
//   if (window.innerWidth <= 768) {
//     let str = ` <div class="product-list">
//   <a href="./productdetail.html" class="product-card">
//   <i class="fa-regular fa-heart"></i>
//   <div class="product-card__location">
//     <i class="fa-solid fa-location-dot"></i>
//     <p class="p__location">桃園</p>
//   </div>
//   <div class="product-card__top">
//     <div class="product-card__top__pic">
//       <div class="product-card__top__picsrc p1"></div>
//     </div>
//   </div>
//   <div class="product-card__bottom">
//     <span class="product-tag">朋友行程</span>
//     <h6 class="product-name">有得逛有得買，就在桃園</h6>
//     <span class="gray"
//       ><i class="fa-solid fa-star"></i>4.4(44325) |
//       <span class="product-bought">590K+</span>個已訂購
//     </span>
//     <span class="price"
//       >TWD <span class="product-price">550</span>元</span
//     >
//   </div>
// </a>
//      </div>`;
//     useweeee.innerHTML = str;
//   } else {
//     console.log("bigger than 768");
//     let str = `<a href="./productdetail.html" class="product-card-row">
//     <div class="product-card-row__left"></div>
//     <div class="product-card-row__right">
//       <div class="product-name">
//         桃園青埔 | Xpark 都會型水生公園門票
//       </div>
//       <div class="product-tag">水族館</div>
//       <div class="product__text">
//         Xpark 於 2022 年初推行大型企劃『Xbook~流向我們的
//         物語』,透過五官享受海底之書的魅力!加碼推出兒童節限定「Xpark
//         童樂套票」
//       </div>

//       <span class="gray"
//         ><i class="fa-solid fa-star"></i>4.4(44325) |
//         <span class="product-bought">590K+</span>個已訂購
//       </span>
//       <span class="price"
//         >TWD <span class="product-price">550</span>元</span
//       >
//     </div>
//   </a>`;
//     useweeee.innerHTML = str;
//   }
// });

// $(".contact-leader").on("click", function () {
//   // console.log("hi");
//   $(".contact-detail").toggle(1000);
// });

// saysomething__sendBtn.addEventListener("click", function () {
//   if (saysomething__content.value !== "") {
//     let str = `<div class="jo__comment">
// <div class="jo__comment__left">
//   ${saysomething__content.value}
// </div>
// <div class="jo__comment__right">
//   <div class="mamber-img"></div>
//   <div class="member-name">Emily</div>
//   <div class="member-leavetime">2022/12/11</div>
// </div>
// </div>`;
//     //   console.log(saysomething__content.value);
//     // console.log(str);
//     jo__comment__list.insertAdjacentHTML("beforeend", str);
//     saysomething__content.value = "";
//     let joCommentAll = document.querySelectorAll(".jo__comment");
//     joCommentAll[joCommentAll.length - 1].scrollIntoView({
//       behavior: "smooth",
//     });

//     console.log(joCommentAll[joCommentAll.length - 1]);
//     console.log(joCommentAll.length - 1);
//   }
// });

const app = Vue.createApp({
  data() {
    return {
      test: "123",
      useweeee: "1",
      id: "",
      JoDetailedAddressed: "",
      JoImg: "",
      JoStartDate: "",
      JoStartTime: "",
      JoTitle: "",
      Location: "",
      MemberID: "",
      MemberImg: "",
      week: "",
      JoContent: "",
      JoAttend: "",
      JoContact: "",
      JoUseWeeee: "",
      JoProductID: "",
      JoContent: "",
      JoCommentArr: [],
    };
  },
  mounted() {
    this.getjoid();
    this.getdata_jo_list();
  },
  methods: {
    contactLeader() {
      $(".contact-detail").toggle(1000);
    },
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
    saysomething() {
      // console.log(this.$refs.saysomething__content.value);
      if (this.$refs.saysomething__content.value !== "") {
        let str = `<div class="jo__comment">
        <div class="jo__comment__left">
          ${this.$refs.saysomething__content.value}
        </div>
        <div class="jo__comment__right">
          <div class="mamber-img"></div>
          <div class="member-name">Emily</div>
          <div class="member-leavetime">2022/12/11</div>
        </div>
        </div>`;

        this.$refs.jo__comment__list.insertAdjacentHTML("beforeend", str);
        this.$refs.saysomething__content.value = "";
        let joCommentAll = document.querySelectorAll(".jo__comment");
        joCommentAll[joCommentAll.length - 1].scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    getjoid() {
      let urlParams = new URLSearchParams(window.location.search);
      this.id = urlParams.get("id");
    },
    getdata_jo_list() {
      // this.jo_list_end = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/jo_detail.php",
        data: {
          // type: "end",
          id: this.id,
        },
        dataType: "json",
        success: function (response) {
          // console.log(response);
          // console.log(response.length);
          console.log(response[0]);
          that.JoTitle = response[0].JoTitle;
          that.JoImg = response[0].JoImg;
          that.JoContent = response[0].JoContent;
          that.JoStartDate = response[0].JoStartDate.split(" ")[0]
            .split("-")
            .join("/");
          that.JoStartTime = response[0].JoStartDate.split(" ")[1].slice(0, 5);
          that.Location = response[0].Location;
          that.JoDetailedAddressed = response[0].JoDetailedAddressed;
          that.JoAttend = response[0].JoAttend;
          that.JoContact = response[0].JoContact;
          that.JoUseWeeee = response[0].JoUseWeeee;
          that.JoProductID = response[0].ProductID;
          that.JoContent = response[0].JoContent;
          console.log(that.JoProductID);
          // for (let i = 0; i < response.length; i++) {
          //   let content = {
          //     JoCommentContent: response[i].JoCommentContent,
          //     MemberImg: response[i].MemberImg,
          //     FullName: response[i].FullName,
          //     JoCommentTime: response[i].JoCommentTime.split("-").join("/"),
          //   };

          //   that.JoCommentArr.push(content);
          // }
          // console.log(that.JoCommentArr);
          // response.forEach((element) => {
          //   that.jo_list_end.push(element);
          // });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
  },
});
app.mount(".jo_detail");
