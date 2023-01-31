const { createApp } = Vue;
// ---------------aa---------------
const App = {
  data() {
    return {
      memberID: 0, //將抓到的memberID存到這
      currentI: "",
      productList: [
        // {
        //   url: "",
        //   img: "img/sightseeing/fr_28_1.jpg",
        //   date: "2022-12-28",
        //   name: "有得逛有得買，就在桃園",
        //   price: 50,
        //   num: 2,
        //   select: true,
        //   editable: false,
        // },
        // {
        //   url: "",
        //   img: "img/sightseeing/fr_27_1.jpg",
        //   date: "2022-12-29",
        //   name: "新北的山，新北的海，水啦",
        //   price: 400,
        //   num: 5,
        //   select: true,
        //   editable: false,
        // },
        // {
        //   url: "",
        //   img: "img/sightseeing/fr_3_1.jpg",
        //   date: "2022-12-30",
        //   name: "金門二日遊",
        //   price: 30,
        //   num: 6,
        //   select: true,
        //   editable: false,
        // },
      ],

      tempProd: {
        info: {
          CartStartDay: "",
          ProductPrice: 0,
          Quantity: 0,
        },
        index: 0,
      },
    };
  },
  created() {
    this.get_member_information();
    // this.getdata_productList();
  },

  // ---------------bb---------------
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
            if (!that.memberID) {
              swal({
                icon: "warning",
                title: "請先完成登入",
                timer: 2000,
              });
              // alert("請先完成登入");
              setTimeout(() => {
                location.href = "login.html";
              }, 2000);
            }
            if (that.memberID) that.getdata_productList();
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
        url: "./php/Cart.php",
        data: {
          memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          console.log(response);
          response.forEach((productList) => {
            // console.log(productList);
            productList.select = true;
            that.productList.push(productList);
          });
        },
        error: function (exception) {
          // console.log(123);
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    getModalPoints(price) {
      return Math.floor(price / 100);
    },

    btnClose(index) {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/CartRemove.php",
        data: {
          CID: that.productList[index].CartID,
        },
        dataType: "text",
        success: function (response) {
          //移除商品成功
          // alert(response);
          swal({
            icon: "success",
            title: "商品已移除！",
            timer: 2000,
          });
          setTimeout(() => {
            location.reload();
          }, 2000);
        },
        error: function (exception) {
          alert("移除商品失敗: " + exception.status);
        },
      });
      // this.productList.splice(index, 0);
      console.log(index);
      console.log(this.productList[index]);
      console.log(this.productList[index].CartID);
    },
    closeSelect() {
      // console.log("ttt");
      let productCartIDList = [];
      for (i = 0; i < this.productList.length; i++) {
        if (this.productList[i].select == true) {
          productCartIDList.push(this.productList[i].CartID);
        }
      }
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/CartRemoveSelect.php",
        data: {
          CID: productCartIDList,
        },
        dataType: "text",
        success: function (response) {
          //移除商品成功
          // alert("移除商品成功");
          swal({
            icon: "success",
            title: "商品已移除！",
            timer: 2000,
          });
          setTimeout(() => {
            location.reload();
          }, 2000);
        },
        error: function (exception) {
          alert("移除商品失敗: " + exception.status);
        },
      });
      // this.productList = this.productList.filter(function (product) {
      //   return !product.select;
      // });
    },
    //全選與取消全選
    selectProduct: function (isSelect) {
      //productList跑迴圈，全部取反
      for (var i = 0; i < this.productList.length; i++) {
        //讓productList[i].select不管為true還是false都取!isSelect，如現在未全選，那麼isSelect就為false，!isSelect就為true，所以點擊讓商品的select都變為true
        this.productList[i].select = !isSelect;
      }
    },
    // ---------------日曆---------------
    setDatetimepicker(date) {
      jQuery("#datetimepicker").datetimepicker({
        format: "d.m.Y H:i",
        inline: true,
        lang: "ru",
        timepicker: false,
        minDate: "0",
        defaultDate: date,
        formatDate: "d.m.Y",
      });
      $.datetimepicker.setLocale("zh-TW");
    },
    // ---------------人數加減---------------
    peopleMinus() {
      if (this.tempProd.info.Quantity <= 1) {
        this.tempProd.info.Quantity = 1;
      } else {
        this.tempProd.info.Quantity--;
      }
    },
    peoplePlus() {
      this.tempProd.info.Quantity++;
    },
    // ---------------結帳寫入sessionstorage---------------
    checkout() {
      // console.log('ttt');
      let selected = 0;
      for (let i = 0; i < this.productList.length; i++) {
        if (this.productList[i].select) {
          selected++;
        }
      }
      console.log(selected);
      if (selected <= 0) {
        swal({
          icon: "warning",
          title: "請選擇商品",
          timer: 2000,
        });
      } else {
        let selectProduct = [];
        for (let i = 0; i < this.productList.length; i++) {
          let prod = this.productList[i];
          if (prod.select) {
            selectProduct.push(prod);
          }
        }
        sessionStorage.setItem("checkout_data", JSON.stringify(selectProduct));
        location.href = "./payment.html";
      }
      //let time = document.getElementById("datetimepicker").value;
    },
    updateTempProd(index) {
      let editedProd = this.productList[index];
      // console.log(index);
      this.currentI = index;
      this.tempProd.info = JSON.parse(JSON.stringify(editedProd));
      this.tempProd.index = index;
      console.log(
        "update temp prod to " +
          this.tempProd.info.ProductName +
          " index " +
          this.tempProd.index
      );
      this.setDatetimepicker(new Date());
    },
    getWeeeeDate() {
      let time = document.getElementById("datetimepicker").value;
      let date = "";
      // this.productList[index].date = date;
      if (time == "") {
        let OldToday = new Date();
        newDate = OldToday.toISOString().split("T")[0];
      } else {
        let oldDate = new String(time);
        newDate =
          oldDate[6] +
          oldDate[7] +
          oldDate[8] +
          oldDate[9] +
          "-" +
          oldDate[3] +
          oldDate[4] +
          "-" +
          oldDate[0] +
          oldDate[1];
      }
      return newDate;
    },

    // ---------------千分位---------------
    displayTWD(price) {
      return `TWD ${price.toLocaleString("en-US")}`;
    },
    prod(index) {
      return this.productList[index];
    },
    updateEditedProd() {
      console.log("start updating exisiting prod");
      this.productList[this.tempProd.index].ProductPrice =
        this.tempProd.info.ProductPrice;
      this.productList[this.tempProd.index].Quantity =
        this.tempProd.info.Quantity;
      let date = this.getWeeeeDate();
      console.log(date);
      this.productList[this.tempProd.index].CartStartDay = date;
      let that = this;

      $.ajax({
        method: "POST",
        url: "./php/CartUpdate.php",
        data: {
          CID: that.productList[that.currentI].CartID,
          Quantity: that.productList[that.tempProd.index].Quantity,
          Date: that.productList[that.tempProd.index].CartStartDay,
          // CID: 1,
          // Quantity: 6,
          // Date: '2025-01-01',
        },
        dataType: "text",
        success: function (response) {
          // alert("修改成功");
          swal({
            icon: "success",
            title: "修改成功",
            timer: 2000,
          });
        },
        error: function (exception) {
          alert("發生錯誤: " + exception.status);
          // console.log(that);
        },
      });
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
      // console.log(this.productList);
      let cartCount = this.productList.length;
      if (cartCount < 1) {
        return false;
      } else {
        return true;
      }
    },
    getTotal() {
      // 取productList中select為true
      var prodList = this.productList.filter(function (val) {
        return val.select;
      });
      // 設置一個值用来儲存總價
      var totalPrice = 0;
      for (let i = 0; i < prodList.length; i++) {
        // 將每個商品的總價加在一起
        totalPrice += prodList[i].Quantity * prodList[i].ProductPrice;
      }
      return {
        // 被選中的物品數量就是proList.length
        totalNum: prodList.length,
        // 總價就是totalPrice
        totalPrice: totalPrice,
        totalPoints: Math.floor(totalPrice / 100),
      };
    },
    //檢測是否全選
    isSelectAll: function () {
      //如果長度為0，直接返回false
      if (this.productList.length === 0) {
        return false;
      }
      //如果productList中每一條數據的select都為true，返回true，否則返回false;
      return this.productList.every(function (val) {
        return val.select;
      });
    },
  },
  updated() {},
  mounted() {},
};

app = Vue.createApp(App);
app.component("product-slide-vue", window.my_component);

app.mount("#app");
// ---------------cc---------------

// editProd(index) {
//   console.log(
//     "Change " +
//       index +
//       " editable status to " +
//       !this.productList[index].editable
//   );
//   this.productList[index].editable = !this.productList[index].editable;
//   let time = document.getElementById("datetimepicker").value;
//   let date = "";
//   // this.productList[index].date = date;
//   if (time == "") {
//     let OldToday = new Date();
//     date = OldToday.toISOString().split("T")[0];
//   } else {
//     let oldDate = new String(time);
//     newDate =
//       oldDate[6] +
//       oldDate[7] +
//       oldDate[8] +
//       oldDate[9] +
//       "-" +
//       oldDate[3] +
//       oldDate[4] +
//       "-" +
//       oldDate[0] +
//       oldDate[1];
//     this.productList[index].date = newDate;
//   }
//   this.setDatetimepicker(new Date());
// },

// editIndex() {
//   let index = 0; // fake index of first render
//   for (let i = 0; i < this.productList.length; i++) {
//     if (this.productList[i].editable) {
//       index = i;
//     }
//   }
//   return index;
// },
