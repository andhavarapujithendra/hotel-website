// Large Carousel Data
const largeCarouselData = [
    {
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=1400&h=500&fit=crop',
        title: 'Flame-Grilled Perfection',
        description: 'Our signature piri piri chicken, grilled to perfection'
    },
    {
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=1400&h=500&fit=crop',
        title: 'Fresh Ingredients',
        description: 'Made with the finest, freshest ingredients daily'
    },
    {
        image: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=1400&h=500&fit=crop',
        title: 'Bold Flavors',
        description: 'Experience the authentic taste of piri piri'
    }
];

// Small Items Carousel Data
const itemsCarouselData = [
    { image: 'https://placehold.co/280x200/C42518/FFFFFF?text=Piri+Piri+Chicken', title: 'Piri Piri Chicken', description: 'Flame-grilled with your choice of spice' },
    { image: 'https://placehold.co/280x200/F5D433/000000?text=Chicken+Burger', title: 'Chicken Burger', description: 'Juicy chicken breast in a soft bun' },
    { image: 'https://placehold.co/280x200/C42518/FFFFFF?text=Spicy+Wings', title: 'Spicy Wings', description: 'Crispy wings with signature sauce' },
    { image: 'https://placehold.co/280x200/F5D433/000000?text=Chicken+Wrap', title: 'Chicken Wrap', description: 'Grilled chicken with fresh veggies' },
    { image: 'https://placehold.co/280x200/C42518/FFFFFF?text=Rice+Bowl', title: 'Rice Bowl', description: 'Spicy rice with succulent chicken' },
    { image: 'https://placehold.co/280x200/F5D433/000000?text=Loaded+Fries', title: 'Loaded Fries', description: 'Fries with chicken and cheese' }
];

// Initialize Large Carousel
function initLargeCarousel() {
    const track = document.querySelector('.large-carousel-track');
    const dotsContainer = document.getElementById('large-dots');
    const prevBtn = document.getElementById('large-prev');
    const nextBtn = document.getElementById('large-next');

    let currentIndex = 0;

    // Create slides
    largeCarouselData.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.className = 'large-carousel-slide';
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="slide-caption">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        track.appendChild(slide);

        // Create dot
        const dot = document.createElement('div');
        dot.className = index === 0 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.carousel-dots .dot').forEach((dot, index) => {
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
    const prevBtn = document.getElementById('items-prev');
    const nextBtn = document.getElementById('items-next');

    let currentPosition = 0;
    const itemWidth = 300; // 280px + 20px gap

    // Create items
    itemsCarouselData.forEach(item => {
        const slide = document.createElement('div');
        slide.className = 'item-slide';
        slide.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="item-slide-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        track.appendChild(slide);
    });

    function updatePosition() {
        track.style.transform = `translateX(-${currentPosition}px)`;
    }

    function scrollNext() {
        const maxScroll = (itemsCarouselData.length - 3) * itemWidth;
        if (currentPosition < maxScroll) {
            currentPosition += itemWidth;
            updatePosition();
        }
    }

    function scrollPrev() {
        if (currentPosition > 0) {
            currentPosition -= itemWidth;
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
