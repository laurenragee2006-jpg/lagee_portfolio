const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.proj, .about__copy, .about__photos, .skills-wrap').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
