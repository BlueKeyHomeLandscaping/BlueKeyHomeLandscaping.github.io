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
})(); 