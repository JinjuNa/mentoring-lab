import React from 'react';
import SchoolTitle from './SchoolTitle';
import paradigmschool from '../assets/paradigmschool.png';


function ParadigmSchool() {
    const txt = ["패러다임스쿨"];
    const img = paradigmschool
    const detail = ["인문학을 기초로 생각법을! ", "편집학을 기초로 Data 관리법을!" ]

  return (
    <div className="paradigm-school">
      <SchoolTitle txt={txt} img={img} detail={detail} />
    </div>
  );
}

export default ParadigmSchool;
