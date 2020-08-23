import React from 'react';
import SchoolTitle from './SchoolTitle';
import visionschool from '../assets/visionschool.png';
import Curriculum from './Curriculum';
// import Curriculum from './Curriculum2';

function VisionSchool() {
    const txt = ["비전스쿨"];
    const img = visionschool
 
  return (
    <div className="vision-school">
      <SchoolTitle txt={txt} img={img}/>
      <div className="school-content">
        <p className="par">나의 흥미와 적성을 찾고 강점발견을 통해 직무 전문가로 살아가기</p>
        <div className="line"></div>
        <Curriculum />
      </div>
    </div>
  );
}

export default VisionSchool;
