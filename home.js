// ============================================
// PIXEL VERSE - UI/UX Hackathon 2025
// Main JavaScript File
// ============================================

// Set Dark Theme Only
const htmlElement = document.documentElement;
htmlElement.setAttribute('data-theme', 'dark');

// ============================================
// Countdown Timer (Registration ends October 25, 2025)
// ============================================
const countdownDate = new Date("2025-10-25T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const countdownEl = document.getElementById('countdown');
    const countdownMobileEl = document.getElementById('countdownMobile');
    
    if (distance < 0) {
        const message = "Registration Closed!";
        if (countdownEl) countdownEl.innerHTML = message;
        if (countdownMobileEl) countdownMobileEl.innerHTML = message;
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (countdownEl) countdownEl.textContent = timeString;
    if (countdownMobileEl) countdownMobileEl.textContent = timeString;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ============================================
// Scroll Reveal Animation
// ============================================
const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking on links
    document.querySelectorAll('#mobileMenu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Navbar Scroll Effect (Auto-hide on scroll down)
// ============================================
const navbar = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
    }
    
    lastScroll = currentScroll;
});

// Diwali postcard JS removed (no matching HTML in project)

// ============================================
// PREMIUM ENHANCEMENTS
// ============================================

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #B0FF00, #00D2FF);
    z-index: 9999;
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px rgba(0, 210, 255, 0.6);
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = scrollPercentage + '%';
});

// Premium Button Ripple Effect
document.querySelectorAll('.btn, .inline-flex, button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.style.position = this.style.position || 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add Ripple Animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Smooth Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Premium Card 3D Tilt Effect (Subtle)
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.bg-panel, .glass');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 50;
            const rotateY = (centerX - x) / 50;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
            this.style.transition = 'transform 0.1s ease-out';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});

console.log('✨ Premium features loaded successfully!');
