const images = document.querySelectorAll(".gallery img");

// Create modal dynamically
const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `
  <span class="close-btn">&times;</span>
  <img src="" alt="Expanded Image">
`;

document.body.appendChild(modal);

const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".close-btn");

// Open modal
images.forEach(image => {
  image.addEventListener("click", () => {
    modal.classList.add("show");
    modalImg.src = image.src;
  });
});

// Close with X button
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
});