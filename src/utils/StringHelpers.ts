// todo, turn this into a class
export const addHash = (string: string): string => `#${string}`;

export const addSlash = (string: string): string => `/${string}`;

export const stringToLink = (string: string): string =>
  `${string.toLocaleLowerCase().replace(/\s/g, '')}`;

export const linkifyAll = (arr: string[]): string[] =>
  arr.map(label => stringToLink(label));
