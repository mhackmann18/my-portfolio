const flipCards = document.querySelectorAll(".flip-card");
const closeProjectBts = document.querySelectorAll(".close-project-btn");

flipCards.forEach((flipCard) => {
  flipCard.addEventListener("click", () => {
    flipCard.classList.add("flipped");
  });

  const closeBtn = flipCard.querySelector(".close-project-btn");

  if (!closeBtn) {
    return;
  }

  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    flipCard.classList.remove("flipped");
  });
});
