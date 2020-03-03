function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function() {
  parallax("header", window.scrollY, 0.5);
  parallax(".big__rose", window.scrollY, 0.6);
  parallax(".small__rose", window.scrollY, 1);
});
