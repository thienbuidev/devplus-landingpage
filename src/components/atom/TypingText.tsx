"use client";
import { useEffect, useState, useRef } from "react";

type TypingTextProps = {
  text?: string;
  speed?: number;
  delay?: number; // NEW
  className?: string;
};

export const TypingText = ({
  text,
  speed = 100,
  delay = 0, // NEW
  className,
}: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [height, setHeight] = useState<number | null>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const delayRef = useRef<NodeJS.Timeout | null>(null); // NEW

  useEffect(() => {
    setDisplayed("");
    let index = 0;
    if (!text) return;

    // Clear previous timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (delayRef.current) clearTimeout(delayRef.current);

    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setDisplayed(text.substring(0, index + 1));
        index++;
        if (index >= text.length && intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay); // Apply delay before typing starts

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (delayRef.current) clearTimeout(delayRef.current);
    };
  }, [text, speed, delay]);

  useEffect(() => {
    if (hiddenRef.current) {
      setHeight(hiddenRef.current.offsetHeight);
    }
  }, [text]);

  return (
    <>
      <div
        ref={hiddenRef}
        className={`${className} invisible absolute pointer-events-none whitespace-pre-wrap`}
      >
        {text}
      </div>

      <div
        className={className}
        style={height ? { minHeight: `${height}px` } : undefined}
      >
        {displayed}
      </div>
    </>
  );
};
