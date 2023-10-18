export function checkHeight(characterHeight, filterHeightMin, filterHeightMax) {
  if (!filterHeightMin && !filterHeightMax) {
    return true;
  }

  if (!filterHeightMin) {
    filterHeightMin = -Infinity;
  }

  if (!filterHeightMax) {
    filterHeightMax = Infinity;
  }

  if (
    characterHeight >= filterHeightMin &&
    characterHeight <= filterHeightMax
  ) {
    return true;
  }
}
