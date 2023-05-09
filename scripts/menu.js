const menuTrigger = document.getElementById('hamburger-trigger')
const menu = document.querySelector('.header-menu')

const menuDropDownTrigger = document.querySelector('.menu-dropdown-trigger')
const menuDropDown = document.querySelector('.menu-dropdown')

menuDropDownTrigger.addEventListener('click', () => {
  menuDropDown.classList.toggle('show-menu')
  menuDropDownTrigger.classList.toggle('rotate-icon')
})

menuTrigger.addEventListener('click', () => {
  menu.classList.toggle('show-menu')
})

