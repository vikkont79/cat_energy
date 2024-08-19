var navMain = document.querySelector('.page-header__nav');
var navToggle = document.querySelector('.page-header__toggle');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('page-header__nav--closed')) {
        navMain.classList.remove('page-header__nav--closed');
        navMain.classList.add('page-header__nav--opened');
      } else {
        navMain.classList.add('page-header__nav--closed');
        navMain.classList.remove('page-header__nav--opened');
      }
    });