const goUpButton = document.getElementById('goUp')
const navToggler = document.getElementById('nav-toggler')
const responsiveNav = document.getElementById('responsive-nav')

const copyright = `&copy; ${new Date().getFullYear()} - All rights reserved.`

document.getElementById('copyright').innerHTML = copyright


navToggler.onclick = (e) => {
    e.stopPropagation()
    let list = responsiveNav.classList
    list.contains('-right-full') ? 
    list.replace('-right-full', 'right-0') : 
        list.replace('right-0', '-right-full')
}

document.body.onclick = (e) => {
    let list = responsiveNav.classList
    list.contains('right-0') ? list.replace('right-0', '-right-full') : ''
}

goUpButton.onclick = () => {
    window.scrollTo(0,0)
}