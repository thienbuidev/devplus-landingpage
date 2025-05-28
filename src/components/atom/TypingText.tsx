"use client";
import { useEffect, useState } from "react";

type TypingTextProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
};

export const TypingText = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
}: TypingTextProps) => {
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    setVisibleChars(0);

    const total = text.length;
    let index = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        index++;
        setVisibleChars(index);
        if (index >= total) clearInterval(interval);
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, speed, delay]);

  return (
    <div className={`whitespace-pre-wrap ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`transition-opacity duration-200 ${index < visibleChars ? "opacity-100" : "opacity-0"}`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
