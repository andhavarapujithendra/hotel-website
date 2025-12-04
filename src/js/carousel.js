// Large Carousel Data - Uses local GIFs, falls back to online if not found
const largeCarouselData = [
    {
        image: 'assets/gifs/carousel-1.gif',
        fallback: 'https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif',
        title: '🔥 Smash Burger Special',
        description: 'Juicy beef patty, melted cheese, fresh toppings - 20% OFF!'
    },
    {
        image: 'assets/gifs/carousel-1.gif',
        fallback: 'https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif',
        title: 'Nashville Hot Chicken',
        description: 'Crispy, spicy, and absolutely irresistible'
    },
    {
        image: 'assets/gifs/carousel-1.gif',
        fallback: 'https://media.giphy.com/media/l0HlHJGHe3yAMhdQY/giphy.gif',
        title: '💥 Double Burger Deal',
        description: 'Buy 2 Burgers, Get 1 FREE - Limited Time Only!'
    }
];

// Small Items Carousel Data - Homepage Images
const itemsCarouselData = [
    { image: 'assets/images/HOMEPAGE1.jpeg', title: '', description: '', price: '' },
    { image: 'assets/images/HOMEPAGE2.jpeg', title: '', description: '', price: '' },
];

// Initialize Large Carousel
function initLargeCarousel() {
    const track = document.querySelector('.large-carousel-track');
    const dotsContainer = document.querySelector('.carousel-indicators');
    const prevBtn = document.querySelector('.large-carousel-container .prev-btn');
    const nextBtn = document.querySelector('.large-carousel-container .next-btn');

    if (!track || !dotsContainer || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    // Create slides
    largeCarouselData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'large-carousel-slide';

        const img = document.createElement('img');
        img.alt = item.title;

        // Try to load local image first, fallback to online if it fails
        img.src = item.image;
        img.onerror = function () {
            if (item.fallback) {
                this.src = item.fallback;
            }
        };

        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;

        slide.appendChild(img);
        slide.appendChild(caption);
        track.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.carousel-indicators .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % largeCarouselData.length;
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + largeCarouselData.length) % largeCarouselData.length;
        updateCarousel();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-rotate every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize Small Items Carousel
function initItemsCarousel() {
    const track = document.querySelector('.items-carousel-track');
    const prevBtn = document.querySelector('.items-nav-btn.prev');
    const nextBtn = document.querySelector('.items-nav-btn.next');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    // Create items
    itemsCarouselData.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'item-slide';
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            ${item.title ? `
            <div class="item-slide-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.price ? `<span class="item-price">${item.price}</span>` : ''}
            </div>
            ` : ''}
        `;
        track.appendChild(slide);
    });

    function updatePosition() {
        const slideWidth = track.querySelector('.item-slide')?.offsetWidth || 0;
        const gap = 30; // matching CSS gap
        const scrollAmount = slideWidth + gap;
        track.style.transform = `translateX(-${currentIndex * scrollAmount}px)`;
    }

    function scrollNext() {
        if (currentIndex < itemsCarouselData.length - 1) {
            currentIndex++;
            updatePosition();
        } else {
            // Loop back to start
            currentIndex = 0;
            updatePosition();
        }
    }

    function scrollPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updatePosition();
        } else {
            // Loop to end
            currentIndex = itemsCarouselData.length - 1;
            updatePosition();
        }
    }

    prevBtn.addEventListener('click', scrollPrev);
    nextBtn.addEventListener('click', scrollNext);
}

// Initialize both carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initLargeCarousel();
    initItemsCarousel();
});
