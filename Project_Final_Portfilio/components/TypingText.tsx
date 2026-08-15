"use client";

import { useEffect, useState } from "react";

export default function TypingText({
  text,
  className,
  speed = 55,
  startDelay = 400,
}: {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {display}
      <span className="inline-block w-[3px] h-[1em] align-middle bg-cyan-400 ml-1 animate-pulse" aria-hidden="true" />
      <span className="sr-only">{text}</span>
    </span>
  );
}
