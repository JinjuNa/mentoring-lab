import React from 'react';
import SchoolTitle from './SchoolTitle';
import visionschool from '../assets/visionschool.png';


function VisionSchool() {
    const txt = ["비전스쿨"];
    const img = visionschool
    const detail = [""]

  return (
    <div className="vision-school">
      <SchoolTitle txt={txt} img={img} detail={detail} />
    </div>
  );
}

export default VisionSchool;
