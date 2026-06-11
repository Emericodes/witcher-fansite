import type { MonsterCardProps } from "../types/MonsterCardProps";

const MonsterCard = ({ monster }: MonsterCardProps) => {
    const { name, type, danger, habitat, vulnerabilities } = monster;

    return (
        <div className="monster-card">
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Danger: {danger}</p>
            <p>Habitat: {habitat}</p>
            <p>Vulnérabilités: {vulnerabilities.join(", ")}</p>
        </div>
    );
};

export default MonsterCard;