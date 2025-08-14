export default function handler(req, res) {
  const affirmations = [
    "You make my world brighter every day. ❤️",
    "I’m proud of you, always. 🌟",
    "You are my favorite person in the universe. 🌙",
    "Your smile is my daily motivation. 😊",
    "You are beautiful inside and out. 💖",
    "I love you more than coffee... and that’s saying something ☕❤️",
    "You inspire me to be the best version of myself. ✨",
    "With you, every moment feels like magic. ✨"
  ];

  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  res.status(200).json({ affirmation: random });
}

