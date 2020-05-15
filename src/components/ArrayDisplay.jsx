import React from 'react';
import PropTypes from 'prop-types';

export default function ArrayDisplay(props) {
  const { arrayData } = props;
  return (
    <ol>
      {arrayData.map((d) => <li>{d}</li>)}
    </ol>
  );
}
ArrayDisplay.propTypes = {
  arrayData: PropTypes.arrayOf(PropTypes.any).isRequired,
};
