import React, { Component } from 'react';
import RegexTests from '../models/regexTests';
import ExpressionMatches from './ExpressionMatches';

export default class RegExContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawExp: '/[e]/i',
      regexString: 'Hello World',
      regexResults: [],
      message: 'good',
    }

    this.onRegexInputChange = this.onRegexInputChange.bind(this);
    this.onInputStringChange = this.onInputStringChange.bind(this);
    this.onEvaluate = this.onEvaluate.bind(this);
  }

  /**
   * Handles regex input state change.
   * @param {Event} e event args
   */
  onRegexInputChange(e) {
    const newValue = e.target.value;
    this.setState({
      rawExp: newValue,
    });
    // console.log(newValue);
  }

  /**
   * Handles the string input state change.
   * @param {Event} e event agrs
   */
  onInputStringChange(e) {
    const newValue = e.target.value;
    this.setState({
      regexString: newValue,
    });
  }

  // OLD
  // onEvaluate() {
  //   const expressionData = RegexTests.buildRegex(this.state.rawExp);
  //   console.log(expressionData);
  //   if (expressionData.msg === 'good') {
  //     this.setState((state) => ({
  //       regex: expressionData.expression,
  //       regexResult: RegexTests.match(expressionData.expression, state.regexString),
  //       message: expressionData.msg,
  //     }));
  //   } else {
  //     this.setState({
  //       message: expressionData.msg,
  //     });
  //   }
  // }

  onEvaluate() {
    const results = RegexTests.match(this.state.rawExp, this.state.regexString);
    console.log(results);
    console.log(typeof results);
    this.setState({
      regexResults: results,
    });
  }

  render() {
    return (
      <div>
        <input type="text" id="regexInputId" onChange={this.onRegexInputChange} value={this.state.rawExp} />
        <input type="text" id="regexStringId" onChange={this.onInputStringChange} value={this.state.regexString} />
        <button type="button" id="RunExpressionId" onClick={this.onEvaluate}>Evaluate Expression</button>
        <ExpressionMatches data={this.state.regexResults} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}