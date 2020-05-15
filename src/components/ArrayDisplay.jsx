import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ArrayDisplay extends Component {
  render() { 
    return ( 
      <ol>
        {this.props.arrayData.map((d, i) => <li key={i}>{d}</li>)}
      </ol>
     );
  }
}
ArrayDisplay.propTypes = {
  arrayData: PropTypes.arrayOf(PropTypes.any).isRequired,
}
