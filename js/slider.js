/*------slider-----------*/
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
  showSlides((slideIndex += n))
}

function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('mySlides')

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
}

/*--------Count Number ----------*/

document.addEventListener('DOMContentLoaded', () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment
        obj.textContent = current
        if (current == end) {
          clearInterval(timer)
        }
      }, step)
  }
  counter('count1', 90, 15, 2500)
  counter('count2', 90, 4, 2500)
  counter('count3', 90, 5, 2500)
})
