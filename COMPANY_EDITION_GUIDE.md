# Company Edition Setup Guide

This guide explains how to use this website template for a company instead of a personal portfolio.

---

## 🏢 Two Ways to Use This Template

You have **two options** for using this template:

### **Option 1: Configuration File (Recommended)**
Switch between portfolio and company mode by changing one setting in `config.js`

### **Option 2: Separate Deployment**
Deploy two separate versions - one for portfolio, one for company

---

## 📝 Option 1: Using Config File (Quick Switch)

### Step 1: Open Configuration File
Open `public/js/config.js`

### Step 2: Change Mode
Find this line:
```javascript
mode: 'portfolio', // Options: 'portfolio' or 'company'
```

Change it to:
```javascript
mode: 'company', // Options: 'portfolio' or 'company'
```

### Step 3: Update Company Information
In the same `config.js` file, scroll to the `company:` section and update:

```javascript
company: {
    name: "Your Company Name",              // Change this
    tagline: "Innovative Digital Solutions", // Change this
    domain: "https://www.yourcompany.com",  // Your domain
    email: "info@yourcompany.com",          // Company email
    phone: "+1 234 567 8900",               // Company phone
    telegram: "@yourcompany",
    discord: "yourcompany",
    linkedin: "https://linkedin.com/company/yourcompany",
    github: "https://github.com/yourcompany",
    
    // Add social media
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    
    // Company details
    founded: "2020",
    employees: "50+",
    address: "123 Business Street, City, Country",
    
    // Analytics IDs (separate from personal)
    googleAnalytics: "G-YYYYYYYYYY",        // Company GA4 ID
    googleTagManager: "GTM-YYYYYYY",         // Company GTM ID
    searchConsoleVerification: "YOUR_COMPANY_CODE",
    
    // Company logo
    logo: "images/company-logo.png",         // Upload your logo
    
    // Company stats
    stats: {
        years: 6,      // Years in business
        projects: 500, // Projects completed
        clients: 250   // Total clients
    }
}
```

### Step 4: Update Content
Open `public/js/translations-company.js` and customize:
- Company description
- Services offered
- About us text
- Contact information

### Step 5: Update HTML to Use Config

You need to modify the main files to read from the config. Here's what to change:

#### In `index.html`:
- Company name in title
- Meta descriptions
- Navigation links
- Contact information

#### In `main.js`:
Add this at the top:
```javascript
const config = getConfig(); // Gets portfolio or company config based on mode
```

Then update references to use `config.name`, `config.email`, etc.

---

## 🚀 Option 2: Separate Deployment (Two Websites)

If you want to run both portfolio and company websites simultaneously:

### Step 1: Duplicate the Project
```bash
# Copy the entire project folder
cp -r Web_Intro Web_Intro_Company
```

### Step 2: Configure Portfolio Version
In `Web_Intro/public/js/config.js`:
- Keep `mode: 'portfolio'`
- Verify all portfolio settings

### Step 3: Configure Company Version
In `Web_Intro_Company/public/js/config.js`:
- Set `mode: 'company'`
- Update all company information

### Step 4: Deploy Separately
- Deploy portfolio to: `https://deyanmandadzhiev.com`
- Deploy company to: `https://yourcompany.com`

---

## 🎨 Customization for Company Edition

### 1. Replace Profile Photo with Company Logo
- Portfolio: `public/images/deyan.jpg`
- Company: `public/images/company-logo.png` (recommended 500x500px)

Update CSS in `style.css`:
```css
.profile-photo {
    border-radius: 0; /* Remove circular shape for logo */
    object-fit: contain; /* Instead of cover */
    padding: 20px; /* Add padding around logo */
    background: white; /* White background for logo */
}
```

### 2. Change Color Scheme
Edit `public/css/style.css` variables to match your brand:

```css
:root {
    --color-primary: #0a0a0a;
    --color-secondary: #1a1a1a;
    --color-accent: #d4af37;        /* Change to your brand color */
    --color-text: #e0e0e0;
    --color-text-secondary: #a0a0a0;
}
```

Popular company color schemes:
- **Tech Startup**: `--color-accent: #00d4ff;` (Blue)
- **Professional**: `--color-accent: #0066cc;` (Corporate Blue)
- **Creative**: `--color-accent: #ff6b35;` (Orange)
- **Finance**: `--color-accent: #1b5e20;` (Green)

### 3. Update Services Section
The portfolio "Skills" section becomes "Services" for companies.

In `translations-company.js`, customize the 7 service cards:
- Change titles to your services
- Update descriptions
- Modify tags to reflect your offerings

### 4. Add Team Section (Optional)

Add a team section after the About section in `index.html`:

```html
<!-- Team Section -->
<section id="team" class="team">
    <div class="container">
        <h2 class="section-title">Our Team</h2>
        <div class="team-grid">
            <div class="team-member">
                <img src="images/team-member-1.jpg" alt="CEO Name">
                <h3>John Doe</h3>
                <p>CEO & Founder</p>
            </div>
            <!-- Add more team members -->
        </div>
    </div>
</section>
```

### 5. Add Portfolio/Projects Section (Optional)

Show case studies or client work:

```html
<!-- Portfolio Section -->
<section id="portfolio" class="portfolio">
    <div class="container">
        <h2 class="section-title">Our Work</h2>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <img src="images/project-1.jpg" alt="Project 1">
                <h3>Client Name</h3>
                <p>SEO Campaign - 300% Traffic Increase</p>
            </div>
            <!-- Add more projects -->
        </div>
    </div>
</section>
```

### 6. Update Navigation
Add company-specific pages:

```javascript
nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    portfolio: "Portfolio",  // Add this
    team: "Team",            // Add this
    contact: "Contact"
}
```

---

## 🌐 SEO Updates for Company

### Update Meta Tags in `index.html`:

```html
<title>Your Company Name - Digital Marketing & Web Development Agency</title>
<meta name="title" content="Your Company Name - Leading Digital Marketing Agency">
<meta name="description" content="Professional digital marketing agency specializing in SEO, social media marketing, web development, and AI solutions. Helping businesses grow online since 2020.">
<meta name="keywords" content="digital marketing agency, SEO services, web development company, social media marketing, AI solutions">
```

### Update Schema.org Structured Data:

Replace the "Person" schema with "Organization":

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://www.yourcompany.com",
  "logo": "https://www.yourcompany.com/images/company-logo.png",
  "description": "Leading digital marketing and web development agency",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Street",
    "addressLocality": "City",
    "addressCountry": "Country"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-8900",
    "contactType": "Customer Service",
    "email": "info@yourcompany.com"
  },
  "sameAs": [
    "https://linkedin.com/company/yourcompany",
    "https://github.com/yourcompany",
    "https://facebook.com/yourcompany",
    "https://instagram.com/yourcompany"
  ]
}
</script>
```

---

## 📊 Analytics Separation

Use **separate** Google Analytics properties for portfolio vs company:

### Portfolio Analytics
- GA4 ID: `G-XXXXXXXXXX`
- GTM ID: `GTM-XXXXXXX`

### Company Analytics
- GA4 ID: `G-YYYYYYYYYY` (different)
- GTM ID: `GTM-YYYYYYY` (different)

This keeps business metrics separate from personal portfolio metrics.

---

## 📋 Company Edition Checklist

- [ ] Set `mode: 'company'` in `config.js`
- [ ] Update company name, email, phone in `config.js`
- [ ] Upload company logo to `images/company-logo.png`
- [ ] Customize services in `translations-company.js`
- [ ] Update About Us section with company history
- [ ] Change color scheme to match brand
- [ ] Update meta tags and structured data to "Organization"
- [ ] Set up separate Google Analytics for company
- [ ] Replace canonical URLs with company domain
- [ ] Update social media links (LinkedIn company page)
- [ ] Update contact information
- [ ] Test all forms and tracking
- [ ] Add team section (optional)
- [ ] Add portfolio/case studies (optional)
- [ ] Deploy to company domain

---

## 🎯 Key Differences: Portfolio vs Company

| Feature | Portfolio | Company |
|---------|-----------|---------|
| **Focus** | Individual professional | Business entity |
| **Hero Text** | "I'm a..." | "We are..." |
| **About** | Personal background | Company history |
| **Skills** | Personal skills | Services offered |
| **Stats** | Personal achievements | Company metrics |
| **Contact** | Personal email/phone | Business contact |
| **Photo** | Profile picture | Company logo |
| **Social** | Personal LinkedIn | Company page |
| **Voice** | First person (I, my) | First person plural (we, our) |

---

## 💡 Pro Tips

1. **Use subdomain for testing**: Test company version at `company.yourdomain.com` before going live
2. **Keep branding consistent**: Match website colors to logo colors
3. **Add client testimonials**: Social proof is crucial for companies
4. **Include pricing/packages**: Add a pricing section if applicable
5. **Blog/News section**: Consider adding a blog for content marketing
6. **Live chat**: Add a chatbot for instant customer support
7. **Cookie consent**: Required for company websites (especially EU)
8. **Terms & Privacy**: Add legal pages for business websites

---

## 🔄 Switching Between Modes

You can switch anytime:

1. Open `public/js/config.js`
2. Change `mode: 'portfolio'` to `mode: 'company'` (or vice versa)
3. Refresh the page

Both configurations are stored in the same file, so switching is instant!

---

## 📞 Need Help?

If you need assistance customizing for your company:
- Check [README.md](README.md) for general setup
- Review [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) for tracking
- See [MULTILINGUAL_GUIDE.md](MULTILINGUAL_GUIDE.md) for language features

---

**Congratulations!** You now have a professional company website template ready to deploy! 🚀
