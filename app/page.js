'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

export default function Page() {
  const [affirmation, setAffirmation] = useState('Loading...');
  const [shimmer, setShimmer] = useState(false);

  const loadAffirmation = async () => {
    try {
      const res = await fetch('/api/affirmation');
      const data = await res.json();
      setShimmer(true);
      setAffirmation(data.affirmation);
      createBurst();
      setTimeout(() => setShimmer(false), 1000);
    } catch (err) {
      setAffirmation('Failed to load affirmation');
      console.error(err);
    }
  };

  useEffect(() => {
    loadAffirmation();

    const createHeart = () => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.fontSize = `${12 + Math.random() * 24}px`;
      heart.style.animationDuration = 4 + Math.random() * 3 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 7000);
    };
    const heartInterval = setInterval(createHeart, 500);

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + 'vw';
      sparkle.style.width = sparkle.style.height = `${3 + Math.random() * 4}px`;
      sparkle.style.animationDuration = 3 + Math.random() * 3 + 's';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 6000);
    };
    const sparkleInterval = setInterval(createSparkle, 300);

    return () => {
      clearInterval(heartInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  const createBurst = () => {
    const card = document.querySelector('.card');
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '💖';
      heart.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
      heart.style.top = centerY + (Math.random() - 0.5) * 50 + 'px';
      heart.style.fontSize = `${12 + Math.random() * 24}px`;
      heart.style.animationDuration = 1 + Math.random() * 1.5 + 's';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 2000);

      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
      sparkle.style.top = centerY + (Math.random() - 0.5) * 50 + 'px';
      sparkle.style.width = sparkle.style.height = `${3 + Math.random() * 4}px`;
      sparkle.style.animationDuration = 1 + Math.random() * 1.5 + 's';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 2000);
    }
  };

  return (
    <>
      <Head>
        <title>💖 Daily Affirmations | Spread Joy 💖</title>
        <meta name="description" content="Get a fresh affirmation daily to brighten your mood!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`card ${shimmer ? 'shimmer' : ''}`}>{affirmation}</div>
      <button onClick={loadAffirmation}>💖 New Affirmation</button>
    </>
  );
}
