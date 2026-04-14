const files = {
  tesi:   './tesi.pdf',
  slides: './presentazione_finale_tesi.pdf'
};

const labels = {
  tesi:   'TESI DI LAUREA — COMUNICAZIONI CERTIFICATE',
  slides: 'PRESENTAZIONE FINALE'
};

function openModal(key) {
  document.getElementById('modal-iframe').src = files[key];
  document.getElementById('modal-title').textContent = labels[key];
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal-iframe').src = '';
  document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.chapter-card, .tech-item, .doc-card, .tl-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

