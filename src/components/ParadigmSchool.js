import React from 'react';
import SchoolTitle from './SchoolTitle';
import paradigmschool from '../assets/paradigmschool.png';


function ParadigmSchool() {
    const txt = ["패러다임스쿨"];
    const img = paradigmschool
    const detail = ["인문학을 기초로 생각법을! ", "편집학을 기초로 Data 관리법을!" ]

  return (
    <div className="paradigm-school">
      <SchoolTitle txt={txt} img={img}/>
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

        <p class="par">STEP1 VISION SCHOOL 과정을 수료한 멘티들에게만<br />
        개설되는 창의력수업 아카데미.<br />
        동서양의 철학, 인문학을 심도 있게 토론해보며<br />
        나의 생각을 정립하는 시간을 가져 보고,<br />
        현실의 수요 DATA와의 교차분석을 통해<br />
        인문학을 실제 업무에 적용하는 방법을 배웁니다.</p>
      </div>
    </div>
  );
}

export default ParadigmSchool;
