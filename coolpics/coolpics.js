const gallery = document.querySelector('.images');
const modal = document.querySelector('.modal');
const modalImage = modal.querySelector('img');
const closeBtn = modal.querySelector('.close-btn');

gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;

    modalImage.src = img.src.replace('sm', 'full');
    modalImage.alt = img.alt;

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