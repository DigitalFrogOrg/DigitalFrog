"use client";
import React, { useState, useEffect } from "react";

const CustomizeHeading = () => {
  const words = ["Connect.", "Grow.", "Inspire."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 150;
  const delayBetweenWords = 4000;

  useEffect(() => {
    let typingTimeout;

    if (charIndex < words[currentWordIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentWordIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else {
      const wordTimeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, delayBetweenWords);

      return () => clearTimeout(wordTimeout);
    }
    return () => clearTimeout(typingTimeout);
  }, [charIndex, currentWordIndex]);
  return (
    <>
      <h1 className="mt-5">
        We Design Apps That{" "}
        <span style={{ color: "#dc5f00" }}>{displayedText}</span>
      </h1>
    </>
  );
};

export default CustomizeHeading;
