// console.log("this is header");

// import jquery from "../vender/jquery/jquery.js";
// import Vue from "../vender/vue/vue.global.js";

let header;
const apph = Vue.createApp({
  data() {
    return {
      headercounter: 0, // 購物車數量
      test: "123",
      memberID: 0, //將抓到的memberID存到這
      headerFullName: "",
      headerMemberImg: "",
      keyword: "",
    };
  },
  watch: {
    headercounter(value) {
      if (value > 0) this.showcartNum();
    },
  },
  created() {
    header = this;
  },
  methods: {
    jump_searched() {
      this.keyword = this.keyword.trim();
      // let keyword = this.keyword.trim();
      if (this.keyword.length > 0) {
        let url = "./productlist.html" + "?msort=all&key=" + this.keyword;
        window.location.assign(url);
      }
    },
    showcartNum() {
      const num = this.$refs.shoppingcartNum;
      //   console.log(num);
      num.classList.remove("hidden");
    },
    shoppingcart() {
      // console.log(this.memberID);
      if (this.memberID) location.href = `./shoppingcart.html`;
      else {
        alert("請先完成登入");
        location.href = "login.html";
      }
    },
    gotologin() {
      location.href = "./login.html";
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
          // console.log(that.headercounter);

          // console.log("jolist", that.jo_list_end);
          // console.log(that.jo_list_end);
          // _this.$nextTick(function () {
          //   _this.jo_list_slick_end();
          // });

          that?.$nextTick(function () {
            // header = that;
            if (that.headercounter > 0) that.showcartNum(); // 如果counter>0才顯示

            // 原始header的script
            $(".header_modal_show").on("click", function (e) {
              if ($(window).width() < 768) {
                event.preventDefault(e);
                $(that).next(".submenu").addClass("active");
                $(".header_overlay").addClass("active");
              } else {
                $(".submenu").removeClass("active");
              }
            });

            $(".header_search_m").on("click", function () {
              // console.log($(".search_modal"));
              $(".search_modal").css("display", "block");
              $(".header_overlay").addClass("active");
              $("#search_m").focus();
            });

            $(".member_img").on("click", function () {
              $(".user_menu").css("display", "block");
              $(".header_overlay").addClass("active");
            });

            $(".header_shoppingcart").on("click", function () {
              $(".header_product_group").css("display", "block");
              $(".header_overlay").addClass("active");
            });

            $(".user_menu").css("display", "none");

            // Function for close the Modal
            $(".header_overlay").on("click", function () {
              $(".header_overlay").removeClass("active");
              $(".submenu").removeClass("active");
              $(".search_modal").css("display", "none");
              $(".user_menu").css("display", "none");
              $(".header_product_group").css("display", "none");
            });
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    logout() {
      // this.jo_list_hot = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/Logout.php",
        data: {},

        dataType: "json",
        success: function (response) {
          alert("您已成功登出");
          location.href = "../dist/index.html";
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
  },
  mounted() {
    this.get_member_information();
    header = this;
    // if (this.headercounter > 0) this.showcartNum(); // 如果counter>0才顯示
    // this.get_member_information(); // 有取得memberID才去取得member資訊

    // 原始header的script
    $(".header_modal_show").on("click", function (e) {
      if ($(window).width() < 768) {
        event.preventDefault(e);
        $(this).next(".submenu").addClass("active");
        $(".header_overlay").addClass("active");
      } else {
        $(".submenu").removeClass("active");
      }
    });

    $(".header_search_m").on("click", function () {
      // console.log($(".search_modal"));
      $(".search_modal").css("display", "block");
      $(".header_overlay").addClass("active");
      $("#search_m").focus();
    });

    $(".member_img").on("click", function () {
      $(".user_menu").css("display", "block");
      $(".header_overlay").addClass("active");
    });

    $(".header_shoppingcart").on("click", function () {
      $(".header_product_group").css("display", "block");
      $(".header_overlay").addClass("active");
    });

    $(".user_menu").css("display", "none");

    // Function for close the Modal
    $(".header_overlay").on("click", function () {
      $(".header_overlay").removeClass("active");
      $(".submenu").removeClass("active");
      $(".search_modal").css("display", "none");
      $(".user_menu").css("display", "none");
      $(".header_product_group").css("display", "none");
    });
  },
});

apph.mount("#header");

// header.get_member_information();
