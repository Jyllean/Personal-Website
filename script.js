// Fun Facts Array
const funFacts = [
    "I chose UPOU's Diploma in Computer Science program because I crave new challenges and continuous learning! 📚",
    "I am the 7th out of 11 children, so yeah I have 10 siblings!😎👌🔥",
    "I get bored easily with repetitive tasks, that's exactly why I'm learning to automate things! 🤖",
    "I can solve Rubik's Cubes 3x3 within 3 minutes! 🧊",
    "I've visited 3 different countries! ✈️",
    "I'm an introvert who's more comfortable chatting with online game friends than in real life! 🎮",
];

// Fun Fact Button Functionality
const funFactBtn = document.getElementById('funFactBtn');
const funFactDisplay = document.getElementById('funFactDisplay');
let currentFactIndex = -1;

funFactBtn.addEventListener('click', function() {
    // Generate a random index different from the current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * funFacts.length);
    } while (newIndex === currentFactIndex && funFacts.length > 1);
    
    currentFactIndex = newIndex;
    
    // Hide the display momentarily for animation
    funFactDisplay.classList.remove('show');
    
    // Update content and show after a brief delay
    setTimeout(() => {
        funFactDisplay.textContent = funFacts[currentFactIndex];
        funFactDisplay.classList.add('show');
    }, 100);
    
    // Add a little bounce effect to the button
    funFactBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        funFactBtn.style.transform = '';
    }, 150);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all major sections
document.querySelectorAll('.about, .hobbies, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Hobby cards stagger animation on scroll
const hobbyCards = document.querySelectorAll('.hobby-card');
hobbyCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`;
});

const hobbyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

hobbyCards.forEach(card => hobbyObserver.observe(card));

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Hidden message for fellow tech enthusiast and developer
console.log('%c👋 Hello, fellow developer!', 'font-size: 20px; font-weight: bold; color: #E85D45;');
console.log('%cThanks for checking out my code!', 'font-size: 14px; color: #2D1B2E;');
console.log('%cBuilt with HTML, CSS, and JavaScript for my CMSC 207 Mini Project', 'font-size: 12px; color: #6B5B6E;');
console.log('%cCool right? 😎👌🔥', 'font-size: 12px; color: #6e6d5b;');
