export const getGrammageUnit = (grammageUnit) => {
  return grammageUnit === 'Kilogramy'
    ? 'kg'
    : grammageUnit === 'Gramy'
    ? 'g'
    : grammageUnit === 'Kus'
    ? 'ks'
    : '';
};
