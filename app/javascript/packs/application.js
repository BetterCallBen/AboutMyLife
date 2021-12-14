// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const openHome = document.querySelector('.open-home');
const closeHome = document.querySelector('.close-home');
const anchorPhoto = document.querySelector('.anchor-photo');


openHome.addEventListener("click", function () {
  sliders.forEach(slider => {
    slider.classList.add('appear')
  })
  faders.forEach(fader => {
    fader.classList.add('appear')
  })
  openHome.classList.add('hidden')
})

closeHome.addEventListener("click", function () {
  sliders.forEach(slider => {
    slider.classList.remove('appear')
  })
  faders.forEach(fader => {
    fader.classList.remove('appear')
  })
  openHome.classList.remove('hidden')
})

anchorPhoto.addEventListener("click", function () {
  sliders.forEach(slider => {
    slider.classList.remove('appear')
  })
  faders.forEach(fader => {
    fader.classList.remove('appear')
  })
  openHome.classList.remove('hidden')
})
