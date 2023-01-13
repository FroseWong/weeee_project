let app1 = Vue.createApp({
    data() {
      return {
        show_lightbox: false,
        show_select_bar: false,
        keyword: "",
        jo_list_hot: [],
        jo_list_end: [],
        jo_list_new: [],
        show_jo: true,
        slick_start: false,
        AllCitys: [
          "全部地區",
          "基隆",
          "台北",
          "新北",
          "桃園",
          "新竹",
          "苗栗",
          "台中",
          "彰化",
          "南投",
          "雲林",
          "嘉義",
          "台南",
          "高雄",
          "屏東",
          "台東",
          "花蓮",
          "其他",
        ],
        location_selected: "全部地區",

      };
    },
    created() {
      window.addEventListener("scroll", this.btn_show);
      // this.change_location_selected();
      this.show__function();
      // this.getdata_jo_list_hot();
    },
    methods: {
      jump_jo_detail(e){
       console.log(e);
        
      },
      getdata_jo_list_hot() {
        this.jo_list_hot = [];
        let _this = this;
        $.ajax({
          method: "POST",
          url: "./php/jo_index.php",
          data: {
            type: "hot",
          },
          dataType: "json",
          success: function (response) {
            response.forEach((element) => {
              _this.jo_list_hot.push(element);
            });
            _this.$nextTick(function () {
              _this.jo_list_slick_hot();
            });
          },
          error: function (exception) {
            alert("數據載入失敗: " + exception.status);
          },
        });
      },
      getdata_jo_list_new() {
        this.jo_list_new = [];
        let _this = this;
        $.ajax({
          method: "POST",
          url: "./php/jo_index.php",
          data: {
            type: "new",
          },
          dataType: "json",
          success: function (response) {
            response.forEach((element) => {
              _this.jo_list_new.push(element);
            });
            _this.$nextTick(function () {
              _this.jo_list_slick_new();
            });
          },
          error: function (exception) {
            alert("數據載入失敗: " + exception.status);
          },
        });
      },
      getdata_jo_list_end() {
        this.jo_list_end = [];
        let _this = this;
        $.ajax({
          method: "POST",
          url: "./php/jo_index.php",
          data: {
            type: "end",
          },
          dataType: "json",
          success: function (response) {
            response.forEach((element) => {
              _this.jo_list_end.push(element);
            });
            _this.$nextTick(function () {
              _this.jo_list_slick_end();
            });
          },
          error: function (exception) {
            alert("數據載入失敗: " + exception.status);
          },
        });
      },
      show__function() {
        this.getdata_jo_list_hot();
        this.getdata_jo_list_new();
        this.getdata_jo_list_end();
      },
      btn_show() {
        let btn = $("#jo_button");
        if (screen.width <= 768) {
          if (window.scrollY > 0 && window.scrollY <= 850) {
            btn.addClass("show");
          } else if (window.scrollY <= 0) {
            btn.removeClass("show");
          } else if (window.scrollY >= 850) {
            btn.removeClass("show");
          }
        } else {
          if (window.scrollY > 300) {
            btn.addClass("show");
          } else {
            btn.removeClass("show");
          }
        }
      },
      jo_list_slick_hot() {
        $(".jo-list_hot").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,

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
      jo_list_slick_end() {
        $(".jo-list_end").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,

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
      jo_list_slick_new() {
        $(".jo-list_new").slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,

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
      jump_jo_searched() {
        let searchedbox = document.querySelector(".searchbox");
        searchedbox_value = searchedbox.querySelector("input").value;
        console.log(searchedbox_value);
        if (
          searchedbox_value.length > 0 ||
          this.location_selected != "全部地區"
        ) {
          let loc = this.location_selected;
          let key = this.keyword;
          if (loc == "全部地區") {
            loc = "%";
            let url = "jo_searched.html" + "?loc=" + loc + "&key=" + key;
            window.location.assign(url);
          } else {
            let url = "jo_searched.html" + "?loc=" + loc + "&key=" + key;
            window.location.assign(url);
          }
        }
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      },
      openSelectbar() {
        this.scrollToTop();
        this.show_lightbox = true;
        this.show_select_bar = true;
        let body = document.querySelector("body");
        body.classList.add("stop_scroll");
      },
      closeSelectbar() {
        this.show_lightbox = false;
        this.show_select_bar = false;
        let body = document.querySelector("body");
        body.classList.remove("stop_scroll");
      },
      changeSelectbar(item) {
        console.log(item);
        this.show_lightbox = false;
        this.show_select_bar = false;
        let body = document.querySelector("body");
        this.location_selected = item;
        body.classList.remove("stop_scroll");
      },
    },
    mounted() {
      // setTimeout(this.jo_list_slick(),3000)
    },
    updated() {},
  });
  app1.mount(".app1");