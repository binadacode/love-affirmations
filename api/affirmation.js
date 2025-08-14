export default function handler(req, res) {
  const subjects = [
    "You",
    "Your smile",
    "Your laugh",
    "Your energy",
    "Your heart",
    "Your soul",
    "Your kindness"
  ];

  const verbs = [
    "brighten",
    "inspire",
    "amaze",
    "light up",
    "captivate",
    "enchant",
    "fill"
  ];

  const objects = [
    "my world",
    "everyone around you",
    "my heart",
    "the universe",
    "every day",
    "my thoughts",
    "my dreams"
  ];

  const adjectives = [
    "beautifully",
    "endlessly",
    "magically",
    "gently",
    "wonderfully",
    "brilliantly"
  ];

  const emojis = ["❤️","🌟","😊","✨","💖","🥰","💫"];

  const templates = [
    "{subject} {verb} {object} {adjective} {emoji}",
    "{subject}'s {object} {verb} me {adjective} {emoji}",
    "Every day, {subject} {verb} {object} {emoji}",
    "I love how {subject} {verb} {object} {adjective} {emoji}",
    "Nothing compares to how {subject} {verb} {object} {emoji}"
  ];

  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const template = random(templates);

  // Replace placeholders with random words
  const affirmation = template
    .replace("{subject}", random(subjects))
    .replace("{verb}", random(verbs))
    .replace("{object}", random(objects))
    .replace("{adjective}", random(adjectives))
    .replace("{emoji}", random(emojis));

  res.status(200).json({ affirmation });
}
