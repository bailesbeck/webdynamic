const gallery = document.querySelector('#images');

const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('.modal-img');
const closeBtn = modal.querySelector('.close-btn');

gallery.addEventListener('click', (e) => {
  const clickedImg = e.target.closest('img');
  if (!clickedImg) return;

  modalImg.src = clickedImg.src;
  modalImg.alt = clickedImg.alt;

  modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});


modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});