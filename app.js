// const showMore = (toggleId, navId)=>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if (toggle && nav) {
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//         }) 
//     }
// }

// showMore('nav-toggle', 'nav-menu')

// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     //Active Link
//     navLink.forEach(n=> n.classList.remove('active'))
//     this.classList.add('active')

//     //Remove menu mobile
//     const navMenu = document.getElementById('nav=menu')
//     navMenu.classList.remove('show')
    
// }
// navLink.forEach(n=> n.addEventListener('click', linkAction))






/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation()
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navMenu = document.getElementById('nav-menu')

navMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})

document.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/* REMOVE MENU ON LINK CLICK */
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show')
}))
