const menuIcon = document.querySelector('.menu__icon');
const headerNav = document.querySelector('.header__navigation');
if (menuIcon) {
    
    menuIcon.addEventListener("click", function(e) {
		  document.body.classList.toggle('lock');
        menuIcon.classList.toggle('active');
        headerNav.classList.toggle('active');
    });
}


/*
const menuLinks = document.querySelectorAll('.header__item-link');

if(menuIcon.classList.contains('active')) {
	document.body.classList.remove('lock');
	menuIcon.classList.remove('active');
    headerNav.classList.remove('active');
} */

const menuLinks = document.querySelectorAll('.header__item-link');

    if(menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", function (e) {
                document.body.classList.remove('lock');
                menuIcon.classList.remove('active');
                headerNav.classList.remove('active');
            });
        });
    }