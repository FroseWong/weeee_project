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
const testBtn = document.querySelector(".testBtn");

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

testBtn.addEventListener("click", function () {
  //   let joNew = JSON.parse(sessionStorage.getItem("joNew"));
  //   console.log(joNew);
  //   console.log(sessionStorage.getItem("k"));
  sessionStorage.clear();
});
