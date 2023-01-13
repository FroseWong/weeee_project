"use strict";

const heartAll = document.querySelectorAll(".fa-heart");
const productAll = document.querySelectorAll(".product-card");
const popularCountryAll = document.querySelectorAll(".popular-country");
const changeHeartAll = document.querySelectorAll(".change-heart");
let status = true;
const mouseenterFu = function () {
  popularCountryAll.forEach((a) => a.classList.remove("active"));
  this.classList.add("active");
};

const popularRWD = function () {
  if (window.innerWidth > 768) {
    popularCountryAll.forEach((p) => {
      p.addEventListener("mouseenter", mouseenterFu.bind(p));
    });
  } else {
    popularCountryAll.forEach((p) => p.classList.remove("active"));
    popularCountryAll.forEach((p) =>
      p.removeEventListener("mouseenter", mouseenterFu, true)
    );
  }
};

// heartAll.forEach((heart) =>
//   heart.addEventListener("click", function (e) {
//     e.stopPropagation();
//     console.log("clicked heart");
//   })
// );

productAll.forEach((product) =>
  product.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("clicked product");
    location.href = "./productdetail.html";
  })
);

window.addEventListener("resize", function () {
  let nowStatus = status;
  // if (window.innerWidth > 768)
  if (window.innerWidth > 768) {
    status = true;
  } else status = false;

  if (nowStatus !== status) {
    console.log("change");
    // popularRWD();
  }
});

changeHeartAll.forEach((changeHeart) =>
  changeHeart.addEventListener("click", function (e) {
    e.stopPropagation();
    this.querySelectorAll("i").forEach((i) => {
      if (i.classList.contains("hidden")) i.classList.remove("hidden");
      else if (!i.classList.contains("hidden")) i.classList.add("hidden");
    });
  })
);

// popularRWD();
