
export default class RegexTests {
  /**
   * Matches the expression and returns the result.
   * @param {string} ex Raw expression string
   * @param {string} str String to match
   */
  static match(ex, str) {
    const exprObject = this.parseExpresstion(ex);
    const regex = new RegExp(exprObject.body, exprObject.flags);
    return str.match(regex);
  }

  static parseExpresstion(str) {
    const splitArr = str.split('/').filter(d => d !== '');
    return {
      body: splitArr[0],
      tags: splitArr[1],
    }
  }

  /**
   * converts the input string into a regex object and returns
   * an object with the expressiong and a parse message.
   * @param {string} str string to parse int a regex object.
   * @emits Object returns an object with the expression and a message string.  
   */
  static buildRegex(str) {
    let expr = null;
    let msg = 'good';
    try {
      expr = new RegExp(str);
    } catch {
      msg = 'cannot parse expression.';
    }

    return {
      expression: expr,
      msg: msg,
    }
  }
}