const animationText = document.querySelectorAll('.bl_animation_txt');

for (let i = 0; i < animationText.length; i++) {
  const targetElement = animationText[i];
  const text = targetElement.textContent;
  const textArray = [];

  targetElement.textContent = '';
  for (let j = 0; j < text.split("").length; j++) {
    if (text.split("")[j] === ' ') {
      textArray.push(' ')
    } else {
      textArray.push('<span class="animation_wrap"><span class="animation_element" style="animation-delay: '+ (j * 0.1) +'s;">' + text.split("")[j] + '</span></span>');
    }
  }

  for (let k = 0; k < textArray.length; k++) {
    targetElement.innerHTML += textArray[k];
  }

  window.addEventListener('load', function(){
    setTimeout(showClose, 3000);
  });

  function showClose() {
    const animationElement = document.getElementById('js_animation');
    const body = document.getElementById('body');
    animationElement.classList.add('close');
    body.classList.add('fixed');
  }
}

const swiper = new Swiper(".swiper", {});
