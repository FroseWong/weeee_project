"use strict";

const heartAll = document.querySelectorAll(".fa-heart");
const productAll = document.querySelectorAll(".product-card");
const popularCountryAll = document.querySelectorAll(".popular-country");
// console.log(popularCountryAll);

heartAll.forEach((heart) =>
  heart.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("clicked heart");
  })
);

productAll.forEach((product) =>
  product.addEventListener("click", function () {
    console.log("clicked product");
  })
);

popularCountryAll.forEach((p) => {
  // console.log(p);
  // console.log(i);

  p.addEventListener("mouseenter", function (e) {
    // console.log("hi");
    popularCountryAll.forEach((a) => a.classList.remove("active"));
    p.classList.add("active");
  });
});
