import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ArrayControls extends PureComponent {
  render() {
    const { onChange, onClick, input } = this.props;
    return (
      <div>
        <input type="text" id="input" onChange={onChange} value={input} />
        <button type="button" id="pushButton" onClick={onClick}>Add Item</button>
        <button type="button" id="popButton" onClick={onClick}>Remove Item</button>
      </div>
    );
  }
}
ArrayControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};
