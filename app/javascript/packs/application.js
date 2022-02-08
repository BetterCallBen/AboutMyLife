// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
// require("@rails/activestorage").start()
// require("channels")

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const openHomes = document.querySelectorAll('.btn-open');
const closeHome = document.querySelector('.close-home');
// const anchors = document.querySelectorAll('.anchor');
// const cursor = document.querySelector('.cursor');

openHomes.forEach(openHome => {
  openHome.addEventListener("click", function () {

    sliders.forEach(slider => {
      slider.classList.add('appear')
    });

    faders.forEach(fader => {
      fader.classList.add('appear')
    });

    closeHome.classList.add('appear');

    openHomes.forEach(openHome => {
      openHome.classList.add('hidden')
    });
  })
})

closeHome.addEventListener("click", function () {

  sliders.forEach(slider => {
    slider.classList.remove('appear')
  });

  faders.forEach(fader => {
    fader.classList.remove('appear')
  });

  closeHome.classList.remove('appear');

  openHomes.forEach(openHome => {
    openHome.classList.remove('hidden')
  });
});

// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.pageX + 'px'
//   cursor.style.top = e.pageY + 'px'
// })
