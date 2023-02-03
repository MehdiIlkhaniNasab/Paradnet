let navbarMenu = document.querySelector('.navbar-menu')
let menuIconClose = document.querySelector('.menu-icon-close')
let projecticonclose = document.querySelector('.project-icon-close')
let blogiconclose = document.querySelector('.blog-icon-close')
let titleExampleProject = document.querySelectorAll('.example h3')
let titleBlog = document.querySelectorAll('.blog h3')


titleExampleProject.forEach(item => {
  item.addEventListener('click', () => {
    activeTargetItem('modal-project')
  })
})
titleBlog.forEach(item => {
  item.addEventListener('click', () => {
    activeTargetItem('modal-blog')
  })
})

function activeTargetItem(classTargetItem){
  let targetItem = document.querySelector(`.${classTargetItem}`)
  targetItem.classList.add('active')
}

function disableTargetItem(classTargetItem){
  let targetItem = document.querySelector(`.${classTargetItem}`)
  targetItem.classList.remove('active')
}


var studentCommentSwiper = new Swiper('.comments-swiper', {

  loop: true,
  grabCursor: true,
  autoplay: true,
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


menuIconClose.addEventListener('click', () => {
  disableTargetItem('menu-mobile')
  disableTargetItem('menu-mobile-wrapper')
})

navbarMenu.addEventListener('click', () => {
  activeTargetItem('menu-mobile')
  activeTargetItem('menu-mobile-wrapper')
})

projecticonclose.addEventListener('click', (event) => {
  event.preventDefault()
  disableTargetItem('modal-project')
})
blogiconclose.addEventListener('click', (event) => {
  event.preventDefault()
  disableTargetItem('modal-blog')
})

