import React from 'react';
import SchoolTitle from './SchoolTitle';
import visionschool from '../assets/visionschool.png';
import Curriculum from './Curriculum';

function VisionSchool() {
    const txt = ["비전스쿨"];
    const img = visionschool
    const detail = [""]

  return (
    <div className="vision-school">
      <SchoolTitle txt={txt} img={img} detail={detail} />
      <div className="school-content">
        <Curriculum />
      </div>
    </div>
  );
}

export default VisionSchool;
