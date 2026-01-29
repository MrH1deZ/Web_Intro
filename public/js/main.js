// ===== LANGUAGE SWITCHING =====
let currentLang = localStorage.getItem('language') || 'en';

// Set initial language
document.documentElement.lang = currentLang;

// Language toggle functionality
const langToggle = document.getElementById('langToggle');
const langText = document.querySelector('.lang-text');

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update language button
    langText.textContent = lang.toUpperCase();
    
    // Update page content
    updatePageContent(lang);
    
    // Update meta tags
    updateMetaTags(lang);
    
    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.history.pushState({}, '', url);
}

function updatePageContent(lang) {
    const t = translations[lang];
    
    // Update navigation
    const navItems = document.querySelectorAll('.nav-link:not(.social-link)');
    navItems[0].textContent = t.nav.home;
    navItems[1].textContent = t.nav.about;
    navItems[2].textContent = t.nav.skills;
    navItems[3].textContent = t.nav.contact;
    
    // Update hero section
    document.querySelector('.glitch').textContent = t.hero.welcome;
    document.querySelector('.glitch').setAttribute('data-text', t.hero.welcome);
    document.querySelector('.hero-prefix').textContent = t.hero.prefix;
    document.querySelector('.hero-description').textContent = t.hero.description;
    document.querySelectorAll('.hero-buttons .btn')[0].textContent = t.hero.cta1;
    document.querySelectorAll('.hero-buttons .btn')[1].textContent = t.hero.cta2;
    
    // Update typewriter roles and reset state
    roles.length = 0;
    roles.push(...t.hero.roles);
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    document.querySelector('.role').textContent = '';
    
    // Update about section
    document.getElementById('about-title').textContent = t.about.title;
    document.querySelector('.about-text h3').textContent = t.about.subtitle;
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs[0].textContent = t.about.paragraph1;
    aboutParagraphs[1].textContent = t.about.paragraph2;
    
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = t.about.stats.years;
    statLabels[1].textContent = t.about.stats.projects;
    statLabels[2].textContent = t.about.stats.clients;
    
    // Update skills section
    document.getElementById('skills-title').textContent = t.skills.title;
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        if (t.skills.cards[index]) {
            card.querySelector('h3').textContent = t.skills.cards[index].title;
            card.querySelector('p').textContent = t.skills.cards[index].description;
            const tags = card.querySelectorAll('.tag');
            tags.forEach((tag, tagIndex) => {
                if (t.skills.cards[index].tags[tagIndex]) {
                    tag.textContent = t.skills.cards[index].tags[tagIndex];
                }
            });
        }
    });
    
    // Update contact section
    document.getElementById('contact-title').textContent = t.contact.title;
    document.querySelector('.contact-info h3').textContent = t.contact.subtitle;
    document.querySelector('.contact-info > p').textContent = t.contact.description;
    
    const methodLabels = document.querySelectorAll('.method-label');
    methodLabels[0].textContent = t.contact.methods.email;
    methodLabels[1].textContent = t.contact.methods.phone;
    methodLabels[2].textContent = t.contact.methods.telegram;
    methodLabels[3].textContent = t.contact.methods.discord;
    
    document.querySelector('.contact-form-wrapper h3').textContent = t.contact.form.title;
    document.querySelector('label[for=\"name\"]').textContent = t.contact.form.name;
    document.querySelector('label[for=\"email\"]').textContent = t.contact.form.email;
    document.querySelector('label[for=\"subject\"]').textContent = t.contact.form.subject;
    document.querySelector('label[for=\"message\"]').textContent = t.contact.form.message;
    document.querySelector('.btn-submit .btn-text').textContent = t.contact.form.button;
    
    // Update footer
    const footerPs = document.querySelectorAll('.footer p');
    footerPs[0].innerHTML = `&copy; 2026 <span itemprop=\"copyrightHolder\" itemscope itemtype=\"https://schema.org/Person\"><span itemprop=\"name\">Deyan Mandadzhiev</span></span>. ${t.footer.rights}`;
    footerPs[1].textContent = t.footer.tagline;
}

function updateMetaTags(lang) {
    const t = translations[lang];
    
    // Update title and meta tags
    document.title = t.meta.title;
    document.querySelector('meta[name=\"title\"]').content = t.meta.title;
    document.querySelector('meta[name=\"description\"]').content = t.meta.description;
    document.querySelector('meta[name=\"keywords\"]').content = t.meta.keywords;
    document.querySelector('meta[name=\"language\"]').content = lang === 'en' ? 'English' : 'Bulgarian';
    
    // Update Open Graph
    document.querySelector('meta[property=\"og:title\"]').content = t.meta.title;
    document.querySelector('meta[property=\"og:description\"]').content = t.meta.description;
    document.querySelector('meta[property=\"og:locale\"]').content = lang === 'en' ? 'en_US' : 'bg_BG';
    
    // Update Twitter Card
    document.querySelector('meta[name=\"twitter:title\"]').content = t.meta.title;
    document.querySelector('meta[name=\"twitter:description\"]').content = t.meta.description;
}

// Language toggle button
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'bg' : 'en';
        updateLanguage(newLang);
    });
}

// Check URL parameter for language
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
if (urlLang && (urlLang === 'en' || urlLang === 'bg')) {
    currentLang = urlLang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinkElements = document.querySelectorAll('.nav-link');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinkElements.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ===== TYPEWRITER EFFECT =====
const roles = ['SEO Specialist', 'Digital Marketing Expert', 'Social Media Marketer', 'Web Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.querySelector('.role');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeWriter, speed);
}

// Start typewriter effect
setTimeout(typeWriter, 1000);

// ===== SMOOTH SCROLLING =====
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

// ===== STATS COUNTER ANIMATION =====
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target + '+';
                    }
                };
                
                updateCount();
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// ===== SCROLL ANIMATIONS =====
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .contact-method').forEach(el => {
    animateOnScroll.observe(el);
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    formMessage.style.display = 'none';
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showMessage(result.message, 'success');
            contactForm.reset();
            
            // Add success animation
            submitBtn.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                submitBtn.style.animation = '';
            }, 500);
        } else {
            showMessage(result.message, 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('An error occurred. Please try again later.', 'error');
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
});

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===== CURSOR GLOW EFFECT =====
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent);
        pointer-events: none;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
        z-index: 9999;
        animation: fadeOut 1s ease-out forwards;
    `;
    document.body.appendChild(glow);
    
    setTimeout(() => glow.remove(), 1000);
});

// Add fade out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(0.95); }
    }
`;
document.head.appendChild(style);

// ===== PARTICLE EFFECT FOR SKILLS =====
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    .btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// ===== CONSOLE MESSAGE =====
console.log('%c Welcome to my portfolio! ', 'background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%); color: #0a0a0a; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c Interested in the code? You can contact me! ', 'color: #d4af37; font-size: 14px;');
