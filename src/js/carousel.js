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

// Small Items Carousel Data
const itemsCarouselData = [
    { image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop', title: 'Piri Piri Chicken', description: 'Flame-grilled with your choice of spice' },
    { image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', title: 'Gourmet Burger', description: 'Juicy beef patty in a brioche bun' },
    { image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop', title: 'Spicy Wings', description: 'Crispy wings with signature sauce' },
    { image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop', title: 'Chicken Wrap', description: 'Grilled chicken with fresh veggies' },
    { image: 'https://images.unsplash.com/photo-1534939561126-855f86218185?w=400&h=300&fit=crop', title: 'Rice Bowl', description: 'Spicy rice with succulent chicken' },
    { image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop', title: 'Loaded Fries', description: 'Fries with chicken and cheese' },
    { image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop', title: 'Lamb Burger', description: 'Succulent lamb patty with mint sauce' },
    { image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop', title: 'Chicken Pitta', description: 'Tender chicken in a toasted pitta' },
    { image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop', title: 'Paneer Wrap', description: 'Grilled paneer cheese with salad' },
    { image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop', title: 'Chicken Strips', description: 'Boneless strips of tender chicken' },
    { image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop', title: 'BBQ Wings', description: 'Smoky BBQ flavored chicken wings' },
    { image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop', title: 'Chicken Burrito', description: 'Mexican style burrito with spicy rice' },
    { image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop', title: 'Caesar Salad', description: 'Fresh salad with grilled chicken breast' },
    { image: 'https://images.unsplash.com/photo-1625938145744-e380515399b7?w=400&h=300&fit=crop', title: 'Corn on Cob', description: 'Grilled corn with butter and spices' },
    { image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=300&fit=crop', title: 'Nachos', description: 'Crispy nachos with salsa and cheese' }
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
