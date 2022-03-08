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
const sections = document.querySelectorAll('.section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
     }else{
       document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)