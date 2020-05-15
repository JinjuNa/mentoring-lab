import React from 'react';
import '../App.css';

function ProgramTitle({txt, img, detail}) {
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
        <div className="program-detail f-28">
            {detail[0]}<br/>
            {detail[1]}<br/>
            {detail[2]}
        </div>   
    </div>
  );
}

export default ProgramTitle;
