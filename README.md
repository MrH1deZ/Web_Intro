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

3. Edit `.env` file with your details:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
PORT=3000
```

### Email Setup (Gmail)

To use the contact form with Gmail:

1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Security > 2-Step Verification > App passwords
   - Select "Mail" and "Windows Computer" (or other)
   - Copy the generated password
4. Use this password in your `.env` file as `EMAIL_PASS`

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

Edit the skills section in `public/index.html` (lines 105-155) to add/remove skill cards.

## 🎨 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Typewriter effect on hero section
- ✅ Animated statistics counter
- ✅ Neon glow effects on buttons
- ✅ Interactive skill cards
- ✅ Contact form with email integration
- ✅ Mobile-friendly navigation
- ✅ Cursor glow effects
- ✅ Button ripple effects
- ✅ Intersection Observer animations

## 📁 Project Structure

```
Web_Intro/
├── public/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── main.js         # All JavaScript
│   └── index.html          # Main HTML
├── server.js               # Express server
├── package.json            # Dependencies
├── .env                    # Environment variables (create this)
├── .env.example            # Example environment file
└── README.md               # This file
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
