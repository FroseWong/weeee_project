"use strict";

// const heartAll = document.querySelectorAll(".fa-heart");
const productAll = document.querySelectorAll(".product-card");
const popularCountryAll = document.querySelectorAll(".popular-country");
// const changeHeartAll = document.querySelectorAll(".change-heart");
let status = true;
const mouseenterFu = function () {
  popularCountryAll.forEach((a) => a.classList.remove("active"));
  this.classList.add("active");
};

const popularRWD = function () {
  if (window.innerWidth > 768) {
    popularCountryAll.forEach((p) => {
      p.addEventListener("mouseenter", mouseenterFu.bind(p));
    });
  } else {
    popularCountryAll.forEach((p) => p.classList.remove("active"));
    popularCountryAll.forEach((p) =>
      p.removeEventListener("mouseenter", mouseenterFu, true)
    );
  }
};

// heartAll.forEach((heart) =>
//   heart.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("clicked heart");
//   })
// );

// productAll.forEach((product) =>
//   product.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("clicked product");
//     location.href = "./productdetail.html";
//   })
// );

window.addEventListener("resize", function () {
  let nowStatus = status;
  // if (window.innerWidth > 768)
  if (window.innerWidth > 768) {
    status = true;
  } else status = false;

  if (nowStatus !== status) {
    console.log("change");
    // popularRWD();
  }
});

// changeHeartAll.forEach((changeHeart) =>
//   changeHeart.addEventListener("click", function (e) {
//     e.stopPropagation();
//     this.querySelectorAll("i").forEach((i) => {
//       if (i.classList.contains("hidden")) i.classList.remove("hidden");
//       else if (!i.classList.contains("hidden")) i.classList.add("hidden");
//     });
//   })
// );

// popularRWD();

let app1 = Vue.createApp({
  data() {
    return {
      productList: [],
      sightseeingList: [],
      experienceList: [],
      transticketList: [],
      viewpointticketList: [],
      themeList: [],
      jo_list_end: [],
      current_hover: 1,
      popularRWD: false,
      memberID: "",
      top10List: [],
      favorProductList: [],
      memberInterestList: [],
      // show_lightbox: false,
      // show_select_bar: false,
      // jo_list_hot: [],
      // jo_list_end: [],
      // jo_list_new: [],
      // show_jo: true,
      // slick_start: false,
    };
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  created() {
    this.get_member_information();
    // this.memberID = header?.memberID;
    // this.show_hot_function();
    this.getdata_product_list();
    // this.getdata_product_list_top10();
    this.getdata_jo_list_end();
    this.product_slick();
    this.jolist_slick();
    // this.popularSlick();
    // if (this.memberID) this.memberInterest();
    window.addEventListener("resize", this.myEventHandler);
  },
  methods: {
    getdata_product_list() {
      // this.jo_list_hot = [];
      let that = this;

      $.ajax({
        method: "POST",
        // async: false,
        url: "./php/Product.php",
        data: {
          // type: "hot",
        },

        dataType: "json",
        success: function (response) {
          // console.log(response);
          let top10slice = response.slice();
          // console.log(top10slice);
          top10slice.sort((a, b) => b.ProductPurchased - a.ProductPurchased);
          // console.log(top10slice);
          // top10slice.forEach((p) => console.log(p.ProductPurchased));
          top10slice = top10slice.slice(0, 10);
          top10slice.forEach((t) => that.top10List.push(t));
          // console.log(that.top10List);
          // for (let i = 0; i < response.length; i++) {
          //   if (response[i].ProductPurchased >= 1000)
          //     response[i].ProductPurchased = `${Math.trunc(
          //       response[i].ProductPurchased / 1000
          //     )}K+`;
          // }
          // console.log(response);
          response.forEach((product) => {
            // console.log(product);
            if (product.ProductPurchased >= 1000) {
              product.ProductPurchased = `${product.ProductPurchased / 1000}K+`;
            }

            that.productList.push(product);
            if (product.ProductType === "sightseeing")
              that.sightseeingList.push(product);
            else if (product.ProductType === "experience")
              that.experienceList.push(product);
            else if (product.ProductType === "transticket")
              that.transticketList.push(product);
            else if (product.ProductType === "viewpointticket")
              that.viewpointticketList.push(product);

            if (product.ProductSecondType === "主題樂園")
              that.themeList.push(product);
          });
          // console.log(that.themeList);
          that?.$nextTick(function () {
            that?.product_slick();
            // that.clickHeart();
          });
          // console.log(that.sightseeingList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    get_member_information() {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/headerGetmember.php",
        data: {
          // memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          // console.log("success");
          console.log(response);
          // console.log(this.data);
          // console.log(response[0]);
          // that.headercounter = response[0].COUNT;
          that.memberID = response[0].MemberID;
          that.headerFullName = response[0].FullName;
          that.headerMemberImg = response[0].MemberImg;
          that.headercounter = response[0]["count(*)"] ?? 0;

          that?.$nextTick(function () {
            if (that.memberID) that.memberInterest();
            if (that.memberID) that.renderHeart();
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    // getdata_product_list_top10() {
    //   // this.jo_list_hot = [];
    //   let that = this;

    //   $.ajax({
    //     method: "POST",
    //     url: "./php/top10.php",
    //     data: {
    //       // type: "hot",
    //     },

    //     dataType: "json",
    //     success: function (response) {
    //       for (let i = 0; i < response.length; i++) {
    //         if (response[i].ProductPurchased >= 1000)
    //           response[i].ProductPurchased = `${Math.trunc(
    //             response[i].ProductPurchased / 1000
    //           )}K+`;
    //       }
    //       // console.log(response);
    //       response.forEach((product) => that.top10List.push(product));

    //       that?.$nextTick(function () {
    //         // that?.product_slick();
    //         that.renderHeart();
    //       });
    //       // console.log(that.sightseeingList);
    //     },
    //     error: function (exception) {
    //       alert("數據載入失敗: " + exception.status);
    //     },
    //   });
    // },

    getdata_jo_list_end() {
      // this.jo_list_end = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/jo_frose.php",
        data: {
          type: "end",
        },
        dataType: "json",
        success: function (response) {
          // console.log(response);
          response.forEach((element) => {
            that.jo_list_end.push(element);
          });

          // console.log("jolist", that.jo_list_end);
          // console.log(that.jo_list_end);
          // _this.$nextTick(function () {
          //   _this.jo_list_slick_end();
          // });
          that.$nextTick(function () {
            that.jolist_slick();
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    product_slick() {
      $(".product-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
        ],
      });
    },
    jolist_slick() {
      $(".jo-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
        ],
      });
    },
    interest_slick() {
      $(".product-list.interest").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
        ],
      });
    },

    changeHeart(e) {
      if (this.memberID) {
        e.stopPropagation();
        // console.log(e.target.closest(".change-heart"));
        let a = e.target;
        let b = e.target.nextElementSibling
          ? e.target.nextElementSibling
          : e.target.previousElementSibling;
        a.classList.add("hidden");
        b.classList.remove("hidden");
      }
    },
    gotoproductDetail(id) {
      // e.preventDefault();
      location.href = `./productdetail.html?id=${id}`;
    },

    popularSlick(e) {
      this.$nextTick(function () {
        if (window.innerWidth <= 768) {
          $(".popular-country__list").slick({
            infinite: true,
            slidesToShow: 2.1,
            slidesToScroll: 2,
          });
        }
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
    memberInterest() {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/index_memberInterest.php",
        data: {
          memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          if (response !== "nothing") {
            // console.log("memberInterest", response);
            response.forEach((i) => that.memberInterestList.push(i));
            that?.$nextTick(function () {
              that?.interest_slick();
              // that.clickHeart();
            });
          }
          // console.log(that.memberInterestList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },

    clickHeart(pid, e) {
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

    popularMouse(index) {
      this.current_hover = index;
    },
    myEventHandler(e) {
      if (window.innerWidth <= 768) this.popularRWD = true;
      else this.popularRWD = false;
    },
    // getdata_jo_list_new() {
    //   this.jo_list_new = [];
    //   let _this = this;
    //   $.ajax({
    //     method: "POST",
    //     url: "./jo_index.php",
    //     data: {
    //       type: "new",
    //     },
    //     dataType: "json",
    //     success: function (response) {
    //       response.forEach((element) => {
    //         _this.jo_list_new.push(element);
    //       });
    //     },
    //     error: function (exception) {
    //       alert("數據載入失敗: " + exception.status);
    //     },
    //   });
    // },
    // getdata_jo_list_end() {
    //   this.jo_list_end = [];
    //   let _this = this;
    //   $.ajax({
    //     method: "POST",
    //     url: "./jo_index.php",
    //     data: {
    //       type: "end",
    //     },
    //     dataType: "json",
    //     success: function (response) {
    //       response.forEach((element) => {
    //         _this.jo_list_end.push(element);
    //       });
    //     },
    //     error: function (exception) {
    //       alert("數據載入失敗: " + exception.status);
    //     },
    //   });
    // },
    // show_hot_function() {
    //   this.getdata_jo_list_hot();
    //   this.getdata_jo_list_new();
    //   this.getdata_jo_list_end();
    // },
    // btn_show() {
    //   let btn = $("#jo_button");
    //   if (screen.width <= 768) {
    //     if (window.scrollY > 0 && window.scrollY <= 850) {
    //       btn.addClass("show");
    //     } else if (window.scrollY <= 0) {
    //       btn.removeClass("show");
    //     } else if (window.scrollY >= 850) {
    //       btn.removeClass("show");
    //     }
    //   } else {
    //     if (window.scrollY > 300) {
    //       btn.addClass("show");
    //     } else {
    //       btn.removeClass("show");
    //     }
    //   }
    // },
    // jo_list_slick() {
    //   $(".jo-list").slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,

    //     responsive: [
    //       {
    //         breakpoint: 768,
    //         settings: {
    //           slidesToShow: 1.5,
    //           slidesToScroll: 1,
    //           infinite: true,
    //         },
    //       },
    //     ],
    //   });
    // },
    // jump_jo_searched() {
    //   let searchedbox = document.querySelector(".searchbox");
    //   searchedbox_value = searchedbox.querySelector("input").value;
    //   console.log(searchedbox_value);
    //   if (searchedbox_value.length > 0) {
    //     window.location.assign("jo_searched.html");
    //   }
    // },
    // scrollToTop() {
    //   window.scrollTo({
    //     top: 0,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // },
    // openSelectbar() {
    //   this.scrollToTop();
    //   this.show_lightbox = true;
    //   this.show_select_bar = true;
    //   let body = document.querySelector("body");
    //   body.classList.add("stop_scroll");
    // },
    // closeSelectbar() {
    //   this.show_lightbox = false;
    //   this.show_select_bar = false;
    //   let body = document.querySelector("body");
    //   body.classList.remove("stop_scroll");
    // },
    // changeSelectbar(item) {
    //   console.log(item);
    //   this.show_lightbox = false;
    //   this.show_select_bar = false;
    //   let body = document.querySelector("body");
    //   this.location_selected = item;
    //   body.classList.remove("stop_scroll");
    // },
  },
  mounted() {
    // header.memberID = this.memberID
    // this.memberID = header?.memberID;
    // if (this.memberID) this.memberInterest();
    // if (this.memberID) this.renderHeart();
    // this.heartInit();
  },
  beforeUpdate() {
    // this.memberID = header?.memberID;
    // if (this.memberID) this.memberInterest();
    // if (this.memberID) this.renderHeart();
    // this.memberID = header?.memberID;
    // if (this.memberID) this.memberInterest();
    // this.renderHeart();
  },
  updated() {
    // this.memberID = header?.memberID;
    // if (this.memberID) this.memberInterest();
    // if (this.memberID) this.renderHeart();
    // this.popularSlick();
  },
});
app1.component("header-shoppingcart-vue", window.header_component);
app1.mount(".index");

$(document).ready(function () {
  // $(".product-list").slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,

  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });

  // $(".jo-list").slick({
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,

  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });

  let status = true;
  let currentStatus = status;
  addEventListener("resize", (event) => {
    if (window.innerWidth <= 768) status = false;
    else status = true;
    if (status !== currentStatus) {
      currentStatus = status;

      if (window.innerWidth <= 768) {
        $(".popular-country__list")?.slick({
          infinite: true,
          slidesToShow: 2.1,
          slidesToScroll: 2,
        });
      } else $(".popular-country__list")?.slick("unslick");
    }
  });
});
