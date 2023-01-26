window.my_component = {
  template: ` <div class="product-list">
  <a class="product-card" v-for="(p,i) in top10List" :key="i">
    <div
      class="change-heart"
      :class="{'clicked':favorProductList.includes(p.ProductID) }"
      @click="clickHeart(p.ProductID,$event)"
    >
      <i class="fa-regular fa-heart" ref="hollow"></i>
      <i class="fa-solid fa-heart orange" ref="solid"></i>
    </div>
    <div class="product-card__location">
      <i class="fa-solid fa-location-dot"></i>
      <p class="p__location">{{p.Location}}</p>
    </div>

    <div
      class="product-card__top"
      @click="gotoproductDetail(p.ProductID)"
    >
      <div class="product-card__top__pic">
        <div
          class="product-card__top__picsrc p1"
          :style="{ backgroundImage: 'url(' + p.ProductImgPath1+ ')' }"
        ></div>
      </div>
    </div>

    <div
      class="product-card__bottom"
      @click="gotoproductDetail(p.ProductID)"
    >
      <span class="product-tag">{{p.ProductSecondType}}</span>
      <h6 class="product-name">{{p.ProductName}}</h6>
      <span class="gray"
        ><i class="fa-solid fa-star"></i>4.4({{p.ProductScoredPeople}})
        |
        <span class="product-bought">{{p.ProductPurchased}}</span
        >個已訂購
      </span>
      <span class="price"
        >TWD
        <span class="product-price">{{p.ProductPrice}}</span>元</span
      >
    </div>
  </a>
</div>`,
  data() {
    return {
      productList: [],
      sightseeingList: [],
      experienceList: [],
      transticketList: [],
      viewpointticketList: [],
      top10List: [],
      favorProductList: [],
      memberID: "",
    };
  },
  created() {
    this.getdata_product_list();
    this?.product_slick();
  },
  mounted() {
    // this.memberID = header.memberID;
  },
  beforeUpdate() {
    this.memberID = header.memberID;
    this.renderHeart();
  },
  updated() {},
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
    clickHeart(pid, e) {
      console.log("R");
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
    gotoproductDetail(id) {
      // e.preventDefault();
      location.href = `./productdetail.html?id=${id}`;
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
  },
};
