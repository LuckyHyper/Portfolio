import React from 'react';

function MediaLink(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <img
        className="right-icon p-1"
        src={props.src}
        alt={props.alt}
        width="40"
        height="40"
        onMouseOver={props.handleMouse}
        onMouseOut={props.handleMouse}
      />
    </a>
  );
}

export default MediaLink;
