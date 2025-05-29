"use client";

import { useEffect, useState } from "react";

const words = [
  "Fullstack Developer",
  "UI/UX Designer",
  "Tech Enthusiast",
  "Problem Solver",
];

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [blink, setBlink] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[wordIndex];
    const updatedText = currentWord.substring(0, charIndex);
    setText(updatedText);

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
        setBlink(false);
      }, 1000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      setBlink(true);
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, isPaused]);

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
