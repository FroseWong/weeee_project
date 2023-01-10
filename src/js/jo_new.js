"use strict";

const joTitleInput = document.querySelector(".jo__title__input");
const joContentInput = document.querySelector(".jo-content__input");
const joContactInput = document.querySelector(".jo-contact__input");
const joLocationInput = document.querySelector(".jo__location__input");
const joDetailAddressInput = document.querySelector(
  ".jo__detail-address__input"
);
const joNumberInput = document.querySelector("#jo__number");
const joStartDateInput = document.querySelector("#jo__start-date");
const joStartTimeInput = document.querySelector("#jo__start-time");
const useweeeeInput = document.querySelector(".useweeee-input");
const previewBtn = document.querySelector(".previewBtn");
// const testBtn = document.querySelector(".testBtn");
// const imgFile = document.querySelector(".img-file__input");
// const boxBtn = document.querySelector(".box");
const joAddImg = document.querySelector(".jo_new__addimg");
let reader = {
  result: "",
};
let imgstored = "";
// console.log(joAddImg);

init();

// 當sessionStorage中有內容時，將session的東西放回input欄位
if (sessionStorage.getItem("joNew")) {
  let {
    joTitle,
    joContent,
    joContact,
    joLocation,
    joDetailAddress,
    joNumber,
    joStartDate,
    joStartTime,
    useweeee,
    img,
  } = JSON.parse(sessionStorage.getItem("joNew"));

  joTitleInput.value = joTitle;
  joContentInput.value = joContent;
  joContactInput.value = joContact;
  joLocationInput.value = joLocation;
  joDetailAddressInput.value = joDetailAddress;
  joNumberInput.value = joNumber;
  joStartDateInput.value = joStartDate;
  joStartTimeInput.value = joStartTime;
  useweeeeInput.value = useweeee;
  imgstored = img;
  if (img) {
    let li_html = `
  <div class="img-space">
              <img src="${img}" class="preview">
              <div class="delete">
      <i class="fa-solid fa-xmark"></i>
    </div>
    </div>`;

    joAddImg.innerHTML = li_html;
    deleteInit();
  }
}

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
    reader = new FileReader(); // 用來讀取檔案
    reader.readAsDataURL(this.files[0]); // 讀取檔案
    reader.addEventListener("load", function () {
      // console.log(reader.result);
      let li_html = `
      <div class="img-space">
                  <img src="${reader.result}" class="preview">
                  <div class="delete">
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
    let reader = new FileReader(); // 用來讀取檔案
    reader.readAsDataURL(e.dataTransfer.files[0]); // 讀取檔案
    reader.addEventListener("load", function () {
      // console.log(reader.result);
      let li_html = `
      <div class="img-space">
                  <img src="${reader.result}" class="preview">
                  <div class="delete">
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
  const deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    let backStr = ` <a href="#" class="box"><i class="fa-solid fa-file-image"></i></a>
        <input type="file" class="img-file__input" />`;
    joAddImg.innerHTML = backStr;
    init();
  });
}

// 點擊預覽按鈕 儲存內容至sessionStorage
previewBtn.addEventListener("click", function () {
  let str = "";
  // console.log("hi");
  //   console.log(joTitleInput.value);
  //   console.log(joContentInput.value);
  //   console.log(joContactInput.value);
  //   console.log(joLocationInput.value);
  //   console.log(joDetailAddressInput.value);
  //   console.log(joNumber.value);
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
    joNumberInput.value !== "" &&
    joStartDateInput.value !== "" &&
    joStartTimeInput.value !== "" &&
    // useweeeeInput.value !== "" &&
    (reader.result !== "" || imgstored !== "")
  ) {
    if (reader.result) {
      sessionStorage.setItem(
        "joNew",
        JSON.stringify({
          joTitle: joTitleInput.value,
          joContent: joContentInput.value,
          joContact: joContactInput.value,
          joLocation: joLocationInput.value,
          joDetailAddress: joDetailAddressInput.value,
          joNumber: joNumberInput.value,
          joStartDate: joStartDateInput.value,
          joStartTime: joStartTimeInput.value,
          useweeee: useweeeeInput.value,
          img: reader.result,
        })
      );
    } else if (imgstored) {
      sessionStorage.setItem(
        "joNew",
        JSON.stringify({
          joTitle: joTitleInput.value,
          joContent: joContentInput.value,
          joContact: joContactInput.value,
          joLocation: joLocationInput.value,
          joDetailAddress: joDetailAddressInput.value,
          joNumber: joNumberInput.value,
          joStartDate: joStartDateInput.value,
          joStartTime: joStartTimeInput.value,
          useweeee: useweeeeInput.value,
          img: imgstored,
        })
      );
    }

    location.href = "./jo_preview.html";
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
    if (joNumberInput.value === "")
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
