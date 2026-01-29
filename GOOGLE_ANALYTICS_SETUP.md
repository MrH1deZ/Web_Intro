# Google Analytics & Tools Setup Guide

This guide will help you integrate Google Analytics 4, Google Search Console, and Google Tag Manager into your website for comprehensive tracking and analytics.

---

## 📊 Google Analytics 4 (GA4) Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (gear icon)
3. Create an **Account** (e.g., "Deyan Mandadzhiev Portfolio")
4. Create a **Property** (e.g., "Portfolio Website")
5. Select **Industry category**: "Professional Services" or "Online Communities"
6. Set **Business size** and **Reporting timezone**

### Step 2: Create Data Stream
1. In Property settings, click **"Data Streams"**
2. Click **"Add stream"** → Select **"Web"**
3. Enter your website URL: `https://www.deyanmandadzhiev.com`
4. Stream name: "Main Website"
5. **Enable Enhanced measurement** (recommended - tracks scrolls, clicks, videos, etc.)
6. Click **"Create stream"**

### Step 3: Get Your Measurement ID
1. After creating the stream, you'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID
3. Open `public/index.html` in your project
4. Replace **both instances** of `G-XXXXXXXXXX` with your actual Measurement ID:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ACTUAL_ID"></script>
   <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-YOUR_ACTUAL_ID', {
   ```

### What GA4 Tracks:
- ✅ Page views and session duration
- ✅ User location and demographics
- ✅ Device types (mobile, desktop, tablet)
- ✅ Traffic sources (Google, social media, direct, etc.)
- ✅ User behavior flow
- ✅ Conversions and events (form submissions, clicks)
- ✅ Real-time visitor data

---

## 🔍 Google Search Console Setup

### Step 1: Add Your Property
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add property"**
3. Choose **"URL prefix"** method
4. Enter: `https://www.deyanmandadzhiev.com`

### Step 2: Verify Ownership (Meta Tag Method)
1. Select **"HTML tag"** verification method
2. Copy the verification code (looks like: `<meta name="google-site-verification" content="abc123xyz...">`)
3. Extract only the **content value** (the long string after `content="`)
4. Open `public/index.html`
5. Replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` with your code:
   ```html
   <meta name="google-site-verification" content="YOUR_ACTUAL_CODE_HERE">
   ```
6. Deploy your website
7. Go back to Search Console and click **"Verify"**

### Step 3: Submit Sitemap
1. In Search Console, go to **"Sitemaps"** in the left menu
2. Enter your sitemap URL: `https://www.deyanmandadzhiev.com/sitemap.xml`
3. Click **"Submit"**

### What Search Console Provides:
- ✅ Search performance (impressions, clicks, CTR, position)
- ✅ Index coverage (which pages are indexed)
- ✅ Mobile usability issues
- ✅ Core Web Vitals performance
- ✅ Security issues and manual actions
- ✅ Backlinks and referring domains
- ✅ Rich results and structured data validation

---

## 🏷️ Google Tag Manager (GTM) Setup

### Step 1: Create GTM Account
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click **"Create Account"**
3. Account name: "Deyan Mandadzhiev"
4. Container name: "Portfolio Website"
5. Target platform: **"Web"**
6. Click **"Create"**

### Step 2: Get Your GTM Container ID
1. After creating, you'll see your **Container ID** (format: `GTM-XXXXXXX`)
2. Copy this ID
3. Open `public/index.html`
4. Replace **both instances** of `GTM-XXXXXXX` with your actual Container ID

### Step 3: Configure Basic Tags (Optional but Recommended)
1. In GTM, click **"Add a new tag"**
2. Tag Configuration → **"Google Analytics: GA4 Configuration"**
3. Enter your GA4 Measurement ID (`G-XXXXXXXXXX`)
4. Triggering → **"All Pages"**
5. Save and **"Submit"** version

### What GTM Enables:
- ✅ Manage all tracking scripts from one place (no code changes needed)
- ✅ Event tracking (button clicks, form submissions, video plays)
- ✅ E-commerce tracking
- ✅ Custom dimensions and metrics
- ✅ Facebook Pixel, LinkedIn Insight Tag integration
- ✅ A/B testing integration
- ✅ Version control for tags

---

## 📈 Additional Google Tools Integration

### Google PageSpeed Insights
- URL: https://pagespeed.web.dev/
- **No setup required** - just enter your URL after deployment
- Provides performance scores and optimization suggestions

### Google Business Profile (formerly Google My Business)
1. Go to [Google Business Profile](https://www.google.com/business/)
2. Create a business profile if offering local services
3. Verify your business
4. Add your website URL

---

## 🎯 Key Events to Track (Using GTM)

Consider setting up these custom events in Google Tag Manager:

### 1. Contact Form Submission
- **Trigger**: Form submission success
- **Event name**: `contact_form_submit`

### 2. Language Switch
- **Trigger**: Click on language switcher
- **Event name**: `language_change`

### 3. Button Clicks
- **Trigger**: Click on CTA buttons ("Get In Touch", "Learn More")
- **Event name**: `cta_click`

### 4. Scroll Depth
- **Trigger**: User scrolls 25%, 50%, 75%, 100%
- **Event name**: `scroll_depth`

### 5. Social Link Clicks
- **Trigger**: Click on LinkedIn, GitHub, Telegram, Discord links
- **Event name**: `social_click`

---

## 🚀 Implementation Checklist

- [ ] Create Google Analytics 4 account and get Measurement ID
- [ ] Replace `G-XXXXXXXXXX` in `index.html` with your GA4 ID (2 places)
- [ ] Create Google Search Console property
- [ ] Get verification code and replace `YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE`
- [ ] Deploy website with changes
- [ ] Verify ownership in Search Console
- [ ] Submit sitemap (`sitemap.xml`) to Search Console
- [ ] Create Google Tag Manager account and get Container ID
- [ ] Replace `GTM-XXXXXXX` in `index.html` with your GTM ID (2 places)
- [ ] Set up GA4 configuration tag in GTM (optional)
- [ ] Configure custom events in GTM (optional)
- [ ] Test tracking using Google Analytics Real-Time reports
- [ ] Test tracking using Google Tag Assistant browser extension

---

## 🔧 Testing Your Setup

### Test Google Analytics
1. Deploy your website
2. Go to Google Analytics → **Reports** → **Real-time**
3. Visit your website in a new browser/incognito window
4. You should see yourself in the real-time report within 30 seconds

### Test Google Tag Manager
1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) Chrome extension
2. Visit your website
3. Click the Tag Assistant icon
4. You should see GTM container and GA4 tag firing

### Test Search Console
1. After verification, check **"URL Inspection"** tool
2. Enter your homepage URL
3. Request indexing
4. Wait 24-48 hours for data to appear in Search Console reports

---

## 📊 Important Reports to Monitor

### Google Analytics 4
- **Real-time**: See current visitors
- **Acquisition > Traffic acquisition**: Where visitors come from
- **Engagement > Pages and screens**: Most viewed pages
- **Demographics**: Age, gender, location, interests
- **Tech > Platform**: Mobile vs Desktop usage

### Google Search Console
- **Performance**: Search queries, impressions, clicks
- **Coverage**: Index status
- **Enhancements**: Core Web Vitals, mobile usability
- **Links**: Backlinks and internal links

---

## 🎓 Learning Resources

- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Google Tag Manager Fundamentals](https://analytics.google.com/analytics/academy/course/5)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)

---

## 💡 Pro Tips

1. **Enable IP Anonymization**: Already configured in the code for GDPR compliance
2. **Set up custom alerts**: Get notified of traffic spikes or drops
3. **Create custom dashboards**: Focus on metrics that matter to you
4. **Link GA4 with Search Console**: See search query data in Analytics
5. **Use UTM parameters**: Track campaign performance (e.g., social media posts)
6. **Set up goals/conversions**: Track contact form submissions as conversions
7. **Regular audits**: Check tracking monthly to ensure everything works

---

## 🔒 Privacy & GDPR Compliance

The integration includes:
- ✅ IP anonymization enabled (`'anonymize_ip': true`)
- ⚠️ **Recommended**: Add a cookie consent banner before GA loads
- ⚠️ **Recommended**: Add a Privacy Policy page explaining data collection
- ⚠️ **Recommended**: Consider using Consent Mode for EU visitors

### Cookie Consent Solutions:
- [CookieYes](https://www.cookieyes.com/)
- [Osano](https://www.osano.com/)
- [Termly](https://termly.io/)

---

**Need help?** Check the official documentation or reach out through the contact form!
