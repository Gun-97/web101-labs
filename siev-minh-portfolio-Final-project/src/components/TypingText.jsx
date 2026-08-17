import { useEffect, useState } from "react";

export default function TypingText({ text, speed = 55, startDelay = 400 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
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
    <span>
      {display}
      <span className="ml-1 inline-block h-[1em] w-[3px] animate-pulse bg-cyan-400 align-middle" />
    </span>
  );
}
