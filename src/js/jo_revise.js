"use strict";

const joTitleInput = document.querySelector(".jo__title__input");
const joContentInput = document.querySelector(".jo-content__input");
const joContactInput = document.querySelector(".jo-contact__input");
const joLocationInput = document.querySelector(".jo__location__input");
const joDetailAddressInput = document.querySelector(
  ".jo__detail-address__input"
);
const joAttendInput = document.querySelector("#jo__attend");
const joStartDateInput = document.querySelector("#jo__start-date");
const joStartTimeInput = document.querySelector("#jo__start-time");
const useweeeeInput = document.querySelector(".useweeee-input");
const reviseBtn = document.querySelector(".reviseBtn");
// const testBtn = document.querySelector(".testBtn");
// const imgFile = document.querySelector(".img-file__input");
// const boxBtn = document.querySelector(".box");
const joAddImg = document.querySelector(".jo_revise__addimg");
let reader = {
  result: "",
};
let imgName = "";
let imgstored = "";
let weeee; // 用來存useweeee的Vue的this
// console.log(joAddImg);

init();

// testBtn.addEventListener("click", function () {
//   //   let joNew = JSON.parse(sessionStorage.getItem("joNew"));
//   //   console.log(joNew);
//   //   console.log(sessionStorage.getItem("k"));
//   sessionStorage.clear();
// });

// 預設狀態初始化
function init() {
  //alert("aa");
  const imgFile = document.querySelector(".img-file__input");
  const boxBtn = document.querySelector(".box");

  boxBtn.addEventListener("click", function (e) {
    e.preventDefault();
    imgFile.click();
  });

  imgFile.addEventListener("change", function (e) {
    imgName = this.files[0].name;
    reader = new FileReader(); // 用來讀取檔案
    reader.readAsDataURL(this.files[0]); // 讀取檔案
    reader.addEventListener("load", function () {
      imgstored = reader.result;
      // console.log(reader.result);
      let li_html = `
      <div class="img-space">
                  <img src="${imgstored}" class="preview">
                  <div class="delete-space">
          <i class="fa-solid fa-xmark"></i>
        </div>
        </div>`;

      joAddImg.innerHTML = li_html;
      deleteInit();
    });
  });

  joAddImg.addEventListener("dragover", function (e) {
    e.preventDefault();
    // console.log("dropover");
  });

  joAddImg.addEventListener("drop", function (e) {
    e.preventDefault();
    imgName = e.dataTransfer.files[0].name;
    let reader = new FileReader(); // 用來讀取檔案
    reader.readAsDataURL(e.dataTransfer.files[0]); // 讀取檔案
    reader.addEventListener("load", function () {
      // console.log(reader.result);
      imgstored = reader.result;
      let li_html = `
      <div class="img-space">
                  <img src="${imgstored}" class="preview">
                  <div class="delete-space">
          <i class="fa-solid fa-xmark"></i>
        </div>
        </div>`;

      joAddImg.innerHTML = li_html;
      deleteInit();
    });
  });
}

// 可刪除圖片的狀態
function deleteInit() {
  const deleteBtn = document.querySelector(".delete-space");
  deleteBtn.addEventListener("click", function () {
    let backStr = ` <a href="#" class="box"><i class="fa-solid fa-file-image"></i></a>
        <input type="file" class="img-file__input" />`;
    joAddImg.innerHTML = backStr;
    imgstored = "";
    init();
  });
}

// 點擊預覽按鈕 儲存內容至sessionStorage
reviseBtn.addEventListener("click", function () {
  let str = "";
  // console.log("hi");
  //   console.log(joTitleInput.value);
  //   console.log(joContentInput.value);
  //   console.log(joContactInput.value);
  //   console.log(joLocationInput.value);
  //   console.log(joDetailAddressInput.value);
  //   console.log(joAttend.value);
  //   console.log(joStartDate.value);
  //   console.log(joStartTime.value);
  //   console.log(useweeee.value);
  // console.log(reader.result);

  if (
    joTitleInput.value !== "" &&
    joContentInput.value !== "" &&
    joContactInput.value !== "" &&
    joLocationInput.value !== "" &&
    joDetailAddressInput.value !== "" &&
    joAttendInput.value !== "" &&
    joStartDateInput.value !== "" &&
    joStartTimeInput.value !== "" &&
    // useweeeeInput.value !== "" &&
    imgstored !== ""
  ) {
    // if (reader.result) {
    //   sessionStorage.setItem(
    //     "joNew",
    //     JSON.stringify({
    //       joTitle: joTitleInput.value,
    //       joContent: joContentInput.value,
    //       joContact: joContactInput.value,
    //       joLocation: joLocationInput.value,
    //       joDetailAddress: joDetailAddressInput.value,
    //       joAttend: joAttendInput.value,
    //       joStartDate: joStartDateInput.value,
    //       joStartTime: joStartTimeInput.value,
    //       useweeee: useweeeeInput.value,
    //       img: reader.result,
    //     })
    //   );
    // } else
    if (imgstored) {
      sessionStorage.setItem(
        "joNew",
        JSON.stringify({
          joTitle: joTitleInput.value,
          joContent: joContentInput.value,
          joContact: joContactInput.value,
          joLocation: joLocationInput.value,
          joDetailAddress: joDetailAddressInput.value,
          joAttend: joAttendInput.value,
          joStartDate: joStartDateInput.value,
          joStartTime: joStartTimeInput.value,
          useweeee: useweeeeInput.value,
          img: imgstored,
          imgName,
        })
      );
    }

    // location.href = "./jo_preview.html";
  } else {
    if (joTitleInput.value === "")
      str += str === "" ? "請填寫揪團名稱" : "\n請填寫揪團名稱";
    if (joContentInput.value === "")
      str += str === "" ? "請填寫揪團描述" : "\n請填寫揪團描述";
    if (joContactInput.value === "")
      str += str === "" ? "請填寫聯絡方式" : "\n請填寫聯絡方式";
    if (joLocationInput.value === "")
      str += str === "" ? "請選擇揪團縣市" : "\n請選擇揪團縣市";
    if (joDetailAddressInput.value === "")
      str += str === "" ? "請輸入詳細地點" : "\n請輸入詳細地點";
    if (joAttendInput.value === "")
      str += str === "" ? "請輸入揪團人數" : "\n請輸入揪團人數";
    if (joStartDateInput.value === "")
      str += str === "" ? "請選擇揪團日期" : "\n請選擇揪團日期";
    if (joStartTimeInput.value === "")
      str += str === "" ? "請選擇揪團時間" : "\n請選擇揪團時間";
    if (imgstored === "" && reader?.result === "")
      str += str === "" ? "請上傳圖片" : "\n請上傳圖片";
    alert(str);
  }
});

let app = Vue.createApp({
  data() {
    return {
      test: "123",
      sightseeingList: [],
      testStatus: 0,
      jid: "",
      JoAttend: "",
      JoContact: "",
      JoContent: "",
      JoDetailedAddressed: "",
      JoImg: "",
      JoStartDate: "",
      JoTitle: "",
      JoUseWeeee: "",
      Location: "",
      ProductID: "",
    };
  },
  created() {
    this.getdata_product_list();
    this.getjoid();
    this.get_member_information();
  },
  methods: {
    get_member_information() {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/headerGetmember.php",
        async: false,
        data: {
          // memberID: that.memberID,
        },
        dataType: "json",
        success: function (response) {
          // console.log("success");
          // console.log(response);
          // console.log(this.data);
          // console.log(response[0]);
          // that.headercounter = response[0].COUNT;
          that.memberID = response[0].MemberID;

          that?.$nextTick(function () {
            if (that.memberID) that.getinfo();
          });
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    getdata_product_list() {
      // this.jo_list_hot = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/Product.php",
        data: {
          // type: "hot",
        },

        dataType: "json",
        success: function (response) {
          // console.log(response);
          response.forEach((product) => {
            // that.productList.push(product);
            if (product.ProductType === "sightseeing")
              that.sightseeingList.push(product);
          });
          // console.log(that.sightseeingList);

          // console.log(that.sightseeingList);
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
    getjoid() {
      let urlParams = new URLSearchParams(window.location.search);
      this.jid = urlParams.get("id");
    },
    getinfo() {
      // this.jo_list_hot = [];
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/jo_revise_getinfo.php",
        // async: false,
        data: {
          memberID: that.memberID,
          jid: that.jid,
        },

        dataType: "json",
        success: function (response) {
          console.log(response);
          //   console.log(response[0]);
          //   console.log(that.sightseeingList);
          joAttendInput.value = response[0].JoAttend;
          joContactInput.value = response[0].JoContact;
          joContentInput.value = response[0].JoContent;
          joTitleInput.value = response[0].JoTitle;
          joLocationInput.value = response[0].Location;
          joDetailAddressInput.value = response[0].JoDetailedAddressed;
          joStartDateInput.value = response[0].JoStartDate.split(" ")[0];
          joStartTimeInput.value = response[0].JoStartDate.split(" ")[1];
          that.JoImg = imgstored = response[0].JoImg;
          imgName = that.JoImg.split("/")[that.JoImg.split("/").length - 1]; //從圖片路徑中擷取圖片名稱

          // console.log(response[0].ProductID);
          // console.log(that.sightseeingList);
          // console.log(that.sightseeingList[0]);
          that.sightseeingList.forEach((s, i) => {
            if (response[0].ProductID === that.sightseeingList[i].ProductID) {
              useweeeeInput.value = that.sightseeingList[i].ProductName;
            }
          });

          if (that.JoImg) {
            let li_html = `
          <div class="img-space">
                      <img src="${that.JoImg}" class="preview">
                      <div class="delete-space">
              <i class="fa-solid fa-xmark"></i>
            </div>
            </div>`;

            joAddImg.innerHTML = li_html;
            deleteInit();
          }
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
  },
  mounted() {
    // this.get_member_information();
    // console.log(this.jid);
    weeee = this;
  },
});

app.mount("#useweeee");

const app1 = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    checkallInput() {
      let str = "";

      if (
        joTitleInput.value !== "" &&
        joContentInput.value !== "" &&
        joContactInput.value !== "" &&
        joLocationInput.value !== "" &&
        joDetailAddressInput.value !== "" &&
        joAttendInput.value !== "" &&
        joStartDateInput.value !== "" &&
        joStartTimeInput.value !== "" &&
        imgstored !== ""
      ) {
        let pid;
        if (useweeeeInput.value) {
          for (let i = 0; i < weeee.sightseeingList.length; i++) {
            if (useweeeeInput.value === weeee.sightseeingList[i].ProductName) {
              pid = weeee.sightseeingList[i].ProductID;
            }
          }
        }
        this.updateJoInfo(pid);
        //   sessionStorage.setItem(
        //     "joNew",
        //     JSON.stringify({
        //       joTitle: joTitleInput.value,
        //       joContent: joContentInput.value,
        //       joContact: joContactInput.value,
        //       joLocation: joLocationInput.value,
        //       joDetailAddress: joDetailAddressInput.value,
        //       joAttend: joAttendInput.value,
        //       joStartDate: joStartDateInput.value,
        //       joStartTime: joStartTimeInput.value,
        //       useweeee: useweeeeInput.value,
        //       img: imgstored,
        //       imgName,
        //     })
        //   );

        // location.href = "./jo_preview.html";
      } else {
        if (joTitleInput.value === "")
          str += str === "" ? "請填寫揪團名稱" : "\n請填寫揪團名稱";
        if (joContentInput.value === "")
          str += str === "" ? "請填寫揪團描述" : "\n請填寫揪團描述";
        if (joContactInput.value === "")
          str += str === "" ? "請填寫聯絡方式" : "\n請填寫聯絡方式";
        if (joLocationInput.value === "")
          str += str === "" ? "請選擇揪團縣市" : "\n請選擇揪團縣市";
        if (joDetailAddressInput.value === "")
          str += str === "" ? "請輸入詳細地點" : "\n請輸入詳細地點";
        if (joAttendInput.value === "")
          str += str === "" ? "請輸入揪團人數" : "\n請輸入揪團人數";
        if (joStartDateInput.value === "")
          str += str === "" ? "請選擇揪團日期" : "\n請選擇揪團日期";
        if (joStartTimeInput.value === "")
          str += str === "" ? "請選擇揪團時間" : "\n請選擇揪團時間";
        if (imgstored === "" && reader?.result === "")
          str += str === "" ? "請上傳圖片" : "\n請上傳圖片";
        alert(str);
      }
    },
    updateJoInfo(pid) {
      let that = this;
      $.ajax({
        method: "POST",
        url: "./php/jo_revise_updateinfo.php",
        data: {
          joTitle: joTitleInput.value,
          joContent: joContentInput.value,
          joContact: joContactInput.value,
          joLocation: joLocationInput.value,
          joDetailAddress: joDetailAddressInput.value,
          joAttend: joAttendInput.value,
          joStartDate: joStartDateInput.value,
          joStartTime: joStartTimeInput.value,
          JoUseWeeee: useweeeeInput.value ? 1 : 0,
          targettravelID: pid,
          img: imgstored,
          imgisbase64: imgstored.includes("data:image"),
          imgName,
          jid: weeee.jid,
          memberID: header.memberID,
        },

        dataType: "json",
        success: function (response) {
          // console.log(response);
          const id = response[0]["0"];
          // console.log(id);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "成功編輯揪團",
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(() => {
            location.href = "jo_detail.html?id=" + id;
          }, 2000);
          // location.href = "jo_detail.html?id=" + id;
        },
        error: function (exception) {
          alert("數據載入失敗: " + exception.status);
        },
      });
    },
  },
});

app1.mount("#reviseBtnSpace");
