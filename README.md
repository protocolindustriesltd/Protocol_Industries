# Protocol Industries - Futuristic Electronics Website

A modern, futuristic website for Protocol Industries featuring smooth page transitions, interactive animations, and a dark cyberpunk aesthetic.

## 🚀 Features

### Design & Aesthetics
- **Dark Futuristic Theme**: Deep blue/black background with cyan (#00ffcc) accent colors
- **Gradient Text Effects**: Eye-catching gradient titles and headings
- **Animated Backgrounds**: Pulsing radial gradients and moving circuit patterns
- **Glass Morphism**: Frosted glass effect on navigation bar
- **Glowing Borders**: Neon-style border effects on hover

### Interactive Elements
- **Smooth Page Transitions**: Fade overlay effect when navigating between pages
- **Scroll Animations**: Elements fade in as you scroll down
- **Staggered Animations**: Cards and grids animate in sequence
- **Parallax Effects**: Hero backgrounds move at different speeds
- **Hover Effects**: Cards lift and glow on hover
- **Glitch Text Effect**: Hero titles glitch on hover
- **Scroll Progress Bar**: Visual indicator at top of page

### Technical Features
- **Responsive Design**: Fully mobile-friendly with hamburger menu
- **Form Validation**: Real-time validation with visual feedback
- **Notification System**: Toast notifications for form submissions
- **Smooth Scrolling**: Anchor links scroll smoothly
- **Mobile Menu**: Animated hamburger menu for mobile devices
- **Keyboard Navigation**: ESC to close mobile menu
- **Performance Optimized**: Lazy loading and efficient animations

## 📁 File Structure

```
PROTOCOL INDUSTRIES WEBSITE/
│
├── index.html          # Homepage / About Us page
├── services.html       # Services page
├── about.html          # Alternative About page
├── contact.html        # Contact page with form
├── styles.css          # All styling and animations
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary Cyan**: #00ffcc - Main accent color
- **Primary Green**: #00ff88 - Secondary accent
- **Dark Background**: #0a0e27 - Main background
- **Darker Background**: #050814 - Alternate sections
- **Card Background**: #0f1535 - Card/panel background
- **Text Primary**: #ffffff - Main text
- **Text Secondary**: #a0aec0 - Secondary text

## 🌐 Pages

### 1. Home (index.html)
- Hero section with glitch effect
- About section with company story
- Mission & Vision cards
- Team member profiles
- Company timeline
- CTA section

### 2. Services (services.html)
- Services hero
- Three main service sections:
  - PCB Design and Development
  - Electronics Product Development
  - Educational Training Programs
- Why Choose Us section with 6 features
- CTA section

### 3. About (about.html)
- Company story
- Core values (4 values)
- Alternative route to company information

### 4. Contact (contact.html)
- Contact information cards (Email, Phone, Hours)
- Lab location with map placeholder
- Quote request form with:
  - Personal information
  - Service selection
  - Timeline and budget
  - Project details
  - Privacy agreement

## 🎬 Animations

### Page Load
- Fade-in transition overlay
- Hero content slides up
- Elements fade in on scroll

### Scroll Effects
- Navbar background becomes more opaque
- Progress bar fills as you scroll
- Cards fade in when visible
- Parallax hero background

### Hover Effects
- Buttons glow and transform
- Cards lift with shadow
- Links underline
- Social icons jump up

### Mobile
- Hamburger menu transforms to X
- Menu slides in/out
- Touch-friendly tap targets

## 🛠️ Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-cyan: #00ffcc;
    --primary-green: #00ff88;
    --dark-bg: #0a0e27;
    /* etc. */
}
```

### Adding Pages
1. Copy an existing HTML file
2. Update navigation links
3. Update active class on nav items
4. Add page transition overlay div

### Form Integration
In `script.js`, modify the form submission handler to connect to your backend:
```javascript
// Replace console.log with actual API call
fetch('/api/submit-quote', {
    method: 'POST',
    body: JSON.stringify(data)
})
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🚀 Deployment

### Local Testing
Simply open `index.html` in a web browser.

### Production
1. Upload all files to your web server
2. Ensure all files are in the same directory
3. Point your domain to `index.html`

### Recommended Hosting
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Future Enhancements

- Add actual team photos
- Integrate real map API
- Add blog section
- Implement product showcase
- Add case studies
- Create dark/light theme toggle
- Add language switcher
- Implement search functionality

## 🔧 Dependencies

None! This is a vanilla HTML/CSS/JavaScript project with no external dependencies.

## 📄 License

Copyright © 2025 Protocol Industries. All rights reserved.

## 🤝 Credits

Designed and developed for Protocol Industries
- Futuristic UI/UX design
- Custom animations and transitions
- Responsive mobile-first approach

---

**Note**: This website uses CSS custom properties (variables), Intersection Observer API, and modern JavaScript features. For older browser support, consider adding polyfills.

## 🎯 Getting Started

1. Download all files to a single directory
2. Open `index.html` in a modern web browser
3. Navigate through the pages to see transitions
4. Try the contact form
5. Resize the browser to see responsive design

## 💡 Tips

- The glitch effect on hero titles activates on hover
- All navigation links have smooth page transitions
- The scroll progress bar shows at the top
- Mobile menu opens with hamburger icon
- Form has real-time validation
- ESC key closes mobile menu

Enjoy your futuristic website! 🚀✨
