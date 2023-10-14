export const configLoadStat = (load_stat: number) => {
  if (load_stat > 0.6) {
    return 'высокая';
  }

  if (load_stat > 0.3 && load_stat < 0.6) {
    return 'средняя';
  }

  return 'низкая';
};
