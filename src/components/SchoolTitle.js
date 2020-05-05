import React from 'react';
import '../App.css';
import './School.css';

function SchoolTitle({txt, img}) {
  return (
    <div className="school-title">
        <p className="color-green f-13">SCHOOL PROCESS</p>
        <h3 className="f-25">{txt}</h3>
        <img src={img} alt="school-title-img" />
    </div>
  );
}

export default SchoolTitle;
