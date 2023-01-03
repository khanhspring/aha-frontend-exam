export const mask = (input?: string, symbol: string = "*"): string => {
  if (!input) {
    return "";
  }
  return symbol.repeat(input.length);
};
