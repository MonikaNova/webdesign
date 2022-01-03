/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu') ,
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')
      
      


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
   navClose.addEventListener('click' ,() => {
       navMenu.classList.remove('show')
   })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]')  

  
  
  window.addEventListener('scroll',scrollActive)

  function scrollActive(){
       const scrollY = window.pageYOffset
     sections.forEach(n => {
         const sectionHeight = n.offsetHeight
         const sectionTop = n.offsetTop - 50
         const sectionId = n.getAttribute('id')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
         }else {
              document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
         }
    })
  }
     
 
    
  
  

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100){
       header.classList.add('scroll-header') 
    }  else {
       header.classList.remove('scroll-header') 
    } 
}
window.addEventListener('scroll', scrollHeader)