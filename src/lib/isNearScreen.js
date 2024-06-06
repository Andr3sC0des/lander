export function isNearScreen(selector, animation, duration, delay, options={}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    observer.observe(element);
  });
}

