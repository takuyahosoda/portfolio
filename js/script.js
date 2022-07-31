window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  effect: 'flip',
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
			let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const adjust = 100;

      const target = rect + offset + adjust;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
  });
}

const topLink = document.getElementById('js_top');
const header = document.getElementById('js_header').offsetHeight;
const animationElement = document.querySelectorAll('.ly_container');
const maskItem = document.querySelectorAll('.mask');

topLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener('scroll', () => {
	const scroll = window.pageYOffset || document.documentElement.scrollTop;
	const windowHeight = window.innerHeight; // 現在のブラウザの高さ

  for (let i = 0; i < animationElement.length; i++) {
    const animationTarget = animationElement[i].getBoundingClientRect().top + 200;
    if (windowHeight > animationTarget) {
      animationElement[i].classList.add('active');
    }
  }

  for (let i = 0; i < maskItem.length; i++) {
    const maskTarget = maskItem[i].getBoundingClientRect().top + maskItem[i].clientHeight * 0.5;
    if (windowHeight > maskTarget) {
      maskItem[i].classList.add('active');
    }
  }

	if (header < scroll) {
		topLink.classList.add('show');
	} else {
		topLink.classList.remove('show');
  }
});
