// Gucci Instant Noodles - Interactive Experience
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gucci Instant Noodles - Loading...');

    // Wait a bit to ensure DOM is fully ready
    setTimeout(() => {
        initializeApp();
    }, 100);

    function initializeApp() {
        console.log('Initializing application...');
        
        // Get all required elements
        const tasteStyleBtn = document.getElementById('tasteStyleBtn');
        const buyButton = document.getElementById('buyButton');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const modalTitle = document.getElementById('modalTitle');
        const modalText = document.getElementById('modalText');
        const featuresSection = document.getElementById('features');
        const navbar = document.querySelector('.navbar');

        console.log('Elements found:', {
            tasteStyleBtn: !!tasteStyleBtn,
            buyButton: !!buyButton,
            modalOverlay: !!modalOverlay,
            modalClose: !!modalClose,
            modalTitle: !!modalTitle,
            modalText: !!modalText,
            featuresSection: !!featuresSection,
            navbar: !!navbar
        });

        // Smooth scroll functionality
        if (tasteStyleBtn && featuresSection) {
            tasteStyleBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Taste the Style button clicked!');
                
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const targetPosition = featuresSection.offsetTop - navbarHeight;
                
                console.log('Scrolling to position:', targetPosition);
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
            console.log('Smooth scroll initialized');
        } else {
            console.error('Smooth scroll elements missing:', { tasteStyleBtn: !!tasteStyleBtn, featuresSection: !!featuresSection });
        }

        // Modal functionality
        const satiricalMessages = [
            { title: 'Just kidding.', text: "You can't afford it. 💅" },
            { title: 'Seriously?', text: "These noodles cost more than your rent. 🏠" },
            { title: 'Nice try!', text: "Maybe start with regular ramen first? 🍜" },
            { title: 'Exclusive Club', text: "Sorry, you're not on the list. 📋✨" },
        ];
        let messageIndex = 0;

        function showModal(title, text) {
            console.log('Showing modal:', title, text);
            if (modalTitle && modalText && modalOverlay) {
                modalTitle.textContent = title;
                modalText.textContent = text;
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('Modal shown successfully');
            }
        }

        function hideModal() {
            console.log('Hiding modal');
            if (modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                console.log('Modal hidden successfully');
            }
        }

        // Buy button click handler
        if (buyButton) {
            buyButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Buy button clicked!');
                
                const message = satiricalMessages[messageIndex];
                messageIndex = (messageIndex + 1) % satiricalMessages.length;
                
                showModal(message.title, message.text);
                
                // Visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
            console.log('Buy button listener attached');
        } else {
            console.error('Buy button not found');
        }

        // Modal close handlers
        if (modalClose) {
            modalClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Modal close button clicked');
                hideModal();
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    console.log('Modal backdrop clicked');
                    hideModal();
                }
            });
        }

        // Escape key to close modal
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
                console.log('Escape key pressed, closing modal');
                hideModal();
            }
        });

        // Navigation links smooth scroll
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        const navbarHeight = navbar ? navbar.offsetHeight : 80;
                        const targetPosition = targetElement.offsetTop - navbarHeight;
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            }
        });

        // Initialize scroll animations
        initializeScrollAnimations();

        console.log('Application initialized successfully! 🍜💎');
    }

    function initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal').forEach(element => {
            observer.observe(element);
        });

        console.log('Scroll animations initialized');
    }

    // Enhanced hover effects
    function initializeHoverEffects() {
        // Feature cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 20px 60px rgba(212, 175, 55, 0.3)';
                const icon = this.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.2)';
                    icon.style.transition = 'transform 0.4s ease';
                }
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '';
                const icon = this.querySelector('.feature-icon');
                if (icon) {
                    icon.style.transform = '';
                }
            });
        });

        // Gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            const placeholder = item.querySelector('.gallery-placeholder');
            
            item.addEventListener('mouseenter', function() {
                if (placeholder) {
                    placeholder.style.transform = 'scale(1.05)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                if (placeholder) {
                    placeholder.style.transform = 'scale(1)';
                }
            });
        });

        console.log('Hover effects initialized');
    }

    // Initialize hover effects after a short delay
    setTimeout(() => {
        initializeHoverEffects();
    }, 500);
});