let app1 = Vue.createApp({
    data(){
      return{
        isShow : true,
        qa_buy: true,
        qa_jo: false
      }
    },
    created() {
        window.addEventListener("scroll", this.changecolor_buy);
        window.addEventListener("scroll", this.changecolor_jo)

    },
    methods:{
      draw(e){
        let father = e.target.closest(".question_content");
        father.querySelector(".question_a").classList.toggle("-close");
        father.querySelector(".fa-plus").classList.toggle("-close");
        father.querySelector(".fa-minus").classList.toggle("-close");
       
      },
      switchtype(e){
        if( e.target.closest(".btn").classList.contains("on_watch")){
          
        }else{
          this.qa_buy = !this.qa_buy
          this.qa_jo = !this.qa_jo
          this.isShow= !this.isShow
          
        }
        
      },
      scrollto_buy(e){  
        let num = e.target.closest(".ttoc").offsetTop;
        let a = document.getElementsByClassName('question_type')[0].offsetTop;
        let b = document.getElementsByClassName('question_type')[1].offsetTop;
        let c = document.getElementsByClassName('question_type')[2].offsetTop;
        let d = document.getElementsByClassName('question_type')[3].offsetTop;
        let e1 = document.getElementsByClassName('question_type')[4].offsetTop;
        if(e.target.classList.contains("position_a")){
          num = a -120;
        }else if(e.target.classList.contains("position_b")){
          num = b -120;
        }else if(e.target.classList.contains("position_c")){
          num = c -120
        }else if(e.target.classList.contains("position_d")){
          num = d -120
        }else if(e.target.classList.contains("position_e")){
          num = e1 -120
        };
        window.scrollTo({
                    top: num,
                    left: 0,
                    behavior: 'smooth'
                });

      },
      scrollto_jo(e){
        let num = e.target.closest(".ttoc").offsetTop;
        let f = document.getElementsByClassName('question_type')[0].offsetTop;
        let g = document.getElementsByClassName('question_type')[1].offsetTop;
        let h = document.getElementsByClassName('question_type')[2].offsetTop;
        let i = document.getElementsByClassName('question_type')[3].offsetTop
        let j = document.getElementsByClassName('question_type')[4].offsetTop;
        if(e.target.classList.contains("position_f")){
          num = f -120
        }else if(e.target.classList.contains("position_g")){
          num = g -120
        }else if(e.target.classList.contains("position_h")){
          num = h -120
        }else if(e.target.classList.contains("position_i")){
          num = i -120
        }else if(e.target.classList.contains("position_j")){
          num = j -120
        };
        window.scrollTo({
                    top: num,
                    left: 0,
                    behavior: 'smooth'
                });
      },
      changecolor_buy(){
        scrollswatch = this.qa_buy;
        if(scrollswatch){
          let a_list = document.querySelector(".position_a");
          let b_list = document.querySelector(".position_b");
          let c_list = document.querySelector(".position_c");
          let d_list = document.querySelector(".position_d");
          let e_list = document.querySelector(".position_e");
          let a = document.getElementsByClassName('question_type')[0];
          let b = document.getElementsByClassName('question_type')[1];
          let c = document.getElementsByClassName('question_type')[2];
          let d = document.getElementsByClassName('question_type')[3];
          let e = document.getElementsByClassName('question_type')[4];
          a_position = a.offsetTop;
          b_position = b.offsetTop;
          c_position = c.offsetTop;
          d_position = d.offsetTop;
          e_position = e.offsetTop;
          // console.log([a_position,b_position,c_position,d_position,e_position])
          let arr = [a_list,b_list,c_list,d_list,e_list]
          ScrollPosition = window.scrollY;
          // console.log(ScrollPosition);
          if (ScrollPosition + 136 >= a_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            a_list.classList.add("on");
          }
          if (ScrollPosition + 120 >= b_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            b_list.classList.add("on");
          }
          if (ScrollPosition + 132 >= c_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            c_list.classList.add("on");
          }
          if (ScrollPosition + 132 >= d_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            d_list.classList.add("on");
          }
          if (ScrollPosition + 260 >= e_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            e_list.classList.add("on");
          }
          
        }

        
      },
      changecolor_jo(){
        scrollswatch = this.qa_jo;
        if(scrollswatch){
          let f_list = document.querySelector(".position_f");
          let g_list = document.querySelector(".position_g");
          let h_list = document.querySelector(".position_h");
          let i_list = document.querySelector(".position_i");
          let j_list = document.querySelector(".position_j");
          let f = document.getElementsByClassName('question_type')[0];
          let g = document.getElementsByClassName('question_type')[1];
          let h = document.getElementsByClassName('question_type')[2];
          let i = document.getElementsByClassName('question_type')[3];
          let j = document.getElementsByClassName('question_type')[4];
          f_position = f.offsetTop;
          g_position = g.offsetTop;
          h_position = h.offsetTop;
          i_position = i.offsetTop;
          j_position = j.offsetTop;
         
          let arr = [f_list,g_list,h_list,i_list,j_list]
          ScrollPosition = window.scrollY;
         
          if (ScrollPosition + 136 >= f_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            f_list.classList.add("on");
          }
          if (ScrollPosition + 120 >= g_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            g_list.classList.add("on");
          }
          if (ScrollPosition + 132 >= h_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            h_list.classList.add("on");
          }
          if (ScrollPosition + 132 >= i_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            i_list.classList.add("on");
          }
          if (ScrollPosition + 260 >= j_position){
            arr.forEach(element => {
              element.classList.remove("on")
            });
            j_list.classList.add("on");
          }
          
        }
      },

    }
  });
  app1.mount(".app1");