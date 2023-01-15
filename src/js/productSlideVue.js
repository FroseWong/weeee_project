"use strict";

// const heartAll = document.querySelectorAll(".fa-heart");
// const productAll = document.querySelectorAll(".product-card");
// // const popularCountryAll = document.querySelectorAll(".popular-country");
// const changeHeartAll = document.querySelectorAll(".change-heart");
// let status = true;

// const mouseenterFu = function () {
//   popularCountryAll.forEach((a) => a.classList.remove("active"));
//   this.classList.add("active");
// };

// const popularRWD = function () {
//   if (window.innerWidth > 768) {
//     popularCountryAll.forEach((p) => {
//       p.addEventListener("mouseenter", mouseenterFu.bind(p));
//     });
//   } else {
//     popularCountryAll.forEach((p) => p.classList.remove("active"));
//     popularCountryAll.forEach((p) =>
//       p.removeEventListener("mouseenter", mouseenterFu, true)
//     );
//   }
// };

// heartAll.forEach((heart) =>
//   heart.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("clicked heart");
//   })
// );

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
      jo_list_end: [],
      current_hover: 1,
      popularRWD: false,
      // show_lightbox: false,
      // show_select_bar: false,
      // jo_list_hot: [],
      // jo_list_end: [],
      // jo_list_new: [],
      // show_jo: true,
      // slick_start: false,
    };
  },

  created() {
    // this.show_hot_function();
    this.getdata_product_list();
    // this.getdata_jo_list_end();
    this.product_slick();
    // this.jolist_slick();
    // this.popular_slick();
  },
  methods: {
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
          console.log(response);
          response.forEach((product) => {
            // console.log(product);
            that.productList.push(product);
            if (product.ProductType === "sightseeing")
              that.sightseeingList.push(product);
            else if (product.ProductType === "experience")
              that.experienceList.push(product);
            else if (product.ProductType === "transticket")
              that.transticketList.push(product);
            else if (product.ProductType === "viewpointticket")
              that.viewpointticketList.push(product);
          });
          that.$nextTick(function () {
            that.product_slick();
          });
          // console.log(that.sightseeingList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
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

    changeHeart(e) {
      e.stopPropagation();
      let a = e.target;
      let b = e.target.nextElementSibling
        ? e.target.nextElementSibling
        : e.target.previousElementSibling;
      a.classList.add("hidden");
      b.classList.remove("hidden");
    },
    gotoproductDetail(e) {
      location.href = "./productdetail.html";
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
  mounted() {},
  updated() {
    // this.popularSlick();
  },
});
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