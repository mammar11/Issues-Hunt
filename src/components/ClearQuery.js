import React from 'react';
import './css/ClearQuery.css';

const ClearyQuery = (props) => {
  const { onClearQuery, text } = props;

  return(
    <div className="clear-query-container">
      <div
        className="query-item"
        onClick={onClearQuery}
      >
        {text} <i className="far fa-times-circle" />
      </div>
    </div>
  );
}

export default ClearyQuery;
