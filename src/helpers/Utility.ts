export const createImgUrl = (pokeData: any) => {
    const suffix =
    pokeData.spriteSuffix === undefined ? "" : pokeData.spriteSuffix;
  return "sprites/normal/" + pokeData.dexNr + suffix + ".png";
}

export const craeteTypeName = (name: string) => {
    return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
};