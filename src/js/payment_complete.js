const { createApp } = Vue;
const App = {
  data() {
    return {
      memberID: 0, //將抓到的memberID存到這
      productList: [],
      orderInfo:{}
    };
  },
  created() {
    this.get_member_information();
  },
  methods: {
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
          // console.log(response);
          // console.log(this.data);
          // console.log(response[0]);
          that.memberID = response[0].MemberID;

          that?.$nextTick(function () {
            if (!that.memberID) {
                // alert("請先完成登入");
                swal({
                  icon: "warning",
                  title: "請先完成登入",
                  timer: 2000,
                });
                setTimeout(() => {
                  location.href = "login.html";
                }, 2000);
              };
            if (that.memberID) that.getdata_productList();
            if (that.memberID) that.getdata_orderInfo();
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    getdata_productList() {
        // console.log(this.productList);
        let that = this;
        $.ajax({
          method: "POST",
          url: "./php/Order.php",
          data: {
            memberID: that.memberID,
          },
          dataType: "json",
          success: function (response) {
            // console.log(response);
            response.forEach((productList) => {
              // console.log(productList);
              that.productList.push(productList);
            });
          },
          error: function (exception) {
            // console.log(123);
            alert("數據載入失敗: " + exception.status);
          },
        });
      },
      getdata_orderInfo() {
        // console.log(this.productList);
        let that = this;
        $.ajax({
          method: "POST",
          url: "./php/OrderInfo.php",
          data: {
            memberID: that.memberID,
          },
          dataType: "json",
          success: function (response) {
            // console.log(response);
            response.forEach((orderInfo) => {
              // console.log(productList);
              that.orderInfo = orderInfo;
            });
          },
          error: function (exception) {
            // console.log(123);
            alert("數據載入失敗: " + exception.status);
          },
        });
      },
    displayTWD(price) {
      return `TWD ${price?.toLocaleString("en-US")}`;
    },
  },
  computed: {
    getTotal() {
      // 取productList中select為true
      // let prodList = this.productList.filter(function (val) {
      //   return val.select;
      // });
      // 設置一個值用来儲存總價
      let totalPrice = 0;
      for (let i = 0; i < this.productList.length; i++) {
        // 將每個商品的總價加在一起
        totalPrice +=
          this.productList[i].Quantity * this.productList[i].ProductPrice;
      }
      return {
        // 被選中的物品數量就是proList.length
        totalNum: this.productList.length,
        // 總價就是totalPrice
        totalPrice: totalPrice,
        totalPoints: Math.floor(totalPrice / 100),
      };
    },
  },
  mounted() {},
};
app = Vue.createApp(App);
app.component("product-slide-vue", window.my_component);

app.mount("#app");
