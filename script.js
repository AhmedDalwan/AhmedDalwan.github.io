// ===== TRANSLATIONS =====
const translations = {
    en: { dir: 'ltr', langCode: 'en' },
    ar: { dir: 'rtl', langCode: 'ar' }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavbar();
    initMobileMenu();
    initParticles();
    initScrollAnimations();
    initScrollToTop();
    setCurrentYear();
});

// ===== LANGUAGE TOGGLE =====
function initLanguage() {
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const isArabic = browserLang.toLowerCase().startsWith('ar');
    const savedLang = localStorage.getItem('preferred-lang');
    const initialLang = savedLang || (isArabic ? 'ar' : 'en');
    
    setLanguage(initialLang);
    
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang');
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
        localStorage.setItem('preferred-lang', newLang);
    });
}

function setLanguage(lang) {
    const html = document.documentElement;
    const body = document.body;
    
    html.setAttribute('lang', lang);
    html.setAttribute('dir', translations[lang].dir);
    body.setAttribute('dir', translations[lang].dir);
    
    // Update all elements with data-en/data-ar
    document.querySelectorAll('[data-en], [data-ar]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });
    
    // Update language toggle button
    const langCurrent = document.querySelector('.lang-current');
    const langOther = document.querySelector('.lang-other');
    if (lang === 'en') {
        langCurrent.textContent = 'EN';
        langOther.textContent = 'عر';
    } else {
        langCurrent.textContent = 'عر';
        langOther.textContent = 'EN';
    }
    
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Active link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll & close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.getElementById('menuToggle');
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// ===== PARTICLES BACKGROUND =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    let mouse = { x: null, y: null, radius: 100 };
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = `rgba(20, 184, 166, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticleArray() {
        particles = [];
        const count = Math.floor((canvas.width * canvas.height) / 18000);
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    
    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (1 - distance / 120) * 0.15;
                    ctx.strokeStyle = `rgba(20, 184, 166, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }
    
    initParticleArray();
    animate();
    
    window.addEventListener('resize', initParticleArray);
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    // Add fade-in to common elements
    const animatedElements = document.querySelectorAll(
        '.section-header, .skill-category-block, .service-card, .timeline-item, .course-item, .about-text, .about-visual, .contact-simple'
    );
    
    animatedElements.forEach((el, i) => {
        el.classList.add('fade-in-up');
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        observer.observe(el);
    });
}

// ===== SCROLL TO TOP =====
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== CURRENT YEAR =====
function setCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}
