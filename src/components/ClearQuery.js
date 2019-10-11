import React from 'react';
import './css/ClearQuery.css';

const ClearyQuery = (props) => {
  const { onClearQuery, text } = props;

  return(
      <div
        className="query-item d-inline-flex"
        onClick={() => onClearQuery(text)}
      >
        {text} <i className="far fa-times-circle pt-1 px-1" />
      </div>
  );
}

export default ClearyQuery;
