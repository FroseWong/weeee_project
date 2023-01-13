
      const { createApp } = Vue;

      createApp({
        data() {
          return {
            cardlist: [
              {
                src: "",
                title: "",
                label: "",
                content: "",
                score: null,
                scorepeople: "",
                order: null,
                price: null,
                city: "",
                cardid: null,
                vif: true,
              },
            ],
            prices: [
              "TWD 2,000 以下",
              "TWD 2,000~3,999",
              "TWD 4,000~5,999",
              "TWD 6,000~7,999",
              "TWD 8,000 以上",
            ],
            categorys: ["手作體驗", "水上活動", "觀光農場", "極限運動"],
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
            ],
            cityshow: false,
            pricelist: [],
            categorylist: [],
            dataget: true,
          };
        },


        methods: {
          // ----------ajax資料----------
          getdata(){
            var CID = (new URL(location.href));
            console.log(CID.pathname);
            this.cardlist = [];
            console.log(this.cardlist)
            let a = this.cardlist;
            $.ajax({            
            method: "POST",
            url: "./php/Product_08.php",
            data:{
              path:CID.pathname
            },          
            dataType: "json",
            success: function (response) {
              response.forEach(element => {
                a.push(element)
              });             
            },
            error: function(exception) {
                alert("數據載入失敗: " + exception.status);
            }
          });
            this.cardlist = a;
            console.log(this.cardlist);
            this.showproduct();

          },
          showproduct(){
            this.dataget = false;
            this.dataget = true;
          },
          // ----------目的地開關----------
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
          // ----------城市篩選----------
          filterCity(e) {
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
          // ----------排序顏色----------
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
                return  +b.ProductPrice - +a.ProductPrice;
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
          // ----------熱門排序----------
          filterOrder(e) {
            let arr = this.cardlist;
            const eitherSort = (arr = []) => {
              const sorter = (a, b) => {
                return +b.order - +a.order ;
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
          // ----------評價排序----------
          filterScore(e) {
            let arr = this.cardlist;
            const eitherSort = (arr = []) => {
              const sorter = (a, b) => {
                return +b.score - +a.score ;
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
          // ----------價格排序----------
          filterPrice(e) {
            let price = e.path[0].childNodes[0];
            let text = e.path[0].textContent;
            if (price.checked == false) {
              price.checked = true;
              this.pricelist.push(e.path[0].textContent);
            } else if (price.checked == true) {
              price.checked = false;
              this.pricelist.forEach((e, index) => {
                if (e == text) {
                  this.pricelist.splice(index, 1);
                }
              });
            }
          },
          
          openSelectbar(e) {
            let category_btn = document.querySelector(
              ".productlist_new__category_btn"
            );
            target_class = e.target.classList;
            let cate_bar = document.querySelector(".productlist_new__category");
            let dest_bar = document.querySelector(
              ".productlist_new__destination"
            );
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
              let cate_bar = document.querySelector(
                ".productlist_new__category"
              );
              let dest_bar = document.querySelector(
                ".productlist_new__destination"
              );
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
          // jump_page(e) {
          //   window.location.assign("productdetail.html?`${e}`");
          // },
        },

        mounted() {
          
        },
        created() {
          window.addEventListener("resize", this.resize_adjust, true);
          this.getdata();
            
        },
      }).mount("#app");