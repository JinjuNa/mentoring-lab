import React from 'react';
import SchoolTitle from './SchoolTitle';
import economicschool from '../assets/economicschool.png';


function EconomicSchool() {
    const txt = ["경제스쿨"];
    const img = economicschool
    const detail = ["금리부터 주식에 이르기까지 ", "실전 자산관리 과정을 1년 안에" ]

  return (
    <div className="economic-school">
      <SchoolTitle txt={txt} img={img} />
      <div className="school-content">
      <div className="school-content-underline">
        <span className="underline-container">
          <span className="underline-txt">{detail[0]}</span>
          <span className="underline"></span>
        </span>
        <br />
        <span className="underline-container">
          <span className="underline-txt">{detail[1]}</span>
          <span className="underline"></span>
        </span>
        </div>

        <p class="par">STEP1 VISION SCHOOL 과 STEP2 CREATIVITY SCHOOL을<br />
        수료한 멘티들에게만 개설되는 경제수업 아카데미.</p>
        <p class="par">기초적인 경제이론 수업부터 실전 투자에 이르기까지<br />
          경제에 대한 통섭력 훈련과 함께 매주 실제로 매입하는<br />
          주식을 분석해 봄으로써 한국을 넘어 세계 경제에 대한<br />
          통찰력을 키우는 훈련과정입니다.</p>
      </div>
    </div>
  );
}

export default EconomicSchool;
