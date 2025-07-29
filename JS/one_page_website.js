// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const galleryImages = document.querySelectorAll('#gallery img');

  galleryImages.forEach(img => {
    // Change cursor to pointer
    img.style.cursor = 'pointer';

    img.addEventListener('click', () => {
      // Show modal and set image source & alt
      modal.classList.add('active');
      modalImg.src = img.src;
      modalImg.alt = img.alt;

      // Focus modal for accessibility
      modal.focus();
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    modalImg.src = '';
    modalImg.alt = '';
  });

  // Close modal if clicking outside image
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalImg.src = '';
      modalImg.alt = '';
    }
  });

  // Optional: close modal with Escape key
  document.addEventListener('keydown', e => {
    if (e.key === "Escape" && modal.classList.contains('active')) {
      modal.classList.remove('active');
      modalImg.src = '';
      modalImg.alt = '';
    }
  });
});
