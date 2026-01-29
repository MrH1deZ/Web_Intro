// Website Configuration
// Switch between 'portfolio' and 'company' mode

const siteConfig = {
    // Change this to 'company' to use company edition
    mode: 'portfolio', // Options: 'portfolio' or 'company'
    
    // Portfolio Mode Settings
    portfolio: {
        name: "Deyan Mandadzhiev",
        title: "SEO Specialist & Digital Marketing Expert",
        domain: "https://www.deyanmandadzhiev.com",
        email: "office@mrhidez.com",
        phone: "+359 885 22 8842",
        telegram: "@Hiimhunter",
        discord: "mr.h1dez",
        linkedin: "https://bg.linkedin.com/in/deyan-mandadzhiev-390a4b210",
        github: "https://github.com/MrH1deZ",
        
        // Analytics IDs
        googleAnalytics: "G-XXXXXXXXXX",
        googleTagManager: "GTM-XXXXXXX",
        searchConsoleVerification: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
        
        // Profile photo
        photo: "images/deyan.jpg",
        
        // Stats
        stats: {
            years: 9,
            projects: 54,
            clients: 136
        }
    },
    
    // Company Mode Settings
    company: {
        name: "Your Company Name",
        tagline: "Innovative Digital Solutions",
        domain: "https://www.yourcompany.com",
        email: "info@yourcompany.com",
        phone: "+1 234 567 8900",
        telegram: "@yourcompany",
        discord: "yourcompany",
        linkedin: "https://linkedin.com/company/yourcompany",
        github: "https://github.com/yourcompany",
        facebook: "https://facebook.com/yourcompany",
        instagram: "https://instagram.com/yourcompany",
        twitter: "https://twitter.com/yourcompany",
        
        // Company-specific info
        founded: "2020",
        employees: "50+",
        address: "123 Business Street, City, Country",
        
        // Analytics IDs
        googleAnalytics: "G-YYYYYYYYYY",
        googleTagManager: "GTM-YYYYYYY",
        searchConsoleVerification: "YOUR_COMPANY_SEARCH_CONSOLE_CODE",
        
        // Company logo
        logo: "images/company-logo.png",
        
        // Stats
        stats: {
            years: 6,
            projects: 500,
            clients: 250
        }
    }
};

// Get current configuration based on mode
function getConfig() {
    return siteConfig.mode === 'company' ? siteConfig.company : siteConfig.portfolio;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}
