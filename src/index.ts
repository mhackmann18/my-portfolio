const mouseScrollIcon = document.getElementById("mouse-scroll-animation");

document.addEventListener("scroll", () => {
  if (mouseScrollIcon) {
    if (window.scrollY > 0) {
      mouseScrollIcon.style.opacity = "0";
    } else {
      mouseScrollIcon.style.opacity = "1";
    }
  }
});

export {};
