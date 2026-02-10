/**
 * Hotel Sindhupalchowk - JavaScript
 * Handles form validation and interactions
 */

// ==========================================
// DOM Elements
// ==========================================

// Booking Form Elements
const bookingForm = document.getElementById('bookingForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const roomTypeInput = document.getElementById('roomType');
const checkInInput = document.getElementById('checkIn');
const checkOutInput = document.getElementById('checkOut');
const guestsInput = document.getElementById('guests');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');

// Contact Form Elements
const contactForm = document.getElementById('contactForm');
const contactNameInput = document.getElementById('contactName');
const contactEmailInput = document.getElementById('contactEmail');
const contactMessageInput = document.getElementById('contactMessage');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');
const contactSuccessMessage = document.getElementById('contactSuccessMessage');

// ==========================================
// Validation Functions
// ==========================================

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone format
 */
function isValidPhone(phone) {
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

/**
 * Check if string is empty or whitespace only
 * @param {string} str - String to check
 * @returns {boolean} True if empty
 */
function isEmpty(str) {
    return str === null || str.trim() === '';
}

/**
 * Validate booking form
 * @returns {boolean} True if all validations pass
 */
function validateBookingForm() {
    let isValid = true;
    let errors = [];

    // Full Name validation
    if (isEmpty(fullNameInput.value)) {
        fullNameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        fullNameInput.classList.remove('is-invalid');
    }

    // Email validation
    if (isEmpty(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        errors.push('Email is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        errors.push('Please enter a valid email address');
        isValid = false;
    } else {
        emailInput.classList.remove('is-invalid');
    }

    // Phone validation
    if (isEmpty(phoneInput.value)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
    } else {
        phoneInput.classList.remove('is-invalid');
    }

    // Room Type validation
    if (isEmpty(roomTypeInput.value)) {
        roomTypeInput.classList.add('is-invalid');
        isValid = false;
    } else {
        roomTypeInput.classList.remove('is-invalid');
    }

    // Check-in date validation
    if (isEmpty(checkInInput.value)) {
        checkInInput.classList.add('is-invalid');
        isValid = false;
    } else {
        checkInInput.classList.remove('is-invalid');
    }

    // Check-out date validation
    if (isEmpty(checkOutInput.value)) {
        checkOutInput.classList.add('is-invalid');
        isValid = false;
    } else {
        checkOutInput.classList.remove('is-invalid');
    }

    // Date comparison validation
    if (!isEmpty(checkInInput.value) && !isEmpty(checkOutInput.value)) {
        const checkInDate = new Date(checkInInput.value);
        const checkOutDate = new Date(checkOutInput.value);

        if (checkOutDate <= checkInDate) {
            checkOutInput.classList.add('is-invalid');
            errors.push('Check-out date must be after check-in date');
            isValid = false;
        } else {
            checkOutInput.classList.remove('is-invalid');
        }
    }

    // Guests validation
    if (isEmpty(guestsInput.value)) {
        guestsInput.classList.add('is-invalid');
        isValid = false;
    } else {
        guestsInput.classList.remove('is-invalid');
    }

    return isValid;
}

/**
 * Validate contact form
 * @returns {boolean} True if all validations pass
 */
function validateContactForm() {
    let isValid = true;

    // Name validation
    if (isEmpty(contactNameInput.value)) {
        contactNameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        contactNameInput.classList.remove('is-invalid');
    }

    // Email validation
    if (isEmpty(contactEmailInput.value)) {
        contactEmailInput.classList.add('is-invalid');
        isValid = false;
    } else if (!isValidEmail(contactEmailInput.value)) {
        contactEmailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        contactEmailInput.classList.remove('is-invalid');
    }

    // Message validation
    if (isEmpty(contactMessageInput.value)) {
        contactMessageInput.classList.add('is-invalid');
        isValid = false;
    } else {
        contactMessageInput.classList.remove('is-invalid');
    }

    return isValid;
}

// ==========================================
// Event Handlers
// ==========================================

/**
 * Handle booking form submission
 * @param {Event} e - Submit event
 */
function handleBookingSubmit(e) {
    e.preventDefault();

    if (validateBookingForm()) {
        // Show success message
        if (successMessage) {
            successMessage.classList.remove('d-none');
        }

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Booking Submitted!';

        // Scroll to success message
        if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Log form data (for demo purposes)
        console.log('Booking Form Submitted:', {
            name: fullNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            roomType: roomTypeInput.value,
            checkIn: checkInInput.value,
            checkOut: checkOutInput.value,
            guests: guestsInput.value
        });

        // Reset form after delay
        setTimeout(() => {
            bookingForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Booking';
            if (successMessage) {
                successMessage.classList.add('d-none');
            }
        }, 3000);
    }
}

/**
 * Handle contact form submission
 * @param {Event} e - Submit event
 */
function handleContactSubmit(e) {
    e.preventDefault();

    if (validateContactForm()) {
        // Show success message
        if (contactSuccessMessage) {
            contactSuccessMessage.classList.remove('d-none');
        }

        // Disable submit button
        contactSubmitBtn.disabled = true;
        contactSubmitBtn.textContent = 'Message Sent!';

        // Scroll to success message
        if (contactSuccessMessage) {
            contactSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Log form data (for demo purposes)
        console.log('Contact Form Submitted:', {
            name: contactNameInput.value,
            email: contactEmailInput.value,
            message: contactMessageInput.value
        });

        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            contactSubmitBtn.disabled = false;
            contactSubmitBtn.textContent = 'Send Message';
            if (contactSuccessMessage) {
                contactSuccessMessage.classList.add('d-none');
            }
        }, 3000);
    }
}

/**
 * Remove invalid class on input
 * @param {Event} e - Input event
 */
function handleInput(e) {
    e.target.classList.remove('is-invalid');
}

// ==========================================
// Navigation Active Link
// ==========================================

/**
 * Highlight the active navigation link based on current page
 */
function highlightActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Add smooth scrolling to anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// Initialize Event Listeners
// ==========================================

/**
 * Initialize the website functionality
 */
function init() {
    // Highlight active navigation link
    highlightActiveNav();

    // Add smooth scrolling for anchor links
    initSmoothScrolling();

    // Booking form events
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);

        // Remove invalid class on input
        const bookingInputs = [fullNameInput, emailInput, phoneInput, roomTypeInput, checkInInput, checkOutInput, guestsInput];
        bookingInputs.forEach(input => {
            if (input) {
                input.addEventListener('input', handleInput);
            }
        });

        // Set minimum check-in date to today
        if (checkInInput) {
            const today = new Date().toISOString().split('T')[0];
            checkInInput.setAttribute('min', today);

            checkInInput.addEventListener('change', function() {
                if (checkOutInput) {
                    checkOutInput.setAttribute('min', this.value);
                }
            });
        }
    }

    // Contact form events
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);

        // Remove invalid class on input
        const contactInputs = [contactNameInput, contactEmailInput, contactMessageInput];
        contactInputs.forEach(input => {
            if (input) {
                input.addEventListener('input', handleInput);
            }
        });
    }

    console.log('Hotel Sindhupalchowk website initialized');
}

// ==========================================
// Run Initialization
// ==========================================

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
