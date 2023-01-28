const app = Vue.createApp({
  data() {
    return {
      memberID: 0, //將抓到的memberID存到這
      memberInfo: {
        firstName: "",
        lastName: "",
        country: "",
        phone: "",
        username: "",
        totalPoints: 0,
      },
      productList: [],
      weeee: {
        totalPoints: 0,
      },
      tempWeeee: {},
      checked: false,
      checked2: false,
      disabled: true,
      hidden: true,
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
          console.log(response);
          // console.log(this.data);
          // console.log(response[0]);
          that.memberID = response[0].MemberID;

          that?.$nextTick(function () {
            if (that.memberID) that.getCheckoutData();
            if (that.memberID) that.checkPoints();
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    checkPoints() {
      console.log(this.productList.cartId);
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/UsePoints.php",
        data: {
          memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          console.log(response);
          response.forEach((totalPoints) => {
            that.tempWeeee = totalPoints;
            if (that.tempWeeee.totalPoints > 0) {
              that.disabled = false;
              that.hidden = false;
            }
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    getPoints() {
      if (!this.checked2) {
        let that = this;
        $.ajax({
          method: "POST",
          url: "./php/UsePoints.php",
          data: {
            memberID: that.memberID,
          },
          dataType: "json",
          success: function (response) {
            response.forEach((totalPoints) => {
              that.tempWeeee = totalPoints;
              if (that.tempWeeee.totalPoints > that.getTotal.totalPrice * 0.2) {
                that.weeee.totalPoints = that.getTotal.totalPrice * 0.2;
              } else {
                that.weeee = totalPoints;
              }
            });
          },
          error: function (exception) {
            // console.log(123);
            alert("數據載入失敗: " + exception.status);
          },
        });
      } else {
        this.weeee.totalPoints = 0;
      }
    },
    getMemberInfo() {
      // let memberInfo = document.getElementById('userInfo');
      if (!this.checked) {
        let that = this;
        $.ajax({
          method: "POST",
          url: "./php/MemberInfo.php",
          data: {
            memberID: that.memberID,
          },
          dataType: "json",
          success: function (response) {
            console.log(response);
            response.forEach((memberInfo) => {
              that.memberInfo = memberInfo;
            });
          },
          error: function (exception) {
            alert("數據載入失敗: " + exception.status);
          },
        });
      }
    },
    displayTWD(price) {
      return `TWD ${price.toLocaleString("en-US")}`;
    },
    getCheckoutData() {
      this.productList = JSON.parse(sessionStorage.getItem("checkout_data"));
      // this.productList.push(productList);
      console.log(this.productList);

      var totalPrice = 0;
      for (let i = 0; i < this.productList.length; i++) {
        // 將每個商品的總價加在一起
        totalPrice +=
          this.productList[i].quantity * this.productList[i].productPrice;
        // console.log(totalPrice)
      }
      return {
        // 被選中的物品數量就是proList.length
        totalNum: this.productList.length,
        // 總價就是totalPrice
        totalPrice: totalPrice,
        totalPoints: Math.floor(totalPrice / 100),
      };
    },
    pay() {
      let productCartIDList = [];
      let productDateList = [];
      let productIDList = [];
      let productQuantityList = [];
      // console.log(this.productList);

      for (i = 0; i < this.productList.length; i++) {
        productCartIDList.push(this.productList[i].cartID);
        productDateList.push(this.productList[i].cartStartDay);
        productIDList.push(this.productList[i].productID);
        productQuantityList.push(this.productList[i].quantity);
      }
      // console.log(this.productList);
      // console.log(productDateList);
      // console.log(productIDList);
      // console.log(productQuantityList);
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/CartCheckout.php",
        data: {
          memberID: that.memberID,
          CID: productCartIDList,
          // subTotal: that.getTotal.totalPrice,
          totalPrice: that.getTotal.totalPrice - that.weeee.totalPoints,
          addPoints: Math.floor(
            (that.getTotal.totalPrice - that.weeee.totalPoints) / 100
          ),
          discountPoints: that.weeee.totalPoints,
          productDateList,
          productIDList,
          productQuantityList,
          // offsetPoints:
        },
        dataType: "text",
        success: function (response) {
          //購買完成
          alert(response);
          location.href = "./payment_complete.html";
        },
        error: function (exception) {
          alert("購買失敗: " + exception.status);
        },
      });
    },
  },
  computed: {
    getTotal() {
      // 取productList中select為true
      // var prodList = this.productList.filter(function (val) {
      //   return val.select;
      // });
      // 設置一個值用来儲存總價
      var totalPrice = 0;
      for (let i = 0; i < this.productList.length; i++) {
        // 將每個商品的總價加在一起
        totalPrice +=
          this.productList[i].quantity * this.productList[i].productPrice;
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
});
app.mount("#app");
