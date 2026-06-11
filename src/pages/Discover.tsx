import React, { useState, type JSX } from "react";
import AudioPlayer from "../components/AudioPlayer";
import CharacterCard from "../components/CharacterCard";
import type { Character } from "../types/CodexTypes";
import { CharactersData } from "../data/Codex";
import Navbar from "../components/Navbar";
import TimeLine from "../components/TimeLine";
import "../pages/Discover.css";

const Discover: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const highlightCharacters = (text: string): JSX.Element[] => {
    const words = text.split(/(\s+)/);
    return words.map((word, index) => {
      const match = CharactersData.find(
        (char) => char.name === word || char.aliases?.includes(word)
      );
      if (match) {
        return (
          <span
            key={index}
            className="character-link"
            onClick={() => setSelectedCharacter(match)}
          >
            {word}
          </span>
        );
      }
      return <span key={index}>{word}</span>;
    });
  };

  const paragraphs = [
    `Dans un monde où les royaumes humains s’entre-déchirent et où les monstres rôdent dans l’ombre des forêts, un homme solitaire parcourt les routes : Geralt de Riv, un sorceleur. Mutant façonné par des épreuves cruelles, il n’est ni tout à fait humain, ni tout à fait monstre. Sa vie semble vouée à la chasse et à l’errance, jusqu’au jour où le destin frappe à sa porte.`,
    `Tout commence à Cintra, lors d’un banquet royal. En sauvant l’union de la princesse Pavetta et de son mystérieux prétendant Duny, Geralt invoque une ancienne coutume : la Loi de la Surprise. Sans le savoir, il lie son avenir à celui de l’enfant à naître, Cirilla Fiona Elen Riannon, que l’on appelera bientôt Ciri. Princesse de Cintra, héritière d’un sang ancien, elle deviendra le cœur battant de la saga.`,
    `Lorsque Cintra tombe sous les assauts de l’empire de Nilfgaard, Ciri perd tout. Orpheline, traquée, elle erre à travers le Continent avant de retrouver celui que le destin lui a choisi comme protecteur : Geralt. Entre eux naît un lien indestructible, plus fort que le sang. Mais Geralt n’est pas seul à veiller sur elle.`,
    `À Kaer Morhen, la forteresse des sorceleurs, Ciri reçoit l’enseignement de Vesemir, le plus ancien d’entre eux. Sage et bienveillant, il incarne la mémoire d’un ordre en déclin et transmet à la jeune fille les rudiments du combat et de la survie. Aux côtés de Geralt, il devient une figure paternelle, un repère dans un monde en ruines.`,
    `Mais Ciri n’est pas seulement une guerrière en devenir. Son sang recèle une puissance ancienne, héritée des elfes, capable de briser les frontières du temps et de l’espace. Pour l’aider à comprendre et maîtriser ce pouvoir, Geralt fait appel à Yennefer de Vengerberg, une magicienne aussi redoutable que fascinante. Yennefer, d’abord mentor, devient pour Ciri une véritable mère adoptive. Sa relation complexe avec Geralt se transforme en une famille choisie, forgée dans l’adversité.`,
    `À leurs côtés se tient aussi Triss Merigold, mage loyale et amie fidèle. Plus douce que Yennefer, elle apporte à Ciri une chaleur rassurante et un soutien indéfectible. Ensemble, ces figures forment un cercle protecteur autour de l’enfant du destin, chacun à sa manière guidant ses pas vers l’avenir.`
  ];

  return (
    <article className="discover-page">
      <header>
        <Navbar />
      </header>

      <main className="discover-main">
        <h1 className="discover-title-h1">L'histoire de Geralt de Riv</h1>
        
        <div className="page-layout">
          <section className="synopsis">
            <h2>Bienvenue voyageur,</h2>
            {paragraphs.map((pText, idx) => (
              <p key={idx}>{highlightCharacters(pText)}</p>
            ))}
          </section>

          <aside className="timeline-container">
            <TimeLine />
          </aside>
        </div>

        {selectedCharacter && (
          <section className="popup-overlay" onClick={() => setSelectedCharacter(null)}>
            <article className="popup-card" onClick={(e) => e.stopPropagation()}>
              <CharacterCard character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
            </article>
          </section>
        )}
      </main>

      <footer style={{ marginTop: "40px", padding: "20px 0" }}>
        <AudioPlayer />
      </footer>
    </article>
  );
};

export default Discover;