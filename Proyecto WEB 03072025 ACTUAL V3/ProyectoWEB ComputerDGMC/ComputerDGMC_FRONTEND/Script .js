document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.video-wrapper video');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.75 });

  observer.observe(video);
});

const slider = document.querySelector('.slider');
let index = 0;





//Nueva FUNCION  Mariel---------------------------------------------
function moverImagenes() {
  index++;
  if (index > 3) index = 0;
  slider.style.transform = `translateX(-${index * 50}%)`;
}

setInterval(moverImagenes, 3000); // Cambia cada 3 segundos