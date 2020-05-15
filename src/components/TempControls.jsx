import React from 'react';
import PropTypes from 'prop-types';

export default function TempControls(props) {
  const { onChange, value } = props;
  return (
    <div>
      <input type="number" onChange={onChange} value={value} />
    </div>
  );
}
TempControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
