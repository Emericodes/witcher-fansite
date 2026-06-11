import React, { useEffect, useState } from "react";
import darkImage from "../assets/images/indexpage sombre.png";
import flashImage from "../assets/images/indexpage flash.png";
import blurImage from "../assets/images/indexpage flou.png";

const ThunderEffect: React.FC = () => {
  const [stage, setStage] = useState<"dark" | "flash" | "blur">("dark");
  const [flashVisible, setFlashVisible] = useState(false);

  useEffect(() => {
    let timeouts: Array<ReturnType<typeof setTimeout>> = [];

    const triggerThunder = () => {
      // Éclat blanc instantané
      setFlashVisible(true);
      timeouts.push(setTimeout(() => setFlashVisible(false), 150));
      
      // Enchaînement des textures d'arrière-plan
      timeouts.push(setTimeout(() => setStage("flash"), 100));
      timeouts.push(setTimeout(() => setStage("blur"), 350));
      timeouts.push(setTimeout(() => setStage("dark"), 700));
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.35) {
        triggerThunder();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const getImage = () => {
    switch (stage) {
      case "flash": return flashImage;
      case "blur": return blurImage;
      default: return darkImage;
    }
  };

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 0,
      pointerEvents: "none"
    }}>
      <img 
        src={getImage()} 
        alt="background" 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.2s ease-in-out"
        }} 
      />
      {flashVisible && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          pointerEvents: "none",
          zIndex: 1
        }} />
      )}
    </div>
  );
};

export default ThunderEffect;