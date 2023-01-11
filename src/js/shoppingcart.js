const { createApp } = Vue;
// ---------------aa---------------
createApp({
  data() {
    return {
      operate: "收起商品說明 ",
      productList: [
        {
          pro_img: "../img/sightseeing/fr_28_1.jpg",
          pro_date: "2022-12-30",
          pro_name: "有得逛有得買，就在桃園",
          pro_price: "1,100",
          pro_num: "2",
          select: false
        },
        {
          pro_img: "../img/sightseeing/fr_28_1.jpg",
          pro_date: "2022-12-30",
          pro_name: "有得逛有得買，就在桃園",
          pro_price: "1,100",
          pro_num: "2",
          select: false
        },
        {
          pro_img: "../img/sightseeing/fr_28_1.jpg",
          pro_date: "2022-12-30",
          pro_name: "有得逛有得買，就在桃園",
          pro_price: "1,100",
          pro_num: "2",
          select: false
        }
      ],

      




      modalPeople: 1,
      modalTotal: 777,
      modalDate: "",
      field1Show: true,

    };
  },
  // ---------------bb---------------
  methods: {
    // ---------------日曆---------------
    time_fun() {
      jQuery("#datetimepicker").datetimepicker({
        format: "d.m.Y H:i",
        inline: true,
        lang: "ru",
        timepicker: false,
        minDate: '0'
      });
      $.datetimepicker.setLocale("zh-TW");
      
    },
    // ---------------人數加減---------------
    pelple_minus() {
      if (this.modalPeople <= 1) {
        this.modalPeople = 1;
      } else {
        this.modalPeople--;
      }
    },
    pelple_plus() {
      this.modalPeople++;
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
  },
  computed: {
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
