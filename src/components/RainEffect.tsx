import React, { useEffect, useRef } from "react";
import "../index.css";

const RainEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createdDrops: HTMLDivElement[] = [];

    const createRaindrop = () => {
      if (!containerRef.current) return;
      const drop = document.createElement("div");
      drop.className = "raindrop";

      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${1 + Math.random() * 1.5}s`;
      drop.style.height = `${15 + Math.random() * 25}px`;
      drop.style.opacity = `${0.1 + Math.random() * 0.4}`; // Opacité variable
      drop.style.setProperty("--drift", `${Math.random() * 30 - 15}px`);

      container.appendChild(drop);
      createdDrops.push(drop);

      drop.addEventListener("animationend", () => {
        drop.remove();
        const index = createdDrops.indexOf(drop);
        if (index > -1) createdDrops.splice(index, 1);
      });
    };

    const interval = setInterval(createRaindrop, 40);

    return () => {
      clearInterval(interval);
      createdDrops.forEach((drop) => drop.remove());
    };
  }, []);

  return <div ref={containerRef} className="rain-container pointer-events-none fixed inset-0 z-10" />;
};

export default RainEffect;