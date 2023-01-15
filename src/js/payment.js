const app = Vue.createApp({
  data() {
    return {
      email: "",
      productList: [],
    };
  },
  methods: {
    displayTWD(price) {
        return `TWD ${price.toLocaleString('en-US')}`;
      },
      getCheckoutData(){
        this.productList = JSON.parse(sessionStorage.getItem('checkout_data'));
        console.log(this.productList);
        // this.productList.push(productList);
    }
  },
  computed: {
    getTotal() {
        // 获取productList中select为true的数据
        var prodList = this.productList.filter(function (val) {
          return val.select;
        });
        // 设置一个值用来存储总价
        var totalPrice = 0;
        for (let i = 0; i < prodList.length; i++) {
          // 将每个商品的总价加在一起
          totalPrice += prodList[i].num * prodList[i].price;
        }
        return {
          // 被选中的物品数量就是proList.length
          totalNum: prodList.length,
          // 总价就是totalPrice
          totalPrice: totalPrice,
          totalPoints: Math.floor(totalPrice / 100),
        };
      },

  },
  mounted() {
    this.getCheckoutData();
  },
});
app.mount("#app");
