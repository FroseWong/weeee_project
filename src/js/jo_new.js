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

// console.log(deleteBtn);

console.log(joAddImg);

// console.log(boxBtn);
init();
previewBtn.addEventListener("click", function () {
  //   console.log(joTitleInput.value);
  //   console.log(joContentInput.value);
  //   console.log(joContactInput.value);
  //   console.log(joLocationInput.value);
  //   console.log(joDetailAddressInput.value);
  //   console.log(joNumber.value);
  //   console.log(joStartDate.value);
  //   console.log(joStartTime.value);
  //   console.log(useweeee.value);

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
    })
  );
});

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
}

// testBtn.addEventListener("click", function () {
//   //   let joNew = JSON.parse(sessionStorage.getItem("joNew"));
//   //   console.log(joNew);
//   //   console.log(sessionStorage.getItem("k"));
//   sessionStorage.clear();
// });

function init() {
  const imgFile = document.querySelector(".img-file__input");
  const boxBtn = document.querySelector(".box");

  boxBtn.addEventListener("click", function (e) {
    e.preventDefault();
    imgFile.click();
  });

  imgFile.addEventListener("change", function (e) {
    let reader = new FileReader(); // 用來讀取檔案
    reader.readAsDataURL(this.files[0]); // 讀取檔案
    reader.addEventListener("load", function () {
      console.log(reader.result);
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

function deleteInit() {
  const deleteBtn = document.querySelector(".delete");
  deleteBtn.addEventListener("click", function () {
    let backStr = ` <a href="#" class="box"><i class="fa-solid fa-file-image"></i></a>
        <input type="file" class="img-file__input" />`;
    joAddImg.innerHTML = backStr;
    init();
  });
}

// test
