/*
 * Add this method and make sure to export it on the bottom!
 */
export interface CharacterDataABI {
  name: string;
  imageURI: string;
  hp: string;
  maxHp: string;
  attackDamage: string;
  defense: string;
  critChance: string;
}

export interface CharacterAttributes {
  name: string;
  imageURI: string;
  hp: number;
  maxHp: number;
  attackDamage: number;
  defense: number;
  critChance: number;
}

export const transformCharacterData = (
  characterData: CharacterDataABI
): CharacterAttributes => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: parseInt(characterData.hp, 10),
    maxHp: parseInt(characterData.maxHp, 10),
    attackDamage: parseInt(characterData.attackDamage, 10),
    defense: parseInt(characterData.defense, 10),
    critChance: parseInt(characterData.critChance, 10),
  };
};
