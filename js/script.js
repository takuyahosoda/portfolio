const swiper = new Swiper(".swiper", {
  slidesPerView: 1.5,
  centeredSlides: true,
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
      const target = rect + offset - 20;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
  });
}

const topLink = document.getElementById('js_top');
const header = document.getElementById('js_header').offsetHeight;

window.addEventListener('scroll', () => {
	const scroll = window.pageYOffset || document.documentElement.scrollTop;
	const windowHeight = window.innerHeight; // 現在のブラウザの高さ

	if (header < scroll) {
		topLink.classList.add('show');
	} else {
		topLink.classList.remove('show');
	}
});
