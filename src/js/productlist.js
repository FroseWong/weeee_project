const { createApp } = Vue;

createApp({
  data() {
    return {
      pagenum: 1,
      start: 0,
      end: 5,
      cardlist: [],
      checked: {
        select_secondType: [],
        select_city: [],
        select_price: [],
      },

      prices: [
        "TWD 499 以下",
        "TWD 500~999",
        "TWD 1000~1499",
        "TWD 1500~1999",
        "TWD 2000以上",
      ],
      categorys: ["主題樂園", "水族館", "博物館", "美術館"],
      AllCitys: [
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
        "宜蘭",
        "澎湖",
      ],
      citylistnew: [],
      cityshow: false,
      memberID: "", // Frose
      favorProductList: [], // Frose
    };
  },
  created() {
    window.addEventListener("resize", this.resize_adjust, true);
    this.getdata();
    console.log("aaa");
    this.memberID = header.memberID; // Frose
  },
  computed: {
    computedList() {
      let newcardlist1 = [];
      let newcardlist2 = [];
      let newcardlist3 = [];
      let newcardlist4 = [];
      if (this.checked.select_secondType.length == 0) {
        newcardlist1 = this.cardlist;
      } else {
        newcardlist1 = this.filters(
          this.cardlist,
          this.checked.select_secondType
        );
      }
      if (this.checked.select_city.length == 0) {
        newcardlist2 = newcardlist1;
      } else {
        newcardlist2 = this.filters(newcardlist1, this.checked.select_city);
      }
      if (this.checked.select_price.length == 0) {
        newcardlist3 = newcardlist2;
      } else {
        newcardlist3 = this.filters(newcardlist2, this.checked.select_price);
      }
      console.log(newcardlist3);
      let citys = new Set();
      let pricestag = new Set();
      let type = new Set();
      newcardlist3.forEach((element) => {
        citys.add(element.Location);
        pricestag.add(element.priceTag);
        type.add(element.ProductSecondType);
      });
      // newcardlist4 = newcardlist3.slice(this.start,this.end)
      //   this.AllCitys = citys;
      //   this.prices = pricestag;
      //   this.categorys = type;
      return newcardlist3;
    },
    computedList2() {
      return this.computedList.slice(this.start, this.end);
    },
    totalpage() {
      let arr = [];
      let totalpage = Math.ceil(this.computedList.length / 5);
      for (i = 0; i < totalpage; i++) {
        arr.push(i + 1);
      }
      return arr;
    },
  },
  watch: {
    totalpage: function (newValue, oldValue) {
      this.pagenum = 1;
    },
    pagenum: function (newValue, oldValue) {
      this.start = (newValue - 1) * 5;
      this.end = newValue * 5;
      console.log(oldValue, newValue);
    },
  },
  methods: {
    find_ssort() {
      let urlParams = new URLSearchParams(window.location.search);
      let msort = urlParams.get("msort");
      let ssort = urlParams.get("ssort");
      console.log(ssort);
      if (msort == "ss") {
        switch (true) {
          case ssort == "fr":
            this.checked.select_secondType.push("朋友行程");
            break;
          case ssort == "fa":
            this.checked.select_secondType.push("家庭行程");
            break;
          case ssort == "co":
            this.checked.select_secondType.push("情侶行程");
            break;
          case ssort == "pe":
            this.checked.select_secondType.push("寵物行程");
            break;
        }
      }
      if (msort == "ep") {
        switch (true) {
          case ssort == "hm":
            this.checked.select_secondType.push("手作體驗");
            break;
          case ssort == "ow":
            this.checked.select_secondType.push("水上活動");
            break;
          case ssort == "fa":
            this.checked.select_secondType.push("觀光農場");
            break;
          case ssort == "et":
            this.checked.select_secondType.push("極限運動");
            break;
        }
      }
      if (msort == "tt") {
        switch (true) {
          case ssort == "un":
            this.checked.select_secondType.push("無限暢遊卡");
            break;
          case ssort == "vp":
            this.checked.select_secondType.push("景點暢遊卡");
            break;
          case ssort == "tr":
            this.checked.select_secondType.push("交通暢遊卡");
            break;
          case ssort == "cl":
            this.checked.select_secondType.push("經典暢遊卡");
            break;
        }
      }
      if (msort == "vp") {
        switch (true) {
          case ssort == "th":
            this.checked.select_secondType.push("主題樂園");
            break;
          case ssort == "aq":
            this.checked.select_secondType.push("水族館");
            break;
          case ssort == "mu":
            this.checked.select_secondType.push("博物館");
            break;
          case ssort == "ar":
            this.checked.select_secondType.push("美術館");
            break;
        }
      }
    },
    ChangeCurrpage(e) {
      let num = Number(e.target.text);
      this.pagenum = num;
    },
    plus_minus(e){
      let currnum = this.pagenum 
      let total = this.totalpage.length
      if(e.target.classList.contains("minus") && currnum > 1){
        this.pagenum = this.pagenum - 1
      }else
      if(e.target.classList.contains("plus") && currnum < total){
        this.pagenum = this.pagenum + 1
      }
    },
    filters(list, select) {
      const result = new Set();
      const set = new Set(select);
      if (select == this.checked.select_city) {
        for (card of list) {
          if (set.has(card.Location)) {
            result.add(card);
          }
        }
      } else if (select == this.checked.select_secondType) {
        for (card of list) {
          if (set.has(card.ProductSecondType)) {
            result.add(card);
          }
        }
      } else if (select == this.checked.select_price) {
        for (card of list) {
          if (set.has(card.priceTag)) {
            result.add(card);
          }
        }
      }
      return Array.from(result);
    },
    getdata() {
      let urlParams = new URLSearchParams(window.location.search);
      let msort = urlParams.get("msort");
      let key = urlParams.get("key");
      const city = new Set();
      const catagory = new Set();
      let _this = this;
      this.AllCitys = [];
      this.categorys = [];

      $.ajax({
        method: "POST",
        url: "./php/Product_jerry.php",
        data: {
          msort: msort,
          key: key,
        },
        dataType: "json",
        success: function (response) {
          response.forEach((element) => {
            if (element.ProductText.length >= 80) {
              element.ProductText = element.ProductText.substr(0, 80) + "……";
            }
            switch (true) {
              case element.ProductPrice > 1999:
                element.priceTag = "TWD 2000以上";
                break;
              case element.ProductPrice > 1499:
                element.priceTag = "TWD 1500~1999";
                break;
              case element.ProductPrice > 999:
                element.priceTag = "TWD 1000~1499";
                break;
              case element.ProductPrice > 499:
                element.priceTag = "TWD 500~999";
                break;
              case element.ProductPrice <= 499:
                element.priceTag = "TWD 499 以下";
                break;
            }
            element.score = element.score.substr(0, 3);
            catagory.add(element.ProductSecondType);
            city.add(element.Location);
            _this.cardlist.push(element);
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
      // console.log(city);
      // console.log(Array.from(city));
      // city.forEach(element => {
      //   console.log(element)
      // });
      this.AllCitys = city;
      this.categorys = catagory;
    },
    selectfunction() {
      this.cardlist;
    },
    showproduct() {},
    // changeHeart(e) {
    //   e.stopPropagation();
    //   console.log(e.target);
    //   // let a = e.target;
    //   // let b = e.target.nextElementSibling
    //   //   ? e.target.nextElementSibling
    //   //   : e.target.previousElementSibling;
    //   // a.classList.add("hidden");
    //   // b.classList.remove("hidden");
    // },
    open_city(e) {
      this.cityshow = !this.cityshow;

      let path = e.path[0].childNodes[1].classList;
      if (path.contains("fa-circle-chevron-down")) {
        path.remove("fa-circle-chevron-down");
        path.add("fa-circle-chevron-up");
      } else {
        path.remove("fa-circle-chevron-up");
        path.add("fa-circle-chevron-down");
      }
    },
    filterCity(e) {
      e.target.querySelector("input").click();
      let city = e.path[0].childNodes[0];
      let text = e.path[0].textContent;
      if (city.checked == false) {
        city.checked = true;
        this.citylist.push(e.path[0].textContent);
      } else if (city.checked == true) {
        city.checked = false;
        this.citylist.forEach((e, index) => {
          if (e == text) {
            this.citylist.splice(index, 1);
          }
        });
      }
    },
    filterSort_bottom_to_top(e) {
      let arr = this.cardlist;
      const eitherSort = (arr = []) => {
        const sorter = (a, b) => {
          return +a.ProductPrice - +b.ProductPrice;
        };
        arr.sort(sorter);
      };
      eitherSort(arr);
      this.classList = arr;
      let epath = e.path[0].style;
      e.path[1].childNodes[1].style.backgroundColor = "#fff";
      e.path[1].childNodes[3].style.backgroundColor = "#fff";
      e.path[1].childNodes[4].style.backgroundColor = "#fff";
      e.path[1].childNodes[1].style.color = "#747774";
      e.path[1].childNodes[3].style.color = "#747774";
      e.path[1].childNodes[4].style.color = "#747774";
      epath.backgroundColor = "#4484ce";
      epath.color = "#fff";
    },
    filterSort_top_to_bottom(e) {
      let arr = this.cardlist;
      const eitherSort = (arr = []) => {
        const sorter = (a, b) => {
          return +b.ProductPrice - +a.ProductPrice;
        };
        arr.sort(sorter);
      };
      eitherSort(arr);
      this.classList = arr;
      let epath = e.path[0].style;
      e.path[1].childNodes[1].style.backgroundColor = "#fff";
      e.path[1].childNodes[2].style.backgroundColor = "#fff";
      e.path[1].childNodes[4].style.backgroundColor = "#fff";
      e.path[1].childNodes[1].style.color = "#747774";
      e.path[1].childNodes[2].style.color = "#747774";
      e.path[1].childNodes[4].style.color = "#747774";
      epath.backgroundColor = "#4484ce";
      epath.color = "#fff";
    },
    filterOrder(e) {
      let arr = this.cardlist;
      const eitherSort = (arr = []) => {
        const sorter = (a, b) => {
          return +b.ProductPurchased - +a.ProductPurchased;
        };
        arr.sort(sorter);
      };
      eitherSort(arr);
      this.classList = arr;
      let epath = e.path[0].style;
      e.path[1].childNodes[2].style.backgroundColor = "#fff";
      e.path[1].childNodes[3].style.backgroundColor = "#fff";
      e.path[1].childNodes[4].style.backgroundColor = "#fff";
      e.path[1].childNodes[2].style.color = "#747774";
      e.path[1].childNodes[3].style.color = "#747774";
      e.path[1].childNodes[4].style.color = "#747774";
      epath.backgroundColor = "#4484ce";
      epath.color = "#fff";
    },
    filterScore(e) {
      let arr = this.cardlist;
      const eitherSort = (arr = []) => {
        const sorter = (a, b) => {
          return +b.score - +a.score;
        };
        arr.sort(sorter);
      };
      eitherSort(arr);
      this.classList = arr;
      let epath = e.path[0].style;
      e.path[1].childNodes[1].style.backgroundColor = "#fff";
      e.path[1].childNodes[2].style.backgroundColor = "#fff";
      e.path[1].childNodes[3].style.backgroundColor = "#fff";
      e.path[1].childNodes[1].style.color = "#747774";
      e.path[1].childNodes[2].style.color = "#747774";
      e.path[1].childNodes[3].style.color = "#747774";
      epath.backgroundColor = "#4484ce";
      epath.color = "#fff";
    },
    filterPrice(e) {
      e.target.querySelector("input").click();
      let price = e.path[0].childNodes[0];
      let text = e.path[0].textContent;
      // if (price.checked == false) {
      //   price.checked = true;
      //   this.pricelist.push(e.path[0].textContent);
      // } else if (price.checked == true) {
      //   price.checked = false;
      //   this.pricelist.forEach((e, index) => {
      //     if (e == text) {
      //       this.pricelist.splice(index, 1);
      //     }
      //   });
      // }
    },
    filterCategory(e) {
      e.target.querySelector("input").click();

      // for (let i = 0; i < this.cardlist.length; i++){
      //   this.cardlist[i].vif=false;
      // }
      // let category = e.composedPath()[0].childNodes[0];
      // let text = e.composedPath()[0].textContent;
      // if (category.checked == false) {
      //   category.checked = true;
      //   this.categorylist.push(e.path[0].textContent);
      // } else if (category.checked == true) {
      //   category.checked = false;
      //   this.categorylist.forEach((e, index) => {
      //     if (e == text) {
      //       this.categorylist.splice(index, 1);
      //     }
      //   });
      // }
      // for (let i = 0; i < this.cardlist.length; i++) {
      //   let label = this.cardlist[i].label;
      //   for (let j = 0; j < this.categorylist.length; j++) {
      //     let list = this.categorylist[j];
      //     if (label.trim() == list.trim()) {
      //       let temp = this.cardlist[i];
      //       temp.vif=true;
      //     }
      //   }
      // }
    },
    openSelectbar(e) {
      let category_btn = document.querySelector(
        ".productlist_new__category_btn"
      );
      target_class = e.target.classList;
      let cate_bar = document.querySelector(".productlist_new__category");
      let dest_bar = document.querySelector(".productlist_new__destination");
      let price_bar = document.querySelector(".productlist_new__price");
      let sort_bar = document.querySelector(".productlist_new__sort");
      let black_bg = document.querySelector(".black_bg");
      let bar_arr = [cate_bar, dest_bar, price_bar, sort_bar];
      let body = document.querySelector("body");
      if (target_class.contains("productlist_new__category_btn")) {
        if (cate_bar.classList.contains("open")) {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        } else {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          cate_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if (target_class.contains("productlist_new__destination_btn")) {
        console.log("aaa");
        if (dest_bar.classList.contains("open")) {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        } else {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          dest_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if (target_class.contains("productlist_new__price_btn")) {
        console.log("aaa");
        if (price_bar.classList.contains("open")) {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        } else {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          price_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if (target_class.contains("productlist_new__sort_btn")) {
        console.log("aaa");
        if (sort_bar.classList.contains("open")) {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        } else {
          bar_arr.forEach((element) => {
            element.classList.remove("open");
          });
          sort_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if (target_class.contains("black_bg")) {
        bar_arr.forEach((element) => {
          element.classList.remove("open");
        });
        black_bg.classList.remove("on_watch");
        body.classList.remove("stop_scroll");
      }
    },
    resize_adjust() {
      if (screen.width <= 768) {
      }
      if (screen.width > 768) {
        document.querySelector("body").classList.remove("stop_scroll");
        let cate_bar = document.querySelector(".productlist_new__category");
        let dest_bar = document.querySelector(".productlist_new__destination");
        let price_bar = document.querySelector(".productlist_new__price");
        let sort_bar = document.querySelector(".productlist_new__sort");
        let black_bg = document.querySelector(".black_bg");
        let bar_arr = [cate_bar, dest_bar, price_bar, sort_bar];
        bar_arr.forEach((element) => {
          element.classList.remove("open");
        });
        black_bg.classList.remove("on_watch");
      }
    },
    // 以下Frose
    clickHeart(pid, e) {
      e.stopPropagation();
      // console.log(e);
      // console.log(e.target.closest(".change-heart"));
      // console.log(e.target.closest(".change-heart"));
      // console.log(pid, e);
      // 如果已登入，給予click之後更換愛心的事件
      if (this.memberID) {
        e.target.closest(".change-heart").classList.toggle("clicked");
      } else {
        alert("請先完成登入");
        location.href = "./login.html";
      }

      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/index_clickHeart.php",
        data: {
          memberID: that.memberID,
          pid,
        },
        dataType: "json",
        success: function (response) {
          console.log(response);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    renderHeart() {
      // this.jo_list_end = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/index_renderHeart.php",
        data: {
          memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          // console.log("renderHeart", response);
          // console.log(response);
          response.forEach((p) => that.favorProductList.push(p.ProductID));

          // console.log(that.favorProductList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    gotoproductDetail(id) {
      // e.preventDefault();
      location.href = `./productdetail.html?id=${id}`;
    },
  },

  mounted() {
    this.renderHeart();
    this.find_ssort();
  },
}).mount("#app");
