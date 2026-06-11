import type { CharacterCardProps } from "../types/CharacterCardProps";
import "../components/CharacterCard.css";

interface Props extends CharacterCardProps {
  onClose: () => void;
}

const CharacterCard = ({ character, onClose }: Props) => {
  const { name, race, role, affiliation, magic, weapons, image } = character;

  return (
    <div className="character-card">
      {/* Croix de fermeture */}
      <button className="close-btn" onClick={onClose} aria-label="Fermer la fiche">
        ×
      </button>

      <h2>{name}</h2>
      <img src={image} alt={name} className="card-image" />
      <p>Race: {race}</p>
      <p>Rôle: {role}</p>
      <p>Affiliation: {affiliation}</p>
      <p>Magie: {magic}</p>
      <p>Armes: {weapons.join(", ")}</p>
    </div>
  );
};

export default CharacterCard;
