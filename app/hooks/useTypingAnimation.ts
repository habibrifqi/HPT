"use client";
import { useState, useEffect } from 'react';

const useTypingAnimation = (words: string[], typingSpeed = 100, deletingSpeed = 50, delay = 7000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  console.log('Current:', displayText, 'Index:', currentIndex, 'Deleting:', isDeleting);
  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[currentIndex % words.length];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          setTimeout(handleTyping, typingSpeed);
        } else {
          // Switch to deleting after delay
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
          setTimeout(handleTyping, deletingSpeed);
        } else {
          // Move to next word
          setIsDeleting(false);
          setCurrentIndex(prev => prev + 1);
          setTimeout(handleTyping, typingSpeed);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting]);

  return { displayText, showCursor };
};

export default useTypingAnimation;