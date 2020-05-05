import React from 'react';
import SchoolTitle from './SchoolTitle';
import startupschool from '../assets/startupschool.png';


function StartupSchool() {
    const txt = ["창업스쿨"];
    const img = startupschool
    const detail = ["실전창업을 목표로 해서 ", "창업의 A-Z를 모두 터득하게" ]

  return (
    <div className="startup-school">
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

        <p class="par">아이템 선정에서부터 사업계획서 작성, 정부지원사업 공모,<br />
        투자 IR에 이르기까지. 스타트업이 되기 위한 전 과정을<br />
        1년의 시간 동안 프로젝트를 진행해가면서 배웁니다.</p>
        <p class="par">창업에 성공한 기업들은 MENTORING-LAB의 사업파트너로서<br />
        공익과 가치실현에 대한 투자를 이어갑니다.</p>
      </div>
    </div>
  );
}

export default StartupSchool;
