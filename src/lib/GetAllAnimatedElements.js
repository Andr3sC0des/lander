import { ScrollAnimations } from './ScrollAnimations.js'

const els = document.querySelectorAll('[animation]')
els.forEach(i =>{
  ScrollAnimations({
  el: i, 
  animation: i.getAttribute('animation'), 
  cycle: i.getAttribute('cycle'),
  duration: i.getAttribute('duration')
})
})

