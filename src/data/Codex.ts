import type { Character, Monster, WorldMap } from"../types/CodexTypes";
import GeraltImage from "../assets/images/geraltderive.png";
import YenneferImage from "../assets/images/yenneferdeVengerberg.png";
import TrissImage from "../assets/images/TrissMerigold.png";
import CiriImage from "../assets/images/CiriAdulte.png";
import VesimirImage from "../assets/images/Vesimir.png";
import TemeriaMapImage from "../assets/images/Temeria.png";
import SkelligeMapImage from "../assets/images/Skellige.png";
import KaedwenMapImage from "../assets/images/Kaedwen.png";
import LandsraadMapImage from "../assets/images/royaume des elfs.png";  

export const CharactersData : Character [] = [
  {
    name: "Geralt de Riv",
    image: GeraltImage,
    race: "Humain (Sorceleur)",
    role: "Protagoniste",
    affiliation: "École du Loup",
    magic: "oui",
    weapons: ["Épée d'argent", "Épée d'acier, arbalette"],
    aliases: ["Geralt", "loup blanc", "Gwynbleidd"],
  },
  {
    name: "Yennefer de Vengerberg",
    image: YenneferImage,
    race: "Humain",
    role: "Mage",
    affiliation: "Lodge des Magiciennes",
    magic: "oui",
    weapons: ["Magie", "Potions"],
    aliases: ["Yennefer", "Yen", "Yennefer de Vengerberg"],
  },
  {
    name: "Triss Merigold",
    image: TrissImage,
    race: "Humain",
    role: "Mage",
    affiliation: "Royaume de Temeria",
    magic: "oui",
    weapons: ["Magie", "Feu"],
    aliases: ["Triss", "Triss Merigold", "la quatorzième du Mont"],
  },
  {
    name: "Ciri",
    image: CiriImage,
    race: "Humain (Sang ancien)",
    role: "Protégée de Geralt",
    affiliation: "Nilfgaard (temporaire)",
    magic: "partielle",
    weapons: ["Épée", "Pouvoirs dimensionnels"],
    aliases: ["Cirilla Fiona Elen Riannon", "Ciri", "Cirila"],
  },
  {
    name: "Vesemir",
    image: VesimirImage,
    race: "Humain (Sorceleur)",
    role: "Mentor",
    affiliation: "Kaer Morhen",
    magic: "oui",
    weapons: ["Épée", "Connaissances alchimiques"],
    aliases: ["Vesemir", "le mentor", "le sage de Kaer Morhen"],
  },
];
export const MonstersData : Monster [] = [
  {
    name: "Strige",
    type: "Maudit",
    danger: "Élevé",
    habitat: "Cryptes, ruines",
    vulnerabilities: ["Argent", "Huile contre maudits", "Yrden"],
  },
  {
    name: "Noctule",
    type: "Vampire supérieur",
    danger: "Très élevé",
    habitat: "Grottes, ruines",
    vulnerabilities: ["Argent", "Huile contre vampires", "Feu"],
  },
  {
    name: "Kikimorrhe",
    type: "Insectoïde",
    danger: "Modéré",
    habitat: "Marais",
    vulnerabilities: ["Argent", "Huile contre insectoïdes", "Aard"],
  },
  {
    name: "Goule",
    type: "Nécrophage",
    danger: "Faible à modéré",
    habitat: "Champs de bataille",
    vulnerabilities: ["Argent", "Huile contre nécrophages", "Igni"],
  },
  {
    name: "Wyvern",
    type: "Draconide",
    danger: "Élevé",
    habitat: "Montagnes",
    vulnerabilities: ["Argent", "Huile contre draconides", "Aard"],
  },
];
export const WorldMapData : WorldMap [] = [
  {
    name: "Royaume de Temeria",
    image: TemeriaMapImage,
    description: "Un royaume humain puissant situé dans le nord-ouest du Continent, connu pour ses vastes plaines et ses forêts denses.",
    region: "Nord-Ouest",
    notableLocations: ["Vizima", "Wyzima", "Kaer Morhen"],
  },
  {
    name: "Skellige",
    image: SkelligeMapImage,
    description: "Un archipel rude et montagneux habité par des clans vikings, connu pour ses traditions guerrières et son lien avec la mer.",
    region: "Ouest",
    notableLocations: ["Ard Skellig", "An Skellig", "Bord Skellig"],
  },
  {
    name: "Kaedwen",
    image: KaedwenMapImage,
    description: "Un grand royaume situé au nord du Continent, caractérisé par ses montagnes froides et ses forêts épaisses.",
    region: "Nord",
    notableLocations: ["Hovgaard", "Tretogor", "Blaviken"],
  },
  {
    name: "Landsraad des Elfes",
    image: LandsraadMapImage,
    description: "Une confédération d'anciennes cités-états elfiques situées dans les forêts du Continent, connues pour leur magie et leur longévité.",
    region: "Est",
    notableLocations: ["Dol Blathanna", "Eldberg", "Rinde"],
  },
];  