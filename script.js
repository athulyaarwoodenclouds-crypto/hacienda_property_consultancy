document.addEventListener('DOMContentLoaded', () => {
    // 1. Elements to animate
    const selectorsToAnimate = [
        '.main-title', '.left-bottom', '.right-bottom', // Hero 
        '.services-header', '.service-card', // Services
        '.transform-image-wrapper', '.transform-content', // Transform
        '.subscribe-title', '.subscribe-form-area', // Subscribe
        '.story-image', '.story-content', // Story
        '.testimonials-header', '.testimonial-card', // Testimonials
        '.contact-left', '.contact-right', // Contact
        '.footer-col' // Footer
    ];

    // Add 'reveal' class dynamically
    selectorsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
        });
    });

    // 2. Set up Intersection Observer
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before the element hits bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 3. Observe elements
    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    // 4. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Toggle icon between bars and close (x)
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking a link
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});
