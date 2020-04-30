import React from 'react';
import '../App.css';

function SchoolTitle({txt, img, detail}) {
  return (
    <div className="school-title">
        <p>SCHOOL PROCESS</p>
        <h3>{txt}</h3>
        <img src={img} alt="school-title-img" />
        <div className="school-title-detail">
            {detail[0]}<br/>
            {detail[1]}
        </div> 
    </div>
  );
}

export default SchoolTitle;
