window.header_component = {
  template: `<div class="header_product_group">
  <div class="empty_cart" ref="empty_cart" v-show="emptyCart">
  <img src="img/otherpage/empty-cart.png" alt="" />
  <h6>您的購物車是空的</h6>
  <a href="index.html">跟著Weeee! 一起探索世界</a>
</div>
  <div class="product_contain" style="height: auto; overflow-y: auto">
    
    <<div class="product_item" v-for="(product, index) in productList">
    <a v-bind:href="product.url" class="product-image"><img v-bind:src="product.img" alt=""></a>
    <div class="product-name">
        <a v-bind:href="product.url">
            <h6>{{ product.name }}</h6>
        </a>
    </div>
    <div class="delete"><button class="cart_delete" @click="btnClose(index)"><i
                class="fa-solid fa-trash"></i></button></div>
    <div class="date"><i class="fa-regular fa-calendar-days"></i>{{ product.date }}</div>
    <div class="quantity"><i class="fa-solid fa-person"></i>{{ product.num }}</div>
    <div class="product-price">
        <h6>{{ displayTWD(product.num * product.price) }}</h6>
    </div>
</div>
</div>

<div class="gotocart">
    <a href="shoppingcart.html">查看購物車</a>
</div>

</div>`,
  data() {
    return {
      productList: [
        {
          url: "",
          img: "img/sightseeing/fr_28_1.jpg",
          date: "2022-12-28",
          name: "有得逛有得買，就在桃園",
          price: 50,
          num: 2,
          select: true,
          editable: false,
        },
        {
          url: "",
          img: "img/sightseeing/fr_27_1.jpg",
          date: "2022-12-29",
          name: "新北的山，新北的海，水啦",
          price: 400,
          num: 5,
          select: true,
          editable: false,
        },
        {
          url: "",
          img: "img/sightseeing/fr_3_1.jpg",
          date: "2022-12-30",
          name: "金門二日遊",
          price: 30,
          num: 6,
          select: true,
          editable: false,
        },
      ],
    };
  },
  // ---------------bb---------------
  methods: {
    getModalPoints(price) {
      return Math.floor(price / 100);
    },

    btnClose(index) {
      this.productList.splice(index, 1);
    },
    // ---------------千分位---------------
    displayTWD(price) {
      return `TWD ${price.toLocaleString("en-US")}`;
    },
  },
  computed: {
    emptyCart() {
      let cartCount = this.productList.length;
      if (cartCount < 1) {
        return true;
      } else {
        return false;
      }
    },
    notEmptyCart() {
      console.log(this.productList);
      let cartCount = this.productList.length;
      if (cartCount < 1) {
        return false;
      } else {
        return true;
      }
    },
  },
};
// ---------------cc---------------
