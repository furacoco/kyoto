const PageTopBtn = document.getElementById('top_btn');
PageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 80;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

const modalBtn = document.getElementById('modalOpen');
const modal = document.getElementById('modal');

const ms = 400;
modal.style.transition = 'opacity ' + ms + 'ms';

modalBtn.addEventListener('click', () =>{
  setTimeout(function(){modal.classList.add('is_open')},1);
  setTimeout(function(){modal.style.opacity = 1}, 50);
});

let modalClose = document.getElementsByClassName('js-modal-close');
  for (let i = 0; i < modalClose.length; i++){
  modalClose[i].addEventListener('click', () => {
    setTimeout(function(){modal.style.opacity = 0}, 1);
    setTimeout(function(){modal.classList.remove('is_open')}, ms)
  });
}
