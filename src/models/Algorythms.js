/**
 * Converts celcius to farenheit.
 * @param {number} celcius Value in celcius.
 */
export default function convertCelToFar(celcius) {
  return celcius * (9 / 5) + 32;
}

/**
 * Converts farenheit to celcius.
 * @param {number} farenheit Value in farenheit.
 */
export function convertFarToCel(farenheit) {
  return farenheit - 32 * (5 / 9);
}

/**
 * Reverses the given string.
 * @param {string} str string input.
 */
export function reverseString(str) {
  let output = '';
  for (let i = str.length - 1; i > 0; i -= 1) {
    output += str[i];
  }
  return output;
}

/**
 * Adds the value to the front of the array and if longer than max,
 * removes the last value.
 * @param {Array} arr input array.
 * @param {any} newValue The new value to add.
 * @param {any} max The max length.
 */
export function arrayHistoryControl(arr, newValue, max) {
  const len = arr.unshift(newValue);
  if (len > max) {
    arr.pop();
  }
  return arr;
}
