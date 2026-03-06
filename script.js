// Dark/Light Mode Toggle
const toggleSwitch = document.getElementById('toggle-switch');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

// Toggle theme on click
toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save theme preference
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Typing Text Animation
const typingText = document.querySelector('.typing-text');
const textArray = [
    'Full Stack Developer', 
    'Frontend Developer', 
    'Backend Developer', 
    'Java Developer', 
    'Web Developer',
    
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeText() {
    const currentText = textArray[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 100;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});

// Tab functionality for About section
function opentab(tabname) {
    const tablinks = document.getElementsByClassName('tab-links');
    const tabcontents = document.getElementsByClassName('tab-contents');
    
    // Remove active class from all tabs
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    
    // Add active class to clicked tab
    event.target.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Mobile menu toggle
function myMenuFunction() {
    const navMenu = document.getElementById('myNavMenu');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('myNavMenu');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active-link');
            });
            if (navLink) {
                navLink.classList.add('active-link');
            }
        }
    });
});
