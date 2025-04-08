/**
 * Tanguria Recreation Club - Donation & Membership Page
 * This file contains the functionality for the donation and membership forms.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize donation form
    const donationForm = document.querySelector('.donation-form');
    if (donationForm) {
        initDonationForm();
    }

    // Initialize membership form
    const membershipForm = document.querySelector('.membership-form');
    if (membershipForm) {
        initMembershipForm();
    }

    // Initialize testimonials slider (if exists)
    const testimonials = document.querySelector('.testimonials-grid');
    if (testimonials) {
        initTestimonialsSlider();
    }

    /**
     * Initialize donation form functionality
     */
    function initDonationForm() {
        // Handle custom amount toggle
        const amountRadios = document.querySelectorAll('input[name="donationAmount"]');
        const customAmountField = document.getElementById('customAmountField');
        const customAmountInput = document.getElementById('customAmount');

        // Add event listeners to amount radios
        amountRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'other') {
                    customAmountField.style.display = 'block';
                    customAmountInput.required = true;
                    customAmountInput.focus();
                } else {
                    customAmountField.style.display = 'none';
                    customAmountInput.required = false;
                }
            });
        });

        // Form submission
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (validateDonationForm(this)) {
                // In a real implementation, this would send data to a server
                // For this static demo, we'll just show a thank you message
                showThankYouMessage('donation');
                this.reset();
            }
        });
    }

    /**
     * Validate donation form
     * @param {HTMLFormElement} form - The donation form
     * @returns {boolean} - Whether the form is valid
     */
    function validateDonationForm(form) {
        let isValid = true;

        // Get form fields
        const donorName = form.querySelector('#donorName');
        const donorEmail = form.querySelector('#donorEmail');
        const donationType = form.querySelector('#donationType');
        const amountSelected = form.querySelector('input[name="donationAmount"]:checked');
        const customAmount = form.querySelector('#customAmount');

        // Validate name
        if (!donorName.value.trim()) {
            markInvalid(donorName, 'Name is required');
            isValid = false;
        } else {
            markValid(donorName);
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!donorEmail.value.trim() || !emailPattern.test(donorEmail.value)) {
            markInvalid(donorEmail, 'Please enter a valid email');
            isValid = false;
        } else {
            markValid(donorEmail);
        }

        // Validate donation type
        if (!donationType.value) {
            markInvalid(donationType, 'Please select a donation purpose');
            isValid = false;
        } else {
            markValid(donationType);
        }

        // Validate amount
        if (!amountSelected) {
            const amountSection = form.querySelector('.donation-amounts');
            amountSection.classList.add('error');
            isValid = false;
        } else if (amountSelected.value === 'other' && (!customAmount.value || customAmount.value < 100)) {
            markInvalid(customAmount, 'Please enter an amount of at least ₹100');
            isValid = false;
        }

        return isValid;
    }

    /**
     * Initialize membership form functionality
     */
    function initMembershipForm() {
        // Handle membership type selection
        const membershipSelect = document.getElementById('membershipType');
        const familyMembersSection = document.getElementById('familyMembersSection');

        if (membershipSelect && familyMembersSection) {
            membershipSelect.addEventListener('change', function() {
                if (this.value === 'family') {
                    familyMembersSection.style.display = 'block';
                    // Make at least one family member required
                    const familyMember1 = document.querySelector('input[name="familyMember1"]');
                    if (familyMember1) {
                        familyMember1.required = true;
                    }
                } else {
                    familyMembersSection.style.display = 'none';
                    // Remove required attribute
                    const familyMember1 = document.querySelector('input[name="familyMember1"]');
                    if (familyMember1) {
                        familyMember1.required = false;
                    }
                }
            });
        }

        // Handle tier selection links
        const tierLinks = document.querySelectorAll('.tier-action a');
        tierLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Get membership type from parent tier card
                const tierCard = this.closest('.tier-card');
                if (tierCard) {
                    const tierName = tierCard.querySelector('h3').textContent.toLowerCase();

                    // Set the select value based on tier name
                    if (tierName.includes('individual')) {
                        membershipSelect.value = 'individual';
                    } else if (tierName.includes('family')) {
                        membershipSelect.value = 'family';
                        // Show family members section
                        familyMembersSection.style.display = 'block';
                    } else if (tierName.includes('lifetime')) {
                        membershipSelect.value = 'lifetime';
                    }

                    // Trigger change event to handle family section visibility
                    const event = new Event('change');
                    membershipSelect.dispatchEvent(event);
                }
            });
        });

        // Form submission
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate form
            if (validateMembershipForm(this)) {
                // In a real implementation, this would send data to a server
                // For this static demo, we'll just show a thank you message
                showThankYouMessage('membership');
                this.reset();
            }
        });
    }

    /**
     * Validate membership form
     * @param {HTMLFormElement} form - The membership form
     * @returns {boolean} - Whether the form is valid
     */
    function validateMembershipForm(form) {
        let isValid = true;

        // Get form fields
        const memberName = form.querySelector('#memberName');
        const memberEmail = form.querySelector('#memberEmail');
        const memberPhone = form.querySelector('#memberPhone');
        const memberAddress = form.querySelector('#memberAddress');
        const membershipType = form.querySelector('#membershipType');
        const termsAgree = form.querySelector('#termsAgree');

        // Basic validations
        if (!memberName.value.trim()) {
            markInvalid(memberName, 'Name is required');
            isValid = false;
        } else {
            markValid(memberName);
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!memberEmail.value.trim() || !emailPattern.test(memberEmail.value)) {
            markInvalid(memberEmail, 'Please enter a valid email');
            isValid = false;
        } else {
            markValid(memberEmail);
        }

        // Additional validations for other fields...

        return isValid;
    }

    /**
     * Initialize testimonials slider
     */
    function initTestimonialsSlider() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        if (testimonials.length <= 1) return;

        let currentTestimonial = 0;
        const testimonialsGrid = document.querySelector('.testimonials-grid');

        // Create navigation controls
        const navigation = document.createElement('div');
        navigation.className = 'testimonial-nav';

        const prevBtn = document.createElement('button');
        prevBtn.className = 'testimonial-prev';
        prevBtn.innerHTML = '&larr;';
        prevBtn.setAttribute('aria-label', 'Previous testimonial');

        const nextBtn = document.createElement('button');
        nextBtn.className = 'testimonial-next';
        nextBtn.innerHTML = '&rarr;';
        nextBtn.setAttribute('aria-label', 'Next testimonial');

        navigation.appendChild(prevBtn);
        navigation.appendChild(nextBtn);

        // Create dots container
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';

        // Add dots for each testimonial
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'testimonial-dot';
            if (index === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);

            dot.addEventListener('click', function() {
                currentTestimonial = index;
                updateTestimonials();
            });

            dotsContainer.appendChild(dot);
        });

        navigation.appendChild(dotsContainer);

        // Add navigation after testimonials grid
        testimonialsGrid.parentNode.insertBefore(navigation, testimonialsGrid.nextSibling);

        // Update testimonials display
        function updateTestimonials() {
            // Hide all testimonials
            testimonials.forEach(testimonial => {
                testimonial.style.opacity = '0';
                setTimeout(() => {
                    testimonial.style.display = 'none';
                }, 300);
            });

            // Show current testimonial
            setTimeout(() => {
                testimonials[currentTestimonial].style.display = 'block';
                setTimeout(() => {
                    testimonials[currentTestimonial].style.opacity = '1';
                }, 50);

                // Update dots
                const dots = dotsContainer.querySelectorAll('.testimonial-dot');
                dots.forEach((dot, index) => {
                    if (index === currentTestimonial) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }, 300);
        }

        // Initialize display
        testimonials.forEach((testimonial, index) => {
            if (index === 0) {
                testimonial.style.display = 'block';
                testimonial.style.opacity = '1';
            } else {
                testimonial.style.display = 'none';
                testimonial.style.opacity = '0';
            }
        });

        // Previous button click
        prevBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            updateTestimonials();
        });

        // Next button click
        nextBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonials();
        });

        // Auto-advance testimonials
        let testimonialInterval = setInterval(function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            updateTestimonials();
        }, 5000);

        // Pause auto-advance on hover
        testimonialsGrid.addEventListener('mouseenter', function() {
            clearInterval(testimonialInterval);
        });

        // Resume auto-advance after hover
        testimonialsGrid.addEventListener('mouseleave', function() {
            testimonialInterval = setInterval(function() {
                currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                updateTestimonials();
            }, 5000);
        });
    }

    /**
     * Mark a form field as invalid
     * @param {HTMLElement} field - The form field
     * @param {string} message - The error message
     */
    function markInvalid(field, message) {
        field.classList.add('invalid');

        // Add error message if it doesn't exist
        let errorEl = field.parentNode.querySelector('.error-message');
        if (!errorEl) {
            errorEl = document.createElement('div');
            errorEl.className = 'error-message';
            field.parentNode.appendChild(errorEl);
        }

        errorEl.textContent = message;
    }

    /**
     * Mark a form field as valid
     * @param {HTMLElement} field - The form field
     */
    function markValid(field) {
        field.classList.remove('invalid');

        // Remove error message if it exists
        const errorEl = field.parentNode.querySelector('.error-message');
        if (errorEl) {
            errorEl.remove();
        }
    }

    /**
     * Show thank you message after form submission
     * @param {string} type - The type of form ('donation' or 'membership')
     */
    function showThankYouMessage(type) {
        let container;
        let message;

        if (type === 'donation') {
            container = document.querySelector('.donation-form-container');
            message = `
                <div class="thank-you-message">
                    <h3>Thank You for Your Donation!</h3>
                    <p>Your generosity makes a huge difference in our community. We will send you a confirmation email shortly.</p>
                    <button class="btn btn-secondary return-btn">Make Another Donation</button>
                </div>
            `;
        } else if (type === 'membership') {
            container = document.querySelector('.membership-form-container');
            message = `
                <div class="thank-you-message">
                    <h3>Welcome to Tanguria Recreation Club!</h3>
                    <p>Thank you for becoming a member. We will review your application and contact you shortly with next steps.</p>
                    <button class="btn btn-secondary return-btn">Return to Form</button>
                </div>
            `;
        }

        if (container) {
            // Store the original content
            const originalContent = container.innerHTML;

            // Replace with thank you message
            container.innerHTML = message;

            // Add event listener to return button
            const returnBtn = container.querySelector('.return-btn');
            if (returnBtn) {
                returnBtn.addEventListener('click', function() {
                    container.innerHTML = originalContent;

                    // Re-initialize the form
                    if (type === 'donation') {
                        initDonationForm();
                    } else if (type === 'membership') {
                        initMembershipForm();
                    }
                });
            }
        }
    }
});
