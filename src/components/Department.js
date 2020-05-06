import React from 'react';
import '../App.css';

function Department({txt, detail, content}) {
  return (
    <div className="department">
        <div className="txt f-26">{txt}</div>

        <div className="department-detail f-16">
            {detail[0]}<br/>
            {detail[1]}<br/>
            {detail[2]}
        </div>   
        <div className="department-content f-16">
            {content[0]}<br/>
            {content[1]}<br/>
            {content[2]}
        </div> 
    </div>
  );
}

export default Department;
