import React from "react";
import "../index.css";
import "./IndexPage.css"; // Ton fichier CSS dédié
import RainEffect from "../components/RainEffect";
import AudioPlayer from "../components/AudioPlayer";
import ThunderEffect from "../components/ThunderEffect";
import { useNavigate } from "react-router-dom";

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/discover");
  };

  return (
    <main className="witcher-screen-container">
      {/* EFFETS D'ARRIÈRE-PLAN (z-index: 1) */}
      <div className="witcher-fx-layer">
        <ThunderEffect />
      </div>
      <div className="witcher-fx-layer">
        <RainEffect />
      </div>

      {/* ZONE CENTRALE : CONTENU (z-index: 10) */}
      <div className="witcher-middle-layout">
        {/* Titre et Sous-titre à gauche */}
        <header className="witcher-text-group">
          <h1 className="witcher-main-title">THE WITCHER</h1>
          <h2 className="witcher-sub-title">Bienvenue dans l’univers du Sorceleur</h2>
        </header>

        {/* Bouton Découvrir à droite */}
        <div className="witcher-action-group">
          <button className="burn-button witcher-cta-btn" onClick={handleNavigate}>
            Découvrir
          </button>
        </div>
      </div>

      {/* LECTEUR EN BAS (z-index: 20) */}
      <footer className="witcher-bottom-layout">
        <AudioPlayer />
      </footer>

      {/* VIGNETTE SOMBRE SUR LES BORDS (z-index: 5) */}
      <aside className="vignette witcher-vignette-overlay" />
    </main>
  );
};

export default Index;