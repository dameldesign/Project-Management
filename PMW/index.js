const mobileMenu = document.querySelector(".menu-toggle")
const navBar = document.querySelector('.nav-links')
mobileMenu.addEventListener('click', () =>{
   navBar.classList.toggle('show');

   
})

document.documentElement.addEventListener("mousemove", (e) => {
   if (e.clientY >= 1.15 * navBar.clientHeight) {
     navBar.classList.remove("show");
     mobileMenu.classList.remove("reveal");
   };   
   // console.log(e.target)
   // console.log(navBar.clientHeight)
});