// ==== Menu show ==== //
const showMenu=(toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');



// ==== Active and remove menu ==== //
const navLink = document.querySelectorAll('.nav__link');
// hay ho nha,  cai nay la conf phai hieu this. la gi nuwa
function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    
    // close menu after click a nav__link
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ==== Scroll reveal animation ==== //
// ==== Scroll home ==== //
// ==== Scroll about ==== //
// ==== Scroll Skills==== //
// ==== Scroll Works ==== //
// ==== Scroll contact ==== //
// ==== ==== //

