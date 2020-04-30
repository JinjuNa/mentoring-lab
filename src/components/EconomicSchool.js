import React from 'react';
import SchoolTitle from './SchoolTitle';
import economicschool from '../assets/economicschool.png';


function EconomicSchool() {
    const txt = ["경제스쿨"];
    const img = economicschool
    const detail = ["금리부터 주식에 이르기까지 ", "실전 자산관리 과정을 1년 안에" ]

  return (
    <div className="economic-school">
      <SchoolTitle txt={txt} img={img} detail={detail} />
    </div>
  );
}

export default EconomicSchool;
