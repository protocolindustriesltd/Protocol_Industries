// ===== PAGE TRANSITION EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const pageTransition = document.querySelector('.page-transition');
    
    // Fade in page on load
    setTimeout(() => {
        pageTransition.classList.remove('active');
    }, 100);
    
    // Handle all internal links with smooth transitions
    const internalLinks = document.querySelectorAll('a[href^="index.html"], a[href^="services.html"], a[href^="about.html"], a[href^="contact.html"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only transition for actual page changes
            if (href && !href.startsWith('#')) {
                e.preventDefault();
                
                pageTransition.classList.add('active');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
});


// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 255, 204, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== FORM HANDLING =====
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(quoteForm);
        const data = Object.fromEntries(formData);
        
        // Show success message (you can customize this)
        showNotification('Thank you! Your request has been submitted. We\'ll get back to you within 48 hours.', 'success');
        
        // Reset form
        quoteForm.reset();
        
        // In production, you would send this data to your server
        console.log('Form submitted:', data);
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--card-bg);
        color: var(--text-primary);
        padding: 1.5rem 2rem;
        border-radius: 12px;
        border: 2px solid var(--primary-cyan);
        box-shadow: 0 10px 40px rgba(0, 255, 204, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--primary-cyan);
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: 1rem;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => notification.remove(), 500);
        }
    }, 5000);
}

// ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== PARALLAX EFFECT FOR HERO BACKGROUNDS =====
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== ANIMATED COUNTER (for stats if added) =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== CURSOR TRAIL EFFECT (Optional futuristic touch) =====
let cursorTrail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        cursorTrail.push({ x: e.clientX, y: e.clientY });
        
        if (cursorTrail.length > trailLength) {
            cursorTrail.shift();
        }
    }
});


// ===== MOBILE MENU TOGGLE =====
function createMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelector('.nav-links');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'mobile-menu-toggle';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    hamburger.style.cssText = `
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    `;
    
    hamburger.querySelectorAll('span').forEach(span => {
        span.style.cssText = `
            width: 25px;
            height: 3px;
            background: var(--primary-cyan);
            transition: all 0.3s ease;
            display: block;
        `;
    });
    
    // Show hamburger on mobile
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'flex';
        navContainer.insertBefore(hamburger, navContainer.children[1]);
    }
    
    // Toggle menu
    hamburger.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        this.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Initialize mobile menu on load and resize
window.addEventListener('DOMContentLoaded', createMobileMenu);
window.addEventListener('resize', () => {
    const hamburger = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth > 768) {
        if (hamburger) hamburger.style.display = 'none';
        navLinks.style.display = 'flex';
    } else {
        if (hamburger) hamburger.style.display = 'flex';
        if (!hamburger.classList.contains('active')) {
            navLinks.style.display = 'none';
        }
    }
});


// ===== FORM VALIDATION STYLING =====
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && this.checkValidity()) {
            this.style.borderColor = 'var(--primary-cyan)';
        } else if (this.value && !this.checkValidity()) {
            this.style.borderColor = '#ff6b6b';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary-cyan)';
    });
});

// ===== SCROLL PROGRESS INDICATOR =====
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-cyan), var(--primary-green));
        width: 0%;
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px var(--primary-cyan);
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// ===== ADD KEYBOARD NAVIGATION ENHANCEMENT =====
document.addEventListener('keydown', function(e) {
    // ESC to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (hamburger && hamburger.classList.contains('active')) {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        }
    }
});


// ===== CONSOLE EASTER EGG =====
console.log(
    '%c⚡ Protocol Industries ⚡',
    'color: #00ffcc; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cEngineering the Future of Electronics',
    'color: #a0aec0; font-size: 14px;'
);
console.log(
    '%cInterested in working with us? Visit /contact.html',
    'color: #00ffcc; font-size: 12px;'
);

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images if you add actual images later
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

console.log('✅ Protocol Industries website loaded successfully');
