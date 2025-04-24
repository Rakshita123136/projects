const typingText = document.querySelector('.typing-text p');
const input = document.querySelector('.wrapper .input-field');
const wpmValue = document.querySelector('.wpm-stat .stat-value');
const cpmValue = document.querySelector('.cpm-stat .stat-value');
const mistakesValue = document.querySelector('.mistakes-stat .stat-value');
const button = document.querySelector('button');
const modal = document.getElementById('summaryModal');
const summaryText = document.getElementById('summaryText');
const progressBar = document.querySelector('.progress-bar .progress');
const darkModeToggle = document.getElementById('darkModeToggle');

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakes = 0;
let isTyping = false;

const paragraphs = [
    "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    "Discipline is the bridge between goals and accomplishment. Keep typing, keep improving.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Typing fast isn't just speed—it's about accuracy and rhythm. Let your fingers dance.",
    "Great things are done by a series of small things brought together. One keystroke at a time.",
    "Every expert was once a beginner. Trust the process and keep practicing.",
    "Productivity is never an accident. It is always the result of a commitment to excellence.",
    "A journey of a thousand miles begins with a single keystroke. Let's go!"
];

function loadParagraph() {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = '';

    paragraphs[randomIndex].split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char;
        typingText.appendChild(span);
    });

    typingText.querySelector('span').classList.add('active');
    document.addEventListener('keydown', () => input.focus());
}

function startTimer() {
    if (!isTyping) {
        isTyping = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timeDisplay.innerText = timeLeft + "s";
            } else {
                clearInterval(timer);
                input.disabled = true;
                showSummary();
            }
        }, 1000);
    }
}

function initTyping() {
    startTimer();
    const chars = typingText.querySelectorAll('span');
    const typedChar = input.value.charAt(charIndex);

    if (charIndex < chars.length && timeLeft > 0) {
        if (chars[charIndex].innerText === typedChar) {
            chars[charIndex].classList.add('correct');
        } else {
            chars[charIndex].classList.add('incorrect');
            mistakes++;
        }

        chars[charIndex].classList.remove('active');
        charIndex++;
        if (charIndex < chars.length) {
            chars[charIndex].classList.add('active');
        }

        mistakesValue.innerText = mistakes;

        const elapsedTime = maxTime - timeLeft;
        const wpm = elapsedTime > 0 ? Math.round((charIndex - mistakes) / 5 / (elapsedTime / 60)) : 0;
        const cpm = elapsedTime > 0 ? Math.round((charIndex - mistakes) / (elapsedTime / 60)) : 0;

        wpmValue.innerText = wpm;
        cpmValue.innerText = cpm;

        const progress = (charIndex / chars.length) * 100;
        progressBar.style.width = `${progress}%`;

    } else {
        clearInterval(timer);
        input.disabled = true;
        showSummary();
    }
}

function showSummary() {
    summaryText.innerHTML = `
        <strong>Time's up!</strong><br/>
        WPM: ${wpmValue.innerText}<br/>
        CPM: ${cpmValue.innerText}<br/>
        Mistakes: ${mistakesValue.innerText}
    `;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

function resetGame() {
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = 0;
    mistakes = 0;
    isTyping = false;
    input.disabled = false;
    input.value = "";

    wpmValue.innerText = "0";
    cpmValue.innerText = "0";
    mistakesValue.innerText = "0";
    progressBar.style.width = "0%";

    typingText.innerHTML = '';
    loadParagraph();
}

// Toggle dark mode
darkModeToggle.addEventListener("change", (e) => {
    document.body.classList.toggle('dark', e.target.checked);
});

input.addEventListener("input", initTyping);
button.addEventListener("click", resetGame);
loadParagraph();
