export const range = (start: number, end: number, step: number = 1): number[] => {
  return Array.from(
    { length: (end - start) / step + 1 },
    (value, index) => start + index * step
  );
};
