// Custom Google Analytics Event Tracking
// This file contains custom event tracking for better insights into user behavior

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if gtag is available
    if (typeof gtag === 'undefined') {
        console.warn('Google Analytics not loaded. Events will not be tracked.');
        return;
    }

    // ===== CONTACT FORM SUBMISSION TRACKING =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            gtag('event', 'form_submit', {
                'event_category': 'Contact',
                'event_label': 'Contact Form Submission',
                'value': 1
            });
        });
    }

    // ===== LANGUAGE SWITCH TRACKING =====
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = this.querySelector('.lang-text').textContent;
            const newLang = currentLang === 'EN' ? 'BG' : 'EN';
            
            gtag('event', 'language_change', {
                'event_category': 'Engagement',
                'event_label': `Language changed to ${newLang}`,
                'language': newLang
            });
        });
    }

    // ===== CTA BUTTON TRACKING =====
    const ctaButtons = document.querySelectorAll('.hero-buttons .btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonText = this.textContent.trim();
            const targetSection = this.getAttribute('href');
            
            gtag('event', 'cta_click', {
                'event_category': 'Navigation',
                'event_label': buttonText,
                'target_section': targetSection
            });
        });
    });

    // ===== SOCIAL LINK TRACKING =====
    const socialLinks = document.querySelectorAll('.social-link, .social-icon, .contact-method');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            let platform = 'Unknown';
            
            if (href.includes('linkedin')) platform = 'LinkedIn';
            else if (href.includes('github')) platform = 'GitHub';
            else if (href.includes('telegram') || href.includes('t.me')) platform = 'Telegram';
            else if (href.includes('discord')) platform = 'Discord';
            else if (href.includes('mailto:')) platform = 'Email';
            else if (href.includes('tel:')) platform = 'Phone';
            
            gtag('event', 'social_click', {
                'event_category': 'Social Media',
                'event_label': platform,
                'link_url': href
            });
        });
    });

    // ===== NAVIGATION LINK TRACKING =====
    const navLinks = document.querySelectorAll('.nav-link:not(.social-link)');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const section = this.getAttribute('href');
            const sectionName = this.textContent.trim();
            
            gtag('event', 'navigation_click', {
                'event_category': 'Navigation',
                'event_label': sectionName,
                'target_section': section
            });
        });
    });

    // ===== SCROLL DEPTH TRACKING =====
    let scrollDepths = [25, 50, 75, 100];
    let scrolledTo = [];
    
    window.addEventListener('scroll', function() {
        const scrollPercentage = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
        
        scrollDepths.forEach(depth => {
            if (scrollPercentage >= depth && !scrolledTo.includes(depth)) {
                scrolledTo.push(depth);
                
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'event_label': `Scrolled ${depth}%`,
                    'value': depth
                });
            }
        });
    });

    // ===== SKILLS CARD INTERACTION TRACKING =====
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const skillTitle = this.querySelector('h3').textContent;
            
            gtag('event', 'skill_hover', {
                'event_category': 'Engagement',
                'event_label': skillTitle
            });
        });
    });

    // ===== DOWNLOAD/EXTERNAL LINK TRACKING =====
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const url = this.getAttribute('href');
            
            gtag('event', 'external_link_click', {
                'event_category': 'Outbound Link',
                'event_label': url,
                'link_text': this.textContent.trim()
            });
        });
    });

    // ===== TIME ON PAGE TRACKING =====
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000); // in seconds
        
        gtag('event', 'time_on_page', {
            'event_category': 'Engagement',
            'event_label': 'Total Time Spent',
            'value': timeSpent
        });
    });

    // ===== VISIBILITY CHANGE TRACKING (TAB SWITCHING) =====
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            gtag('event', 'tab_hidden', {
                'event_category': 'Engagement',
                'event_label': 'User switched tab'
            });
        } else {
            gtag('event', 'tab_visible', {
                'event_category': 'Engagement',
                'event_label': 'User returned to tab'
            });
        }
    });

    // ===== MOBILE MENU TOGGLE TRACKING =====
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            gtag('event', 'mobile_menu_toggle', {
                'event_category': 'Navigation',
                'event_label': isExpanded ? 'Menu Closed' : 'Menu Opened'
            });
        });
    }

    console.log('Google Analytics custom event tracking initialized ✓');
});

// ===== UTILITY FUNCTION: TRACK CUSTOM EVENTS =====
// Use this function anywhere in your code to track custom events
function trackCustomEvent(eventName, category, label, value = null) {
    if (typeof gtag !== 'undefined') {
        const eventParams = {
            'event_category': category,
            'event_label': label
        };
        
        if (value !== null) {
            eventParams.value = value;
        }
        
        gtag('event', eventName, eventParams);
    }
}

// Make it available globally
window.trackCustomEvent = trackCustomEvent;
