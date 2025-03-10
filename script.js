// Main JavaScript for EnosSalar.github.io

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = window.scrollY;
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a backend
            // For now, we'll just show a success message
            const formGroups = contactForm.querySelectorAll('.form-group');
            
            formGroups.forEach(group => {
                group.style.display = 'none';
            });
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.style.display = 'none';
            
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Thank you, ${name}!</h3>
                <p>Your message has been sent successfully. I'll get back to you soon.</p>
                <button class="btn primary" id="reset-form">Send Another Message</button>
            `;
            
            contactForm.appendChild(successMessage);
            
            // Reset form functionality
            document.getElementById('reset-form').addEventListener('click', function() {
                successMessage.remove();
                formGroups.forEach(group => {
                    group.style.display = 'flex';
                });
                submitBtn.style.display = 'inline-block';
                contactForm.reset();
            });
        });
    }

    // Skill animation on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => {
        observer.observe(card);
    });

    // Current year for footer
    const currentYear = new Date().getFullYear();
    const copyright = document.querySelector('footer p');
    if (copyright) {
        copyright.innerHTML = `&copy; ${currentYear} Enos Salar. All Rights Reserved.`;
    }
});