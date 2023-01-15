const { createApp } = Vue;
// ---------------aa---------------
createApp({
  data() {
    return {
      productList: [
        {
          img: "img/sightseeing/fr_28_1.jpg",
          date: "2022-12-30",
          name: "有得逛有得買，就在桃園",
          price: 50,
          num: 2,
          select: true,
          inEdit: false
        },
        {
          img: "img/sightseeing/fr_27_1.jpg",
          date: "2022-12-30",
          name: "新北的山，新北的海，水啦",
          price: 400,
          num: 5,
          select: true,
        },
        {
          img: "img/sightseeing/fr_3_1.jpg",
          date: "2022-12-30",
          name: "金門二日遊",
          price: 30,
          num: 6,
          select: true,
        },
      ],


      modalPeople: 1,
      modalTotal: 777,
      modalDate: "",
      field1Show: true,
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
    time_fun() {
      jQuery("#datetimepicker").datetimepicker({
        format: "d.m.Y H:i",
        inline: true,
        lang: "ru",
        timepicker: false,
        minDate: "0",
      });
      $.datetimepicker.setLocale("zh-TW");
    },
    // ---------------人數加減---------------
    pelple_minus(i) {
      if (this.productList[i].num <= 1) {
        this.productList[i].num = 1;
      } else {
        this.productList[i].num--;
      }
    },
    pelple_plus(i) {
      console.log(i)
      this.productList[i].num++;
    },
    // ---------------結帳寫入cookie---------------
    modal_checkout() {
      let time = document.getElementById("datetimepicker").value;
      let newDate = "";
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
      sessionStorage.setItem("日期", newDate);
      sessionStorage.setItem("總金額", this.modal_pricetotal);
      sessionStorage.setItem("點數", this.modal_points);
      let data = sessionStorage.getItem("日期");
      console.log(data);
      window.location.href = "./payment.html";
    },
    cle_check() {
      this.field1Show = false;
    },
    field1_showbtn() {
      this.field1Show = true;
    },
    // ---------------千分位---------------
    currency(price) {
      return price.toLocaleString('en-US');
      // ;
    },

    displayTWD(price) {
      return `TWD ${this.currency(price)}`
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

    // ---------------總金額---------------
    modal_pricetotal() {
      return this.modalTotal * this.modalPeople;
    },
    // ---------------點數計算滿500元1點---------------
    modal_points() {
      let points = this.modalTotal * this.modalPeople;
      return Math.floor(points / 100);
    },
    
  },

  mounted() {
    this.time_fun();
  },
}).mount("#app");
// ---------------cc---------------
