# Professional Business Card Portfolio / Company Website

A modern, responsive, and feature-rich website template that works as both a personal portfolio and a company website. Built with Node.js, Express, and vanilla JavaScript with comprehensive SEO optimization, multilingual support, and advanced analytics integration.

---

## 🎯 Two Editions in One

This template can be used as:
1. **Personal Portfolio** - Showcase your individual skills and experience
2. **Company Website** - Present your business, services, and team

**🏢 Want to use this for a company?** See [COMPANY_EDITION_GUIDE.md](COMPANY_EDITION_GUIDE.md) for complete setup instructions.

**Quick switch:** Change `mode: 'portfolio'` to `mode: 'company'` in [config.js](public/js/config.js)

---

## ✨ Key Features

### 🎨 Design & User Experience
- ✅ **Dark theme** with customizable gold/red accents
- ✅ **Neon glow effects** on interactive elements
- ✅ **Typewriter animation** on hero section
- ✅ **Smooth scroll animations** and transitions
- ✅ **Particle background effects**
- ✅ **Responsive design** (mobile, tablet, desktop)
- ✅ **Mobile-friendly hamburger menu**
- ✅ **Animated statistics counter**
- ✅ **Interactive skill/service cards**
- ✅ **Profile photo with gold frame** (or company logo)

### 🌍 Multilingual Support
- ✅ **English & Bulgarian** with instant switching
- ✅ **SEO-optimized** with hreflang tags
- ✅ **Language persistence** in localStorage & URL
- ✅ **All content translated** (navigation, sections, meta tags)
- ✅ **Bilingual sitemap** with alternates
- See [MULTILINGUAL_GUIDE.md](MULTILINGUAL_GUIDE.md) for details

### 📊 Analytics & Tracking
- ✅ **Google Analytics 4** integration
- ✅ **Google Tag Manager** support
- ✅ **Google Search Console** verification
- ✅ **Custom event tracking** (forms, clicks, scrolls, language changes)
- ✅ **Real-time visitor monitoring**
- ✅ **Traffic source analysis**
- See [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) for setup

### 🔍 SEO Optimization
- ✅ **Semantic HTML5** structure
- ✅ **Open Graph** meta tags (Facebook, LinkedIn)
- ✅ **Twitter Cards** for social sharing
- ✅ **Schema.org** structured data (Person/Organization)
- ✅ **Hreflang tags** for multilingual SEO
- ✅ **Canonical URLs** to prevent duplicate content
- ✅ **Sitemap.xml** with bilingual entries
- ✅ **Robots.txt** for crawler directives
- See [SEO_GUIDE.md](SEO_GUIDE.md) for optimization details

### 📧 Contact & Communication
- ✅ **Working contact form** with email integration
- ✅ **Dual SMTP support**: Gmail + Custom servers
- ✅ **Form validation** with user feedback
- ✅ **Multiple contact methods** (email, phone, Telegram, Discord)
- ✅ **Social media links** (LinkedIn, GitHub, Facebook, Instagram)

### 🏢 Company Edition Features
- ✅ **Easy mode switching** (portfolio ↔ company)
- ✅ **Separate configurations** for each mode
- ✅ **Company-focused content** ("We are" vs "I'm a")
- ✅ **Services section** instead of skills
- ✅ **Company logo** support
- ✅ **Organization schema** markup
- ✅ **Team section** templates
- ✅ **Independent analytics** tracking

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A Gmail account or SMTP server for contact form

### Installation

1. **Clone or download** this repository

2. **Install dependencies:**
```bash
npm install
```

3. **Configure email settings:**
```bash
cp .env.example .env
```
Edit `.env` with your email credentials (see Email Setup section)

4. **Set up analytics** (optional but recommended):
   - Get Google Analytics 4 Measurement ID
   - Get Google Search Console verification code
   - Update IDs in `public/index.html`
   - See [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md)

5. **Customize content:**
   - Update personal info in `public/js/config.js`
   - Add your profile photo to `public/images/`
   - Edit translations in `public/js/translations.js`

6. **Run the application:**
```bash
npm start
```

7. **Open browser:**
Navigate to `http://localhost:3000`
Navigate to: **Security > 2-Step Verification > App passwords**
   - Select "Mail" and your device type
   - Copy the generated 16-character password
4. Configure `.env` file:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=your-email@gmail.com
PORT=3000
```

### Option 2: Custom SMTP Server (Business Email)
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Windows Computer" (or other)):

1. Get SMTP credentials from your email provider
2. Configure `.env` file:
```env
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REJECT_UNAUTHORIZED=true
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient@yourdomain.com
PORT=3000
```

### Common SMTP Providers

| Provider | SMTP Host | Port | Security |
|----------|-----------|------|----------|
| **Gmail** | smtp.gmail.com | 587 or 465 | TLS/SSL |
| **Outlook** | smtp-mail.outlook.com | 587 | TLS |
| **Yahoo** | smtp.mail.yahoo.com | 587 | TLS |
| **SendGrid** | smtp.sendgrid.net | 587 | TLS |
| **Mailgun** | smtp.mailgun.org | 587 | TLS |

**Port Guide:**
- **587**: TLS encryption (`SMTP_SECURE=false`)
- **465**: SSL encryption (`SMTP_SECURE=true`)
- **25**: Usually blocked by ISPs

---

## 🎨 Customization

### Portfolio vs Company Mode

Switch between personal and company modes in [config.js](public/js/config.js):

```javascript
const siteConfig = {
    mode: 'portfolio', // Change to 'company' for business use
    // ... rest of configuration
};
```

### Personal/Company Information

Edit [config.js](public/js/config.js) to update:
- Name, title, tagline
- Contact information (email, phone, social media)
- Stats (years of experience, projects, clients)
- Profile photo or company logo path
- Analytics IDs

### Content & Translations

Edit [translations.js](public/js/translations.js) (portfolio) or [translations-company.js](public/js/translations-company.js) (company):
- Hero section text
- About/Services descriptions
- Contact form labels
- Footer text
- Meta tags for SEO

### Visual Customization

#### Change Color Scheme
Edit `public/css/style.css` CSS variables
- Device and location statistics
- Custom event tracking (form submissions, button clicks, social links)

See [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) for detailed step-by-step instructions.

### Profile Picture

Replace `public/images/deyan.jpg` with your own photo (recommended size: 400x400px, square format).

### Colors

The theme uses CSS variables in `public/css/style.css` (lines 2-11):

```css
:root {Main background */
    --color-secondary: #1a1a1a;      /* Secondary background */
    --color-accent: #d4af37;         /* Gold accent (change this!) */
    --color-text: #e0e0e0;           /* Primary text */
    --color-text-secondary: #a0a0a0; /* Secondary text */
}
```

**Popular color schemes:**
- **Gold (default)**: `#d4af37`
- **Red**: `#e74c3c`
- **Blue**: `#3498db`
- **Purple**: `#9b59b6`
- **Green**: `#27ae60`

#### Change Profile Photo / Logo

**Portfolio mode:**
- Replace `public/images/deyan.jpg` with your photo
- Recommended: 400x400px, square, professional headshot

**Company mode:**
- Add `public/images/company-logo.png`
- Recommended: 500x500px, transparent background, SVG or PNG

### Analytics Integration

1. **Get your tracking IDs:**
   - Google Analytics 4: Create property at [analytics.google.com](https://analytics.google.com)
   - Google Search Console: Verify at [search.google.com/search-console](https://search.google.com/search-console)
   - Google Tag Manager (optional): Create at [tagmanager.google.com](https://tagmanager.google.com)

2. **Update in `public/index.html`:**
   - Replace `G-XXXXXXXXXX` with your GA4 Measurement ID (2 locations)
   - Replace `GTM-XXXXXXX` with your GTM Container ID (2 locations)
   - Replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` with verification code

3. **Read full guide:** [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md)

---

## 🌍 Multilingual Features

### How to Use Language Switching

1. Click the **globe icon** in the navigation menu
2. Language switches instantly between English (EN) and Bulgarian (BG)
3. Preference is saved in localStorage and URL parameter
4. All content updates including meta tags for SEO

### Adding More Languages

1. Edit `public/js/translations.js`
2. Add new language object (e.g., `de:`, `fr:`, `es:`)
3. Update language switcher button in `main.js`
4. Add hreflang tags in `index.html`

See [MULTILINGUAL_GUIDE.md](MULTILINGUAL_GUIDE.md) for complete documentation.

---

## 📁 Project Structure
The theme uses CSS variables in `public/css/style.css` (lines 2-11):

```
Web_Intro/
├── public/
│   ├── css/
│   │   └── style.css           # All styles
│   ├── js/
│   │   ├── translations.js     # Language translations (EN/BG)
│   │   └── main.js             # JavaScript with language switching
│   ├── images/
│   │   └── profile.jpg         # Your profile photo
│   └── index.html              # Main HTML with SEO tags
├── server.js                   # Express server with SMTP support
├── package.json                # Dependencies
├── .env                        # Environment variables (create this)
├── .env.example                # Example environment file
├── README.md                   # This file
├── SEO_GUIDE.md                # SEO optimization documentation
└── MULTILINGUAL_GUIDE.md       # Multilingual features documentation
```

## 🛠️ Technologies Used

- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Icons**: Font Awesome 6
- **Animations**: CSS animations & transitions

## 📧 Contact Form

The contact form sends emails using Nodemailer. Make sure to:
1. Configure your `.env` file correctly
2. Use an app-specific password for Gmail
3. Test the form after deployment

## 🌐 Deployment

### Before Deployment Checklist

1. ✅ Update Google Analytics IDs in `index.html`
2. ✅ Replace `https://www.deyanmandadzhiev.com` with your actual domain
3. ✅ Configure environment variables
4. ✅ Test contact form locally         # All styling with CSS variables
│   ├── js/
│   │   ├── config.js                    # Portfolio/Company configuration
│   │   ├── translations.js              # Portfolio translations (EN/BG)
│   │   ├── translations-company.js      # Company translations (EN/BG)
│   │   ├── main.js                      # Core functionality & language switching
│   │   └── analytics-events.js          # Custom event tracking
│   ├── images/
│   │   ├── deyan.jpg                    # Profile photo (portfolio)
│   │   └── company-logo.png             # Company logo (company mode)
│   ├── index.html                       # Main HTML with SEO tags
│   ├── sitemap.xml                      # Bilingual sitemap
│   ├── robots.txt                       # Search engine directives
│   └── manifest.json                    # PWA manifest
├── server.js                            # Express server with email support
├── package.json                         # Node.js dependencies
├── .env                                 # Environment variables (create this)
├── .env.example                         # Example environment file
├── README.md                            # This file
├── COMPANY_EDITION_GUIDE.md             # Company setup guide
├── GOOGLE_ANALYTICS_SETUP.md            # Analytics setup guide
├── MULTILINGUAL_GUIDE.md                # Language features guide
└── SEO_GUIDE.md                         # SEO optimization guide
```

---

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Nodemailer** - Email sending
- **dotenv** - Environment variables
- **body-parser** - Request parsing

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with variables
- **Vanilla JavaScript** - No frameworks needed
- **Font Awesome 6** - Icon library

### Features
- **Multilingual** - EN/BG with localStorage persistence
- **SEO Optimized** - Meta tags, Schema.org, Open Graph
- **Analytics** - GA4, GTM, Search Console integration
- **Responsive** - Mobile-first design
- **Animations** - CSS transitions & intersection observers

---

## 🌐 Deployment

### Pre-Deployment Checklist

- [ ] ✅ Update `config.js` with your information
- [ ] ✅ Add profile photo to `public/images/`
- [ ] ✅ Configure `.env` with email credentials
- [ ] ✅ Update Google Analytics IDs in `index.html`
- [ ] ✅ Replace domain URLs (canonical, hreflang, meta tags)
- [ ] ✅ Create social sharing images (og-image.jpg, twitter-card.jpg)
- [ ] ✅ Test contact form locally
- [ ] ✅ Test language switching
- [ ] ✅ Test on mobile devices
- [ ] ✅ Run accessibility check
- ## 📊 Analytics & Monitoring

This template includes comprehensive analytics tracking:

### Google Analytics 4 (GA4)
- **Page views & sessions**
- **User demographics** (age, gender, location)
- **Traffic sources** (organic, direct, social, referral)
- **Device breakdown** (mobile, desktop, tablet)
- **Real-time visitor tracking**
- **Conversion tracking**

### Custom Event Tracking
Automatically tracked events (via `analytics-events.js`):
- ✅ Contact form submissions
- ✅ Language changes (EN ↔ BG)
- ✅ CTA button clicks
- ✅ Social media link clicks
- ✅ Navigation menu interactions
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Time spent on page
- ✅ Mobile menu toggles
- ✅ Skill/service card hovers

### Google Search Console
- **Search performance** (impressions, clicks, CTR, position)
- **Index coverage** status
- **Mobile usability** reports
- **Core Web Vitals** metrics
- **Backlink analysis**
- **Security issues** monitoring

### Setup Instructions
See [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) for:
- Step-by-step GA4 setup
- Search Console verification
- Google Tag Manager integration
- Event tracking configuration
- Testing and validation

---

## 🔍 SEO Features

### On-Page SEO
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (H1-H6)
- ✅ Meta descriptions and keywords
- ✅ Alt text on all images
- ✅ Internal linking structure
- ✅ Mobile-friendly design
- ✅ Fast loading times

### Technical SEO
- ✅ **Canonical URLs** to prevent duplicates
- ✅ **Hreflang tags** for multilingual content
- ✅ **Sitemap.xml** with bilingual entries
- ✅ **Robots.txt** for crawler guidance
- ✅ **Schema.org** structured data
- ✅ **Open Graph** tags for social sharing
- ✅ **Twitter Cards** for Twitter sharing
- ✅ **ARIA labels** for accessibility

### Structured Data
- **Person schema** (portfolio mode)
- **Organization schema** (company mode)
- **ProfessionalService schema**
- Rich snippets support

See [SEO_GUIDE.md](SEO_GUIDE.md) for comprehensive optimization guide.

---

## 🏢 Using as a Company Website

Transform this into a company website in minutes:

### Quick Start
1. Open `public/js/config.js`
2. Change: `mode: 'company'`
3. Update company information in `config.company` section
4. Done!

### What Changes
- **Voice**: "I'm a" → "We are"
- **Content**: Personal skills → Company services
- **Photo**: Profile picture → Company logo
- **Schema**: Person → Organization
- **Stats**: Personal achievements → Company metrics

### Full Guide
See [COMPANY_EDITION_GUIDE.md](COMPANY_EDITION_GUIDE.md) for:
- Complete setup instructions
- Content customization
- Branding guidelines
- Team section templates
- Case studies section
- Pricing tables (optional)
- Company-specific SEO

---

## 🌍 Multilingual SEO

### Implemented Features
- ✅ **Hreflang tags** for EN and BG
- ✅ **Locale meta tags** (en_US, bg_BG)
- ✅ **URL parameters** (?lang=en, ?lang=bg)
- ✅ **Bilingual sitemap** with alternates
- ✅ **localStorage** language persistence
- ✅ **Dynamic meta tag** updates

### Adding More Languages
1. Edit `translations.js` - add new language object
2. Update hreflang tags in `index.html`
3. Add language to sitemap.xml
4. Update language switcher button

### SEO Benefits
- Improved rankings in target countries
- Better user experience for international visitors
- Reduced bounce rates
- Higher engagement rates

See [MULTILINGUAL_GUIDE.md](MULTILINGUAL_GUIDE.md) for details.

---

## 🎯 Use Cases

### Perfect For:
- ✅ **Personal Portfolios** - Freelancers, consultants, specialists
- ✅ **Digital Agencies** - Marketing, SEO, web development
- ✅ **Startups** - Tech companies, SaaS, apps
- ✅ **Service Providers** - Consultants, coaches, trainers
- ✅ **Creative Professionals** - Designers, developers, writers
- ✅ **Small Businesses** - Local services, online businesses

### Industries:
- Digital Marketing & SEO
- Web Development
- Software Development
- Consulting Services
- Creative Services
- AI & Automation
- E-commerce Services
- SaaS Products

---

## 📚 Documentation

| Guide | Description |
|-------|-------------|
| [README.md](README.md) | Main documentation (this file) |
| [COMPANY_EDITION_GUIDE.md](COMPANY_EDITION_GUIDE.md) | How to use as company website |
| [GOOGLE_ANALYTICS_SETUP.md](GOOGLE_ANALYTICS_SETUP.md) | Analytics & tracking setup |
| [MULTILINGUAL_GUIDE.md](MULTILINGUAL_GUIDE.md) | Language features & SEO |
| [SEO_GUIDE.md](SEO_GUIDE.md) | Comprehensive SEO guide |

---

## 🆘 Troubleshooting

### Contact Form Not Working
- ✅ Check `.env` file is configured correctly
- ✅ Verify Gmail App Password (not regular password)
- ✅ Check SMTP settings for custom servers
- ✅ Look for errors in browser console
- ✅ Check server logs

### Language Not Switching
- ✅ Clear browser localStorage
- ✅ Clear browser cache
- ✅ Check console for JavaScript errors
- ✅ Verify `translations.js` is loaded

### Analytics Not Tracking
- ✅ Replace placeholder IDs with real ones
- ✅ Check Real-Time reports in GA4
- ✅ Disable ad blockers for testing
- ✅ Verify gtag script loads in browser
- ✅ Use Tag Assistant Chrome extension

### Styling Issues
- ✅ Clear browser cache
- ✅ Check CSS file is loading
- ✅ Verify CSS variables are defined
- ✅ Check for console errors
- ✅ Test in different browsers

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

MIT License - Feel free to use this template for personal or commercial projects.

---

## 🌟 Features Roadmap

Future enhancements:
- [ ] Cookie consent banner (GDPR compliance)
- [ ] Privacy policy generator
- [ ] Blog/News section integration
- [ ] Portfolio/case studies gallery
- [ ] Testimonials slider
- [ ] Live chat integration
- [ ] Newsletter subscription
- [ ] More languages (Spanish, French, German)
- [ ] Dark/Light mode toggle
- [ ] More color themes

---

## 💡 Pro Tips

1. **Update regularly**: Keep dependencies up to date
2. **Monitor analytics**: Review stats weekly
3. **Test forms**: Verify email delivery after deployment
4. **Optimize images**: Compress before upload (use TinyPNG)
5. **Add testimonials**: Social proof increases conversions
6. **Update content**: Fresh content improves SEO
7. **Mobile first**: Test on real devices, not just emulators
8. **Accessibility**: Use WAVE tool for accessibility testing
9. **Speed matters**: Aim for PageSpeed score 90+
10. **Backup**: Keep backups of your configuration

---

## 📞 Support

For questions, issues, or feature requests:
- 📧 Use the contact form on the deployed website
- 🐛 Open an issue on GitHub
- 📖 Check documentation files

---

**Built with ❤️ using modern web technologies**

*Happy building! 🚀

# Configure environment variables in Netlify dashboard
```

#### VPS/Server
```bash
# SSH into server
ssh user@your-server.com

# Clone repository
git clone your-repo-url
cd Web_Intro

# Install dependencies
npm install

# Set up environment
cp .env.example .env
nano .env  # Edit with your credentials

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start server.js --name portfolio
pm2 save
pm2 startup

# Set up Nginx reverse proxy (optional)
```

### Post-Deployment Steps

1. **Verify Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property with your domain
   - Verify ownership using meta tag
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Test Google Analytics**
   - Open [analytics.google.com](https://analytics.google.com)
   - Go to Real-time reports
   - Visit your site and verify tracking works

3. **Test Contact Form**
   - Fill out and submit contact form
   - Verify email is received

4. **Test Language Switching**
   - Click language button
   - Verify all content updates
   - Check URL parameter changes

5. **Run Performance Tests**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

6. **Mobile Responsiveness**
   - Test on actual mobile devices
   - Use browser dev tools responsive mode
   - Check all breakpoints

---
**Built with ❤️ and modern web technologies**
