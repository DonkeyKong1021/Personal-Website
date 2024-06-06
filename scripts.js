$(document).mousemove(function(event) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    
    var mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    var mouseYpercentage = Math.round((event.pageY - $(window).scrollTop()) / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(circle at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0) 60%)');
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    function setActiveNavItem() {
        let index = sections.length;

        while(--index && window.scrollY + window.innerHeight / 2 < sections[index].offsetTop) {}

        navItems.forEach((navItem) => navItem.classList.remove('active'));
        navItems[index].classList.add('active');
    }

    window.addEventListener('scroll', setActiveNavItem);
    setActiveNavItem();
});
