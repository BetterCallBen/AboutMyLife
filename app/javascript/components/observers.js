export { appearOnscroll };

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

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
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnscroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnscroll.observe(fader)
})

sliders.forEach(slider => {
  appearOnscroll.observe(slider)
})
