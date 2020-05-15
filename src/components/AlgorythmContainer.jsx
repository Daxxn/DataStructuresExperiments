import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TempControls from './TempControls';
import TempModel from '../models/TempModel';

export default class AlgorythmContainer extends PureComponent {
  constructor(props) {
    super(props);
    const { initialTemp } = props;
    this.state = {
      tempInput: initialTemp,
      currentTemp: new TempModel(initialTemp, 'far'),
      tempHist: [],
    };
    this.onTempChange = this.onTempChange.bind(this);
  }

  /**
   * Triggered on text input.
   * @param {Event} e Temp textbox input event args.
   */
  onTempChange(e) {
    this.setState({
      tempInput: e.target.value,
    });
  }

  render() {
    const { onTempChange, tempInput } = this.state;
    return (
      <div>
        <TempControls onChange={onTempChange} value={tempInput} />
      </div>
    );
  }
}
AlgorythmContainer.propTypes = {
  initialTemp: PropTypes.number.isRequired,
};
