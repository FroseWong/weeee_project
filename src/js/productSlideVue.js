window.my_component = {
  template: `  <div class="product-list">
  <a
    class="product-card"
    v-for="(p,i) in sightseeingList"
    :key="i"
    @click="gotoproductDetail"
  >
    <div class="change-heart" ref="changeHeart" @click="changeHeart">
      <i class="fa-regular fa-heart" ref="hollow"></i>
      <i class="fa-solid fa-heart orange hidden" ref="solid"></i>
    </div>
    <div class="product-card__location">
      <i class="fa-solid fa-location-dot"></i>
      <p class="p__location">{{p.Location}}</p>
    </div>
    <div class="product-card__top">
      <div class="product-card__top__pic">
        <div
          class="product-card__top__picsrc p1"
          :style="{ backgroundImage: 'url(' + p.ProductImgPath1+ ')' }"
        ></div>
      </div>
    </div>
    <div class="product-card__bottom">
      <span class="product-tag">{{p.ProductSecondType}}</span>
      <h6 class="product-name">{{p.ProductName}}</h6>
      <span class="gray"
        ><i class="fa-solid fa-star"></i>4.4(44325) |
        <span class="product-bought">590K+</span>個已訂購
      </span>
      <span class="price"
        >TWD <span class="product-price">{{p.ProductPrice}}</span>元</span
      >
    </div>
  </a>
</div>`,
  data() {
    return {
      test: "test",
      productList: [],
      sightseeingList: [],
      experienceList: [],
      transticketList: [],
      viewpointticketList: [],
    };
  },
  created() {
    this.getdata_product_list();
    this?.product_slick();
  },
  methods: {
    getdata_product_list() {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/Product.php",
        data: {},

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
            that?.product_slick();
          });
          // console.log(that.sightseeingList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },

    product_slick() {
      $(".product-list")?.slick({
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
  },
};

// let app = Vue.createApp({
//   data() {
//     return {
//       test: "test",
//       productList: [],
//       sightseeingList: [],
//       experienceList: [],
//       transticketList: [],
//       viewpointticketList: [],
//     };
//   },

//   created() {
//     this.getdata_product_list();
//     this?.product_slick();
//   },
//   methods: {
//     getdata_product_list() {
//       let that = this;
//       $.ajax({
//         method: "POST",
//         url: "./php/Product.php",
//         data: {},

//         dataType: "json",
//         success: function (response) {
//           console.log(response);
//           response.forEach((product) => {
//             // console.log(product);
//             that.productList.push(product);
//             if (product.ProductType === "sightseeing")
//               that.sightseeingList.push(product);
//             else if (product.ProductType === "experience")
//               that.experienceList.push(product);
//             else if (product.ProductType === "transticket")
//               that.transticketList.push(product);
//             else if (product.ProductType === "viewpointticket")
//               that.viewpointticketList.push(product);
//           });
//           that.$nextTick(function () {
//             that?.product_slick();
//           });
//           // console.log(that.sightseeingList);
//         },
//         error: function (exception) {
//           alert("數據載入失敗: " + exception.status);
//         },
//       });
//     },

//     product_slick() {
//       $(".product-list")?.slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3,

//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//               arrows: false,
//             },
//           },
//         ],
//       });
//     },

//     changeHeart(e) {
//       e.stopPropagation();
//       let a = e.target;
//       let b = e.target.nextElementSibling
//         ? e.target.nextElementSibling
//         : e.target.previousElementSibling;
//       a.classList.add("hidden");
//       b.classList.remove("hidden");
//     },
//     gotoproductDetail(e) {
//       location.href = "./productdetail.html";
//     },
//   },
//   mounted() {},
//   updated() {},
// });
// app.mount("#produ");

// $(document).ready(function () {
//   // $(".product-list").slick({
//   //   infinite: true,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 3,

//   //   responsive: [
//   //     {
//   //       breakpoint: 768,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         slidesToScroll: 1,
//   //         infinite: true,
//   //         arrows: false,
//   //       },
//   //     },
//   //   ],
//   // });

//   // $(".jo-list").slick({
//   //   infinite: true,
//   //   slidesToShow: 3,
//   //   slidesToScroll: 3,

//   //   responsive: [
//   //     {
//   //       breakpoint: 768,
//   //       settings: {
//   //         slidesToShow: 1,
//   //         slidesToScroll: 1,
//   //         infinite: true,
//   //         arrows: false,
//   //       },
//   //     },
//   //   ],
//   // });

//   let status = true;
//   let currentStatus = status;
//   addEventListener("resize", (event) => {
//     if (window.innerWidth <= 768) status = false;
//     else status = true;
//     if (status !== currentStatus) {
//       currentStatus = status;

//       if (window.innerWidth <= 768) {
//         $(".popular-country__list")?.slick({
//           infinite: true,
//           slidesToShow: 2.1,
//           slidesToScroll: 2,
//         });
//       } else $(".popular-country__list")?.slick("unslick");
//     }
//   });
// });
