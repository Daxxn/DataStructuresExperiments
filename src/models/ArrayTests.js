export default class ArrayTest {
  /**
   * Pushes a value into an array.
   * @param {array} arr Array to add to.
   * @param {any} d Data to be added.
   */
  static addItem(arr, d) {
    const dataParse = Number(d);
    arr.push(dataParse !== Number.NaN ? dataParse : d);
    return arr;
  }

  /**
   * Removes the passed data from the passed array.
   * @param {array} arr Array to search.
   * @param {any} data Data to remove.
   */
  static removeItem(arr, data) {
    let output = arr;
    const dataParse = Number(data);
    const ind = arr.indexOf(dataParse);
    if (ind !== -1) {
      output = arr.splice(ind, 1);
    }
    return output;
  }
}
