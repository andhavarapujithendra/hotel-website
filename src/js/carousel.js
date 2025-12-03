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

// Small Items Carousel Data - Showcase items from each menu category
const itemsCarouselData = [
    // Homestyle or Loaded
    { image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80', title: '9 Chopped Tenders', description: 'Fries loaded with mac and cheese, pickles, mayo', price: '$10.99' },
    // Chicken Sandwiches
    { image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80', title: 'The Original', description: 'Pickles, mayo, coleslaw, sauce', price: '$8.99' },
    // Smash Burgers
    { image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', title: 'The Classic Smash', description: 'Lettuce, tomato, American cheese, pickles', price: '$7.99' },
    // Sides
    { image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80', title: 'Cheese Overloaded Fries', description: 'Fries loaded with melted cheese', price: '$5.99' },
    // Drinks
    { image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', title: 'Lemonade', description: 'Fresh squeezed lemonade', price: '$2.99' },
    // Desserts & Milkshakes
    { image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', title: 'OREO Top Loaded Shake', description: 'Milkshake topped with OREO cookies', price: '$7.99' },
    // Sauces
    { image: 'https://images.unsplash.com/photo-1472476443507-c7a392dd12c7?auto=format&fit=crop&w=800&q=80', title: 'Side of Ranch Dipper', description: 'Creamy ranch dipping sauce', price: '$0.99' },
    // Another popular item
    { image: 'https://images.unsplash.com/photo-1608767221051-2b9d18f8ca1e?auto=format&fit=crop&w=800&q=80', title: 'Cluck Up Nashville', description: 'Pickles, spicy mayo, pepper jack cheese, lettuce', price: '$9.49' },
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
                ${item.price ? `<span class="item-price">${item.price}</span>` : ''}
            </div>
        `;
        track.appendChild(slide);
    });

    function updatePosition() {
        track.style.transform = `translateX(-${currentPosition}px)`;
    }

    function scrollNext() {
        const container = document.querySelector('.items-carousel-container');
        const containerWidth = container ? container.offsetWidth : 0;
        const visibleItems = Math.floor(containerWidth / itemWidth);
        const maxScroll = (itemsCarouselData.length - visibleItems) * itemWidth;

        if (currentPosition < maxScroll) {
            currentPosition += itemWidth;
            updatePosition();
        } else {
            // Optional: Loop back to start
            currentPosition = 0;
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
