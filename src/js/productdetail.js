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
      ],
      // 地圖
      googleMap: ``,
      googleMap1: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115641.9423246046!2d121.46325447841886!3d25.074404507505236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aba4c7b541bd%3A0x64bb871eceec226d!2z6Ie65YyX5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675161165992!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap2: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7295.116120200392!2d120.68612064999999!3d23.905285099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469321f9f2c156d%3A0x3f0a65672ed2ae4b!2z5Y2X5oqV57ij5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159650166!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap3: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233474.13378524987!2d121.54827277268583!3d23.88843640774047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34689fd3acc6d975%3A0x6d731cb7d9f51362!2z6Iqx6JOu57ij5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159676234!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap4: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117109.66028413878!2d120.30289754481107!3d23.472116923503282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5ZiJ576p5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159694212!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap5: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8584078886997!2d120.18299001440326!3d22.99223362323215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e767255b8c6c7%3A0x33d1b3608ecbd5d2!2zNzA45Y-w5Y2X5biC5a6J5bmz5Y2A5Y-w5Y2X5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159711195!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap6: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116477.91319988207!2d120.60702710922936!3d24.17401972071896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w5Lit5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159729587!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap7: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7358.662082968747!2d121.14305762270635!3d22.75309278430702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5Y-w5p2x5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159751401!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap8: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d115993.09901182125!2d121.7020180703436!3d24.699939060370937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5a6c6Jit5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159766129!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap9: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3681.223528353943!2d120.4860036143975!3d22.68272133463709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5bGP5p2x5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159783658!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap10: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116642.34096033627!2d120.39195970546945!3d23.993193681926506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5b2w5YyW5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159797320!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap11: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.821023829719!2d121.46347696347655!3d25.012276300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a81ed5976a5b%3A0xb834c6cfda4289ad!2z5paw5YyX5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159827312!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap12: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.1982114728444!2d121.29887961444241!3d24.99337994607379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f04c6c50adb%3A0xbfb45e5968b03888!2z5qGD5ZyS5biC5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159845224!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap13: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116118.55945140038!2d120.68890306250003!3d24.564854999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469ac0eac6a59f1%3A0x837962129d708aac!2z6IuX5qCX57ij5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159866410!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap14: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28650.7948758799!2d119.91854644891778!3d26.152749363652987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6YCj5rGf5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159952731!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap15: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.4000998744973!2d118.31458552695314!3d24.436900300000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3414a30726fe3741%3A0x9f9d143a4d54380!2z6YeR6ZaA57ij5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159968055!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap16: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.348799341344!2d120.52413901441676!3d23.69923509664715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb7e22185096b%3A0x4df53d0711ed3803!2z6Zuy5p6X57ij5pS_5bqc!5e0!3m2!1szh-TW!2stw!4v1675159981219!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      googleMap17: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8931062977103!2d120.30987381439643!3d22.62046653691383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e049b9f1760a5%3A0x344465d114abb19!2z6auY6ZuE5biC5pS_5bqcIOWbm-e2reihjOaUv-S4reW_gw!5e0!3m2!1szh-TW!2stw!4v1675160038572!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
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
        "【費用包含】",
        "入園門票，行程體驗券",
        "【不包含】",
        "餐飲，個人消費，交通費，其他未提及消費",
        // "【台灣籍限定】",
        // "限定優惠：每票最多可攜帶一位身高 115 公分以下兒童免費入場",
        // "備註：成人及兒童兌換時需出示每位中華民國有效身分證件/健保卡/護照/居留證/健保卡/戶口名簿（擇一)",
        // "【不分國籍】",
        // "限定優惠：身高 115 公分以下兒童免費入場，須由一位成人陪同",
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
      commentscore: 0,
      comments: [1, 2, 3, 4],
      commentID: "",
      ProductDetail_breadcrumb: "",
      sorts: [
        { num: 1, text: "最新日期" },
        { num: 2, text: "最舊日期" },
        { num: 3, text: "最高至最低分" },
        { num: 4, text: "最低至最高分" },
      ],
      commentscorestar1: 0,
      commentscorestar2: true,
      commentscorestar3: 0,
      tempstar: [],
      sortnum: 1,
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
    heart_click(e) {
      if (e == false) {
        this.faHeart = "regular";
        Swal.fire("已取消收藏");
      } else {
        this.faHeart = "solid";
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
      setTimeout(() => {
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
      }, 700);
    },

    display_scroll2() {
      setTimeout(() => {
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
      }, 500);
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
    // ---------------結帳判斷登入---------------
    modal_checkout() {
      _this = this;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      $.ajax({
        method: "POST",
        url: "php/ProductDetailCheckOut.php",
        data: {},
        dataType: "json",
        success: function (response) {
          // console.log(response);
          if (response == false) {
            alert("請先登入再購買");
            window.location.href = "./login.html";
          } else if (response == true) {
            _this.checkout_fun();
          }
        },
        error: function (exception) {},
      });
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
        if (this.winSize <= 768) {
          _this.display_scroll();
          // console.log(this.winSize);
        }
        if (this.winSize >= 768) {
          _this.display_scroll2();

          // console.log(this.winSize);
        }
        if (this.winSize >= 400 && this.winSize <= 600) {
          _this.ajax_heart_show();
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
          // console.log(response);

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
              document.title = `${e.Location}｜${e.ProductName} - Weeee!`;
              // console.log(_this.noticeLists1);
            });
            _this.$nextTick(function () {
              _this.productdetail_slideshow();
              _this.ajax_Comment();
              // _this.comment_fun();
              _this.display_scroll();
              _this.display_scroll2();
              _this.google_fun();
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
            _this.heart_click(response);
          } else if (response == true) {
            _this.heart_click(response);
          } else {
            // _this.faHeart = "regular";
            alert("請先登入再收藏");
            window.location.href = "./login.html";
            setTimeout(() => {
              _this.$refs.heartshow.classList.remove("liked");
            }, 1000);
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
      let time = this.$refs.timePicker.value;
      let newDate = "";
      if (time == "") {
        let OldToday = new Date(+new Date() + 8 * 3600 * 1000);
        newDate = OldToday.toISOString().split("T")[0];
        // console.log(OldToday);
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
      // console.log(newDate);
      let num;
      let people = _this.modalPeople;
      let total = _this.modal_pricetotal;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      $.ajax({
        method: "POST",
        url: "php/ProductDetailShoppingCart.php",
        data: {
          PID: num,
          QTY: people,
          TAL: total,
          DATE: newDate,
        },
        dataType: "json",
        success: function (response) {
          // console.log(response);
          if (response == "NotFound") {
            alert("請先登入再加入購物車");
            window.location.href = "./login.html";
          } else if (response == "ok") {
            _this.cart_swal();
          }
        },
        error: function (exception) {},
      });
    },
    // ---------------評論---------------
    ajax_Comment(e) {
      _this = this;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      let typee = typeof e;
      if (typee == "undefined") {
        history.replaceState("", "", `productdetail.html?id=${num}`);
      } else {
        history.replaceState(
          "",
          "",
          `productdetail.html?id=${num}&comment=${e}`
        );
      }
      this.page_judge();
      typee == "undefined" ? (e = 1) : e;
      _this.commentID = num;
      num == null ? (num = 1) : (num = num);
      comment == null ? (comment = 1) : (comment = e);
      $.ajax({
        method: "POST",
        url: "php/ProductDetailComment.php",
        async: false,
        data: {
          pid: num,
          comment: comment,
        },
        dataType: "json",
        success: function (response) {
          arrcom = [];
          objcom = {};
          temp=0;
          // console.log(response);
          response.forEach(function (item) {
            temp=item.ProductCommentScore;
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
              nostar:5-temp,

            };
            arrcom.push(objcom);
          });
          _this.messages = arrcom;
          _this.sortfun(_this.sortnum);
        },
        error: function (exception) {},
      });
    },
    // ---------------點擊購物車後觸發---------------
    cart_swal() {
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
    // ---------------點擊分頁後觸發滑動---------------
    comment_fun() {
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
    // ---------------結帳寫入sessionstorage---------------
    checkout_fun() {
      let time = this.$refs.timePicker.value;
      let newDate = "";
      if (time == "") {
        let OldToday = new Date(+new Date() + 8 * 3600 * 1000);
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
      let productImgPath1 = this.Imgs[0].src;
      let productName = this.ProductDetail.name;
      let cartStartDay = newDate;
      let quantity = this.modalPeople;
      let productPrice = this.modalTotal;
      let productID = this.ProductDetail.productID;
      let checkout_data = [
        {
          ProductID: productID,
          ProductImgPath1: productImgPath1,
          ProductName: productName,
          CartStartDay: cartStartDay,
          Quantity: quantity,
          ProductPrice: productPrice,
        },
      ];
      sessionStorage.setItem("checkout_data", JSON.stringify(checkout_data));
      window.location.href = "./payment.html";
    },
    // ---------------判斷分頁---------------
    page_judge() {
      let urlParams = new URLSearchParams(window.location.search);
      comment = urlParams.get("comment");
      if (comment == null) {
        comment = 1;
      }
      comment = comment - 1;
      let page = this.$refs.commentA;
      page.forEach(function (e, item) {
        page[item].classList.remove("commentAct");
      });
      page[comment].classList.add("commentAct");
      // console.log(page);
      this.comment_fun();
    },
    // ---------------評論筆數---------------
    commentNum() {
      _this = this;
      let num = 0;
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      function roundToTwo(num) {
        return +(Math.round(num + "e+1") + "e-1");
      }
      $.ajax({
        method: "POST",
        url: "php/ProductDetailNum.php",
        async: false,
        data: {
          pid: num,
        },
        dataType: "text",
        success: function (response) {
          // console.log(response);
          toarr = response.split(",");
          let result = toarr.map(function (x) {
            return parseFloat(x, 10);
          });
          // console.log(result[0]);
          // console.log(result[1]);
          let newresult = Math.ceil(result[0] / 3);
          let arrtemp = [];
          for (i = 0; i < newresult; i++) {
            arrtemp.push(i + 1);
          }
          _this.comments = arrtemp;
          _this.commentlength = result[0];
          // 分數後一位小數點
          _this.commentscore = roundToTwo(result[1]);
          // 實星
          _this.commentscorestar1 = parseInt(_this.commentscore);
          // 半星
          if (_this.commentscore % 1 == 0) {
            _this.commentscorestar2 = false;
          }
          // 空星
          let what = 5 - _this.commentscore;
          if (what >= 1 && what < 2) {
            _this.commentscorestar3 = 1;
          }
          if (what >= 2 && what < 3) {
            _this.commentscorestar3 = 2;
          }
          if (what >= 3 && what < 4) {
            _this.commentscorestar3 = 3;
          }
          if (what >= 4 && what < 5) {
            _this.commentscorestar3 = 4;
          }
          if (what == 5) {
            _this.commentscorestar3 = 5;
          }
          if (what < 1) {
            _this.commentscorestar3 = 0;
          }
        },

        error: function (exception) {},
      });
    },
    // ---------------評論排序---------------
    sortfun(e) {
      this.sortnum = Number(e);
      let urlParams = new URLSearchParams(window.location.search);
      num = urlParams.get("id");
      comment = urlParams.get("comment");
      // sort = urlParams.get("sort");
      comment == null ? (comment = 1) : (comment = comment);

      $.ajax({
        method: "POST",
        url: "php/ProductDetailComment.php",
        async: false,
        data: {
          pid: num,
          comment: comment,
          sort: Number(e),
        },
        dataType: "json",
        success: function (response) {
          arrcom = [];
          objcom = {};
          // console.log(response);
          temp=0;
          response.forEach(function (item) {
            temp=item.ProductCommentScore;
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
              nostar:5-temp,
            };
            arrcom.push(objcom);
          });
          _this.messages = arrcom;
        },

        error: function (exception) {},
      });
    },
    // ---------------評論按鈕---------------
    comment_color(e) {
      let temp = e.target.parentNode.childNodes;
      for (i = 1; i <= 4; i++) {
        temp[i].style.backgroundColor = "#ffffff";
        temp[i].style.color = "#000000";
        // console.log(temp);
      }
      e.target.style.backgroundColor = "#f19f4d";
      e.target.style.color = "#ffffff";
      // console.log(e.target);

      document.getElementsByClassName(
        "productreview-btn"
      )[0].style.backgroundColor = "#ffffff";
    },
    comment_onebtn() {
      this.$refs.sortA[0].style.backgroundColor = "#f19f4d";
      this.$refs.sortA[0].style.color = "#ffffff";
    },
    google_fun() {
      if (this.ProductDetail.address == "台北") {
        this.googleMap = this.googleMap1;
      }
      if (this.ProductDetail.address == "南投") {
        this.googleMap = this.googleMap2;
      }
      if (this.ProductDetail.address == "花蓮") {
        this.googleMap = this.googleMap3;
      }
      if (this.ProductDetail.address == "嘉義") {
        this.googleMap = this.googleMap4;
      }
      if (this.ProductDetail.address == "台南") {
        this.googleMap = this.googleMap5;
      }
      if (this.ProductDetail.address == "台中") {
        this.googleMap = this.googleMap6;
      }
      if (this.ProductDetail.address == "台東") {
        this.googleMap = this.googleMap7;
      }
      if (this.ProductDetail.address == "宜蘭") {
        this.googleMap = this.googleMap8;
      }
      if (this.ProductDetail.address == "屏東") {
        this.googleMap = this.googleMap9;
      }
      if (this.ProductDetail.address == "彰化") {
        this.googleMap = this.googleMap10;
      }
      if (this.ProductDetail.address == "新北") {
        this.googleMap = this.googleMap11;
      }
      if (this.ProductDetail.address == "桃園") {
        this.googleMap = this.googleMap12;
      }
      if (this.ProductDetail.address == "苗栗") {
        this.googleMap = this.googleMap13;
      }
      if (this.ProductDetail.address == "連江") {
        this.googleMap = this.googleMap14;
      }
      if (this.ProductDetail.address == "金門") {
        this.googleMap = this.googleMap15;
      }
      if (this.ProductDetail.address == "雲林") {
        this.googleMap = this.googleMap16;
      }
      if (this.ProductDetail.address == "高雄") {
        this.googleMap = this.googleMap17;
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
    this.ajax_post();
    this.ajax_heart_show();
    this.page_judge();
    this.field_mark();
    this.product_list();
    this.time_fun();
    this.winSize_watch();
    this.commentNum();
    this.comment_onebtn();
  },
});
app.mount("#app");
app.component("product-slide-vue", window.my_component);
