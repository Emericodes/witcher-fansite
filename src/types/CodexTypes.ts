// types/CodexTypes.ts
export type Character = {
  name: string;
  image: string; 
  race: string;
  role: string;
  affiliation: string;
  magic: string;
  weapons: string[];
  aliases?: string[];
};

export type Monster = {
  name: string;
  type: string;
  danger: string;
  habitat: string;
  vulnerabilities: string[];
};

export type WorldMap = {
  name: string;
  image: string;
  description: string;
  region: string;
  notableLocations: string[];
};
