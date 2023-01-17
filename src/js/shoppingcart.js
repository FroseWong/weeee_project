const { createApp } = Vue;
// ---------------aa---------------

const App = {
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

      tempProd: {
        info: {
          url: "",
          img: "",
          date: "",
          name: "",
          price: 0,
          num: 0,
        },
        index: 0,
      },
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
    closeSelect() {
      this.productList = this.productList.filter(function (product) {
        return !product.select;
      });
    },
    //全选与取消全选
    selectProduct: function (isSelect) {
      //遍历productList，全部取反
      for (var i = 0, len = this.productList.length; i < len; i++) {
        //让productList[i].select不管为true还是false都取!isSelect，如现在未全选，那么isSelect就为false，!isSelect就为true，所以点击让商品的select都变为true
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
      if (this.tempProd.info.num <= 1) {
        this.tempProd.info.num = 1;
      } else {
        this.tempProd.info.num--;
      }
    },
    peoplePlus() {
      this.tempProd.info.num++;
    },
    // ---------------結帳寫入cookie---------------
    checkout() {
      //let time = document.getElementById("datetimepicker").value;
      let selectProduct = [];
      for (let i = 0; i < this.productList.length; i++) {
        let prod = this.productList[i];
        if (prod.select) {
          selectProduct.push(prod);
        }
      }
      sessionStorage.setItem("checkout_data", JSON.stringify(selectProduct));
      location.href = "./payment.html";
    },
    updateTempProd(index) {
      let editedProd = this.productList[index];
      this.tempProd.info = JSON.parse(JSON.stringify(editedProd));
      this.tempProd.index = index;
      console.log(
        "update temp prod to " +
          this.tempProd.info.name +
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
    editProd(index) {
      console.log(
        "Change " +
          index +
          " editable status to " +
          !this.productList[index].editable
      );
      this.productList[index].editable = !this.productList[index].editable;
      let time = document.getElementById("datetimepicker").value;
      let date = "";
      // this.productList[index].date = date;
      if (time == "") {
        let OldToday = new Date();
        date = OldToday.toISOString().split("T")[0];
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
        this.productList[index].date = newDate;
      }
      this.setDatetimepicker(new Date());
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
      this.productList[this.tempProd.index].price = this.tempProd.info.price;
      this.productList[this.tempProd.index].num = this.tempProd.info.num;
      let date = this.getWeeeeDate();
      console.log(date);
      this.productList[this.tempProd.index].date = date;
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
    editIndex() {
      let index = 0; // fake index of first render
      for (let i = 0; i < this.productList.length; i++) {
        if (this.productList[i].editable) {
          index = i;
        }
      }
      return index;
    },
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

    //检测是否全选
    isSelectAll: function () {
      //如果长度为0，直接返回false
      if (this.productList.length === 0) {
        return false;
      }
      //如果productList中每一条数据的select都为true，返回true，否则返回false;
      return this.productList.every(function (val) {
        return val.select;
      });
    },
  },
  mounted() {},
};

app = Vue.createApp(App);
app.component("product-slide-vue", window.my_component);

app.mount("#app");
// ---------------cc---------------
