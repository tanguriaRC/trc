# Tanguria Recreation Club Website - Product Requirements Document

## 1. Overview

### 1.1 Product Description
A modern, responsive static website for Tanguria Recreation Club, a non-profit organization that organizes cultural functions, donation events, pujas, and other community activities.

### 1.2 Target Audience
- Club members
- Potential members
- Local community
- Donors and supporters
- Event participants

### 1.3 Goals
- Increase visibility of the organization
- Showcase past events and activities
- Provide information about upcoming events
- Allow for membership registration and donations
- Share updates through a blog
- Connect with the community through social media

## 2. Technology Stack

### 2.1 Core Technologies
- HTML5
- CSS3
- JavaScript (vanilla)

### 2.2 Best Practices
- Semantic HTML markup
- Responsive design (mobile-first approach)
- Progressive enhancement
- Accessibility compliance (WCAG 2.1)
- Cross-browser compatibility
- Performance optimization
- SVG usage for icons and simple graphics

## 3. Site Architecture

### 3.1 Page Structure
```
tanguria-club/
├── index.html                 # Home page
├── gallery.html               # Gallery page
├── about.html                 # About page
├── blog.html                  # Blog listing page
├── blog/                      # Individual blog posts
│   ├── post1.html
│   └── post2.html
├── donation.html              # Donation & membership page
├── assets/                    # All static assets
│   ├── css/                   # CSS files
│   │   ├── style.css          # Main stylesheet
│   │   ├── dark-mode.css      # Dark mode styles
│   │   └── responsive.css     # Responsive design
│   ├── js/                    # JavaScript files
│   │   ├── main.js            # Main JavaScript
│   │   ├── slider.js          # Home page slider
│   │   ├── darkMode.js        # Dark mode toggle
│   │   └── language.js        # Multilingual support
│   ├── images/                # Image files
│   │   ├── logo.svg           # Placeholder logo
│   │   ├── slider/            # Images for slider
│   │   ├── gallery/           # Gallery images
│   │   └── blog/              # Blog post images
│   ├── icons/                 # SVG icons
│   │   ├── social/            # Social media icons
│   │   └── ui/                # UI element icons
│   └── i18n/                  # Internationalization files
│       ├── en.json            # English translations
│       ├── bn.json            # Bengali translations
│       └── hi.json            # Hindi translations
└── favicon.ico                # Website favicon
```

## 4. Design System

### 4.1 Colors

**Light Mode**
- Primary: #4F46E5 (Indigo)
- Secondary: #10B981 (Emerald)
- Background: #FFFFFF (White)
- Text: #1F2937 (Dark Gray)
- Accent: #0EA5E9 (Sky Blue)

**Dark Mode**
- Primary: #4B5563 (blueGray)
- Secondary: #10B981 (Emerald)
- Background: #1F2937 (Dark Gray)
- Text: #F9FAFB (Light Gray)
- Accent 1: #14B8A6 (Teal)
- Accent 2: #06B6D4 (Cyan)
- Accent 3: #0EA5E9 (Sky)

### 4.2 Typography
- Headings: 'Montserrat', sans-serif
- Body: 'Open Sans', sans-serif
- Button text: 'Montserrat', sans-serif
- Logo: 'Playfair Display', serif

### 4.3 Components
- Buttons
- Cards
- Navigation
- Footer
- Slider
- Gallery layout
- Blog post cards
- Social media icons (SVG)
- Dark mode toggle (SVG)
- Language selector

## 5. Page Specifications

### 5.1 Home Page (index.html)

#### 5.1.1 Header
- Logo (SVG placeholder)
- Navigation links to all pages
- Dark mode toggle (right side)
- Language selector dropdown (English, Bengali, Hindi)

#### 5.1.2 Hero Section
- Full-width slider with 3-5 recent events
- Each slide contains:
  - Background image
  - Event title
  - Brief description
  - "Learn More" button linking to relevant page
- Automatic slideshow with manual controls

#### 5.1.3 Featured Events Section
- Grid layout of upcoming/recent events
- Each event card contains:
  - Image
  - Title
  - Date
  - Brief description
  - "View Details" button

#### 5.1.4 About Preview Section
- Brief introduction to Tanguria Recreation Club
- Mission statement
- "Learn More" button linking to About page

#### 5.1.5 Recent Blog Posts
- Display 2-3 recent blog posts
- Each post contains:
  - Featured image
  - Title
  - Publication date
  - Brief excerpt
  - "Read More" link

#### 5.1.6 Footer
- Organization name
- Brief description
- Contact information
- Social media links (SVG icons)
- Copyright information

### 5.2 Gallery Page (gallery.html)

#### 5.2.1 Layout
- Photo grid organized in categories like:
  - Family Sessions
  - Maternity Sessions
  - Newborn Sessions
  - Cultural Events
  - Donation Drives
  - Pujas
- Each category contains multiple photos
- "View Album" button for each category
- Lightbox functionality when clicking on images

#### 5.2.2 Features
- Masonry grid layout for varied image sizes
- Hover effects to show image title/description
- Lazy loading for improved performance
- Filter buttons to show specific categories

### 5.3 About Page (about.html)

#### 5.3.1 Organization Overview
- Detailed description of Tanguria Recreation Club
- Mission and vision statements
- History of the organization

#### 5.3.2 Team Section
- Profiles of key team members/organizers
- Photos and brief bios

#### 5.3.3 Activities and Events
- Types of events organized
- Cultural functions
- Donation events
- Pujas
- Community service

#### 5.3.4 Connect Section
- Social media links with SVG icons
- WhatsApp contact button
- Location information with embedded map

### 5.4 Blog Page (blog.html)

#### 5.4.1 Blog Listing
- List of all blog posts
- Each post preview contains:
  - Featured image
  - Title
  - Publication date
  - Author
  - Category tags
  - Brief excerpt
  - "Read More" button

#### 5.4.2 Categories
- Sidebar with blog categories
- Search functionality

#### 5.4.3 Individual Blog Posts
- Full-width featured image
- Post title
- Publication date and author
- Article content with proper typography
- Social sharing buttons
- Related posts section at the bottom

### 5.5 Donation & Membership Page (donation.html)

#### 5.5.1 Donation Section
- Information about how donations are used
- Donation form with:
  - Name
  - Email
  - Phone number
  - Donation amount (preset options and custom field)
  - Payment method options
  - Purpose of donation (dropdown)
  - Message (optional)
  - Submit button

#### 5.5.2 Membership Section
- Membership benefits
- Types of membership available
- Membership form with:
  - Personal information
  - Address
  - Phone number
  - Email
  - Membership type selection
  - Payment information
  - Submit button

#### 5.5.3 Recent Donors/Members
- Recognition section for recent donors (with permission)
- Testimonials from members

## 6. Multilingual Support

### 6.1 Implementation
- Default language: English
- Additional languages: Bengali, Hindi
- Language selector in header
- Translations stored in JSON files
- JavaScript-based translation mechanism

### 6.2 Translated Content
- Navigation
- Static page content
- Blog post titles and excerpts
- Form labels and buttons
- Error messages
- Meta information

## 7. Dark Mode

### 7.1 Implementation
- JavaScript toggle with localStorage to remember user preference
- CSS variables for easy theme switching
- Smooth transition between light and dark modes

### 7.2 Dark Mode Colors
- blueGray, emerald, teal, cyan, and sky color palette
- High contrast for readability
- Consistent branding elements

## 8. Responsive Design

### 8.1 Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px and above

### 8.2 Responsive Elements
- Flexible grids
- Fluid typography
- Optimized images for different screen sizes
- Collapsible navigation for mobile
- Appropriate touch targets for mobile users

## 9. Accessibility Requirements

### 9.1 Standards
- WCAG 2.1 AA compliance
- Semantic HTML5 markup
- ARIA attributes where necessary
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast

## 10. Performance Optimization

### 10.1 Techniques
- Optimized images
- SVG for icons and simple graphics
- Lazy loading for images
- Minified CSS and JavaScript
- Efficient asset loading

### 10.2 Metrics
- PageSpeed Insights score of 90+ on mobile and desktop
- First Contentful Paint (FCP) under 2 seconds
- Largest Contentful Paint (LCP) under 2.5 seconds

## 11. Browser Compatibility

### 11.1 Supported Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 12. Implementation Phases

### 12.1 Phase 1: Setup and Structure
1. Create project directory structure
2. Set up basic HTML templates for all pages
3. Create CSS reset and base styles
4. Implement responsive navigation

### 12.2 Phase 2: Core Functionality
1. Implement dark mode toggle
2. Create home page slider
3. Develop gallery layout and lightbox
4. Set up blog post structure
5. Create donation and membership forms
6. Implement multilingual support framework

### 12.3 Phase 3: Content and Styling
1. Add placeholder content to all pages
2. Style all components according to design system
3. Implement responsive designs for all pages
4. Create SVG icons for UI elements
5. Add translations for Bengali and Hindi

### 12.4 Phase 4: Refinement
1. Add animations and transitions
2. Implement performance optimizations
3. Ensure cross-browser compatibility
4. Test and fix accessibility issues
5. Perform multilingual content verification

## 13. Success Metrics

### 13.1 User Experience
- Intuitive navigation
- Clear calls to action
- Engaging content presentation
- Positive feedback from users

### 13.2 Technical
- Fast loading times
- Smooth animations and transitions
- No broken links or functionality
- Proper display across devices and browsers
- Successful form submissions
