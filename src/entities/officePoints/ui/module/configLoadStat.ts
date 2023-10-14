export const configLoadStat = (load_stat: number) => {
  if (load_stat > 0.6) {
    return '#B8000E';
  }

  if (load_stat > 0.3 && load_stat < 0.6) {
    return '#FFEC2E';
  }

  return '#44944A';
};
