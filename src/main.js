document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // CTA Button interaction
  const ctaButton = document.querySelector('.cta-button');
  if(ctaButton) {
      ctaButton.addEventListener('click', () => {
          window.location.href = '#hero';
      });
  }
});