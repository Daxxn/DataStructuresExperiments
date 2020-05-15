export default class ArrayTest {
  /**
   * Pushes a value into an array.
   * @param {array} arr Array to add to.
   * @param {any} d Data to be added.
   */
  static push(arr, d) {
    arr.push(d);
  }

  static removeItem(arr, data) {
    let output = arr;
    const ind = arr.indexOf(data);
    if(ind !== -1) {
      output = arr.splice(ind, 1);
    }

    return output;
  }
}