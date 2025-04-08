/**
 * Tanguria Recreation Club - Main JavaScript
 * This file contains common functionality used across the website.
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryMenu = document.getElementById('primary-menu');

    if (menuToggle && primaryMenu) {
        menuToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !expanded);
            primaryMenu.classList.toggle('active');
            this.classList.toggle('active');

            // Prevent scrolling when menu is open
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when a link is clicked
    const menuLinks = document.querySelectorAll('#primary-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                primaryMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && primaryMenu.classList.contains('active')) {
            if (!event.target.closest('.menu-toggle') && !event.target.closest('#primary-menu')) {
                primaryMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        }
    });

    // Add scroll event listener to change header appearance
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Add a class to body when page is loaded
    document.body.classList.add('loaded');

    const currentYear = new Date().getFullYear();
    const copyrightText = document.querySelector('.copyright p');
    if (copyrightText) {
        copyrightText.innerHTML = `&copy; ${currentYear} Tanguria Recreation Club. All Rights Reserved.`;
    }

    // Blog search functionality
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = this.querySelector('input').value.toLowerCase();
            const blogPosts = document.querySelectorAll('.blog-post');

            blogPosts.forEach(post => {
                const title = post.querySelector('.post-title').textContent.toLowerCase();
                const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
                const category = post.querySelector('.post-category').textContent.toLowerCase();

                if (title.includes(searchInput) || excerpt.includes(searchInput) || category.includes(searchInput)) {
                    post.style.display = '';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    }

    // Icon fallback for browsers that don't support the custom icon font
    document.querySelectorAll('.icon-eye, .icon-comment').forEach(icon => {
        if (window.getComputedStyle(icon, ':before').content === '' ||
            window.getComputedStyle(icon, ':before').content === 'none') {
            // Add fallback SVG icons
            if (icon.classList.contains('icon-eye')) {
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
            } else if (icon.classList.contains('icon-comment')) {
                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
            }
        }
    });

    // Add animation to blog posts on scroll
    const animateBlogPosts = () => {
        const blogPosts = document.querySelectorAll('.blog-post');

        blogPosts.forEach((post, index) => {
            const postTop = post.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (postTop < windowHeight - 100) {
                // Add a small delay for each post for a staggered effect
                setTimeout(() => {
                    post.classList.add('fade-in');
                }, index * 150);
            }
        });
    };

    // Add fade-in class for CSS animation
    const style = document.createElement('style');
    style.textContent = `
        .blog-post {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .blog-post.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);

    // Run once on page load
    animateBlogPosts();

    // Run on scroll
    window.addEventListener('scroll', animateBlogPosts);
});
