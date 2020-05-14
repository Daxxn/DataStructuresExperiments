import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/ArrayContainer.css';
import ArrayDisplay from './ArrayDisplay';
import ArrayControls from './ArrayControls';

export default class ArrayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayData: this.props.initialData,
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
    console.log(input.id);

    if (this.state.inputData !== undefined || this.state.inputData !== '') {
      if (input.id === 'popButton') {

        this.setState((state) => ({
          arrayData: state.arrayData.pop(input.value),
        }));
      } else if (input.id === 'pushButton') {
        this.setState((state) => ({
          arrayData: state.arrayData.push(input.value),
        }));
      }
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
         <ArrayControls onClick={this.onClick} onChange={this.onInput}/>
         <ArrayDisplay data={this.state.arrayData}/>
       </div>
    );
  }
}
ArrayContainer.propTypes = {
  initialData: PropTypes.arrayOf(PropTypes.number).isRequired,
}