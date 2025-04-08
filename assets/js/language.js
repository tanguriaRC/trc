/**
 * Tanguria Recreation Club - Language Switcher
 * This file contains the functionality for switching between different languages.
 */

document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-dropdown button');
    const currentLangButton = document.querySelector('.current-lang');

    // Exit if language buttons don't exist
    if (langButtons.length === 0 || !currentLangButton) return;

    // Check for saved language preference
    const savedLang = localStorage.getItem('language');

    // Language data - would be loaded from JSON files in a real implementation
    const translations = {
        'en': {
            'current': 'English',
            // Add more translations here
        },
        'bn': {
            'current': 'বাংলা',
            // Add more translations here
        },
        'hi': {
            'current': 'हिन्दी',
            // Add more translations here
        }
    };

    // Set the initial language
    let currentLang = savedLang || 'en';
    updateLanguage(currentLang);

    // Add click event to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);

            // Save preference to localStorage
            localStorage.setItem('language', lang);

            // Remove active class from all buttons and add to selected
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Function to update language elements
    function updateLanguage(lang) {
        // Update current language display
        if (translations[lang] && translations[lang].current) {
            currentLangButton.textContent = translations[lang].current;
        }

        // In a real implementation, this would update all text elements on the page
        // based on translations loaded from JSON files

        // For now, just update active state of buttons
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Set the lang attribute on the html element for accessibility
        document.documentElement.setAttribute('lang', lang);
    }

    // Additional functionality for loading translations from JSON files
    // would be implemented here in a real-world scenario
});
