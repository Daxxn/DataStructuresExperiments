import React from 'react';
import PropTypes from 'prop-types';

export default function ExpressionMatches(props) {
  return (
    <ol>
      {buildMatchList(props.data)}
    </ol>
  );
}
ExpressionMatches.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function buildMatchList(list) {
  const output = [];
  if (list !== null && list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      output.push(<li key={`list${i}`}>{list[i]}</li>);
    }
  } else {
    output.push(<li key="nullList">No Matches found.</li>);
  }
  return output;
}