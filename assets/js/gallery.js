/**
 * Tanguria Recreation Club - Gallery Page
 * This file contains the functionality for the gallery page,
 * including lightbox and category filtering.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Gallery filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gallerySections = document.querySelectorAll('.gallery-section');

    // Initialize lightbox
    initLightbox();

    // Initialize filters if they exist
    if (filterButtons.length > 0) {
        initFilters();
    }

    // Lightbox functionality
    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const lightboxClose = document.querySelector('.lightbox-close');
        const lightboxPrev = document.querySelector('.lightbox-prev');
        const lightboxNext = document.querySelector('.lightbox-next');
        const galleryItems = document.querySelectorAll('.gallery-item');

        let currentIndex = 0;
        let galleryArray = [];

        // Exit if lightbox elements don't exist
        if (!lightbox || !lightboxImage) return;

        // Populate gallery array with images and captions
        galleryItems.forEach((item, index) => {
            const img = item.querySelector('img');
            if (img) {
                galleryArray.push({
                    src: img.src,
                    alt: img.alt
                });

                // Add click event to each gallery item
                item.addEventListener('click', function() {
                    openLightbox(index);
                });
            }
        });

        // Open lightbox with specific image
        function openLightbox(index) {
            if (index >= 0 && index < galleryArray.length) {
                currentIndex = index;
                updateLightboxContent();
                lightbox.classList.add('active');

                // Prevent body scrolling when lightbox is open
                document.body.style.overflow = 'hidden';
            }
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');

            // Re-enable body scrolling
            document.body.style.overflow = '';
        }

        // Update lightbox content
        function updateLightboxContent() {
            if (currentIndex >= 0 && currentIndex < galleryArray.length) {
                const item = galleryArray[currentIndex];
                lightboxImage.src = item.src;
                lightboxImage.alt = item.alt;
                lightboxCaption.textContent = item.alt;
            }
        }

        // Go to previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + galleryArray.length) % galleryArray.length;
            updateLightboxContent();
        }

        // Go to next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % galleryArray.length;
            updateLightboxContent();
        }

        // Event listeners for lightbox controls
        if (lightboxClose) {
            lightboxClose.addEventListener('click', closeLightbox);
        }

        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', prevImage);
        }

        if (lightboxNext) {
            lightboxNext.addEventListener('click', nextImage);
        }

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        });
    }

    // Gallery filtering functionality
    function initFilters() {
        // Set initial state (show all)
        filterGallery('all');

        // Add click event to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');

                // Update active state of buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter gallery items
                filterGallery(filter);
            });
        });
    }

    // Function to filter gallery items
    function filterGallery(filter) {
        if (filter === 'all') {
            // Show all sections
            gallerySections.forEach(section => {
                section.style.display = 'block';
            });
        } else {
            // Show only selected sections, hide others
            gallerySections.forEach(section => {
                if (section.id === filter) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
    }
});
