// Menu Data organized by category
const menuCategories = {
    sandwiches: {
        name: 'Chicken Sandwiches',
        items: [
            {
                id: 5,
                name: 'The Original',
                price: 8.99,
                description: 'Pickles, mayo, coleslaw, sauce',
                image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 6,
                name: 'Cluck Up Nashville',
                price: 9.49,
                description: 'Pickles, spicy mayo, pepper jack cheese, lettuce',
                image: 'assets/images/Cluck Up Nashville.png',
                inStock: true
            },
            {
                id: 7,
                name: 'The Club',
                price: 9.99,
                description: 'BBQ bacon, tomato, American cheese, lettuce',
                image: 'assets/images/The Club.png',
                inStock: true
            },
            {
                id: 8,
                name: 'Jacksons Honey',
                price: 9.49,
                description: 'Spicy mayo, pickles, honey sauce',
                image: 'assets/images/Jacksons Honey.png',
                inStock: true
            }
        ]
    },
    burgers: {
        name: 'Smash Burgers',
        items: [
            {
                id: 9,
                name: 'The Classic Smash',
                price: 7.99,
                description: 'Lettuce, tomato, American cheese, pickles',
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 10,
                name: 'Smash N Bacon',
                price: 8.99,
                description: 'Bacon, American cheese, tomato, lettuce, mayo',
                image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 11,
                name: 'The Southern Charmy',
                price: 10.99,
                description: 'Double patty, mayo, BBQ sauce, bacon, lettuce, pepper jack cheese',
                image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 12,
                name: 'Cluck N Smash',
                price: 11.99,
                description: 'Chicken, beef patty, lettuce, tomato, sauce',
                image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80',
                inStock: true
            }
        ]
    },
    loaded: {
        name: 'Homestyle or Loaded',
        items: [
            {
                id: 1,
                name: '9 Chopped Tenders',
                price: 10.99,
                description: 'Fries loaded with mac and cheese, pickles, mayo',
                image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 2,
                name: 'BBQ Chopped Tenders',
                price: 10.99,
                description: 'Chopped tenders, bacon, fries, BBQ sauce, coleslaw',
                image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 3,
                name: 'Korea Tenders',
                price: 11.99,
                description: 'Fries, crispy onions chips, Korean sauce, kimchi, siracha',
                image: 'assets/images/Korea Tenders.png',
                inStock: true
            },
            {
                id: 4,
                name: 'Fries and Tenders',
                price: 11.99,
                description: 'Classic fries with crispy tenders',
                image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
                inStock: true
            }
        ]
    },
    sides: {
        name: 'Sides',
        items: [
            {
                id: 13,
                name: 'Fries',
                price: 3.99,
                description: 'Golden crispy french fries',
                image: 'assets/images/Fries.png',
                inStock: true
            },
            {
                id: 14,
                name: 'Coleslaw',
                price: 2.99,
                description: 'Fresh and creamy coleslaw',
                image: 'assets/images/Coleslaw.png',
                inStock: true
            },
            {
                id: 15,
                name: 'Cheese Overloaded Fries',
                price: 5.99,
                description: 'Fries loaded with melted cheese',
                image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 16,
                name: 'Macaroni and Cheese',
                price: 4.99,
                description: 'Creamy homemade mac and cheese',
                image: 'assets/images/Macaroni and Cheese.png',
                inStock: true
            }
        ]
    },
    sauces: {
        name: 'Sauces',
        items: [
            {
                id: 36,
                name: 'Side of Ranch Dipper',
                price: 0.99,
                description: 'Creamy ranch dipping sauce',
                image: 'assets/images/Ranch Dipper .png',
                inStock: true
            },
            {
                id: 37,
                name: 'Side of Siracha Ranch Dipper',
                price: 0.99,
                description: 'Spicy siracha ranch sauce',
                image: 'assets/images/Siracha Ranch Dipper.png',
                inStock: true
            },
            {
                id: 38,
                name: 'Side of BBQ Dipper',
                price: 0.79,
                description: 'Sweet and tangy BBQ sauce',
                image: 'assets/images/Side of BBQ Dipper .png',
                inStock: true
            },
            {
                id: 39,
                name: 'Side of Spicy Mayo Dipper',
                price: 0.99,
                description: 'Creamy spicy mayonnaise',
                image: 'assets/images/Side of Spicy Mayo Dipper .png',
                inStock: true
            },
            {
                id: 40,
                name: 'Side of Mayo Dipper',
                price: 0.79,
                description: 'Classic mayonnaise',
                image: 'assets/images/Side of Mayo Dipper .png',
                inStock: true
            },
            {
                id: 41,
                name: 'Side of Korea Dipper',
                price: 0.99,
                description: 'Korean-style dipping sauce',
                image: 'assets/images/Side of Korea Dipper.png',
                inStock: true
            },
            {
                id: 42,
                name: 'Side of Buffalo Dipper',
                price: 0.99,
                description: 'Spicy buffalo wing sauce',
                image: 'assets/images/Side of Buffalo Dipper.png',
                inStock: true
            },
            {
                id: 43,
                name: 'Side of Honey Dipper',
                price: 0.79,
                description: 'Sweet honey dipping sauce',
                image: 'assets/images/Side of Honey Dipper.png',
                inStock: true
            }
        ]
    },
    drinks: {
        name: 'Sodas & Drinks',
        items: [
            {
                id: 17,
                name: 'Diet Coke',
                price: 2.49,
                description: 'Refreshing diet cola',
                image: 'assets/images/Diet Coke .png',
                inStock: true
            },
            {
                id: 18,
                name: 'Coke',
                price: 2.49,
                description: 'Classic Coca-Cola',
                image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 19,
                name: 'Tea',
                price: 2.99,
                description: 'Freshly brewed iced tea',
                image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 20,
                name: 'Lemonade',
                price: 2.99,
                description: 'Fresh squeezed lemonade',
                image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 21,
                name: 'Dr. Peppers',
                price: 2.49,
                description: 'Classic Dr. Pepper soda',
                image: 'assets/images/Dr. Peppers.png',
                inStock: true
            },
            {
                id: 22,
                name: 'Sprite',
                price: 2.49,
                description: 'Lemon-lime soda',
                image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 23,
                name: 'Kids Apple Juice',
                price: 1.99,
                description: 'Fresh apple juice for kids',
                image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 24,
                name: 'Orange Juice',
                price: 2.99,
                description: 'Freshly squeezed orange juice',
                image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 25,
                name: 'Water Bottle',
                price: 1.49,
                description: 'Bottled water',
                image: 'assets/images/Water Bottle.png',
                inStock: true
            }
        ]
    },
    milkshakes: {
        name: 'Milkshakes',
        items: [
            {
                id: 29,
                name: 'Vanilla Milkshake',
                price: 5.99,
                description: 'Classic vanilla milkshake',
                image: 'https://images.unsplash.com/photo-1579954115563-e72bf1381629?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 30,
                name: 'Strawberry Milkshake',
                price: 5.99,
                description: 'Fresh strawberry milkshake',
                image: 'assets/images/Strawberry Milkshake.png',
                inStock: true
            },
            {
                id: 31,
                name: 'Chocolate Milkshake',
                price: 5.99,
                description: 'Rich chocolate milkshake',
                image: 'assets/images/Chocolate Milkshake.png',
                inStock: true
            },
            {
                id: 32,
                name: 'OREO Top Loaded Shake',
                price: 7.99,
                description: 'Milkshake topped with OREO cookies',
                image: 'assets/images/OREO Top Loaded Shake.png',
                inStock: true
            },
            {
                id: 33,
                name: 'M&M Top Loaded Shake',
                price: 7.99,
                description: 'Milkshake topped with M&M candies',
                image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 34,
                name: 'KITKAT Top Loaded Shake',
                price: 7.99,
                description: 'Milkshake topped with KITKAT bars',
                image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
                inStock: true
            },
            {
                id: 35,
                name: 'OREO, M&M and KITKAT Top Loaded Shake',
                price: 9.99,
                description: 'Ultimate loaded shake with OREO, M&M, and KITKAT',
                image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
                inStock: true
            }
        ]
    },
    desserts: {
        name: 'Desserts',
        items: [
            {
                id: 26,
                name: 'Brownie',
                price: 4.99,
                description: 'Warm chocolate brownie',
                image: 'assets/images/Brownie.png',
                inStock: true
            },
            {
                id: 27,
                name: 'Chocolate Cookie',
                price: 3.99,
                description: 'Freshly baked chocolate chip cookie',
                image: 'assets/images/Choclate Cookie.png',
                inStock: true
            },
            {
                id: 28,
                name: 'Apple Pie',
                price: 5.99,
                description: 'Classic apple pie slice',
                image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?auto=format&fit=crop&w=800&q=80',
                inStock: true
            }
        ]
    }
};

// DOM Elements
const menuContainer = document.getElementById('menuContainer');
const categoryButtons = document.querySelectorAll('.category-btn');

// State
let isScrolling = false;

// Initialize
function initializeMenu() {
    renderAllCategories();
    setupCategoryNavigation();
    setupScrollSpy();
}

// Run on DOM ready - with fallback for race conditions
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenu);
} else {
    // DOM already loaded (script loaded late)
    initializeMenu();
}

// Render all categories with headers
function renderAllCategories() {
    const categoriesHTML = Object.keys(menuCategories).map(categoryKey => {
        const category = menuCategories[categoryKey];
        return createCategorySection(categoryKey, category);
    }).join('');

    menuContainer.innerHTML = categoriesHTML;
}

// Create a category section with header and items
function createCategorySection(categoryKey, category) {
    const itemsHTML = category.items.map(item => createMenuItemCard(item, categoryKey)).join('');

    return `
        <div class="menu-category-section" id="category-${categoryKey}">
            <div class="category-header">
                <h2 class="category-title">${category.name}</h2>
            </div>
            <div class="menu-grid">
                ${itemsHTML}
            </div>
        </div>
    `;
}

// Create Menu Item Card
function createMenuItemCard(item, category) {
    const stockClass = item.inStock ? '' : 'out-of-stock';
    const imageUrl = item.image || generatePlaceholderImage(category);
    const placeholderUrl = generatePlaceholderImage(category);

    return `
        <div class="menu-item ${stockClass}">
            <img src="${imageUrl}" 
                 alt="${item.name}" 
                 class="menu-item-image"
                 onerror="this.onerror=null; this.src='${placeholderUrl}';">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                </div>
                ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
                <span class="menu-item-category">${category}</span>
            </div>
        </div>
    `;
}

// Generate Placeholder Image based on category
function generatePlaceholderImage(category) {
    const colors = {
        'sandwiches': { start: '%239D4EDD', end: '%23FF1493' },
        'burgers': { start: '%23FF1493', end: '%23C724B1' },
        'loaded': { start: '%238A00C4', end: '%23C724B1' },
        'sides': { start: '%238A00C4', end: '%239D4EDD' },
        'sauces': { start: '%239D4EDD', end: '%238A00C4' },
        'drinks': { start: '%23FF1493', end: '%23C724B1' },
        'milkshakes': { start: '%23FF69B4', end: '%23FFB6C1' },
        'desserts': { start: '%23FF69B4', end: '%23FFB6C1' }
    };

    const gradient = colors[category] || colors['loaded'];

    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:${gradient.start};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:${gradient.end};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='url(%23grad)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle' opacity='0.5'%3E${category.toUpperCase()}%3C/text%3E%3C/svg%3E`;
}

// Setup Category Navigation
function setupCategoryNavigation() {
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            if (category === 'all') {
                // Scroll to top of menu section
                document.querySelector('.menu-items-section').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                updateActiveCategory('all', false); // Don't scroll button horizontally
            } else {
                // Scroll to specific category
                const categorySection = document.getElementById(`category-${category}`);
                if (categorySection) {
                    isScrolling = true;
                    categorySection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update active state WITHOUT scrolling button horizontally
                    updateActiveCategory(category, false);

                    // Reset scrolling flag after animation
                    setTimeout(() => {
                        isScrolling = false;
                    }, 1000);
                }
            }
        });
    });
}

// Setup Scroll Spy - Update active category based on scroll position
function setupScrollSpy() {
    const categorySections = document.querySelectorAll('.menu-category-section');

    const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -50% 0px', // Adjust for sticky header
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        if (isScrolling) return; // Don't update during programmatic scrolling

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const categoryId = entry.target.id.replace('category-', '');
                updateActiveCategory(categoryId);
            }
        });
    }, observerOptions);

    categorySections.forEach(section => {
        observer.observe(section);
    });
}

// Update active category button
function updateActiveCategory(category, shouldScroll = false) {
    categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');

            // Only scroll button into view when user clicks, not during scroll spy
            if (shouldScroll) {
                btn.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        } else {
            btn.classList.remove('active');
        }
    });
}

