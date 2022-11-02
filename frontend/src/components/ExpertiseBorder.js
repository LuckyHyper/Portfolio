import React from 'react';
import Technologie from '../components/Technologie';

function ExpertiseBorder(props) {
  return (
    <div className="expertise-smallborder col">
      <div className="smallborder-head">
        <img src={props.icon} alt="react_icon" width="65" height="65" />
        <h3 className="title">
          {'<'} {props.title} {'/>'}
        </h3>
      </div>
      <div className="smallborder-body">
        <h6>{'<h3>'}</h6>
        <div className="d-flex">
          <div className="border-line"></div>
          <div>
            <p>{props.body}</p>
            <p>{props.inner_body}</p>
            <div className="d-flex flex-wrap justify-content-left">
              {props.technologie.map((item, key) => {
                return <Technologie key={item} title={item} />;
              })}
            </div>
          </div>
        </div>
        <h6>{'</h3>'}</h6>
      </div>
    </div>
  );
}

export default ExpertiseBorder;
