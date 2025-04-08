/**
 * Tanguria Recreation Club - Dark Mode Toggle
 * This file contains the functionality for toggling between light and dark themes.
 */

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.querySelector('.theme-toggle');

    // Exit if there's no theme toggle button
    if (!themeToggleBtn) return;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or default to 'light'
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check for system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Function to toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Update the data-theme attribute
        document.documentElement.setAttribute('data-theme', newTheme);

        // Save preference to localStorage
        localStorage.setItem('theme', newTheme);
    }

    // Add click event to theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Listen for system preference changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            // Only apply if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        });
    }
});
