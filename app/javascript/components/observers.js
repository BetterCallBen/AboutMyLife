export { appearOnscroll };

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');
const anchors = document.querySelectorAll('.anchor');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnscroll = new IntersectionObserver
(function(
  entries,
  appearOnscroll
) {
  entries.forEach(entry => {
    entry.target.classList.add('appear');
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnscroll.observe(fader)
})

sliders.forEach(slider => {
  appearOnscroll.observe(slider)
})

anchors.forEach(anchor => {
  anchor.addEventListener("click", function () {
    sliders.forEach(slider => {
      slider.classList.remove('appear')
    })
    faders.forEach(fader => {
      fader.classList.remove('appear')
    })
  });
})
