// Инициализация AOS
AOS.init({
  duration: 800,
  once: true
});

// Кнопка "Наверх"
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
