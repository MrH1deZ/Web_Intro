# Professional Business Card Portfolio - README

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update with your email credentials

```bash
cp .env.example .env
```

3. Edit `.env` file with your email configuration (see options below)

### Email Setup

You have two options for email configuration:

#### **Option 1: Gmail (Recommended for personal use)**

1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Windows Computer" (or other)
   - Copy the generated password
4. Configure your `.env` file:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=your-email@gmail.com
PORT=3000
```

#### **Option 2: Custom SMTP Server**

For custom email servers (business email, hosting providers, etc.):

1. Get SMTP credentials from your email provider
2. Configure your `.env` file:
```
SMTP_HOST=smtp.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_REJECT_UNAUTHORIZED=true
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-email-password
EMAIL_TO=recipient@yourdomain.com
PORT=3000
```

**Common SMTP Settings:**
- **Gmail**: smtp.gmail.com, port 587 (TLS) or 465 (SSL)
- **Outlook/Hotmail**: smtp-mail.outlook.com, port 587
- **Yahoo**: smtp.mail.yahoo.com, port 587
- **SendGrid**: smtp.sendgrid.net, port 587
- **Mailgun**: smtp.mailgun.org, port 587
- **cPanel/WHM**: Check with your hosting provider

**Port Information:**
- Port 587: TLS (SMTP_SECURE=false)
- Port 465: SSL (SMTP_SECURE=true)
- Port 25: Usually blocked by ISPs

### Running the Application

**Development mode:**
```bash
npm start
```

The site will be available at: `http://localhost:3000`

## 📝 Customization

### Personal Information

Edit the following in `public/index.html`:

1. **Title and Meta**: Line 5-6
2. **Navigation Links**: Lines 47-48 (LinkedIn and GitHub URLs)
3. **Hero Section**: Lines 57-59 (Your name and title)
4. **About Section**: Lines 82-84 (Your background)
5. **Stats**: Lines 88-98 (Experience, projects, clients)
6. **Contact Info**: Lines 186-219 (Email, phone, Telegram, Discord)
7. **Footer**: Line 235 (Your name)

### Colors

The theme uses CSS variables in `public/css/style.css` (lines 2-11):

```css
:root {
    --color-primary: #0a0a0a;        /* Background */
    --color-secondary: #1a1a1a;      /* Secondary background */
    --color-accent: #d4af37;         /* Gold accent */
    --color-text: #e0e0e0;           /* Primary text */
    --color-text-secondary: #a0a0a0; /* Secondary text */
}
```

To change to **red theme**, update:
```css
--color-accent: #e74c3c;
--color-accent-glow: #e74c3c;
--color-neon: rgba(231, 76, 60, 0.8);
```

### Skills

Edit the skills section in `public/index.html` to add/remove skill cards, or update `public/js/translations.js` for multilingual content.

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ **Multilingual support (English & Bulgarian)** with SEO optimization
- ✅ Language switcher in navigation menu
- ✅ Smooth scroll animations
- ✅ Typewriter effect on hero section
- ✅ Animated statistics counter
- ✅ Neon glow effects on buttons
- ✅ Interactive skill cards
- ✅ Contact form with email integration (Gmail & Custom SMTP)
- ✅ Mobile-friendly navigation
- ✅ Cursor glow effects
- ✅ Button ripple effects
- ✅ Intersection Observer animations
- ✅ **Full SEO optimization** with meta tags, Open Graph, Twitter Cards, Schema.org
- ✅ **Hreflang tags** for multilingual SEO
- ✅ AI & Automation expertise showcase

## 🌍 Multilingual Support

The website supports **English (primary)** and **Bulgarian (secondary)** with full SEO optimization:

### Features:
- **Language Switcher**: Globe icon in navigation menu to toggle between EN/BG
- **SEO Optimized**: Proper hreflang tags, locale meta tags, and translated content
- **Persistent**: Language preference saved in localStorage and URL
- **Dynamic**: All content updates without page reload

### How to Use:
1. Click the language button (globe icon) in the navigation menu
2. Language switches instantly between English and Bulgarian
3. Preference is saved and persists across sessions
4. URL updates with language parameter (`?lang=en` or `?lang=bg`)

### Translation Files:
- **public/js/translations.js**: Contains all English and Bulgarian translations
- Fully translated: Navigation, Hero, About, Skills, Contact, Footer

### SEO Features:
- Hreflang tags for both languages
- Separate sitemap entries for each language
- Open Graph locale alternates
- Language-specific meta tags and keywords

See [MULTILINGUAL_GUIDE.md](MULTILINGUAL_GUIDE.md) for detailed documentation.

## 📝 Customization

### Adding Your Profile Picture

1. Save your professional photo as `profile.jpg` in the `public/images/` folder
2. Recommended size: 800x800 pixels (square format)
3. The image will automatically fit in the gold-framed profile section

### Personal Information

Update your information in the HTML and translation files:

1. **Meta Tags**: Update SEO tags in `public/index.html` `<head>` section
2. **Social Links**: Update LinkedIn and GitHub URLs in navigation
3. **Contact Info**: Update email, phone, Telegram, Discord in contact section
4. **Translations**: Edit `public/js/translations.js` to update content in both languages
5. **Stats**: Update years of experience, projects, clients numbers

**Note**: For multilingual content, update both `en` and `bg` sections in `public/js/translations.js`

### Colors

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

### Heroku
```bash
heroku create your-app-name
git push heroku main
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set EMAIL_TO=your-email@gmail.com
```

### Vercel/Netlify
Configure environment variables in the platform's dashboard.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Support

For issues or questions, feel free to reach out through the contact form on the website.

---

**Built with ❤️ and modern web technologies**
