/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) =>
  string
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
  return string
    .split('')
    .map((item, index) => {
      return index % 2 === 0 ? item.toLowerCase() : item.toUpperCase();
    })
    .join('');
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
  if (action === 'uppercase') {
    return string.toUpperCase();
  } else if (action === 'lowercase') {
    return string.toLowerCase();
  } else if (action === 'capitalize') {
    return capitalizeString(string);
  } else if (action === 'fence') {
    return fenceString(string);
  }
  return string;
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase();
    case 'lowercase':
      return string.toLowerCase();
    case 'capitalize':
      return capitalizeString(string);
    case 'fence':
      return fenceString(string);
    default:
      return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (let word of string) {
    console.log(word);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let counter = 0;
  while (counter < string.length) {
    console.log(string[counter]);
    counter++;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
  string.split('').forEach((item) => console.log(item));
};
