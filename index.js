const mobileMenu = document.querySelector(".menu-toggle")
const navBar = document.querySelector('.nav-links')
mobileMenu.addEventListener('click', () =>{
   navBar.classList.toggle('show')
})