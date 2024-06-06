export function ScrollAnimations({el, animation='slideIn', duration='1s', cycle='ease-in'}){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = `${animation} ${duration} ${cycle}`
      }
    })
  })
  observer.observe(el)
}