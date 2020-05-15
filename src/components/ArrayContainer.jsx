import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ArrayContainer.css';
import ArrayDisplay from './ArrayDisplay';
import ArrayControls from './ArrayControls';
import ArrayTests from '../models/ArrayTests';

export default class ArrayContainer extends Component {
  constructor(props) {
    super(props);
    const { initialData } = props;
    this.state = {
      arrayData: initialData,
      inputData: '',
    }

    this.onClick = this.onClick.bind(this);
    this.onInput = this.onInput.bind(this); 
  }

  /**
   * Triggered when either the push or pop button is pressed.
   * @param {Event} e Event Args.
   */
  onClick(e) {
    const input = e.target;
    console.log(e.target.value);

    if (this.state.inputData !== undefined || this.state.inputData !== '') {
      if (input.id === 'popButton') {
        // const tempArr = ArrayTests.removeItem(this.state.arrayData, this.state.inputData);
        this.setState((state) => ({
          arrayData: ArrayTests.removeItem(state.arrayData, state.inputData),
        }));
      } else if (input.id === 'pushButton') {
        const tempArr = this.state.arrayData;
        tempArr.push(this.state.inputData);
        this.setState({
          arrayData: tempArr,
          inputData: '',
        });
      }
      console.log(this.state.arrayData);
    }
  }

  /**
   * Triggered when the user types in the input box.
   * @param {Event} e Event Args.
   */
  onInput(e) {
    const input = e.target;
    this.setState({
      inputData: input.value,
    })
  } 

  render() {
    return (
       <div className="array-body">
         <h4>Array Tests</h4>
         <ArrayControls onClick={this.onClick} onChange={this.onInput} input={this.state.inputData} />
         <ArrayDisplay arrayData={this.state.arrayData} />
       </div>
    );
  }
}
ArrayContainer.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.number).isRequired,
}