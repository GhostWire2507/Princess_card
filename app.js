// Princess Card Interactive Logic

// Collection of flirtatious and affectionate messages
const affectionateMessages = [
  "You're the sparkle in my day, especially those beautiful red cheeks",
  "You must be tired, maybe you could rest both legs on my shoulder and I massage you 💦", 
  "If I could rearrange the alphabet, I’d put U and I together even if for just a few hours 😏", 
  "You smile bright I have to reduce my screen brightness ✨", 
  "You're as red as the roses you deserve to get 🌹", 
  "You're the cream you make me ooze, the sugar you taste like, the butter I want to spread you like 🧈", 
  "You’re proof that not all angels have wings, some get wet when we call them Princess 💖",
  "Every moment with you feels like magic ✨",
  "Your smile could light up the entire universe 🌟",
  "You're not just amazing, you're absolutely incredible 💖",
  "You feel like a warm summer 🌸",
  "You have the most beautiful soul, very slightly more beautiful than you 💕",
  "Your laugh is my favorite sound in the whole world 🎵",
  "I love the way you try to say my name even though you can't 🌺",
  "You're like an advert ea vinegar, extremely rare ☀️",
  "You're the definition of a pretty princess 👑",
  "Every day with you is a feels like the best part of my day 🦋",
  "You have this incredible way of making everything better 🌈",
  "Your just being online just makes my day 🌌",
  "You're my favorite person in the entire world 💝",
  "Your presence alone makes me feel like today is going to be a good day🕊️",
  "Your manifestation wanted you to manifest them too ☁️",
  "Your heart is pure, even though that brain is as filthy as it gets 💛",
  "You make me believe in fairy tales again, especially when the mermaid was dripping wet 😫",
  "You're absolutely precious, inside and out ✨",
  "You feels like coming home 🏡",
  "You're the most amazing Pikachu in my life 🎁",
  "You're the reason I'm hard at 2am every day 😍",
  "You make my world infinitely more colorful, especially when you have those red cheeks 😊",
  "You're my Pikachu, shining so bright and a little violent ⚡⭐",
  "Your sweetest voice, you'd trick anyone into thinking you're not a filthy little girl 🎼",
  "You have this magical way of feeling like peace 💚",
  "You're absolutely perfect just the way you are, yes even the dark spots 💯",
  "You make me want to be the man you think I am 🌱"
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
