
export default class RegexTests {
  /**
   * Matches the expression and returns the result.
   * @param {string} ex Raw expression string
   * @param {string} str String to match
   */
  static match(ex, str) {
    const exprObject = this.parseExpresstion(ex);
    const regex = this.buildRegex(exprObject);
    return {
      expression: str.match(regex.expression),
      msg: regex.msg,
    };
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
   * @param {object} str string to parse int a regex object.
   * @emits Object returns an object with the expression and a message string.  
   */
  static buildRegex(data) {
    let expr = null;
    let msg = 'good';
    try {
      expr = new RegExp(data.body, data.flags);
    } catch {
      msg = 'cannot parse expression.';
    }

    return {
      expression: expr,
      msg: msg,
    }
  }
}