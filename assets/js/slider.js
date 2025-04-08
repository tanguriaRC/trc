/**
 * Tanguria Recreation Club - Hero Slider
 * This file contains the functionality for the hero slider on the home page.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all slider elements
    const sliderContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    // Exit if there are no slides
    if (!sliderContainer || slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;
    const autoPlayDelay = 5000; // 5 seconds

    // Function to show a specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Update current slide index
        currentSlide = index;

        // Handle index out of bounds
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        // Add active class to current slide and dot
        slides[currentSlide].classList.add('active');
        if (dots.length > currentSlide) {
            dots[currentSlide].classList.add('active');
        }
    }

    // Function to move to the next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Function to move to the previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Set up event listeners for controls
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            resetInterval(); // Reset autoplay timer when user interacts
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            resetInterval(); // Reset autoplay timer when user interacts
        });
    }

    // Set up event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
            resetInterval(); // Reset autoplay timer when user interacts
        });
    });

    // Start autoplay
    function startInterval() {
        slideInterval = setInterval(nextSlide, autoPlayDelay);
    }

    // Reset autoplay timer
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Initialize the slider
    showSlide(currentSlide);
    startInterval();

    // Pause autoplay when user hovers over the slider
    sliderContainer.addEventListener('mouseenter', function() {
        clearInterval(slideInterval);
    });

    // Resume autoplay when user leaves the slider
    sliderContainer.addEventListener('mouseleave', function() {
        startInterval();
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetInterval();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetInterval();
        }
    });

    // Add swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    sliderContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to be considered a swipe

        if (touchEndX + swipeThreshold < touchStartX) {
            // Swipe left, go to next slide
            nextSlide();
            resetInterval();
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right, go to previous slide
            prevSlide();
            resetInterval();
        }
    }
});
