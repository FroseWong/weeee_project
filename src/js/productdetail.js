const app = Vue.createApp({
  data() {
    return {
      // 開關說明
      operate: "收起商品說明 ",
      // 右方四選項
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
      // 預設評論
      messages: [
        {
          pic: "👦",
          name: "使用者",
          star: "★★★★★",
          comment: "登入查看留言<3",
        },
        {
          pic: "👦",
          name: "使用者",
          star: "★★★★★",
          comment: "登入查看留言<3",
        },
        {
          pic: "👦",
          name: "使用者",
          star: "★★★★★",
          comment: "登入查看留言<3",
        },
        {
          pic: "👦",
          name: "使用者",
          star: "★★★★★",
          comment: "登入查看留言<3",
        },
      ],
      // 地圖
      googleMap: {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.2338948479887!2d121.5426387215347!3d25.052129362458672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823c18fcb9855%3A0x784fb0d91b7fc01f!2zVGliYU1lIOWFqOaWueS9jeaVuOS9jeihjOmKt-WvpuaIsOmkiuaIkOePrSjlj7DljJcp!5e0!3m2!1szh-TW!2stw!4v1671903363935!5m2!1szh-TW!2stw",
        width: 600,
        height: 450,
        style: "border:0;",
        allowfullscreen: "",
        loading: "lazy",
        referrerpolicy: "no-referrer-when-downgrade",
      },
      noticeLists: [],
      // 景點門票
      noticeLists1: [
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
      // 交通票卡
      noticeLists2: [
        "僅開放即日起 3 個月內之訂購。",
        "票券使用範圍請參考官方網站。",
        " Weeee票券為記名制，訂購作業較為繁複，請於下訂時確實提供所需資訊；若因資料不齊造成出票延誤、或需修改任何資訊，旅客需自行承擔責任並支付手續費，敬請知悉。",
        "若購買時登記的姓名與護照上記載的姓名不一致，將無法於日本國內的指定地點兌換。下訂時請確認姓名拼音等是否正確。",
        "兒童的年齡限制以旅客購票當日為準，換票時請出示兒童的護照等證件以證明兒童年齡。",
        "未滿 6 歲幼兒可不佔位免費搭乘，不需購買周遊券。",
        "當符合以下的狀況時，未滿 6 歲之幼兒仍需要購買兒童周遊券：",
        " ① 幼兒單獨使用普通車廂指定座席（普通車指定席）的情況",
        "② 幼兒獨自旅行的情況",
        "＊詳情請至官網確認",
      ],
      // 體驗活動
      noticeLists3: [
        "適用者：",
        "年滿3歲 ／ 90公分以上兒童",
        "幼稚園／國小 ／國中學生（憑證件）",
        "年齡 65歲以上（憑證件）",
        "愛心票適用者：（若需購買，請於現場購票）",
        "持有身心障礙手冊者，及陪同者1人 (憑證件)",
        "免費適用者：",
        "居民 (憑證件)",
        "每月一號 (憑證件)",
        "兒童 90公分以下，或未滿3歲 (憑健保卡)",
        "準新郎、準新娘、攝影工作人員 (拍攝婚紗照,需預約)",
        "比丘、比丘尼、牧師、神父、修女 (憑證件)",
      ],
      //觀光行程
      noticeLists4: [
        "費用包含:  入園門票，行程體驗券",

        "不包含:  餐飲，個人消費，交通費，其他未提及消費",
      ],
      // 下方三圖片
      Imgs: [
        {
          Content:
            "► 冬の水族館戀愛物語：告白金句拿鐵，療癒的海豹拉花與暖呼呼的飲品溫暖你的心",
          src: "",
        },
        {
          Content:
            "► 復刻未來．AI 海洋名畫特展展覽內容：『Microplastic Globe_化身水晶球的未來海洋』",
          src: "",
        },
        {
          Content:
            "► WeeeePark 主打新都會型水族館，13 大主題展區帶你沉浸奇幻無比的水生世界",
          src: "",
        },
      ],
      ProductDetail: {
        type: "",
        city: "",
        price: 0,
        name: "",
        Text: "",
        address: "",
        comments: 0,
        time: 100,
      },
      modalPeople: 1,
      modalTotal: 0,
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
      commentlength: 0,
      comments: [1, 2, 3, 4],
      commentID: "",
      ProductDetail_breadcrumb: "",
    };
  },
  methods: {
    // ---------------開闔商品說明---------------
    open() {
      this.openCtrlnone = !this.openCtrlnone;
      this.openCtrlnone == false
        ? (this.operate = "收起商品說明 ")
        : (this.operate = "看完整商品說明");
      this.openCtrlnone == false
        ? (this.faAngle = "up")
        : (this.faAngle = "down");
    },
    // ---------------橘心---------------
    heart_click() {
      this.ajax_heart();
      if (this.faHeart == "solid") {
        this.faHeart = "regular";
        _this.$refs.heartshow.classList.remove("liked");
        Swal.fire("已取消收藏");
      } else {
        this.faHeart = "solid";
        _this.$refs.heartshow.classList.add("liked");
        Swal.fire("已加入收藏");
      }
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
      this.operate = "收起商品說明";
      this.faAngle = "up";
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
    // ---------------固定框四選項變色---------------
    field_mark() {
      let pd = this.$refs.fieldDatas[0].style;
      let pn = this.$refs.fieldDatas[1].style;
      let pa = this.$refs.fieldDatas[2].style;
      let pv = this.$refs.fieldDatas[3].style;
      let weblack = "#000";
      let weblue = "#4484ce";
      let botCardTop = this.$refs.botCard.offsetTop;
      let fixedfield2 = this.$refs.field2.style;
      let directions = this.$refs.directionsGroup.classList;
      document.addEventListener("scroll", function () {
        ScrollPosition = window.scrollY;

        if (directions.contains("productdetail-none")) {
          ScrollPosition = ScrollPosition + 2026;
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
        if (ScrollPosition >= 800) {
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
        if (ScrollPosition >= 3050) {
          pa.color = weblack;
          pv.color = weblack;
          pd.color = weblack;
          pn.color = weblue;
          pn.borderLeft = "3px solid #4484CE";
          pd.borderLeft = "0";
          pv.borderLeft = "0";
          pa.borderLeft = "0";
        }
        if (ScrollPosition >= 3500) {
          pn.color = weblack;
          pv.color = weblack;
          pd.color = weblack;
          pa.color = weblue;
          pa.borderLeft = "3px solid #4484CE";
          pd.borderLeft = "0";
          pv.borderLeft = "0";
          pn.borderLeft = "0";
        }
        if (ScrollPosition >= 4007) {
          pn.color = weblack;
          pa.color = weblack;
          pd.color = weblack;
          pv.color = weblue;
          pv.borderLeft = "3px solid #4484CE";
          pd.borderLeft = "0";
          pa.borderLeft = "0";
          pn.borderLeft = "0";
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
    // ---------------RWD隱藏---------------
    display_scroll() {
      let field1Style = this.$refs.field1.style;
      let commentref = this.$refs.commentref.offsetTop;

      let browserWidth = window.innerWidth;
      document.addEventListener("scroll", function () {
        let ScrollPosition = window.scrollY;
        window.addEventListener("resize", function () {
          browserWidth = window.innerWidth;
        });
        if (ScrollPosition > commentref - 500 && browserWidth < 768) {
          field1Style.display = "none";
        } else {
          field1Style.display = "flex";
        }
      });
    },
    display_scroll2() {
      let field2Style = this.$refs.field2.style;
      let commentref = this.$refs.commentref.offsetTop;
      let browserWidth = window.innerWidth;
      document.addEventListener("scroll", function () {
        let ScrollPosition = window.scrollY;
        window.addEventListener("resize", function () {
          browserWidth = window.innerWidth;
        });
        if (ScrollPosition > commentref - 500 && browserWidth > 768) {
          field2Style.display = "none";
        } else {
          field2Style.display = "flex";
        }
      });
    },

    // ---------------日曆---------------
    time_fun() {
      jQuery("#datetimepicker").datetimepicker({
        format: "d.m.Y H:i",
        inline: true,
        lang: "ru",
        timepicker: false,
        minDate: 0,
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
    // ---------------結帳寫入sessionStorage---------------
    modal_checkout() {
      // let time = document.getElementById("datetimepicker").value;
      let time = this.$refs.timePicker.value;
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
      //   sessionStorage.setItem("圖片", this.Imgs[0].src);
      // sessionStorage.setItem("商品名稱", this.ProductDetail.name);
      // sessionStorage.setItem("日期", newDate);
      // sessionStorage.setItem("人數", this.modalPeople);
      // sessionStorage.setItem("單價", this.modalTotal);
      let productImgPath1 = this.Imgs[0].src;
      let productName = this.ProductDetail.name;
      let cartStartDay = newDate;
      let quantity = this.modalPeople;
      let productPrice = this.modalTotal;
      let productID = this.ProductDetail.productID;
      let checkout_data = [
        {
          productID: productID,
          productImgPath1: productImgPath1,
          productName: productName,
          cartStartDay: cartStartDay,
          quantity: quantity,
          productPrice: productPrice,
        },
      ];
      sessionStorage.setItem("checkout_data", JSON.stringify(checkout_data));
      // let test=sessionStorage.getItem("productList");
      // console.log(JSON.parse(test));
      window.location.href = "./payment.html";
    },
    // ---------------消失底下btn---------------
    cle_check() {
      this.field1Show = false;
    },
    // ---------------出現底下btn---------------
    field1_showbtn() {
      this.field1Show = true;
    },
    // ---------------視窗寬度變動---------------
    winSize_watch() {
      _this = this;
      window.addEventListener("resize", function () {
        this.winSize = window.innerWidth;
        // console.log(this.winSize);
        if (this.winSize <= 768) {
          console.log(this.winSize);
          _this.display_scroll();
        }
        if (this.winSize >= 768) {
          _this.display_scroll2();
          console.log(this.winSize);
        }
      });
    },
    // ---------------ajax---------------
    ajax_post() {
      _this = this;
      let num = 3;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      if (num == null) {
        num = 1;
      }
      $.ajax({
        method: "POST",
        url: "php/ProductDetail.php",
        data: {
          productid: num,
        },
        dataType: "json",
        success: function (response) {
          console.log(response);

          if (response.length !== 0) {
            response.forEach((e) => {
              let arr1 = [
                {
                  Content: e.ProductImgContent1,
                  src: e.ProductImgPath1,
                },
                {
                  Content: e.ProductImgContent2,
                  src: e.ProductImgPath2,
                },
                {
                  Content: e.ProductImgContent3,
                  src: e.ProductImgPath3,
                },
              ];
              obj2 = {
                type: e.ProductType,
                city: e.Location,
                price: e.ProductPrice,
                name: e.ProductName,
                Text: e.ProductText,
                address: e.Location,
                time: 100,
                productID: e.ProductID,
              };
              if (e.ProductType == "viewpointticket") {
                _this.noticeLists = _this.noticeLists1;
                _this.ProductDetail_breadcrumb = "景點門票";
              } else if (e.ProductType == "transticket") {
                _this.noticeLists = _this.noticeLists2;
                _this.ProductDetail_breadcrumb = "交通票卡";
              } else if (e.ProductType == "experience") {
                _this.noticeLists = _this.noticeLists3;
                _this.ProductDetail_breadcrumb = "體驗活動";
              } else if (e.ProductType == "sightseeing") {
                _this.noticeLists = _this.noticeLists4;
                _this.ProductDetail_breadcrumb = "觀光行程";
              }

              _this.modalTotal = e.ProductPrice;
              _this.Imgs = arr1;
              _this.ProductDetail = obj2;
              console.log(_this.noticeLists1);
            });
            _this.$nextTick(function () {
              _this.productdetail_slideshow();
              _this.commentfun();
              _this.display_scroll();
              _this.display_scroll2();
            });
          } else {
            alert("找不到相關商品");
            window.location.href = "./index.html";
          }
        },
        error: function (exception) {
          // alert("發生錯誤: " + exception.status);
        },
      });
    },
    // ---------------加入收藏---------------
    ajax_heart() {
      _this = this;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      $.ajax({
        method: "POST",
        url: "php/ProductDetailHeart.php",
        data: {
          PID: num,
        },
        dataType: "json",
        success: function (response) {
          // console.log(response);
          if (response == false) {
            _this.faHeart = "regular";
          } else if (response == true) {
            _this.faHeart = "solid";
          } else {
            _this.faHeart = "regular";
            alert("請先登入再收藏");
            window.location.href = "./login.html";
          }
        },
        error: function (exception) {},
      });
    },
    // ---------------HeartShow---------------
    ajax_heart_show() {
      _this = this;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      $.ajax({
        method: "POST",
        url: "php/ProductDetailHeartShow.php",
        data: {
          PID: num,
        },
        dataType: "json",
        success: function (response) {
          if (response == 0) {
            _this.$refs.heartshow.classList.remove("liked");
            _this.faHeart = "regular";
          } else if (response == 1) {
            _this.$refs.heartshow.classList.add("liked");
            _this.faHeart = "solid";
          }
        },
        error: function (exception) {},
      });
    },
    // ---------------加入購物車---------------
    ajax_ShoppingCart() {
      _this = this;
      let num;
      let people = _this.modalPeople;
      let total = _this.modal_pricetotal;
      let productNumber = _this.ProductDetail.productNumber;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      $.ajax({
        method: "POST",
        url: "php/ProductDetailShoppingCart.php",
        data: {
          PID: num,
          QTY: people,
          TAL: total,
        },
        dataType: "json",
        success: function (response) {
          console.log(response);
          if (response == "NotFound") {
            alert("請先登入再加入購物車");
            window.location.href = "./login.html";
          }
        },
        error: function (exception) {},
      });
      this.cartswal();
    },
    // ---------------評論---------------
    ajax_Comment() {
      _this = this;
      let num = 3;
      let comment = 0;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      _this.commentID = num;
      comment = urlParams.get("comment");
      if (num == null) {
        num = 1;
      }
      if (comment == null) {
        comment = 1;
      }
      $.ajax({
        method: "POST",
        url: "php/ProductDetailComment.php",
        data: {
          pid: num,
          comment: comment,
        },
        dataType: "json",
        success: function (response) {
          arrcom = [];
          objcom = {};
          console.log(response);
          response.forEach(function (item) {
            if (item.ProductCommentScore == 1) {
              item.ProductCommentScore = "★☆☆☆☆";
            } else if (item.ProductCommentScore == 2) {
              item.ProductCommentScore = "★★☆☆☆";
            } else if (item.ProductCommentScore == 3) {
              item.ProductCommentScore = "★★★☆☆";
            } else if (item.ProductCommentScore == 4) {
              item.ProductCommentScore = "★★★★☆";
            } else if (item.ProductCommentScore == 5) {
              item.ProductCommentScore = "★★★★★";
            }
            var time_str = item.ProductCommentTime;
            var t = time_str.substr(0, 10);
            objcom = {
              pic: item.MemberImg,
              name: item.FullName,
              star: item.ProductCommentScore,
              comment: item.ProductCommentText,
              time: t,
            };
            arrcom.push(objcom);
          });
          _this.messages = arrcom;
          // _this.commentlength = response.length;
          _this.commentlength = 10;
        },
        error: function (exception) {},
      });
    },
    // ---------------點擊購物車後觸發---------------
    cartswal() {
      $("#peopleModal").modal("hide");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "已成功加入購物車 ♥",
      });
      header.get_member_information();
    },
    // ---------------點擊分頁後觸發---------------
    commentfun() {
      let comment = 0;
      let urlParams = new URLSearchParams(window.location.search);
      comment = urlParams.get("comment");
      if (comment == 1 || comment == 2 || comment == 3 || comment == 4) {
        let pv = this.$refs.Review.offsetTop;
        window.scrollTo({
          top: pv - 100,
          left: 0,
          behavior: "smooth",
        });
      }
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
    // this.display_scroll();
    this.time_fun();
    this.winSize_watch();
    this.ajax_post();
    this.ajax_heart_show();
    this.ajax_Comment();
  },
});
app.mount("#app");
app.component("product-slide-vue", window.my_component);
