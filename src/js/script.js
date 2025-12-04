document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');

            // Close mobile menu
            if (hamburgerBtn) {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }

            // Only prevent default and smooth scroll for anchor links (starting with #)
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                // Smooth scroll to section
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For external links (menu.html, index.html), allow default navigation
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Header Scroll Animations - Smooth and Always Visible
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add 'scrolled' class for compact header with glow effect
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });

    // Scroll animations for sections (exclude menu page sections)
    const sections = document.querySelectorAll('section:not(.menu-hero):not(.menu-items-section):not(.category-nav-section)');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden'); // Initially hide sections
        observer.observe(section);
    });

    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100); // Stagger animation
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        cardObserver.observe(card);
    });

    // Dynamically load gallery images
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        const galleryImages = [
            'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1574126154517-d1e0d89e7344?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&h=600&fit=crop'
        ];

        galleryImages.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Gallery Image';
            galleryGrid.appendChild(img);
        });
    }

    // Dynamically load menu items
    const menuList = document.querySelector('.menu-list');
    if (menuList) {
        const menuItems = [
            { title: 'Piri Piri Chicken', description: 'Flame-grilled to perfection with your choice of spice.', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop' },
            { title: 'Gourmet Burger', description: 'Juicy beef patty with fresh lettuce, tomato, and our secret sauce.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop' },
            { title: 'Spicy Wings', description: 'Crispy wings tossed in our signature spicy sauce.', image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=600&h=400&fit=crop' },
            { title: 'Vegetarian Wrap', description: 'Grilled veggies and halloumi cheese in a soft tortilla.', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop' }
        ];

        menuItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="card-content">
                    <h2>${item.title}</h2>
                    <p>${item.description}</p>
                </div>
            `;
            menuList.appendChild(card);
        });
    }

    // Dynamically load locations
    const locationsList = document.querySelector('.locations-list');
    if (locationsList) {
        const locations = [
            { city: 'London', address: '123 High Street, London, UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop' },
            { city: 'Manchester', address: '456 Market Street, Manchester, UK', image: 'https://images.unsplash.com/photo-1543832923-4466d6f7d583?w=600&h=400&fit=crop' },
            { city: 'Birmingham', address: '789 Broad Street, Birmingham, UK', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=600&h=400&fit=crop' }
        ];

        locations.forEach(loc => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${loc.image}" alt="${loc.city}">
                <div class="card-content">
                    <h2>${loc.city}</h2>
                    <p>${loc.address}</p>
                </div>
            `;
            locationsList.appendChild(card);
        });
    }
});