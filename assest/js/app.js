var studentCommentSwiper = new Swiper('.comments-swiper', {

    loop: true,
    grabCursor: true,
    autoplay:true,
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
  
      540: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
  
      768: {
        slidesPerView: 1,
        spaceBetween: 7,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
  
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
  });