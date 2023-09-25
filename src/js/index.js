const startpageLinks = document.querySelectorAll('.startpage-link');
const startpage = document.querySelector('.startpage');

startpage.addEventListener('click', e => {
  startpageLinks[0].classList.add('close-left');
  startpageLinks[1].classList.add('close-right');
  startpageLinks[2].classList.add('close-bottom');
  });

