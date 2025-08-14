import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'affirmations.json');
  const affirmations = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  res.status(200).json({ affirmation: random });
}
