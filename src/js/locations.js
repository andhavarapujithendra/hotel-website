// Location Images for Carousel
const locationImages = [
    'assets/images/CLUCK N SMASH.png',
    'assets/images/CLCUKNSMASH2.png',
    'assets/images/CLUCKNSMASH3.png'
];

// DOM Elements
const carouselTrack = document.getElementById('locationCarouselTrack');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// State
let currentIndex = 0;
let autoPlayInterval;

// Initialize
function initializeCarousel() {
    renderCarouselImages();
    renderDots();
    startAutoPlay();
    addEventListeners();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCarousel);
} else {
    initializeCarousel();
}

// Render Carousel Images
function renderCarouselImages() {
    carouselTrack.innerHTML = locationImages.map((src, index) => `
        <div class="carousel-slide">
            <img src="${src}" alt="Cluck N Smash Location Image ${index + 1}">
        </div>
    `).join('');
}

// Render Dots
function renderDots() {
    carouselDots.innerHTML = locationImages.map((_, index) => `
        <div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
}

// Update Carousel Position
function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Navigation Functions
function nextSlide() {
    currentIndex = (currentIndex + 1) % locationImages.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + locationImages.length) % locationImages.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Auto Play Logic
function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// Event Listeners
function addEventListeners() {
    // Buttons
    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay(); // Reset timer
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay(); // Reset timer
    });

    // Dots
    carouselDots.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            const index = parseInt(e.target.dataset.index);
            goToSlide(index);
            startAutoPlay(); // Reset timer
        }
    });

    // Pause on hover
    const carousel = document.querySelector('.location-carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}
