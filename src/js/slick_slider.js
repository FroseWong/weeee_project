$(document).ready(function () {
  $(".product-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  });

  $(".jo-list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  });

  // let status = true;
  // let currentStatus = status;
  // addEventListener("resize", (event) => {
  //   if (window.innerWidth <= 768) status = false;
  //   else status = true;
  //   if (status !== currentStatus) {
  //     currentStatus = status;

  //     if (window.innerWidth <= 768) {
  //       $(".popular-country__list")?.slick({
  //         infinite: true,
  //         slidesToShow: 2.1,
  //         slidesToScroll: 2,
  //       });
  //     } else $(".popular-country__list")?.slick("unslick");
  //   }
  // });
});
