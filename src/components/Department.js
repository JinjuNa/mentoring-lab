import React from 'react';
import '../App.css';

function Department({txt, detail, content}) {
  return (
    <div className="department">
        <div className="txt-container">
          <div className="txt f-26">{txt}</div>
        </div>
        <div className="department-detail f-16">
            {detail[0]}
            {detail[1]}
            {detail[2]}
        </div>
        <span className="section-line"/>
        <div className="department-content f-16">
            {content[0]}<br/>
            {content[1]}<br/>
            {content[2]}
        </div> 
    </div>
  );
}

export default Department;
