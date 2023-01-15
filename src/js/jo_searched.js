let app1 = Vue.createApp({
  data() {
    return {
      jo_list: [],
      keyword: "",
      show_lightbox: false,
      show_select_bar: false,
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
      count: 0,
    };
  },
  created() {
    window.addEventListener("scroll", this.btn_show);
    this.change_location_selected();
    this.getdata_jo_list_searched();
  },
  methods: {
    change_location_selected() {
      let urlParams = new URLSearchParams(window.location.search);
      let loc = urlParams.get("loc");
      if (loc == "%") {
        this.location_selected = "全部地區";
      } else {
        this.location_selected = loc;
      }
    },
    getdata_jo_list_searched() {
      this.jo_list = [];
      let count = 0;
      let _this = this;
      let urlParams = new URLSearchParams(window.location.search);
      let loc = urlParams.get("loc");
      let key = urlParams.get("key");
      console.log(loc);
      console.log(key);
      $.ajax({
        method: "POST",
        url: "./php/jo_searched.php",
        data: {
          loc: loc,
          key: key,
        },
        dataType: "json",
        success: function (response) {
          response.forEach((element) => {
            element.JoStartDate = element.JoStartDate.substr(0, 16);
            _this.jo_list.push(element);
            count++;
          });

          _this.count = count;
          // console.log(response);
          // console.log(_this.jo_list);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
      // this.count = this.jo_list.length
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    btn_show() {
      let btn = $("#jo_button");
      let btn_bottom = document.querySelector("footer").offsetTop;
      // console.log(btn_bottom);
      // console.log(window.scrollY);
      if (screen.width <= 768) {
        if (window.scrollY > 0 && window.scrollY <= btn_bottom - 750) {
          btn.addClass("show");
        } else if (window.scrollY <= 0) {
          btn.removeClass("show");
        } else if (window.scrollY >= btn_bottom - 750) {
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
      // console.log(item);
      this.show_lightbox = false;
      this.show_select_bar = false;
      let body = document.querySelector("body");
      this.location_selected = item;
      body.classList.remove("stop_scroll");
    },
  },
});
app1.mount(".app1");
