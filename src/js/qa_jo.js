const { createApp } = Vue;

createApp({
  data() {
    return {
      cardlist: [
        {
          src: "/img/sightseeing/fa_19_1.jpg",
          title: "基隆港煙火 家庭行程",
          label: "家庭行程",
          content:
            "基隆港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 1000,
          price: 6450,
          city: "基隆",
          cardid: 1,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_19_2.jpg",
          title: "台北港煙火 家庭行程",
          label: "家庭行程",
          content:
            "台北港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 50,
          price: 5500,
          city: "台北",
          cardid: 2,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_19_3.jpg",
          title: "新北港煙火 寵物行程",
          label: "寵物行程",
          content:
            "新北港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 350,
          price: 2250,
          city: "新北",
          cardid: 3,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_1.jpg",
          title: "桃園港煙火 情侶行程",
          label: "情侶行程",
          content:
            "桃園港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 1750,
          price: 1250,
          city: "桃園",
          cardid: 4,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_2.jpg",
          title: "新竹港煙火 朋友行程",
          label: "朋友行程",
          content:
            "新竹港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 150,
          price: 9450,
          city: "新竹",
          cardid: 5,
          vif: true,
        }, {
          src: "/img/sightseeing/fa_19_1.jpg",
          title: "苗栗港煙火 家庭行程",
          label: "家庭行程",
          content:
            "苗栗港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 1000,
          price: 6450,
          city: "苗栗",
          cardid: 6,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_19_2.jpg",
          title: "台中港煙火 家庭行程",
          label: "家庭行程",
          content:
            "台中港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 50,
          price: 5500,
          city: "台中",
          cardid: 7,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_19_3.jpg",
          title: "彰化港煙火 寵物行程",
          label: "寵物行程",
          content:
            "彰化港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 350,
          price: 2250,
          city: "彰化",
          cardid: 8,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_1.jpg",
          title: "南投港煙火 情侶行程",
          label: "情侶行程",
          content:
            "南投港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 1750,
          price: 1350,
          city: "南投",
          cardid: 9,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_2.jpg",
          title: "雲林港煙火 朋友行程",
          label: "朋友行程",
          content:
            "雲林港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 150,
          price: 2450,
          city: "雲林",
          cardid: 10,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_2.jpg",
          title: "嘉義港煙火 朋友行程",
          label: "朋友行程",
          content:
            "嘉義港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 150,
          price: 3450,
          city: "嘉義",
          cardid: 10,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_2.jpg",
          title: "台南港煙火 朋友行程",
          label: "朋友行程",
          content:
            "台南港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 150,
          price: 4450,
          city: "台南",
          cardid: 10,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_2.jpg",
          title: "高雄港煙火 朋友行程",
          label: "朋友行程",
          content:
            "高雄港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 150,
          price: 5450,
          city: "高雄",
          cardid: 10,
          vif: true,
        },
        {
          src: "/img/sightseeing/fa_20_2.jpg",
          title: "屏東港煙火 朋友行程",
          label: "朋友行程",
          content:
            "屏東港舉辦煙火晚會，誠摯歡迎您攜伴來參加此一年一度的盛大慶典。。",
          score: 4.5,
          scorepeople: "(2300)",
          order: 150,
          price: 8450,
          city: "屏東",
          cardid: 10,
          vif: true,
        }
      ],
      prices: [
        "TWD 2,000~3,999",
        "TWD 4,000~5,999",
        "TWD 6,000~7,999",
        "TWD 8,000~9,999",
      ],
      categorys: ["朋友行程", "家庭行程", "情侶行程", "寵物行程"],
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
    };
  },
  created(){
    window.addEventListener("resize",this.resize_adjust,true)
  },
  methods: {
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
      let path = e.path[0].textContent;
      this.cardlist.forEach((e,index) => {
        if(path==e.city){
          console.log(this.cardlist[index].vif);
        }
      });

    },
    filterSort(e) {
      let arr = this.cardlist;
      const eitherSort = (arr = []) => {
        const sorter = (a, b) => {
          return +a.price - +b.price;
        };
        arr.sort(sorter);
      };
      eitherSort(arr);
      this.classList = arr;
      let epath=e.path[0].style;
      e.path[1].childNodes[0].style.backgroundColor='#fff';
      e.path[1].childNodes[0].style.color='#747774';
      epath.backgroundColor='#4484ce';
      epath.color='#fff';
    },
    filterOrder(e) {
      let arr = this.cardlist;
      const eitherSort = (arr = []) => {
        const sorter = (a, b) => {
          return +a.order - +b.order;
        };
        arr.sort(sorter);
      };
      eitherSort(arr);
      this.classList = arr;
      let epath=e.path[0].style;
      e.path[1].childNodes[1].style.backgroundColor='#fff';
      e.path[1].childNodes[1].style.color='#747774';
      epath.backgroundColor='#4484ce';
      epath.color='#fff';
    },
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
    openSelectbar(e){
      let category_btn = document.querySelector(".qa_jo__category_btn");
      target_class = e.target.classList;
      let cate_bar = document.querySelector(".qa_jo__category");
      let dest_bar = document.querySelector(".qa_jo__destination");
      let price_bar = document.querySelector(".qa_jo__price");
      let sort_bar = document.querySelector(".qa_jo__sort");
      let black_bg = document.querySelector(".black_bg");
      let bar_arr = [cate_bar,dest_bar,price_bar,sort_bar];
      let body = document.querySelector("body")
      if(target_class.contains("qa_jo__category_btn")){
        if(cate_bar.classList.contains("open")){
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        }else{
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          cate_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if(target_class.contains("qa_jo__destination_btn")){
        console.log("aaa");
        if(dest_bar.classList.contains("open")){
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        }else{
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          dest_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if(target_class.contains("qa_jo__price_btn")){
        console.log("aaa");
        if(price_bar.classList.contains("open")){
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        }else{
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          price_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if(target_class.contains("qa_jo__sort_btn")){
        console.log("aaa");
        if(sort_bar.classList.contains("open")){
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          black_bg.classList.remove("on_watch");
          body.classList.remove("stop_scroll");
        }else{
          bar_arr.forEach(element => {
            element.classList.remove("open")
          });
          sort_bar.classList.add("open");
          black_bg.classList.add("on_watch");
          body.classList.add("stop_scroll");
        }
      }
      if(target_class.contains("black_bg")){
        bar_arr.forEach(element => {
          element.classList.remove("open")
        });
        black_bg.classList.remove("on_watch");
        body.classList.remove("stop_scroll");
      }
      

      
    },
    resize_adjust(){
      if(screen.width <= 768){

      }if(screen.width >768){
        document.querySelector("body").classList.remove("stop_scroll");
        let cate_bar = document.querySelector(".qa_jo__category");
        let dest_bar = document.querySelector(".qa_jo__destination");
        let price_bar = document.querySelector(".qa_jo__price");
        let sort_bar = document.querySelector(".qa_jo__sort");
        let black_bg = document.querySelector(".black_bg");
        let bar_arr = [cate_bar,dest_bar,price_bar,sort_bar];        
        bar_arr.forEach(element => {
          element.classList.remove("open")
        });
        black_bg.classList.remove("on_watch");
      }
    },
    jump_page(){
      window.location.assign("productdetail.html");
    }
  },

  mounted() {},
}).mount("#app");
