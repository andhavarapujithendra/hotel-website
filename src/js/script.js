document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    const scrollToSection = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    const animateOnScroll = () => {
        const sections = document.querySelectorAll('.animate-on-scroll');
        const triggerBottom = window.innerHeight / 5 * 4;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('show');
            } else {
                section.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations for sections
    const sections = document.querySelectorAll('section');
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