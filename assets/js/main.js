(function() {
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  if (!navLinks.length) return;

  const sectionIds = navLinks
    .map(link => (new URL(link.href, window.location.origin)).hash)
    .filter(Boolean);

  const sections = sectionIds
    .map(hash => document.querySelector(hash))
    .filter(Boolean);

  function onScroll() {
    const offset = 110; // account for fixed navbar height
    let currentId = '#hero';

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const top = rect.top - offset;
      if (top <= 0) {
        currentId = `#${section.id}`;
      }
    }

    navLinks.forEach(link => {
      const isActive = link.hash === currentId;
      if (isActive) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  document.addEventListener('DOMContentLoaded', onScroll);
  onScroll();

  // Enhance file input label with chosen filenames
  document.addEventListener('change', function(e) {
    const input = e.target;
    if (input && input.matches('#imageUpload')) {
      const span = document.getElementById('file-chosen');
      if (!span) return;
      if (!input.files || !input.files.length) {
        span.textContent = 'No files selected';
        return;
      }
      const names = Array.from(input.files).map(f => f.name);
      span.textContent = names.length === 1 ? names[0] : `${names.length} files selected`;
    }
  });
})(); 