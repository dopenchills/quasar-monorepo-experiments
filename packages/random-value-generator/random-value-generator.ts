export const generateRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomFloat = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
