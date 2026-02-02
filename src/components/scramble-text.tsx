"use client";
import { useScramble } from "use-scramble";
import { useState } from "react";

interface ScrambleTextProps {
  texts: string[];
  pauseDuration?: number;
}

export default function ScrambleText({ texts, pauseDuration = 5000 }: ScrambleTextProps) {
  const [textIndex, setTextIndex] = useState(0);

  const { ref } = useScramble({
    text: texts[textIndex],
    speed: 0.6,
    tick: 1,
    step: 2,
    scramble: 4,
    overflow: true,
    onAnimationEnd: () => {
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pauseDuration);
    },
  });

  return <span ref={ref} />;
}