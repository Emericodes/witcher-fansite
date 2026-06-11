import type { WorldMapsCardProps } from "../types/WorldMapData";
import "../components/CharacterCard.css";

interface Props extends WorldMapsCardProps {
  onClose: () => void;
}

const WorldMapsCard = ({ worldMap, onClose }: Props) => {
  const { name, image, description, region, notableLocations } = worldMap;

  return (
    <div className="world-map-card">
      {/* Croix de fermeture */}
      <button className="close-btn" onClick={onClose} aria-label="Fermer la fiche">
        ×
      </button>

      <h2>{name}</h2>
      <img src={image} alt={name} className="card-image" />
      <p>Description: {description}</p>
      <p>Région: {region}</p>
      <p>Locations notables: {notableLocations.join(", ")}</p>
    </div>
  );
};

export default WorldMapsCard;