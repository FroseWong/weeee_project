const { createApp } = Vue;
// ---------------aa---------------
createApp({
  data() {
    return {
      operate: "收起商品說明 ",
      fieldDatas: [
        {
          title: "商品說明",
          fieldID: "f1",
        },
        {
          title: "購買須知",
          fieldID: "f2",
        },
        {
          title: "體驗地點",
          fieldID: "f3",
        },
        {
          title: "旅客評價",
          fieldID: "f4",
        },
      ],
      cards: [
        {
          src: "./img/sightseeing/fa_19_1.jpg",
          label: "情侶行程",
          title: "新北 | Weeee渡假村門票",
          score: 4.5,
          scoreNum: 2300,
          order: "95K+",
          price: 576,
          city: "新北",
        },
        {
          src: "./img/sightseeing/fa_20_1.jpg",
          label: "朋友行程",
          title: "台中 | Weeee渡假村門票",
          score: 4.1,
          scoreNum: 3300,
          order: "55K+",
          price: 1920,
          city: "台中",
        },
        {
          src: "./img/sightseeing/fa_19_2.jpg",
          label: "家庭行程",
          title: "台南 | Weeee渡假村門票",
          score: 4.3,
          scoreNum: 3500,
          order: "45K+",
          price: 1024,
          city: "台南",
        },
        {
          src: "./img/sightseeing/fa_20_2.jpg",
          label: "寵物行程",
          title: "高雄 | Weeee渡假村門票",
          score: 4.4,
          scoreNum: 4500,
          order: "54K+",
          price: 768,
          city: "高雄",
        },
        {
          src: "./img/sightseeing/fa_19_3.jpg",
          label: "寵物行程",
          title: "新竹 | Weeee渡假村門票",
          score: 4.4,
          scoreNum: 4500,
          order: "54K+",
          price: 1080,
          city: "新竹",
        },
        {
          src: "./img/sightseeing/fa_20_3.jpg",
          label: "寵物行程",
          title: "花蓮 | Weeee渡假村門票",
          score: 4.4,
          scoreNum: 4500,
          order: "54K+",
          price: 1440,
          city: "花蓮",
        },
      ],
      messages: [
        {
          pic: "😹",
          name: "品元",
          star: "★★★★★",
          comment:
            "活潑有朝氣的水族館因為海洋生物種類很多，而且很多地方的魚類/海豹/企鵝都感覺比一般動物園還有朝氣，有感受到很活潑，不會只有一兩隻，也沒有一直在睡覺😂很多都超級療癒！整體設計的動線跟視覺都蠻好的，看大型水族箱時都覺得蠻有臨場感😆 但假日人真的超多就是惹😂大部分不需要排隊所以有些地方有點擠",
        },
        {
          pic: "👦",
          name: "品源",
          star: "★★★",
          comment:
            "活潑有朝氣的水族館因為海洋生物種類很多，而且很多地方的魚類/海豹/企鵝都感覺比一般動物園還有朝氣，有感受到很活潑，不會只有一兩隻，也沒有一直在睡覺😂很多都超級療癒！整體設計的動線跟視覺都蠻好的，看大型水族箱時都覺得蠻有臨場感😆 但假日人真的超多就是惹😂大部分不需要排隊所以有些地方有點擠",
        },
        {
          pic: "🙋‍♀️",
          name: "元元",
          star: "★★★★",
          comment:
            "活潑有朝氣的水族館因為海洋生物種類很多，而且很多地方的魚類/海豹/企鵝都感覺比一般動物園還有朝氣，有感受到很活潑，不會只有一兩隻，也沒有一直在睡覺😂很多都超級療癒！整體設計的動線跟視覺都蠻好的，看大型水族箱時都覺得蠻有臨場感😆 但假日人真的超多就是惹😂大部分不需要排隊所以有些地方有點擠",
        },
        {
          pic: "🐵",
          name: "品品",
          star: "★★★★★",
          comment:
            "活潑有朝氣的水族館因為海洋生物種類很多，而且很多地方的魚類/海豹/企鵝都感覺比一般動物園還有朝氣，有感受到很活潑，不會只有一兩隻，也沒有一直在睡覺😂很多都超級療癒！整體設計的動線跟視覺都蠻好的，看大型水族箱時都覺得蠻有臨場感😆 但假日人真的超多就是惹😂大部分不需要排隊所以有些地方有點擠",
        },
      ],
      googleMap: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.2338948479887!2d121.5426387215347!3d25.052129362458672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c18fcb9855%3A0x784fb0d91b7fc01f!2zVGliYU1lIOWFqOaWueS9jeaVuOS9jeihjOmKt-WvpuaIsOmkiuaIkOePrSjlj7DljJcp!5e0!3m2!1szh-TW!2stw!4v1671903363935!5m2!1szh-TW!2stw",
        width: 600,
        height: 450,
        style: "border:0;",
        allowfullscreen: "",
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade",
      },
      noticeLists: [
        "未滿 4 歲的兒童可免費入場，需有家長陪同入場。",
        "下訂時請以「票券使用日」為主，下訂後即無法變更，敬請留意。",
        "訂單一次最高訂購上限為 6 張，每日場次數量為限量販售，售完為止；團體預約請洽 WeeeePark 官網。",
        "訂單恕不接受部分變更，若需變更入場日及場次請整筆重新下訂。",
        "訂購博愛票旅客陪同者也需購買一張博愛票（陪同者僅限於身心障礙旅客）。",
        "本館禁止攜帶外食、寵物，可攜帶開水。",
        "館內提供嬰兒車租借，未提供輪椅租借，敬請旅客見諒。",
        "請務必於訂購時確認訂購之票種是否正確，資格是否符合。",
        "此商品恕無法使用任何折扣券，敬請見諒。",
        "購票時請主動出示相關證件供售票處工作人員驗證，相關證件說明如下：學生票：本人有效學生證正本(若為應屆畢業生則提供當年度正式入學通知單或註冊單及攜帶身分證)。兒童票、博愛票：身心障礙證明、孕婦健康手冊、國民身分證或政府核發附有照片、身分證字號及出生年、月、日等足以證明身分證件。",
      ],
      Imgs: [
        {
          Content:
            "► 冬の水族館戀愛物語：告白金句拿鐵，療癒的海豹拉花與暖呼呼的飲品溫暖你的心",
          src: "./img/sightseeing/fa_19_1.jpg",
        },
        {
          Content:
            "► 復刻未來．AI 海洋名畫特展展覽內容：『Microplastic Globe_化身水晶球的未來海洋』",
          src: "./img/sightseeing/fa_19_2.jpg",
        },
        {
          Content:
            "► WeeeePark 主打新都會型水族館，13 大主題展區帶你沉浸奇幻無比的水生世界",
          src: "./img/sightseeing/fa_19_3.jpg",
        },
      ],
      ProductDetail: {
        type: "觀光行程",
        city: "桃園",
        price: 550,
        name: "Weeeepark 海洋公園門票",
        Text: "Weeeepark為台灣首座新都會型水生公園。將生活在地球上各種地域的生物們的環境，透過空間演出與科技的融合，加以忠實的重現。在連氣溫、濕度、味道及聲音都經過縝密計算的空間裡，從天花板到地坪、延伸至水槽的影像演出呈現出360°具魄力的沉浸式空間。來訪旅客彷彿真的身歷其境，使用五感體驗各真實場景。主角，是生活在那裡的生物們，隨環境變遷而演變進化的生物們的不思議，從各種角度將其魅力性襯托出來的環境演出也是一大特徵。Weeeepark是一個滿足人們無止盡的「對於求知的慾望和獲知的喜悅」，並在世界上也是獨一無二的寓教於樂設施。",
        shortname: "WeeeePark",
        address: "320台灣桃園市中壢區春德路105號",
        comments: 6430,
        stars: "★★★★",
        time: 2,
      },
      carousels: [
        {
          src: "./img/sightseeing/fa_19_1.jpg",
        },
        {
          src: "./img/sightseeing/fa_19_2.jpg",
        },
        {
          src: "./img/sightseeing/fa_19_3.jpg",
        },
      ],
      modalPeople: 1,
      modalTotal: 777,
      modalDate: "",
      field1Show: true,
      winSize: 0,
      winsizeBoolean: true,
      openCtrlnone: false,
      faAngle: "up",
      faHeart: "regular",
      productdetailOperate: 0,
      productdetailNotice: 0,
      productdetailAddress: 0,
      productReview: 0,
    };
  },
  // ---------------bb---------------
  methods: {
    // ---------------開闔商品說明---------------
    open() {
      // let directions = document.getElementsByClassName(
      //   "productdetail-directions-group"
      // )[0].classList;
      // let fa = document.getElementsByClassName("productdetail-operate")[0]
      //   .children[1].classList;
      // if (directions.contains("productdetail-open")) {
      //   directions.remove("productdetail-open");
      //   directions.add("productdetail-none");
      //   this.operate = "看完整商品說明 ";
      //   fa.remove("fa-angle-up");
      //   fa.add("fa-angle-down");
      // } else {
      //   directions.remove("productdetail-none");
      //   directions.add("productdetail-open");
      //   this.operate = "收起商品說明 ";
      //   fa.remove("fa-angle-down");
      //   fa.add("fa-angle-up");
      // }
      this.openCtrlnone = !this.openCtrlnone;
      this.openCtrlnone == false
        ? (this.operate = "收起商品說明 ")
        : (this.operate = "看完整商品說明");
      this.openCtrlnone == false
        ? (this.faAngle = "up")
        : (this.faAngle = "down");
      // console.log(this.$refs.Operate.offsetTop);
      // console.log(this.$refs.Notice.offsetTop);
      // console.log(this.$refs.Address.offsetTop);
      // console.log(this.$refs.Review.offsetTop);
    },
    // ---------------橘心---------------
    heart_click() {
      // let list = e.target.classList;
      // if (list.contains("fa-regular")) {
      //   list.add("fa-solid");
      //   list.remove("fa-regular");
      // } else {
      //   list.remove("fa-solid");
      //   list.add("fa-regular");
      // }
      this.faHeart == "solid"
        ? (this.faHeart = "regular")
        : (this.faHeart = "solid");
    },
    // ---------------Totop---------------
    scroll_totop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    // ---------------固定框滑動---------------
    field_click(e) {
      let directions = document.getElementsByClassName(
        "productdetail-directions-group"
      )[0].classList;
      // this.openCtrlnone = false;
      // directions.remove("productdetail-none");
      // directions.add("productdetail-open");
      // this.operate = "收起商品說明 ";
      // fa.remove("fa-angle-down");
      // fa.add("fa-angle-up");
      this.operate = "收起商品說明";
      this.faAngle = "up";

      // let num = document.getElementById(e).offsetTop;
      // let pd = document.getElementsByClassName("productdetail-operate")[0]
      //   .offsetTop;
      // let pn = document.getElementsByClassName("productdetail-notice")[0]
      //   .offsetTop;
      // let pa = document.getElementsByClassName("productdetail-address")[0]
      //   .offsetTop;
      // let pv = document.getElementsByClassName("product-review")[0].offsetTop;

      let pd = this.$refs.Operate.offsetTop;
      let pn = this.$refs.Notice.offsetTop;
      let pa = this.$refs.Address.offsetTop;
      let pv = this.$refs.Review.offsetTop;
      switch (e) {
        case "f1":
          num = pd - 120;
          break;
        case "f2":
          num = pn - 110;
          break;
        case "f3":
          num = pa - 130;
          break;
        case "f4":
          num = pv - 100;
          break;
      }
      window.scrollTo({
        top: num,
        left: 0,
        behavior: "smooth",
      });
    },
    // ---------------固定框變色---------------
    field_mark() {
      let pd = document.getElementById("f1").style;
      let pn = document.getElementById("f2").style;
      let pa = document.getElementById("f3").style;
      let pv = document.getElementById("f4").style;
      let weblack = "#000";
      let weblue = "#4484ce";
      let num =
        document.getElementsByClassName("productdetail-bot")[0].offsetTop;
      let fixedfield2 = document.getElementsByClassName(
        "productdetail-fixedfield2"
      )[0];

      let directions = document.getElementsByClassName(
        "productdetail-directions-group"
      )[0].classList;

      document.addEventListener("scroll", function () {
        ScrollPosition = window.scrollY;

        if (directions.contains("productdetail-none")) {
          ScrollPosition = ScrollPosition + 2226;
        }
        if (ScrollPosition <= 1106) {
          pn.color = weblack;
          pa.color = weblack;
          pv.color = weblack;
          pd.color = weblack;
          pd.borderLeft = "0";
          pv.borderLeft = "0";
          pa.borderLeft = "0";
          pn.borderLeft = "0";
        }
        if (ScrollPosition >= 1000) {
          pn.color = weblack;
          pa.color = weblack;
          pv.color = weblack;
          pd.color = weblue;
          pd.borderLeft = "3px solid #4484CE";
          pv.borderLeft = "0";
          pa.borderLeft = "0";
          pn.borderLeft = "0";
          if (directions.contains("productdetail-none") == true) {
            pd.color = weblack;
            pd.borderLeft = "0";
          }
        }
        if (ScrollPosition >= 3250) {
          pa.color = weblack;
          pv.color = weblack;
          pd.color = weblack;
          pn.color = weblue;
          pn.borderLeft = "3px solid #4484CE";
          pd.borderLeft = "0";
          pv.borderLeft = "0";
          pa.borderLeft = "0";
        }
        if (ScrollPosition >= 3900) {
          pn.color = weblack;
          pv.color = weblack;
          pd.color = weblack;
          pa.color = weblue;
          pa.borderLeft = "3px solid #4484CE";
          pd.borderLeft = "0";
          pv.borderLeft = "0";
          pn.borderLeft = "0";
        }
        if (ScrollPosition >= 4707) {
          pn.color = weblack;
          pa.color = weblack;
          pd.color = weblack;
          pv.color = weblue;
          pv.borderLeft = "3px solid #4484CE";
          pd.borderLeft = "0";
          pa.borderLeft = "0";
          pn.borderLeft = "0";
        }
        if (ScrollPosition >= num - 100) {
          fixedfield2.style.display = "none";
        } else {
          fixedfield2.style.display = "flex";
        }
      });
    },
    // ---------------下方輪播---------------
    product_list() {
      $(".product-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        speed: 1000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      });
    },
    // ---------------上方輪播---------------
    productdetail_slideshow() {
      $(".productdetail-slideshow").slick({
        infinite: true,
        slidesToShow: 1.65,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
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
    // ---------------超過4825時隱藏---------------
    display_scroll() {
      let field = document.getElementsByClassName(
        "productdetail-fixedfield1"
      )[0];
      let bro = window.innerWidth;
      document.addEventListener("scroll", function (e) {
        let ScrollPosition = window.scrollY;
        window.addEventListener("resize", function () {
          bro = window.innerWidth;
        });
        if (ScrollPosition > 4825 && bro < 768) {
          field.style.display = "none";
        } else {
          field.style.display = "flex";
        }
      });
    },
    // ---------------axios---------------
    axios_get() {
      axios({
        method: "get",
        url: "https://randomuser.me/api/?gender=female&nat=us",
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    axios_post() {
      axios({
        method: "post",
        url: "https://hexschool-tutorial.herokuapp.com/api/signup",
        data: {
          email: "",
          password: "",
        },
      }).then((response) => console.log(response.data));
    },
    // ---------------日曆---------------
    time_fun() {
      jQuery("#datetimepicker").datetimepicker({
        format: "d.m.Y H:i",
        inline: true,
        lang: "ru",
        timepicker: false,
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
    winSize_watch() {
      window.addEventListener("resize", function () {
        this.winSize = window.innerWidth;

        if (this.winSize <= 768) {
          this.winsizeBoolean = false;
          console.log(this.winsizeBoolean);
        }
        if (this.winSize >= 768) {
          this.winsizeBoolean = true;
          console.log(this.winsizeBoolean);
        }
      });
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
    this.field_mark();
    this.product_list();
    this.productdetail_slideshow();
    this.display_scroll();
    this.time_fun();
    this.winSize_watch();
    // this.axios_get();
    // this.axios_post();
  },
}).mount("#app");
// ---------------cc---------------
