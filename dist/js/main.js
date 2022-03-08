/*=============== SHOW MENU ===============*/
const headerToggle = document.querySelector('.header__toggle');
const main = document.querySelector('.main');
const navClose = document.querySelector('.nav__close');
const header = document.querySelector('.header');

// menu show
if(headerToggle) {
  headerToggle.addEventListener('click', () => {
    main.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener('click', () => {
    main.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const removeMenuMobile = () => {
  main.classList.remove('show-menu')
}

navLink.forEach(el => el.addEventListener(`click`, removeMenuMobile))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  if(window.scrollY >= 80) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
