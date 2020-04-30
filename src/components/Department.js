import React from 'react';
import '../App.css';

function Department({txt, detail, content}) {
  return (
    <div className="department">
        <div className="txt">{txt}</div>

        <div className="department-detail">
            {detail[0]}<br/>
            {detail[1]}<br/>
            {detail[2]}
        </div>   
        <div className="department-content">
            {content[0]}<br/>
            {content[1]}<br/>
            {content[2]}
        </div> 
    </div>
  );
}

export default Department;
