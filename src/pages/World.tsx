import React, { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import "../pages/world.css"; // Importation du CSS corrigé
import Navbar from "../components/Navbar";
import WorldMapsCard from "../components/WoldMapsCard";
import { WorldMapData, MonstersData, CharactersData } from "../data/Codex";

const World: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<
    { name: string; category: string }[]
  >([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setSuggestions([]);
      return;
    }

    const allCards = [
      ...WorldMapData.map((map) => ({ ...map, category: "map" })),
      ...MonstersData.map((monster) => ({ ...monster, category: "monster" })),
      ...CharactersData.map((char) => ({ ...char, category: "character" })),
    ];

    const filtered = allCards.filter((card) =>
      card.name.toLowerCase().includes(term.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleCardClick = (card: any) => {
    console.log("Carte sélectionnée :", card);
    setSearchTerm("");
    setSuggestions([]);
    // Tu pourras ajouter ici l'ouverture d'une popup spécifique pour le monstre ou le personnage sélectionné
  };

  return (
    <div className="world-page">
      <header className="world-header">
        <Navbar />
      </header>

      {/* Conteneur principal scrollable */}
      <main className="world-main-content">
        <div className="world-inner-container">
          
          {/* 🔍 Zone de recherche intégrée au thème */}
          <div className="world-search-box">
            <input
              type="text"
              placeholder="Rechercher un lieu, un monstre, un personnage..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="world-search-input"
            />
            {searchTerm.length > 0 && (
              <ul className="world-search-suggestions">
                {suggestions.length > 0 ? (
                  suggestions.map((card) => (
                    <li key={card.name} onClick={() => handleCardClick(card)} className="suggestion-item">
                      <span className="suggestion-name">{card.name}</span> 
                      <span className={`suggestion-badge badge-${card.category}`}>{card.category}</span>
                    </li>
                  ))
                ) : (
                  <li className="suggestion-no-result">Aucun mystère trouvé...</li>
                )}
              </ul>
            )}
          </div>

          <h1 className="world-title-h1">Le Monde du Sorceleur</h1>
          
          <section className="world-section-intro">
            <p>
              Plongez dans l'univers riche et complexe du Sorceleur, un monde où la
              magie, les monstres et les intrigues politiques s'entrelacent.
              Découvrez les royaumes humains, les terres elfiques, et les mystères
              qui entourent les sorceleurs.
            </p>
          </section>

          <h2 className="world-title-h2">Royaumes Humains</h2>
          <p className="world-description">
            Explorez les différents royaumes humains, chacun avec sa propre
            culture, histoire et conflits. De la puissante Nilfgaard aux royaumes
            du Nord en guerre constante, chaque région offre une perspective
            unique sur le monde du Sorceleur.
          </p>

          {/* Grille des cartes */}
          <div className="world-maps-grid">
            {WorldMapData.map((map) => (
              <div key={map.name} className="world-grid-card-wrapper">
                <WorldMapsCard
                  worldMap={map}
                  onClose={() => console.log("fermeture de la carte")}
                />
              </div>
            ))}
          </div>

          <h2 className="world-title-h2">Créatures et Monstres</h2>
          <p className="world-description">
            Découvrez les nombreuses créatures qui peuplent ce monde, des
            redoutables griffons aux mystérieux spectres. Apprenez comment les
            sorceleurs sont formés pour combattre ces menaces et protéger les
            innocents.
          </p>

          <h2 className="world-title-h2">Magie et Sorceleurs</h2>
          <p className="world-description">
            Plongez dans l'étude de la magie et du rôle des sorceleurs. Comprenez
            leur formation, leurs pouvoirs, et les défis qu'ils affrontent en tant
            que chasseurs de monstres dans un monde souvent hostile.
          </p>
        </div>
      </main>

      {/* Lecteur Audio fixé proprement au bas de la page */}
      <footer className="world-audio-footer">
        <AudioPlayer />
      </footer>
    </div>
  );
};

export default World;