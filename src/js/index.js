"use strict";

const heartAll = document.querySelectorAll(".fa-heart");
const productAll = document.querySelectorAll(".product-card");
const popularCountryAll = document.querySelectorAll(".popular-country");

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

if (window.innerWidth > 768) {
  popularCountryAll.forEach((p) => {
    p.addEventListener("mouseenter", function (e) {
      popularCountryAll.forEach((a) => a.classList.remove("active"));
      p.classList.add("active");
    });
  });
} else {
  popularCountryAll.forEach((p) => p.classList.remove("active"));
}
