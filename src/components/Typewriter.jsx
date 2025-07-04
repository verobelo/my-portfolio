import { useState, useEffect } from 'react';

export default function Typewriter({ text, delay, startDelay = 0, className }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (!started) {
      const startTimeout = setTimeout(() => setStarted(true), startDelay);
      return () => clearTimeout(startTimeout);
    }
  }, [started, startDelay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [started, currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;
}
