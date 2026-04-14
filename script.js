// Configurazione file
const files = {
  tesi: './tesi.pdf',
  slides: './presentazione_finale_tesi.pdf'
};

const labels = {
  tesi: 'TESI DI LAUREA — COMUNICAZIONI CERTIFICATE',
  slides: 'PRESENTAZIONE FINALE'
};

// Gestione Modal
function openModal(key) {
  const modal = document.getElementById('modal');
  const iframe = document.getElementById('modal-iframe');
  
  iframe.src = files[key];
  document.getElementById('modal-title').textContent = labels[key];
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal-iframe').src = '';
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target.id === 'modal') closeModal();
}

// Chiudi con tasto ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Scroll Reveal (Animazione comparsa documenti)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.doc-card').forEach(el => {
  observer.observe(el);
});
