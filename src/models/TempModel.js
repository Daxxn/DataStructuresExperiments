import { convertCelToFar, convertFarToCel } from './Algorythms';

export default class TempModel {
  constructor(temp, type) {
    if (type === 'far') {
      this.farenheit = temp;
      this.celcius = convertFarToCel(temp);
    } else if (type === 'cel') {
      this.farenheit = convertCelToFar(temp);
      this.celcius = temp;
    } else {
      throw Error('type not recognized.');
    }
  }
}
