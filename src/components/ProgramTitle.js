import React from 'react';
import '../App.css';

function ProgramTitle({txt, img}) {
  return (
    <div className="program-title">
        <span className="icon"><img src={img} alt="program-title-img"/></span>
        <div className="txt-container">
          <span className="txt f-36">
              {txt[0]}<br/>
              {txt[1]}<br/>
              {txt[2]}
          </span>
        </div>
    </div>
  );
}

export default ProgramTitle;
