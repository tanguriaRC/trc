# Tanguria Recreation Club Website

A modern, responsive static website for Tanguria Recreation Club, a non-profit organization that organizes cultural functions, donation events, pujas, and other community activities.

## Features

- Responsive design that works on all devices
- Light and dark mode with user preference saving
- Multilingual support (English, Bengali, Hindi)
- Interactive image gallery with lightbox
- Timeline visualization
- Modern UI with smooth animations and transitions
- Accessible and SEO-friendly code

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- SVG for icons and graphics

## Project Structure

```
tanguria-club/
├── index.html                 # Home page
├── gallery.html               # Gallery page
├── about.html                 # About page
├── blog.html                  # Blog listing page
├── donation.html              # Donation & membership page
├── assets/                    # All static assets
│   ├── css/                   # CSS files
│   │   └── style.css          # Main stylesheet
│   ├── js/                    # JavaScript files
│   │   ├── main.js            # Main JavaScript
│   │   ├── slider.js          # Home page slider
│   │   ├── darkMode.js        # Dark mode toggle
│   │   ├── gallery.js         # Gallery functionality
│   │   └── language.js        # Multilingual support
│   └── images/                # Image files
│       ├── slider/            # Images for slider
│       ├── events/            # Images for events
│       ├── gallery/           # Gallery images
│       ├── blog/              # Blog post images
│       ├── about/             # About page images
│       └── team/              # Team member images
└── README.md                  # Documentation
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/tanguria-club.git
   ```

2. Open the project in your favorite code editor

3. For local development, you can use a live server extension or:
   ```
   npx serve
   ```
   or
   ```
   python -m http.server
   ```

4. Visit `http://localhost:8000` (or the port shown in your terminal) in your web browser

## Usage

- To view the website, open `index.html` in a web browser
- Toggle between light and dark mode using the sun/moon icon in the header
- Switch languages using the language selector in the header
- Browse through gallery images by clicking on them to open the lightbox

## Browser Compatibility

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Customization

### Changing Colors

The color scheme can be modified by updating the CSS variables in `assets/css/style.css`:

```css
:root {
    /* Light Mode Colors */
    --primary-color: #4F46E5;  /* Update this for primary color */
    --secondary-color: #10B981;  /* Update this for secondary color */
    /* ... other colors ... */
}

[data-theme="dark"] {
    /* Dark Mode Colors */
    --primary-color: #4B5563;  /* Update this for dark mode primary color */
    /* ... other colors ... */
}
```

### Adding Content

- To add new events: Update the HTML in the "Featured Events" section in `index.html`
- To add new gallery images: Add images to the appropriate section in `gallery.html`
- To add new team members: Update the HTML in the "Team Section" in `about.html`

## Credits

- Icons from [Feather Icons](https://feathericons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Layout inspired by modern photography portfolio websites

## License

[MIT License](LICENSE)
