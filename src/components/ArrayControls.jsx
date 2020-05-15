import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ArrayControls extends PureComponent {
  render() { 
    return ( 
      <div>
        <input type="text" id="input" onChange={this.props.onChange} value={this.props.input}></input>
        <button type="button" id="pushButton" onClick={this.props.onClick}>Add Item</button>
        <button type="button" id="popButton" onClick={this.props.onClick}>Remove Item</button>
      </div>
     );
  }
}
ArrayControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
}
