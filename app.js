const goTopBtn = document.getElementById('go-to-top')
const navToggler = document.getElementById('nav-toggler')
const closeNavBtn = document.getElementById('close-nav')
const responsiveNav = document.getElementById('responsive-nav')
const toggleUtil = document.getElementById('toggle-util')

const copyright = `&copy; ${new Date().getFullYear()} - All rights reserved.`

document.getElementById('copyright').innerHTML = copyright


navToggler.onclick = (e) => {
    e.stopPropagation()
    responsiveNav.classList.toggle('hidden')
}

closeNavBtn.onclick = (e) => {
    e.stopPropagation()
    responsiveNav.classList.toggle('hidden')
}

document.body.onclick = (e) => {
    !responsiveNav.classList.contains('hidden') && responsiveNav.classList.add('hidden')
}

goTopBtn.onclick = () => {
    window.scrollTo(0,0)
}

window.onscroll = () => {
    if(window.scrollY > window.screen.height){
        goTopBtn.classList.contains('hidden') && goTopBtn.classList.remove('hidden')
    }
    else{
        !goTopBtn.classList.contains('hidden') && goTopBtn.classList.add('hidden')
    }
}