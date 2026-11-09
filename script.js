// Carousel Logic (Executes only on index.html)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add('active');
  }

  function moveSlide(step) {
    currentSlide += step;
    showSlide(currentSlide);
  }
}

// Pricing Logic (Executes only on pricing.html)
const priceDisplay = document.getElementById('box-price');
const optionBtns = document.querySelectorAll('.options-btn');

if (priceDisplay && optionBtns.length > 0) {
  optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all buttons
      optionBtns.forEach(b => b.classList.remove('active-btn'));
      // Add active class to clicked button
      e.target.classList.add('active-btn');
      
      // Update price based on data attribute
      const type = e.target.getAttribute('data-type');
      if (type === 'dark') {
        priceDisplay.innerText = 'Rs 2800';
      } else if (type === 'white') {
        priceDisplay.innerText = 'Rs 2200';
      } else {
        priceDisplay.innerText = 'Rs 2500';
      }
    });
  });
}

// Shared Functions
function orderChocolate() {
  alert("Your mystery box has been added to your cart!");
}

function submitContact(event) {
  event.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  event.target.reset();
}