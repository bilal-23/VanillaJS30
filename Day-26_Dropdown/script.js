const triggers = document.querySelectorAll('.cool>li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');

    setTimeout(() => {
        this.classList.contains('trigger-enter') &&this.classList.add('trigger-enter-active')
    }
        ,150);

    background.classList.add('open');
    const dropdown =  this.querySelector('.dropdown');
    const dropdownCords = dropdown.getBoundingClientRect();
    const navCords = nav.getBoundingClientRect();

    const cords ={
        height : dropdownCords.height,
        width : dropdownCords.width,
        top : dropdownCords.top - navCords.top,
        left : dropdownCords.left -navCords.left,

    };
    background.style.setProperty('width', `${cords.width}px` );
    background.style.setProperty('height', `${cords.height}px` );
    background.style.setProperty('transform', `translate(${cords.left}px,${cords.top}px)`);

}

function handleLeave() {
    this.classList.remove('trigger-enter');
    this.classList.remove('trigger-enter-active');
    background.classList.remove('open');



}

triggers.forEach(tigger => tigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(tigger => tigger.addEventListener('mouseleave', handleLeave));