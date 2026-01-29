# Multilingual Support Documentation

## 🌍 Languages Supported

- **English (en)** - Primary language
- **Bulgarian (bg)** - Secondary language

## 🎯 Features Implemented

### 1. Language Switcher
- Located in the navigation menu (globe icon with language code)
- Toggle between EN and BG
- Smooth transition without page reload
- Mobile responsive

### 2. SEO Optimization for Both Languages

#### Hreflang Tags
```html
<link rel="alternate" hreflang="en" href="https://www.deyanmandadzhiev.com/?lang=en">
<link rel="alternate" hreflang="bg" href="https://www.deyanmandadzhiev.com/?lang=bg">
<link rel="alternate" hreflang="x-default" href="https://www.deyanmandadzhiev.com">
```

#### Open Graph Locale
- `og:locale` dynamically updates based on language
- `og:locale:alternate` for Bulgarian language

#### Meta Tags
- Title, description, and keywords translated for both languages
- Language meta tag updates dynamically

### 3. Content Translation

All sections are fully translated:
- ✅ Navigation menu
- ✅ Hero section (including typewriter roles)
- ✅ About section
- ✅ Skills cards (all 7 cards with descriptions and tags)
- ✅ Contact section
- ✅ Contact form labels
- ✅ Footer

### 4. URL Structure

Language is stored in URL parameter:
- English: `?lang=en`
- Bulgarian: `?lang=bg`
- Default (no parameter): English

### 5. Persistence

- Language preference saved in localStorage
- Restored on page reload
- URL parameter takes precedence over localStorage

## 📝 How It Works

### Language Switching Flow

1. User clicks language toggle button
2. JavaScript updates `currentLang` variable
3. Saves preference to localStorage
4. Updates HTML lang attribute
5. Updates all page content via DOM manipulation
6. Updates meta tags in document head
7. Updates URL with language parameter
8. Typewriter effect resets with new language roles

### Files Structure

```
public/
├── js/
│   ├── translations.js    # All translations for EN and BG
│   └── main.js            # Language switching logic
├── index.html             # Hreflang tags and structure
└── css/
    └── style.css          # Language button styling
```

## 🔧 Adding New Translations

To add translations for new content:

1. Open `public/js/translations.js`
2. Add new keys to both `en` and `bg` objects
3. Update the DOM manipulation in `main.js` `updatePageContent()` function

Example:
```javascript
// In translations.js
en: {
    newSection: {
        title: "New Title",
        description: "New description"
    }
}

bg: {
    newSection: {
        title: "Ново заглавие",
        description: "Ново описание"
    }
}

// In main.js updatePageContent()
document.querySelector('.new-section-title').textContent = t.newSection.title;
```

## 🌐 SEO Benefits

### 1. Search Engine Visibility
- Proper hreflang tags help search engines understand language variants
- Separate indexing for Bulgarian and English content
- No duplicate content issues

### 2. User Experience
- Automatic language detection from URL
- Persistent language preference
- Seamless switching without page reload

### 3. International Reach
- Bulgarian market targeting with native content
- English for international audience
- Proper locale signals for search engines

## 📊 Sitemap Integration

The sitemap.xml includes both language versions:
- Each URL has xhtml:link alternate tags
- Proper hreflang annotation
- Both languages equally prioritized

## 🎨 UI/UX Features

### Language Button
- Globe icon with current language code
- Smooth hover effects with gold neon glow
- Accessible with ARIA labels
- Mobile-friendly (centered in mobile menu)

### Visual Feedback
- Button shows current language (EN/BG)
- Gold accent color consistent with site theme
- Hover animation for better interactivity

## 🔍 Technical Details

### localStorage Key
```javascript
localStorage.getItem('language') // Returns 'en' or 'bg'
```

### URL Parameter
```javascript
?lang=en  // For English
?lang=bg  // For Bulgarian
```

### HTML Lang Attribute
```html
<html lang="en">  <!-- or lang="bg" -->
```

## 📱 Mobile Responsiveness

- Language switcher appears in mobile menu
- Centered button with adequate spacing
- Touch-friendly size (200px width on mobile)
- Maintains functionality when hamburger menu is toggled

## ⚡ Performance

- No page reload required
- Instant language switching
- Minimal JavaScript overhead
- Translations loaded once on page load

## 🚀 Future Enhancements

Potential additions:
- Automatic language detection based on browser settings
- More language options (if needed)
- Language-specific URLs (e.g., /en/, /bg/)
- Server-side language rendering

## 🧪 Testing

To test multilingual functionality:

1. **Manual Testing**:
   - Click language switcher
   - Verify all content changes
   - Check URL updates
   - Reload page and verify persistence

2. **SEO Testing**:
   - Validate hreflang tags with Google Search Console
   - Check meta tags in both languages
   - Verify sitemap.xml structure

3. **Browser Testing**:
   - Test localStorage persistence
   - Test URL parameter handling
   - Verify across different browsers

## 📖 Translation Quality

All Bulgarian translations are:
- Professionally written
- Culturally appropriate
- SEO-optimized with relevant keywords
- Grammatically correct
- Maintain the same tone as English version

## 🎯 Keywords by Language

### English Keywords
- SEO specialist
- Digital marketing
- Social media marketing
- AI automation
- Web development

### Bulgarian Keywords
- SEO специалист
- Дигитален маркетинг
- Маркетинг в социални медии
- AI автоматизация
- Уеб разработка

---

**Note**: Always test language switching after making changes to ensure both languages display correctly!
