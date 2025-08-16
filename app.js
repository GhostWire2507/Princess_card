// Princess Card Interactive Logic

// Collection of flirtatious and affectionate messages
const affectionateMessages = [
  "You're the sparkle in my day, beautiful 💫",
  "Every moment with you feels like magic ✨",
  "Your smile could light up the entire universe 🌟",
  "You're not just amazing, you're absolutely enchanting 💖",
  "Being around you feels like a warm summer breeze 🌸",
  "You have the most beautiful soul I've ever encountered 💕",
  "Your laugh is my favorite sound in the whole world 🎵",
  "You make ordinary moments feel extraordinary 🌺",
  "You're like sunshine on a cloudy day ☀️",
  "Your kindness makes my heart skip a beat 💓",
  "You're the definition of grace and beauty 👑",
  "Every day with you is a new adventure 🦋",
  "You have this incredible way of making everything better 🌈",
  "Your eyes hold galaxies of wonder and love 🌌",
  "You're my favorite person in the entire world 💝",
  "Your presence alone makes me feel at peace 🕊️",
  "You're like a beautiful dream come true ☁️",
  "Your heart is pure gold, darling 💛",
  "You make me believe in fairy tales again 🏰",
  "You're absolutely radiant, inside and out ✨",
  "Your love feels like coming home 🏡",
  "You're the most precious gift in my life 🎁",
  "Your beauty takes my breath away every single time 😍",
  "You make my world infinitely more colorful 🎨",
  "You're my lucky star, shining so bright ⭐",
  "Your sweet voice is like music to my ears 🎼",
  "You have this magical way of healing my heart 💚",
  "You're absolutely perfect just the way you are 💯",
  "Your love is the greatest treasure I could ask for 💎",
  "You make me want to be the best version of myself 🌱"
];

// Special first line
const specialGreeting = "Refresh the page Princess, I'll find a new way to say you're amazing 🌟";

// State
let messageDeck = [];
let currentIndex = 0;
let isFirstMessage = true;

// DOM elements
const messageElement = document.getElementById('message');
const nextButton = document.getElementById('nextButton');

// Initialize deck by shuffling messages
function initializeDeck() {
  messageDeck = affectionateMessages.slice();
  shuffleDeck();
  currentIndex = 0;
}

// Fisher-Yates shuffle
function shuffleDeck() {
  for (let i = messageDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [messageDeck[i], messageDeck[j]] = [messageDeck[j], messageDeck[i]];
  }
}

// Fade out current message, then fade in new message
function changeMessage(newMessage) {
  messageElement.classList.add('fade-out');

  setTimeout(() => {
    messageElement.textContent = newMessage;
    messageElement.classList.remove('fade-out');
    messageElement.classList.add('fade-in');

    setTimeout(() => {
      messageElement.classList.remove('fade-in');
    }, 500);
  }, 250);
}

// Get next message from deck
function getNextMessage() {
  if (currentIndex >= messageDeck.length) {
    shuffleDeck();
    currentIndex = 0;
  }
  return messageDeck[currentIndex++];
}

// Handle button click
function handleNextClick() {
  if (isFirstMessage) {
    isFirstMessage = false;
    initializeDeck();
  }
  const nextMessage = getNextMessage();
  changeMessage(nextMessage);
}

// Initialize app
function init() {
  messageElement.textContent = specialGreeting;
  messageElement.classList.add('fade-in');

  nextButton.addEventListener('click', handleNextClick);

  setTimeout(() => {
    messageElement.classList.remove('fade-in');
  }, 500);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
