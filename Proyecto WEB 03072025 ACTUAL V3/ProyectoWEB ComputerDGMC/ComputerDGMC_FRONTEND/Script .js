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

// Toast flotante para mensajes
function mostrarToast(mensaje) {
    let toast = document.getElementById('toast-flotante');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-flotante';
        toast.style.position = 'fixed';
        toast.style.top = '30px';
        toast.style.right = '30px';
        toast.style.background = '#2f00ff';
        toast.style.color = '#fff';
        toast.style.padding = '16px 28px';
        toast.style.borderRadius = '10px';
        toast.style.fontSize = '1.1em';
        toast.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)';
        toast.style.zIndex = '99999';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        document.body.appendChild(toast);
    }
    toast.textContent = mensaje;
    toast.style.opacity = '1';
    setTimeout(() => {
        toast.style.opacity = '0';
    }, 2500);
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn') && e.target.textContent.includes('Agregar al carrito')) {
        // Validar usuario registrado
        const usuario = localStorage.getItem('usuarioDGMC');
        if (!usuario) {
            mostrarToast('Usuario no registrado');
            return;
        }
        const productDiv = e.target.closest('.product');
        if (!productDiv) return;
        const nombre = productDiv.querySelector('p').textContent;
        const precio = productDiv.querySelector('.price') ? productDiv.querySelector('.price').textContent.replace('$','').trim() : '0.00';
        const imagen = productDiv.querySelector('img') ? productDiv.querySelector('img').getAttribute('src') : '';
        const carrito = JSON.parse(localStorage.getItem('carritoDGMC') || '[]');
        carrito.push({ nombre, precio, imagen });
        localStorage.setItem('carritoDGMC', JSON.stringify(carrito));
        actualizarContadorCarrito();
    }
});