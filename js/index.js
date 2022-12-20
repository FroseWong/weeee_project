"use strict";

const heartAll = document.querySelectorAll(".fa-heart");
const productAll = document.querySelectorAll(".product-card");

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
