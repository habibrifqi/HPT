"use client";

import { useEffect, useState } from "react";

const words = [
  "Fullstack Web Developer",
  "Programmer",
  // "Tech Enthusiast",
  // "Problem Solver",
];

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex];
  const text = currentWord.substring(0, charIndex);

  useEffect(() => {
    // If we've finished typing a word, pause for 1000ms before deleting
    if (!isDeleting && charIndex === currentWord.length) {
      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // If we've finished deleting a word, pause for 200ms before starting next word
    if (isDeleting && charIndex === 0) {
      const timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 200);
      return () => clearTimeout(timer);
    }

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, currentWord.length]);

  return (
    <h2 className="text-2xl md:text-3xl mb-4 mt-0 pt-0">
      <span>{text}</span>
      <span className="inline-block w-[1px] bg-black animate-blink ml-1">
        |
      </span>
    </h2>
  );
};

export default TypingText;
