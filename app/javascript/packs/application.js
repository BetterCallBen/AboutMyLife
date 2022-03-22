// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
// require("@rails/activestorage").start()
// require("channels")

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');


const openMenus = document.querySelectorAll('.btn-open');

const openHomeMenus = document.querySelectorAll('.btn-open-home')
const openSitesMenus = document.querySelectorAll('.btn-open-sites')
const openInfosMenus = document.querySelectorAll('.btn-open-infos')


const closeMenus = document.querySelectorAll('.close-home');

const closeHomeMenu = document.querySelector('.btn-close-home')
const closeSitesMenu = document.querySelector('.btn-close-sites')
const closeInfosMenu = document.querySelector('.btn-close-infos')


const containers = document.querySelectorAll('.containers')

const containerHome = document.querySelector('.container-home')
const containerInfos = document.querySelector('.container-infos')
const containerSites = document.querySelector('.container-sites')


openMenus.forEach(openMenu => {
  openMenu.addEventListener("click", function () {

    sliders.forEach(slider => {
      slider.classList.add('appear')
    });

    faders.forEach(fader => {
      fader.classList.add('appear')
    });

    containers.forEach(container => {
      container.classList.add('hidden')
    })
    closeMenus.forEach(closeMenu => {
      closeMenu.classList.add('appear')
    })

    openMenus.forEach(openMenu => {
      openMenu.classList.add('hidden')
    });
  })
})

if (closeHomeMenu) {
  closeHomeMenu.addEventListener("click", function () {

    // on cache tout

    sliders.forEach(slider => {
      slider.classList.remove('appear')
    });

    faders.forEach(fader => {
      fader.classList.remove('appear')
    });

    closeMenus.forEach(closeMenu => {
      closeMenu.classList.remove('appear')
    })

    // on  affiche ce qu'on veut

    containerHome.classList.remove('hidden')

    openHomeMenus.forEach(openHomeMenu => {
      openHomeMenu.classList.remove('hidden')
    })
  });
}

if (closeSitesMenu) {
  closeSitesMenu.addEventListener("click", function () {

    // on cache tout

    sliders.forEach(slider => {
      slider.classList.remove('appear')
    });

    faders.forEach(fader => {
      fader.classList.remove('appear')
    });

    closeMenus.forEach(closeMenu => {
      closeMenu.classList.remove('appear')
    })

    // on  affiche ce qu'on veut

    containerSites.classList.remove('hidden')

    openSitesMenus.forEach(openSitesMenu => {
      openSitesMenu.classList.remove('hidden')
    })
  });
}
if (closeInfosMenu) {
  closeInfosMenu.addEventListener("click", function () {

    // on cache tout

    sliders.forEach(slider => {
      slider.classList.remove('appear')
    });

    faders.forEach(fader => {
      fader.classList.remove('appear')
    });

    closeMenus.forEach(closeMenu => {
      closeMenu.classList.remove('appear')
    })

    // on  affiche ce qu'on veut

    containerInfos.classList.remove('hidden')

    openInfosMenus.forEach(openInfosMenu => {
      openInfosMenu.classList.remove('hidden')
    })
  });
}
