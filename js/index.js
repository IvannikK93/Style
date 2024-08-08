(() => {
  function animationHero() {
    const t1 = gsap.timeline({ play: true });
    t1
      .from('.hero__left', { y: 100, opacity: 0, duration: 1, delay: 0.5 })
      .from('.hero__descr', { opacity: 0, duration: 0.6 })
      .from('.photos-wrap img', { scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.3 })
      .from('.photos__author', { opacity: 0, duration: 1.5 });
      return;
  }

  function burgerTweak(menuTweak) {
    menuTweak
      .to('.menu', { display: 'block' })
      .from('.menu__top', { y: -80, opacity: 0, duration: 1 })
      .from(['.menu__nav'], { y: 200, opacity: 0, duration: 1 })
      .from('.menu', { backgroundColor: 'transparent', duration: 1.2 }, "<")
      .from('.social', { y: 200, opacity: 0, duration: 1 })
      .from('.menu__right', { y: 200, opacity: 0, duration: 1 }, "<");
      return;
  }
  document.addEventListener('DOMContentLoaded', () => {
    animationHero();
    const burgerBtn = document.querySelector('.burger');
    const burgerClose = document.querySelector('.close');
    const menuTweak = gsap.timeline({ paused: true });
    burgerTweak(menuTweak);

    burgerBtn.addEventListener('click', () => {
      menuTweak.play();
    })

    burgerClose.addEventListener('click', () => {
      menuTweak.reverse();
    })
  })
})();
