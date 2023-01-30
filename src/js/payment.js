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
      keyTaxId: false,
    };
  },
  created() {
    this.get_member_information();
  },
  methods: {
    onChange(e) {
      // v-model="keyTaxId"
      // console.log(e.target.value)
      this.keyTaxId = e.target.value;
      if (e.target.value === "1") this.keyTaxId = false;
      else if (e.target.value === "2") this.keyTaxId = true;
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
          that.memberID = response[0].MemberID;

          that?.$nextTick(function () {
            if (!that.memberID) {
              alert("請先完成登入");
              location.href = "login.html";
            }
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
    creditcard() {
      let cards = document.getElementsByClassName("card");
      // console.log(cards);
      for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("keydown", function (e) {
          //console.log(e.which);   //數字48-57
          if ((e.which >= 48 && e.which <= 57) || e.which == 8) {
            //console.log(e.target.value.length);  //e.target事件觸發的元素
            if (e.target.value.length == 0 && e.which == 8) {
              // console.log("ttt");
              let previous_el = this.previousElementSibling; //previousElementSibling內建函式
              previous_el?.focus();
            }
          } else {
            e.preventDefault();
          }
        });
        cards[i].addEventListener("keyup", function (e) {
          // console.log(e.target.value);
          let str = e.target.value.replace(/\D/g, ""); // 正規式放在雙斜線之中  加g全部取代
          //console.log(str);
          this.value = str; // this/e.target -> input標籤
          //console.log(str.length);
          if (str.length == 4) {
            let next_el = this.nextElementSibling;
            if (next_el) {
              next_el.focus();
            }
          }
        });
      }
    },
    validDate(e){
      var inputChar = String.fromCharCode(e.keyCode);
      var code = e.keyCode;
      var allowedKeys = [8];
      if (allowedKeys.indexOf(code) !== -1) {
        return;
      }
      e.target.value = e.target.value.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
      ).replace(
        /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
      ).replace(
        /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
      ).replace(
        /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
      ).replace(
        /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
      ).replace(
        /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
      ).replace(
        /\/\//g, '/' // Prevent entering more than 1 `/`
      );
    },
    pay() {
      let that = this;
      $("#form").submit(function (e) {
        e.preventDefault();
        //信用卡號驗證
        let card_str = "";
        let cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
          card_str += cards[i].value;
        }
        let send_data = true;
        if (is.creditCard(card_str)) {
            // card_wrapper.classList.remove("-error");
        } else {
          // card_wrapper.classList.add("-error");
          alert("系統不支援此卡，或是您輸入的卡號有誤，請再次核對！");
          send_data = false;
        }
        //信用卡日期驗證
        var input = document.getElementById('expiration').value;
        if (input.length == 5) {
          var expiry = input.split('/');
          var month = parseInt(expiry[0]);
          var year = parseInt(expiry[1]);
      
          if (year < 100) {
            year += 2000;
          }
      
          var currentTime = new Date();
          var currentMonth = currentTime.getMonth() + 1;
          var currentYear = currentTime.getFullYear();
      
          if (year < currentYear || (year == currentYear && month < currentMonth)) {
            send_data = false;
            alert("信用卡效期有誤，請輸入正確日期(月/年)");
          }
        }
        //驗證不過
        if (!send_data) {
          e.preventDefault();
        } else {
          //結帳資料存入
          let productCartIDList = [];
          let productDateList = [];
          let productIDList = [];
          let productQuantityList = [];
          // console.log(this.productList);

          for (i = 0; i < that.productList.length; i++) {
            productCartIDList.push(that.productList[i].cartID);
            productDateList.push(that.productList[i].cartStartDay);
            productIDList.push(that.productList[i].productID);
            productQuantityList.push(that.productList[i].quantity);
          }
          // console.log(this.productList);
          // console.log(productDateList);
          // console.log(productIDList);
          // console.log(productQuantityList);
          // let that = this;
          $.ajax({
            method: "POST",
            url: "./php/CartCheckout.php",
            data: {
              email: that.memberInfo.username,
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
        }
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
  mounted() {
    // this.getBuyData();
    // this.creditcard($event);
    this.pay();
  },
});
app.mount("#app");
