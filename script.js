const messages = [
    "Our Anniversary",
    "Thank you for coming",
    "I love u",
    "Hoang Thi Thu Ha ❤️",
    "sieu luoi an",
    "em be cua toi",
    "I love u",
    "Ha voi cuti <3",
    "sieu dang yeu",
    "yeu Ha",
    "Hoang Thi Thu Ha ❤️",
    "I love u",
    "pailam_shao",
    "Anniversary",
    "Love",
    "❤️",
    "09/04/2025",
    "em be",
    "do dang yeu",
    "cong chua cua anh"
];

const container = document.getElementById('container');

function createFloatingText() {
    const text = document.createElement('div');
    text.className = 'floating-text';
    
    // Random message
    const message = messages[Math.floor(Math.random() * messages.length)];
    text.textContent = message;
    
    // Random size class
    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    text.classList.add(randomSize);
    
    // Special styling for hearts and names
    if (message.includes('❤️') || message.includes('love') || message.includes('Love')) {
        text.classList.add('heart');
    }
    if (message.includes('Cần') || message.includes('Bin')) {
        text.classList.add('accent');
    }
    
    // Random depth effects
    const depthRandom = Math.random();
    if (depthRandom < 0.2) {
        text.classList.add('front');
    } else if (depthRandom < 0.4) {
        text.classList.add('back');
    }
    
    // Random effects
    if (Math.random() < 0.25) {
        text.classList.add('blur-effect');
    }
    if (Math.random() < 0.15) {
        text.classList.add('glow-effect');
    }
    
    // Random speed
    if (Math.random() < 0.4) {
        text.classList.add('slow');
    }
    
    // Random horizontal position
    const randomX = Math.random() * (window.innerWidth - 200);
    text.style.left = randomX + 'px';
    text.style.top = '-100px';
    
    // Random animation delay
    const randomDelay = Math.random() * 5;
    text.style.animationDelay = randomDelay + 's';
    
    // Random animation duration
    const randomDuration = 6 + Math.random() * 6;
    text.style.animationDuration = randomDuration + 's';
    
    container.appendChild(text);
    
    // Remove element after animation
    setTimeout(() => {
        if (text.parentNode) {
            text.parentNode.removeChild(text);
        }
    }, (randomDuration + randomDelay) * 1000);
}

// Create initial texts
for (let i = 0; i < 20; i++) {
    setTimeout(() => {
        createFloatingText();
    }, i * 300);
}

// Continuously create new texts
setInterval(() => {
    createFloatingText();
}, 600);

// Add some pink floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.backgroundColor = '#ffb6c1';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = '0 0 15px #ffb6c1';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '-10px';
    particle.style.animation = 'fallDown 15s linear infinite';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.zIndex = '5';
    
    container.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 18000);
}

// Create particles periodically
setInterval(createParticle, 2000);