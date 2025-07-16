"use client";

import { useEffect, useState } from "react";

export default function TypewriterOutput({ text, speed = 20, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);

    if (!text || text.length === 0) {
      return;
    }

    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < text.length) {
            setDisplayedText(text.substring(0, prevIndex + 1));
            return prevIndex + 1;
          } else {
            clearInterval(interval);

            return prevIndex;
          }
        });
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [text]);



  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <span className={`inline-block w-2 h-5 align-middle ml-1 animate-blink font-prime text-sm sm:text-base`} />
      )}
    </span>
  );
}
