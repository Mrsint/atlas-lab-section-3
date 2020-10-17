import React from 'react';
import '../App.css';

function WikiButton(props) {
  return(
    <a href="https://wikipedia.org" target="_blank" rel="noopener noreferrer">
      <button className="btn btn-block card-btn">props</button>
    </a>
  );
}

export default WikiButton;