const typingSpan = document.querySelector('.typing-text');

const fullText = "the most handsome boy at Informatics";
const highlightTarget = "the most handsome"; 

const typingSpeed = 100;     
const erasingSpeed = 50;    
const delayAfterComplete = 3000; 

let charIndex = 0;
let isTyping = true;

function updateDOM() {

    let currentString = fullText.substring(0, charIndex);

    if (currentString.length <= highlightTarget.length) {
        currentString = `<span class="highlight">${currentString}</span>`;
    } else {
        currentString = `<span class="highlight">${highlightTarget}</span>${currentString.substring(highlightTarget.length)}`;
    }

    typingSpan.innerHTML = currentString;
}

function typeText() {
    if (isTyping) {
        if (charIndex <= fullText.length) {
            updateDOM();
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            isTyping = false;
            charIndex--;
            setTimeout(typeText, delayAfterComplete);
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            updateDOM();
            setTimeout(typeText, erasingSpeed);
        } else {
            isTyping = true;
            setTimeout(typeText, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 500);
});