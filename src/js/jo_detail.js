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
//   <div class="member-img"></div>
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
      MemberImg: "",
      week: "",
      JoContent: "",
      JoAttend: "",
      JoContact: "",
      JoUseWeeee: "",
      JoProductID: "",
      JoContent: "",
      JoCommentArr: [],
      FullName: "",
      product: "",
      currentMemberID: "",
      currentComment: "",
      currentJoCommentTime: "",
      currentFullName: "",
      memberID: "", // Frose
      favorProductList: [], // Frose
    };
  },
  updated() {
    // this.getdata_product_list();
  },
  created() {
    // this.memberID = header.memberID;
    this.get_member_information();
  },
  mounted() {
    this.getjoid();
    this.getdata_jo_list();
    this.getdata_jo_comment();
  },
  methods: {
    get_member_information() {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/headerGetmember.php",
        async: false,
        data: {
          // memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          // console.log("success");
          // console.log(response);
          // console.log(this.data);
          // console.log(response[0]);
          // that.headercounter = response[0].COUNT;
          that.memberID = response[0].MemberID;
          that.currentFullName = response[0].FullName;
          that.headerMemberImg = response[0].MemberImg;
          that.headercounter = response[0]["count(*)"] ?? 0;

          that?.$nextTick(function () {
            if (that.memberID) that.renderHeart();
            // if (that.memberID) that.memberInterest();
            // if (that.memberID) that.renderHeart();
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    contactLeader() {
      if (this.memberID) {
        $(".contact-detail").toggle(1000);
      } else {
        alert("請先完成登入");
        location.href = "./login.html";
      }
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
      if (this.memberID) {
        if (this.$refs.saysomething__content.value.trim() !== "") {
          const date = new Date();
          let that = this;
          $.ajax({
            method: "POST",
            url: "./php/jo_detail_addcomment.php",
            data: {
              memberid: that.memberID,
              joID: that.id,
              comment: that.$refs.saysomething__content.value,
              JoCommentTime: `${date.getFullYear()}-${
                date.getMonth() + 1
              }-${date.getDate()}`,
            },
            dataType: "json",
            success: function (response) {
              // console.log(response);
              that.currentFullName = response[0].FullName;
              // console.log(that.currentFullName);
              // console.log(this.data.split("&"));
              for (let i = 0; i < this.data.split("&").length; i++) {
                if (this.data.split("&")[i].includes("memberid")) {
                  // console.log(this.data.split("&")[i]);
                  // console.log(this.data.split("&")[i].indexOf("="));

                  that.currentMemberID = this.data
                    .split("&")
                    [i].slice(this.data.split("&")[i].indexOf("=") + 1);
                  // console.log(that.currentMemberID);
                } else if (this.data.split("&")[i].includes("JoCommentTime")) {
                  // console.log(this.data.split("&")[i]);
                  // console.log(this.data.split("&")[i].indexOf("="));
                  let timeArr = this.data
                    .split("&")
                    [i].slice(this.data.split("&")[i].indexOf("=") + 1)
                    .split("-");
                  // console.log(timeArr);
                  for (let i = 0; i < timeArr.length; i++) {
                    if (timeArr[i].length < 2) timeArr[i] = `0${timeArr[i]}`;
                  }
                  // console.log(timeArr);
                  that.currentJoCommentTime = timeArr.join("/");
                  // console.log(that.currentJoCommentTime);
                  // that.currentMemberID = this.data
                  //   .split("&")
                  //   [i].slice(this.data.split("&")[i].indexOf("=") + 1);
                  // console.log(that.currentMemberID);
                }
              }
              // console.log(response[0].MemberImg);
              let bgi = `${response[0].MemberImg}`;
              let str = `<div class="jo__comment">
            <div class="jo__comment__left">
              ${that.$refs.saysomething__content.value}
            </div>
            <div class="jo__comment__right">
              <div class="member-img"></div>
              <div class="member-name">${that.currentFullName}</div>
              <div class="member-leavetime">${that.currentJoCommentTime}</div>
            </div>
            </div>`;

              that.$refs.jo__comment__list.insertAdjacentHTML("beforeend", str);
              that.$refs.saysomething__content.value = "";
              const memberImgAll = document.querySelectorAll(".member-img");
              // console.log(memberImgAll.length);
              memberImgAll[
                memberImgAll.length - 1
              ].style.backgroundImage = `url('${bgi}')`;
              let joCommentAll = document.querySelectorAll(".jo__comment");
              joCommentAll[joCommentAll.length - 1].scrollIntoView({
                behavior: "smooth",
              });
            },
            error: function (exception) {
              alert("數據載入失敗: " + exception.status);
            },
          });
        }
      } else {
        alert("請先完成登入");
        location.href = "./login.html";
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
        async: false,
        data: {
          // type: "end",
          id: this.id,
        },
        dataType: "json",
        success: function (response) {
          if (response.length != 0) {
            // console.log(response.length);
            // console.log(response[0]);
            that.JoTitle = response[0].JoTitle;
            that.JoImg = response[0].JoImg;
            that.JoContent = response[0].JoContent;
            that.JoStartDate = response[0].JoStartDate.split(" ")[0]
              .split("-")
              .join("/");
            that.JoStartTime = response[0].JoStartDate.split(" ")[1].slice(
              0,
              5
            );
            that.Location = response[0].Location;
            that.JoDetailedAddressed = response[0].JoDetailedAddressed;
            that.JoAttend = response[0].JoAttend;
            that.JoContact = response[0].JoContact;
            that.JoUseWeeee =
              response[0].JoUseWeeee === "0" ? false : response[0].JoUseWeeee;
            that.JoProductID = response[0].ProductID;
            that.JoContent = response[0].JoContent;
            that.FullName = response[0].FullName;
            that.week = response[0].week;
            that.MemberImg = response[0].MemberImg;

            that?.$nextTick(function () {
              that?.getdata_product_list();
            });
          } else {
            alert("無此揪團");
            history.back();
          }
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    getdata_jo_comment() {
      // this.jo_list_end = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/jo_detail_showcomment.php",
        data: {
          // type: "end",
          id: this.id,
        },
        dataType: "json",
        success: function (response) {
          // console.log("response", response);
          // console.log(response.length);
          for (let i = 0; i < response.length; i++) {
            let currentComment = {
              FullName: response[i].FullName,
              JoCommentContent: response[i].JoCommentContent,
              JoCommentTime: response[i].JoCommentTime.split("-").join("/"),
              MemberImg: response[i].MemberImg,
            };
            // console.log(currentComment);
            that.JoCommentArr.push(currentComment);
            // console.log(that.JoCommentArr);
          }
          // console.log(that.JoCommentArr);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },

    getdata_product_list() {
      // this.jo_list_hot = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/Product.php",
        async: false,
        data: {
          // id: that.JoProductID,
        },

        dataType: "json",
        success: function (response) {
          // console.log(response);
          // console.log(that.JoProductID);
          response.forEach((p) => {
            // console.log(p);
            if (p.ProductID === that.JoProductID) that.product = p;
          });
          // console.log(that.product);
          if (that.product.ProductText?.length >= 80) {
            that.product.ProductText =
              that.product.ProductText.slice(0, 80) + "……";
          }
          // console.log(response);
          //   response.forEach((product) => {
          //     if (product.ProductType === "sightseeing")
          //       that.sightseeingList.push(product);
          //   });
          //   // console.log(that.sightseeingList);
          //   that.sightseeingList.forEach((s) => {
          //     if (that.useweeee === s.ProductName) that.targettravel = s;
          //   });
          //   that.targettravelID = that.targettravel.ProductID;
          //   // console.log(that.targettravelID);
          //
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
          // console.log(response);
        },
        error: function (exception) {
          // alert("數據載入失敗: " + exception.status);
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
  },
});
app.mount(".jo_detail");
